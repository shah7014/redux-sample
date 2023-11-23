import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = (props) => {
  const clickHandler = () => {
    props.onClose();
  };

  if (!props.showModal) {
    return null;
  }

  return createPortal(
    <>
      <ModalOverlay onClick={clickHandler}></ModalOverlay>
      <ModalContainer>{props.children}</ModalContainer>
    </>,
    document.getElementById("overlays")
  );
};

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;
`;

const ModalContainer = styled.div`
  width: 80%;
  height: 100%;
  background: #fff;
  /* border-radius: 1rem; */

  padding: 2rem 5rem;
  color: black;

  position: fixed;
  left: 10%;
  top: 10%;

  z-index: 3;

  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #aaa #fff;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background: hotpink;
  }
`;

export default Modal;
