import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button, SectionTitle } from "../globalStyles";
import { deleteNoteAction } from "../redux/actions/notesActions";

const NotestList = () => {
  const notes = useSelector((storeData) => storeData.notes);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteNoteAction(id));
  };

  return (
    <StyledNotestList>
      <SectionTitle>Notes</SectionTitle>
      <Cards>
        {notes.map((n) => (
          <Card key={n.id}>
            <h3>{n.title}</h3>
            <p>{n.content}</p>
            <DeletButton onClick={() => deleteHandler(n.id)}>
              Delete
            </DeletButton>
          </Card>
        ))}
      </Cards>
    </StyledNotestList>
  );
};

const StyledNotestList = styled.div`
  margin: 2rem 0;
`;

const Cards = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: calc(50% - 1rem);
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;

  h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const DeletButton = styled(Button)`
  align-self: center;
  color: #000;
  border: 2px solid red;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  &:hover {
    background: tomato;
  }
`;

export default NotestList;
