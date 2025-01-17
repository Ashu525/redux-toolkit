import styled from "styled-components";
import DeleteUsers from "./DeleteUsers";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of users</div>
          <button
            className="btn add-btn"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New User
          </button>
        </div>
        <DisplayUsers />
        <hr />
        <DeleteUsers />
      </div>
    </Wrapper>
  );
};

export default UserDetails;

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  hr {
    border: 1px solid red;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
    color: white;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;
