import React from "react";
import SectionImage from "./sectionComponents/SectionImage";
import SectionContent from "./sectionComponents/SectionContent";
import SectionButton from "./sectionComponents/SectionButton";

const image = "/images/services.jpg";

interface ContentProps {
  title: string;
  description: string;
}

const LocationsSection: React.FC<{ content: ContentProps }> = ({ content }) => {
  return (
    <div>
      <div>
        <p>Locations</p>
      </div>
      <div>
        <div>
          <SectionContent
            title={content.title}
            description={content.description}
          />
          <SectionButton cssClass={"blank"} text={"Register"} link="/" />
        </div>
        <div>
          <SectionImage image={image} />
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
