import React, { useState } from "react";

const Services = [
  "BDE Course (Driver's Ed)",
  "Private In-Car Lessons",
  "Road Test Package (G2)",
  "Road Test Package (G)",
  "Defensive Driving Course (DDC)",
  "Driver Improvement Course (DIC)",
  "Seniors Package",
];

// Define the type for form data
interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  email: string;
  city: string;
  phone: string;
  serviceType: string;
  location: string;
  comments: string;
  termsAccepted: boolean;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    email: "",
    city: "",
    phone: "",
    serviceType: "",
    location: "",
    comments: "",
    termsAccepted: false,
  });

  // Event handler for input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    console.log("Form submitted:", formData);
    // Here, you can send `formData` to your backend or API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Full Name</p>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle"
            value={formData.middleName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <p>Email Address</p>
        <input
          type="email"
          name="email"
          placeholder="jane.doe@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Address</p>
        <input
          type="text"
          name="address"
          placeholder="1234 Main St"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>City</p>
        <input
          type="text"
          name="city"
          placeholder="ex. Kanata, Barrhaven, Stittsville, etc..."
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Phone Number</p>
        <input
          type="tel"
          name="phone"
          placeholder="123-456-7890"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Service Type</p>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
        >
          <option value="">Select a service</option>
          {Services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Location/Suburb</p>
        <input
          type="text"
          name="location"
          placeholder="Bayshore, Bell's Corners, etc..."
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Course dates and comments</p>
        <textarea
          name="comments"
          placeholder="If you're signing up with friends, please include all of your names in this section to receive your discount. If you have any comments or concerns, then please include them here..."
          value={formData.comments}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Terms and Conditions</p>
        <div>
          <p>
            Welcome to Golden Key Driving School Inc.! Our company, operating
            under the business name Golden Key Driving School, is committed to
            transparency in all our agreements...
          </p>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <p>
            I agree that it is my responsibility to complete the course within
            365 days of registration...
          </p>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
