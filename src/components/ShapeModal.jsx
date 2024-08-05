import "./ShapeModal.css";

const ShapeModal = ({ closeModal, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.className === "ShapeModal") {
      closeModal();
    }
  };
  return (
    <div className="ShapeModal" onClick={handleOutsideClick}>
      <div className="modal-wrapper">
        <div className="close">
          <button onClick={closeModal}>&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ShapeModal;
