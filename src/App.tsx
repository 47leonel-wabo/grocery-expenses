import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import UserCard from "./components/UserCard";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading } = useUsers();
  return (
    <div className="container">
      <h4 className="display-6">
        Axios | JSONPlaceHolder <mark>Users</mark>
      </h4>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <LoadingSpinner />}
      <div className="row">
        {users.map((user) => (
          <UserCard key={user.id} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
