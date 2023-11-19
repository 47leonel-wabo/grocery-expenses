import { User } from "../services/user-service";

interface Props {
  userData: User;
}

const UserCard = ({ userData }: Props) => {
  return (
    <div className="col-md-4  mt-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{userData.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {userData.email}
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div>
            <button className="btn btn-sm btn-outline-danger me-3">
              Delete
            </button>
            <button className="btn btn-sm btn-outline-info">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
