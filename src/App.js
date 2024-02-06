import "./App.css";
import CustomButton from "./components/CustomButton";
import HomeScreen from "./screens/HomeScreen";

function App() {
  function onButtonClick() {
    console.log("button Clicked");
  }

  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
