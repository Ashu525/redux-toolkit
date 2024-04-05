import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeUser } from "../store/slices/userSlice";
import { styled } from "styled-components";
const DeleteUser = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeUser(id));
  };
  return <StyledDeleteIcon fontSize="large" onClick={handleDelete} />;
};

const StyledDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
`;

export default DeleteUser;
