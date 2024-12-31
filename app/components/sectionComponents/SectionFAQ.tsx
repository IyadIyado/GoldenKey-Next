import React from "react";

interface SectionFAQProps {
  question: string;
  answer: string;
}

const SectionFAQ: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
};

export default SectionFAQ;
