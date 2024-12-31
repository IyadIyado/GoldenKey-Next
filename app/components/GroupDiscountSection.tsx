import React from "react";
import SectionImage from "./sectionComponents/SectionImage";
import SectionContent from "./sectionComponents/SectionContent";
import SectionTable from "./sectionComponents/SectionTable";

const image = "/images/services.jpg";

interface ContentProps {
  title: string;
  description: string;
  table: { headers: string[]; rows: string[][] };
}

const GroupDiscountSection: React.FC<{ content: ContentProps }> = ({
  content,
}) => {
  return (
    <div>
      <div>
        <SectionImage image={image} />
      </div>
      <div>
        <SectionContent
          title={content.title}
          description={content.description}
        />
        <SectionTable table={content.table} />
      </div>
    </div>
  );
};

export default GroupDiscountSection;
