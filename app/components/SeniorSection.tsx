import React from "react";
import SectionImage from "./sectionComponents/SectionImage";
import SectionContent from "./sectionComponents/SectionContent";
import SectionPoints from "./sectionComponents/SectionPoints";
import SectionTable from "./sectionComponents/SectionTable";
import SectionButton from "./sectionComponents/SectionButton";

const image = "/images/services.jpg";

interface ContentProps {
  title: string;
  description: string;
  pointTitle: string;
  points: string[];
  title2: string;
  description2: string;
  table: {
    headers: string[];
    rows: string[][];
  };
}
const SeniorSection: React.FC<{ content: ContentProps }> = ({ content }) => {
  return (
    <div>
      <div>
        <SectionImage image={image} />
      </div>
      <div>
        <div>
          <SectionContent
            title={content.title}
            description={content.description}
          />
          <SectionPoints title={content.pointTitle} points={content.points} />
        </div>
        <div>
          <SectionContent
            title={content.title2}
            description={content.description2}
          />
          <SectionTable table={content.table} />
          <p>For more information, please don't hesitate to contact us!</p>
        </div>
        <div>
          <SectionButton cssClass={"blank"} text={"Register"} link="/" />
        </div>
      </div>
    </div>
  );
};

export default SeniorSection;
