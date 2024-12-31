import React from "react";

interface SectionImageProps {
  image: React.ReactNode; // ReactNode allows various types of children, including JSX, strings, numbers, etc.
}

const SectionImage: React.FC<SectionImageProps> = ({ image }) => {
  return <div>{image}</div>;
};

export default SectionImage;
