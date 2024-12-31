import React from "react";
import SectionImage from "./sectionComponents/SectionImage";
import SectionContent from "./sectionComponents/SectionContent";
import SectionPoints from "./sectionComponents/SectionPoints";
import SectionButton from "./sectionComponents/SectionButton";

const image = "/images/services.jpg";

interface ContentProps {
  title: string;
  description: string;
  pointTitle: string;
  points: string[];
  title2: string;
  description2: string;
  pointTitle2: string;
  points2: string[];
}

const DefensiveDrivingSection: React.FC<{ content: ContentProps }> = ({
  content,
}) => {
  return (
    <div>
      <div>
        <div>
          <SectionContent
            title={content.title}
            description={content.description}
          />
          <SectionPoints title={content.pointTitle} points={content.points} />
          <SectionButton cssClass={"blank"} text={"Register"} link="/" />
        </div>
        <div>
          <SectionContent
            title={content.title2}
            description={content.description2}
          />
          <SectionPoints title={content.pointTitle2} points={content.points2} />
          <SectionButton cssClass={"blank"} text={"Register"} link="/" />
        </div>
      </div>
      <div>
        <SectionImage image={image} />
      </div>
    </div>
  );
};

export default DefensiveDrivingSection;
