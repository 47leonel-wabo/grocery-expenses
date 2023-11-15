import { useState } from "react";
import "./App.css";
import AppAlert from "./components/AppAlert";
import AppButton from "./components/AppButton";
import ListGroup from "./components/ListGroup";

const cities = [
  "Dakar",
  "Bafoussam",
  "Yaoundé",
  "Ngaoundéré",
  "Garoua",
  "Bamako",
];

function App() {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading={"African Cities"}
        onItemSelected={(item) => console.log(item)}
      />
      <AppButton color="success" handleClick={() => setAlertVisible(true)}>
        Show Alert
      </AppButton>
      {isAlertVisible && (
        <AppAlert
          handleClose={closeAlert}
          message="My custom alert message from the root node. Houraa!!"
        />
      )}
    </div>
  );
}

export default App;
