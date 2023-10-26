import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Initialize state to capture form inputs
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0], // Default to the first category
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(formData); // Pass the form data to the parent component
    setFormData({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          {categories.slice(1).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
