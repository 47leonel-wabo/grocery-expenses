import { useEffect, useState } from "react";
import "./App.css";
import userService, { User } from "./services/user-service";
import UserCard from "./components/UserCard";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const { controller, responsePromise } = userService.getAll<User>();
    responsePromise
      .then(({ data }) => setUsers(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

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
