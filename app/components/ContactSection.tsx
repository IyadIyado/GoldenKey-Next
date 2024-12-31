import React from "react";
import SectionImage from "./sectionComponents/SectionImage";

const image = "/images/services.jpg";
const ContactSection = () => {
  return (
    <div>
      <div>
        <p>Contact Us</p>
      </div>
      <div>
        <div>
          <SectionImage image={image} />
        </div>
        <div>
          <div>
            <p>
              Let's get in touch! We'd love to hear from you! You can reach us
              anytime.
            </p>
            <p>goldenkeygroup@gmail.com</p>
            <p>(613) 596 - 9100</p>
          </div>
          <div>
            <p>
              You can call, text, or even send us a message on what's app
              through the following phone number!
            </p>
            <p>ICONS</p>
            <p>(613) 263 - 4949</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
