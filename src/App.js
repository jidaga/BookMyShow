import "./App.css";
import CustomButton from "./components/CustomButton";

function App() {
  function onButtonClick() {
    console.log("button Clicked");
  }

  return (
    <div className="App">
      <CustomButton text="hello" onClick={onButtonClick} />
    </div>
  );
}

export default App;
