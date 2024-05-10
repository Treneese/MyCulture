import React, { useState } from "react";

function EventForm({ onAddEvent }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "image":
        setImage(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "subcategory":
        setSubcategory(value);
        break;
      case "date":
        setDate(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/events", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name, image, category, subcategory, date, description, location })
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => onAddEvent(data))
        } else {
          throw Error('Something went wrong')
        }
      })
      .catch(console.log);
  }

  return (
    <div>
      <h1>EventForm</h1>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="name"
            placeholder="Event name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={image}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            placeholder="Event category"
            value={category}
            onChange={handleChange}
          />
        </label>
        <label>
          Subcategory:
          <input
            type="text"
            name="subcategory"
            placeholder="Event subcategory"
            value={subcategory}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            placeholder="Event date"
            value={date}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            placeholder="Event description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            placeholder="Event location"
            value={location}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default EventForm;

