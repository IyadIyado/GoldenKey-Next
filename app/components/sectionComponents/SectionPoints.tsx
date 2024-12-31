import React from "react";

interface SectionPointsProps {
  title: string;
  points: string[];
}
const SectionPoints: React.FC<SectionPointsProps> = ({ title, points }) => {
  return (
    <div>
      <p>{title}</p>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionPoints;
