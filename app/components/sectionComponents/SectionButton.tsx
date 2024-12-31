import React from "react";

interface SectionButtonProps {
  cssClass: string;
  text: string;
  link: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({
  cssClass,
  text,
  link,
}) => {
  return (
    <div>
      <button className={cssClass}>{text}</button>
    </div>
  );
};

export default SectionButton;
