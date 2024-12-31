import React from "react";
import SectionContent from "./sectionComponents/SectionContent";
import SectionPoints from "./sectionComponents/SectionPoints";
import SectionButton from "./sectionComponents/SectionButton";
import SectionImage from "./sectionComponents/SectionImage";

const image = "/images/services.jpg";

interface ContentProps {
  title: string;
  description: string;
  description2: string;
  pointTitle: string;
  points: string[];
}

const RoadTestPackages: React.FC<{ content: ContentProps }> = ({ content }) => {
  return (
    <div>
      <div>
        <SectionContent
          title={content.title}
          description={content.description}
        />
        <p>{content.description2}</p>
        <SectionPoints title={content.pointTitle} points={content.points} />
        <SectionButton cssClass={"blank"} text={"Register"} link="/" />
      </div>
      <div>
        <SectionImage image={image} />
      </div>
    </div>
  );
};

export default RoadTestPackages;
