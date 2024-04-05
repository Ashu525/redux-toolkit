import { useSelector } from "react-redux";
import styled from "styled-components";
import DeleteUser from "./DeleteUser";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            <span>{user}</span>
            <DeleteUser id={id} />
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    color: white;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`;

export default DisplayUsers;
