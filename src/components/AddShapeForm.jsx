import { useState } from "react";
import "./AddShapeForm.css";

const AddShapeForm = ({ shapes, setShapes, setIsOpen }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type) {
      setError("Please fill out all fields");
      return;
    }
    const newShape = {
      id: shapes.length + 1,
      name,
      type,
    };
    setShapes([...shapes, newShape]);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="AddShapeForm">
      <h3>Create Modal</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleName}
            required
          />
        </label>

        <label htmlFor="shapeType">
          Shape Type:
          <select
            id="shapeType"
            name="shapeType"
            value={type}
            onChange={handleType}
            required
          >
            <option value="" disabled>
              Select a shape
            </option>
            <option value="Sphere">Sphere</option>
            <option value="Cylinder">Cylinder</option>
            <option value="Cube">Cube</option>
            <option value="Cone">Cone</option>
          </select>
        </label>
        <div>
          <button type="submit">Create</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddShapeForm;
