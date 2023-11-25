import React, { useCallback, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setShowModal } from "../redux/actions/appActions";
import Modal from "./Modal";
import applePlatform from "../img/apple.svg";
import gamepadPlatform from "../img/gamepad.svg";
import nintendoPlatform from "../img/nintendo.svg";
import playstationPlatform from "../img/playstation.svg";
import steamPlatform from "../img/steam.svg";
import xboxPlatform from "../img/xbox.svg";
import fullStar from "../img/star-full.png";
import emptyStar from "../img/star-empty.png";

const platformImages = [
  { identifier: "mac", image: applePlatform },
  { identifier: "gamepad", image: gamepadPlatform },
  { identifier: "nintendo", image: nintendoPlatform },
  { identifier: "playstation", image: playstationPlatform },
  { identifier: "pc", image: steamPlatform },
  { identifier: "xbox", image: xboxPlatform },
];

const GameDetail = () => {
  const dispatch = useDispatch();

  const { showModal } = useSelector((state) => state.app);

  const { selectedGame } = useSelector((state) => state.games);

  const closeModal = () => {
    dispatch(setShowModal(false));

    // show back the main body scrollbar by changing overflow to auto
    document.body.style.overflow = "auto";
    // going back to selecte game after closing of modal
    const targetElement = document.getElementById(`game-${selectedGame.name}`);
    targetElement.scrollIntoView({ behavior: "instant" });
  };

  const getPlatformImage = useCallback((platformName) => {
    return (
      platformImages.find((p) =>
        platformName.toLowerCase().includes(p.identifier)
      )?.image || gamepadPlatform
    );
  }, []);

  const getAsRatingStars = useCallback((rating) => {
    // if (rating) {
    const noOfFullStars = Math.floor(+rating);
    const noOfEmptyStars = 5 - noOfFullStars;
    console.log("Full:- ", noOfFullStars);
    console.log("Empty:- ", noOfEmptyStars);
    return (
      <>
        {Array(noOfFullStars)
          .fill(0)
          .map((_) => (
            <img src={fullStar} />
          ))}
        {Array(noOfEmptyStars)
          .fill(0)
          .map((_) => (
            <img src={emptyStar} />
          ))}
      </>
    );
    // }
  }, []);

  if (!Object.keys(selectedGame).length) {
    return <></>;
  }

  return (
    <Modal showModal={showModal} onClose={closeModal}>
      <GameBaseInfo>
        <div>
          <h3>{selectedGame?.name}</h3>
          <p>Rating: {selectedGame?.rating}</p>
          <RatingStars>{getAsRatingStars(selectedGame?.rating)}</RatingStars>
        </div>
        <div>
          <h3>Platforms</h3>
          <Platforms>
            {selectedGame?.platforms?.map(({ platform }) => (
              <div key={platform.id}>
                <img
                  src={getPlatformImage(platform.name)}
                  alt={platform.name}
                />
              </div>
            ))}
          </Platforms>
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

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const RatingStars = styled.div`
  display: flex;
  gap: 0.2rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Platforms = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  img {
    width: 100%;
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
