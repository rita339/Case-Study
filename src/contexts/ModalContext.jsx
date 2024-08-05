import { createContext, useContext, useState } from "react";
import ShapeModal from "../components/ShapeModal.jsx";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <ModalContext.Provider value={{ setIsOpen, setModalContent }}>
      {children}
      {isOpen && (
        <ShapeModal closeModal={closeModal}>{modalContent}</ShapeModal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
