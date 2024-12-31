import React from "react";

interface ContentProps {
  title: string;
  description: string;
}

const SectionContent: React.FC<ContentProps> = ({ title, description }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default SectionContent;
