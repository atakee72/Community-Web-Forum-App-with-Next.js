import React, { RefObject } from "react";
import { Card } from "react-bootstrap";
import Nav from "react-bootstrap";
import NavButtonInForumHeader from "./NavButtonInForumHeader";
import SearchForm from "./SearchForm";
import AddNewPost from "./AddNewPost";
import PostModal from "./PostModal";
import Cards from "./Cards";

interface ForumSectionProps {
  collectionType: string;
  handle_InSearch_Input: (input: string) => void;
  handle_InSearch_Filter: (collectionType: string) => void;
  handleShow: () => void;
  handleTagsSelected: (tags: string[]) => void;
  handleClose: () => void;
  setCollectionType: (collectionType: string) => void;
  setPostBody: (body: string) => void;
  setPostTitle: (title: string) => void;
  postInForum: () => void;
  postTitle: string;
  postTitleRef: RefObject<any>; // Change "any" to the appropriate type if possible
  postBodyRef: RefObject<any>; // Change "any" to the appropriate type if possible
  postBody: string;
  searchInputRef: RefObject<any>; // Change "any" to the appropriate type if possible
  show: boolean;
  availableTags: string[];
  postAComment: () => void;
  deleteForumPost: () => void;
  deleteAComment: () => void;
  updateLikesCounter: () => void;
  serverMsg: string;
  loggedUser: boolean; // Change "boolean" to the appropriate type if possible
  filteredData: any[]; // Change "any" to the appropriate type if possible
}

const ForumSection: React.FC<ForumSectionProps> = ({
  collectionType,
  handle_InSearch_Input,
  handle_InSearch_Filter,
  handleShow,
  handleTagsSelected,
  handleClose,
  setCollectionType,
  setPostBody,
  setPostTitle,
  postInForum,
  postTitle,
  postTitleRef,
  postBodyRef,
  postBody,
  searchInputRef,
  show,
  availableTags,
  postAComment,
  deleteForumPost,
  deleteAComment,
  updateLikesCounter,
  serverMsg,
  loggedUser,
  filteredData,
}) => {
  const sectionData = [
    { header: "Discussions", collectionType: "topics" },
    { header: "Announcements", collectionType: "announcements" },
    { header: "Recommendations", collectionType: "recommendations" },
  ];

  return (
    <Card className="mainCard rounded-lg shadow-md p-10 mx-20 my-20 gap-20 bg-[#4b9aaa] max-w-90vw min-w-50vw min-h-40vh overflow-auto resize-y">
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey={sectionData[collectionType].collectionType}
        >
          <Nav.Item>
            <NavButtonInForumHeader
              collectionType={collectionType}
              setCollectionType={setCollectionType}
            />
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <div className="d-flex  flex-column justify-items-center">
          <SearchForm
            handle_InSearch_Input={handle_InSearch_Input}
            collectionType={collectionType}
            handle_InSearch_Filter={handle_InSearch_Filter}
            searchInputRef={searchInputRef}
          />

          <div>
            {loggedUser && (
              <AddNewPost
                handleShow={handleShow}
                collectionType={collectionType}
              />
            )}
          </div>

          <div>
            <PostModal
              collectionType={collectionType}
              show={show}
              handleClose={handleClose}
              postInForum={postInForum}
              postTitle={postTitle}
              postTitleRef={postTitleRef}
              postBodyRef={postBodyRef}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleTagsSelected={handleTagsSelected}
              availableTags={availableTags}
            />
          </div>
        </div>

        {filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              key={i}
            >
              <Cards
                item={item}
                post={item}
                comments={item.comments}
                author={item.author}
                postAComment={postAComment}
                deleteForumPost={deleteForumPost}
                deleteAComment={deleteAComment}
                updateLikesCounter={updateLikesCounter}
                serverMsg={serverMsg}
              />
            </div>
          ))
        ) : (
          <h5 className="text-center mb-5 pt-4">
            Nothing to show here. There probably is an error with the data
            fetching.
          </h5>
        )}
      </Card.Body>
    </Card>
  );
};

export default ForumSection;
