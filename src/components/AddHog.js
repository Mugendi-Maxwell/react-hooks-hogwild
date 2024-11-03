import React, { useState } from "react";

const AddHogForm = ({ addHog }) => {
  const [newHog, setNewHog] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    image: "",
    "highest medal achieved": "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog((prevHog) => ({
      ...prevHog,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(newHog);
    setNewHog({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      image: "",
      "highest medal achieved": "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newHog.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="specialty"
        value={newHog.specialty}
        onChange={handleChange}
        placeholder="Specialty"
      />
      <input
        type="number"
        name="weight"
        value={newHog.weight}
        onChange={handleChange}
        placeholder="Weight"
      />
      <label>
        Greased
        <input
          type="checkbox"
          name="greased"
          checked={newHog.greased}
          onChange={handleChange}
        />
      </label>
      <input
        type="text"
        name="image"
        value={newHog.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="text"
        name="highest medal achieved"
        value={newHog["highest medal achieved"]}
        onChange={handleChange}
        placeholder="Highest Medal"
      />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default AddHogForm;
