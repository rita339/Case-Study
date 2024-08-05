import { useModal } from "../contexts/ModalContext.jsx";
import AddShapeForm from "./AddShapeForm.jsx";

const ShapeTable = ({ shapes, setShapes }) => {
  const { setIsOpen, setModalContent } = useModal();

  const openModalHandler = () => {
    setIsOpen(true);
    setModalContent(
      <AddShapeForm
        shapes={shapes}
        setShapes={setShapes}
        setIsOpen={setIsOpen}
      />
    );
  };

  return (
    <div className="ShapeTable">
      <button onClick={openModalHandler}>Create</button>
      <button>Render</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Shape Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shapes.map((shape, index) => (
            <tr key={index}>
              <td>{shape.id} </td>
              <td>{shape.name}</td>
              <td>{shape.type}</td>
              <td>
                <button>Delete</button>
                <button>Render</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShapeTable;
