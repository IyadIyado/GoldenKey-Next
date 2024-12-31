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
  pointTitle2: string;
  points2: string[];
  cost: number;
}

interface BDESectionProps {
  content: ContentProps;
}

const BDESection: React.FC<BDESectionProps> = ({ content }) => {
  return (
    <div>
      <div>
        <SectionContent
          title={content.title}
          description={content.description}
        />
        <SectionPoints title={content.pointTitle} points={content.points} />
        <SectionPoints title={content.pointTitle2} points={content.points2} />
        <p>
          Cost: $<span>{content.cost}</span> $ <span>575</span>+ tax
        </p>
        <SectionButton cssClass={"blank"} text={"Lesson Plan"} link="/" />
        <SectionButton cssClass={"blank"} text={"Register"} link="/" />
      </div>
      <div>
        <SectionImage image={image} />
      </div>
    </div>
  );
};

export default BDESection;
