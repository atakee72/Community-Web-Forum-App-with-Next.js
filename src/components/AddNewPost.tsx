import React from "react";
// import { Button } from "react-bootstrap";

interface AddNewPostProps {
  handleShow: () => void;
  collectionType: string;
}

const AddNewPost: React.FC<AddNewPostProps> = ({
  handleShow,
  collectionType,
}) => {
  const collectionTypes: Record<string, string> = {
    topics: "Start a debate",
    announcements: "Make an announcement",
    recommendations: "Make a recommendation",
  };

  return (
    <button
      className="p-3 topicBtn bg-purple-900 text-yellow-400 w-full sticky top-0 z-10"
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)" }}
    //   variant="secondary"
      onClick={handleShow}
    >
      {collectionTypes[collectionType]}
    </button>
  );
};

export default AddNewPost;
