import React from "react";
// import { Button } from "react-bootstrap";

interface NavButtonData {
  header: string;
  collectionType: string;
}

interface NavButtonInForumHeaderProps {
  setCollectionType: React.Dispatch<React.SetStateAction<string>>;
  collectionType: string;
}

const NavButtonInForumHeader: React.FC<NavButtonInForumHeaderProps> = ({
  setCollectionType,
  collectionType,
}) => {
  const buttonData: NavButtonData[] = [
    { header: "Discussions", collectionType: "topics" },
    { header: "Announcements", collectionType: "announcements" },
    { header: "Recommendations", collectionType: "recommendations" },
  ];

  return (
    <>
      {buttonData.map((button, index) => (
        <Button
          key={index}
          variant="light"
          onClick={() => setCollectionType(button.collectionType)}
          active={collectionType === button.collectionType}
        >
          {button.header}
        </Button>
      ))}
    </>
  );
};

export default NavButtonInForumHeader;
