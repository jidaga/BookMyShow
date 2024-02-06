import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import Card from "./components/Card";
function App() {
  function onButtonClick() {
    console.log("button Clicked");
  }

  return (
    <div className="App">
  
      <Card imageUrl="https://blogtobollywood.com/wp-content/uploads/2016/12/Raees-New-Poster-768x1024.jpg"/>
    </div>
  );
}

export default App;
