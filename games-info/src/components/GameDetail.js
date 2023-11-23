import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setShowModal } from "../redux/actions/appActions";
import Modal from "./Modal";

const GameDetail = () => {
  const dispatch = useDispatch();

  const { showModal } = useSelector((state) => state.app);

  const { selectedGame } = useSelector((state) => state.games);

  const closeModal = () => {
    dispatch(setShowModal(false));

    // show back the main body scrollbar by changing overflow to auto
    document.body.style.overflow = "auto";
  };

  return (
    <Modal showModal={showModal} onClose={closeModal}>
      <GameBaseInfo>
        <div>
          <h3>{selectedGame?.name}</h3>
          <p>Rating: {selectedGame?.rating}</p>
        </div>
        <div>
          <h3>Platforms</h3>
          {selectedGame?.platforms?.map(({ platform }) => (
            <p key={platform.id}>{platform.name}</p>
          ))}
        </div>
      </GameBaseInfo>
      <GameImage>
        <img src={selectedGame?.background_image} alt={selectedGame.id} />
      </GameImage>
      <GameDescription>{selectedGame.description}</GameDescription>
      <ScreenshotsGallery>
        {selectedGame?.screenshots?.results?.map((s) => (
          <img src={s.image} key={s.id} alt={s.id} />
        ))}
      </ScreenshotsGallery>
    </Modal>
  );
};

const GameBaseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h3 {
    padding-left: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

const GameImage = styled.div`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;

const GameDescription = styled.p`
  margin-top: 5rem;
`;

const ScreenshotsGallery = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.5rem;
  row-gap: 2.5rem;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default GameDetail;
