import userModel from "@/models/userModel";
import type { NextApiRequest, NextApiResponse } from "next";

const getAllUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allUsers = await userModel
      .find({})
      .populate("topics")
      .populate("announcements")
      .populate("recommendations")
      .populate("comments")
      .exec();
    console.log("allusers >>>", allUsers);
    res.status(201).json({
      //just to see how it goes with customising, 200 -> 201
      NumberOfUsers: allUsers.length,
      allUsers,
    });
  } catch (error) {
    res.status(500).json({
      error,
      Message: "Something went wrong in the server!",
    });
  }
};

export default getAllUsers;
