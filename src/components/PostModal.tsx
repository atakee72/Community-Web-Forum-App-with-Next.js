import React from "react";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { Button } from "react-bootstrap";
// import TagSelector from "../components/TagSelector";

interface PostModalProps {
  collectionType: string;
  show: boolean;
  handleClose: () => void;
  postInForum: () => void;
  postTitle: string;
  postTitleRef: React.RefObject<HTMLInputElement>;
  postBodyRef: React.RefObject<HTMLTextAreaElement>;
  setPostTitle: (title: string) => void;
  postBody: string;
  setPostBody: (body: string) => void;
  handleTagsSelected: (selectedTags: string[]) => void;
  availableTags: string[];
}

const PostModal: React.FC<PostModalProps> = ({
  collectionType,
  show,
  handleClose,
  postInForum,
  postTitle,
  postTitleRef,
  postBodyRef,
  setPostTitle,
  postBody,
  setPostBody,
  handleTagsSelected,
  availableTags,
}) => {
  const collectionTypes: Record<string, string> = {
    topics: "Start a debate",
    announcements: "Make an announcement",
    recommendations: "Make a recommendation",
  };

  const sentences: Record<string, string> = {
    topics: "Which topic do you think should be discussed here?",
    announcements: "What would you like to announce here?",
    recommendations: "What would you like to recommend here?",
  };

  return (
    <Modal show={show} onHide={handleClose} className="bg-transparent">
      <div className="bg-purple-900 rounded-t-5">
        <div className="bg-purple-900">
          <Modal.Header
            className="m-1 p-1 bg-purple-900 text-yellow-400 border-none rounded-4"
            closeButton
          >
            <Modal.Title>{collectionTypes[collectionType]}</Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body className="m-1 p-1 bg-blue-600 text-white border-none w-full text-center relative right-4">
          <Form className="m-1 p-3" onSubmit={postInForum}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title of Your Text</Form.Label>
              <Form.Control
                type="text"
                value={postTitle}
                ref={postTitleRef}
                onChange={(event) => setPostTitle(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>{sentences[collectionType]}</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                columns={20}
                value={postBody}
                ref={postBodyRef}
                onChange={(event) => setPostBody(event.target.value)}
                className="m-0 p-0"
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="mt-3 border-none bg-purple-900 text-yellow-400"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </div>
      <Modal.Footer className="flex flex-row justify-center p-0 bg-purple-900 text-white border-none rounded-b-5">
        <div className="my-3">
          <TagSelector
            handleTagsSelected={handleTagsSelected}
            availableTags={availableTags}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;
