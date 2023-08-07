import { useContext, useRef, useState } from "react";
// import { Badge } from "react-bootstrap";
import transformDate from "@/utils/transformDate";
// import { AuthContext } from "../store/AuthContext";
// import CommentModal from "./CommentModal";
// import DeletePostButton from "./DeletePostButton";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic

interface CardsProps {
  post: any;
  comments: any;
  author: any;
  postAComment: () => void;
  deleteForumPost: () => void;
  deleteAComment: () => void;
  updateLikesCounter: (e: any, post: any) => void;
  serverMsg: string;
}

const Cards: React.FC<CardsProps> = ({
  post,
  comments,
  author,
  postAComment,
  deleteForumPost,
  deleteAComment,
  updateLikesCounter,
  serverMsg,
}) => {
  const { useState } = dynamic(() => import("react"), { ssr: false });
  const { useContext } = dynamic(() => import("react"), { ssr: false });
  const { useRef } = dynamic(() => import("react"), { ssr: false });
  const { useEffect } = dynamic(() => import("react"), { ssr: false });
  const [activeTab, setActiveTab] = useState("Posts");
  const commentTextRef = useRef<HTMLInputElement>(null);
  const likeRef = useRef<HTMLButtonElement>(null);
  const [commentText, setCommentText] = useState("");
  const { userId, loggedUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [commentShow, setCommentShow] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const collectionTypes = {
    topics: "Start a debate",
    announcements: "Make an announcement",
    recommendations: "Make a recommendation",
  };

  const sentences = {
    topics: "Which topic do you think should be discussed here?",
    announcements: "What would you like to announce here?",
    recommendations: "What would you like to recommend here?",
  };

  return (
    <div className="m-4 ms-5 me-5 p-4 card bg-gray-300">
      <DeletePostButton
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        author={author}
        deleteForumPost={deleteForumPost}
        post={post}
      />

      <div>
        <nav className="flex" defaultActiveKey="Posts">
          <button
            className={`${
              activeTab === "Posts" ? "bg-blue-300" : "bg-blue-100"
            } p-2 rounded`}
            onClick={() => setActiveTab("Posts")}
          >
            Posts
          </button>

          <button
            className={`${
              activeTab === "Comments" ? "bg-blue-300" : "bg-blue-100"
            } p-2 rounded`}
            onClick={() => setActiveTab("Comments")}
          >
            Comments <Badge className="bg-secondary">{comments?.length}</Badge>
          </button>

          <button
            className={`${
              activeTab === "newComment" ? "bg-blue-300" : "bg-blue-100"
            } p-2 rounded`}
            onClick={() => {
              handleShow();
              setActiveTab("newComment");
            }}
            disabled={!loggedUser}
          >
            Write a comment
          </button>
        </nav>
      </div>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TOPICS TAB */}
      {activeTab === "Posts" && post && (
        <div>
          <i>
            <h6
              className="p-2 rounded"
              style={{
                backgroundColor: "#4b9aaa",
                textDecoration: "underline",
                color: "gray",
                fontSize: "0.8em",
              }}
            >
              <span className="text-white flex items-center gap-1">
                Date: {transformDate(post.date)} - Views: {post.views}
                <button
                  ref={likeRef}
                  onClick={(e) => {
                    updateLikesCounter(e, post);
                    setIsHeartClicked(true);
                  }}
                  style={{ border: "none", background: "none" }}
                >
                  {post?.likedBy?.includes(userId) ? "💗" : "🤍"}
                  {post?.likes}
                </button>
                {author?.userName}{" "}
                <img
                  className="w-8 h-8 rounded-full"
                  src={post.author?.userPicture}
                  alt="User"
                />
              </span>
            </h6>
          </i>
          <h2 className="text-xl font-bold">{post?.title}</h2>
          <p>{post.body}</p>

          <div className="inline-block m-1 p-1 bg-blue-600 text-white rounded">
            {post?.tags.map((tag, i) => (
              <span key={i}> Tags: {tag} </span>
            ))}
          </div>
        </div>
      )}
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>COMMENTS TAB */}
      {activeTab === "Comments" && comments && (
        <div>{/* Content for comments */}</div>
      )}
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>NEW COMMENT TAB */}
      {activeTab === "newComment" && (
        <div className="flex gap-10">
          <CommentModal
            show={show}
            handleClose={handleClose}
            setActiveTab={setActiveTab}
            commentText={commentText}
            setCommentText={setCommentText}
            commentTextRef={commentTextRef}
            postAComment={postAComment}
            post={post}
          />
        </div>
      )}
    </div>
  );
};

export default Cards;
