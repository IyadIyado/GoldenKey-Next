import React, { useState } from "react";

// Define the type for form data
interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  email: string;
  city: string;
  phone: string;
  classLocation: string; // Added for Class Location dropdown
  location: string;
  courseCompleted: string; // For radio buttons (Yes/No)
  comments: string;
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
    classLocation: "Online", // Default value for dropdown
    location: "",
    courseCompleted: "", // Tracks radio button selection
    comments: "",
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
        <p>Class Location</p>
        <select
          name="classLocation"
          value={formData.classLocation}
          onChange={handleChange}
        >
          <option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select>
      </div>
      <div>
        <p>Course Date</p>
        <input
          type="text"
          name="location"
          placeholder="Please input the date in which you did the online course"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Did you complete your online course?</p>
        <p>
          You need to complete the online course before registering for in-car
          lessons.
        </p>
        <div>
          <label>
            <input
              type="radio"
              name="courseCompleted"
              value="Yes"
              checked={formData.courseCompleted === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="courseCompleted"
              value="No"
              checked={formData.courseCompleted === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>
      <div>
        <p>Available Dates and Times for Driving</p>
        <textarea
          name="comments"
          placeholder="If you're signing up with friends, please include all of your names in this section to receive your discount. If you have any comments or concerns, then please include them here..."
          value={formData.comments}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
