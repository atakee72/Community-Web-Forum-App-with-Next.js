import userModel from "@/app/models/userModel";
import { v2 as cloudinary } from "cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";

const imageUpload = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("🚀 ~ ~ req.file", req.file);

  try {
    const pictureUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "communityWebApp",
    });
    console.log("🚀 ~ pictureUpload >>>", pictureUpload);

    if (pictureUpload) {
      const newPicture = pictureUpload.secure_url;

      try {
        const updatedUser = await userModel.findByIdAndUpdate(
          { _id: req.body.userId },
          { $set: { userPicture: newPicture } },
          { new: true }
        );
        res.status(201).json({
          msg: "Hurray, replaced the profile picture with a new one!",
          newPicture: newPicture,
          updatedUser: updatedUser,
        });
      } catch (error) {
        res.status(500).json({
          msg: "Error replacing the profile picture",
        });
      }
    } else {
      res.status(500).json({
        msg: "Ah, something went wrong with uploading and/or replacing the profile picture!",
      });
    }
  } catch (error) {
    res.status(500).json({
      errorMsg:
        "So sorry, something went wrong with updating/replacing the user picture!",
    });
  }
};

export { imageUpload };
