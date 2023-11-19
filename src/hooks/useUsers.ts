import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const { controller, responsePromise } = userService.getAll<User>();
    responsePromise
      .then(({ data }) => setUsers(data))
      .catch((error) => {
        if (error instanceof CanceledError) return; // error due to strict mode activated
        setError(error.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { users, isLoading, error };
};

export default useUsers;
