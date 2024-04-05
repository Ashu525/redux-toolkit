import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/actions";
import styled, { keyframes } from "styled-components";
const DeleteUsers = () => {
  const dispatch = useDispatch();
  const handleDeleteAllUsers = () => {
    dispatch(deleteUsers());
  };

  return (
    <StyledButton onClick={handleDeleteAllUsers}>Delete All Users</StyledButton>
  );
};

export default DeleteUsers;

const changeColor = keyframes`
  0% {
    color: black;
  }
  30% {
    color: red;
  }
  60% {
    color: white;
  }
  100% {
    color: green;
  }
`;

const StyledButton = styled.button`
  background: linear-gradient(to right, black, white);
  padding: 10px;
  width: 20%;
  max-width: 200px;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  border: none;
  margin: auto;
  cursor: pointer;
  &:hover {
    animation-name: ${changeColor};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }
`;
