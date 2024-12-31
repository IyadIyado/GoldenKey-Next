import React from "react";
import SectionFAQ from "./sectionComponents/SectionFAQ";
import SectionImage from "./sectionComponents/SectionImage";

const image = "/images/services.jpg";
const image2 = "/images/services.jpg";

interface FAQSectionProps {
  faqs: { question: string; answer: string }[]; // Expected prop
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <div>
      <div>
        <p>Frequently Asked Questions</p>
      </div>
      <div>
        <div>
          <SectionImage image={image} />
        </div>
        <div>
          {faqs.map((faq, index) => (
            <SectionFAQ
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        <div>
          <SectionImage image={image2} />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
