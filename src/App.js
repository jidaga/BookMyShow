import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import Card from "./components/Card";
function App() {
  function onButtonClick() {
    console.log("button Clicked");
  }

  return (
    <div className="App">
  
      <Card imageUrl="https://blogtobollywood.com/wp-content/uploads/2016/12/Raees-New-Poster-768x1024.jpg" title="RAEES" description="rating 8.6" buttonText="BookNow" /> 
      <Card imageUrl="https://m.media-amazon.com/images/M/MV5BMDQwOTI3NTMtZjA0My00M2E3LThmODUtODdiNTQ3ZjNiNGE3XkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_.jpg" title="ANIMAL" description="rating 7.2" buttonText="BookNow"/>
      <Card imageUrl="https://assets.gadgets360cdn.com/pricee/assets/product/202212/hanuman-movie-teja-sajja-captivates-with-his-innocence_b_2308221247_1669833505.jpg" title="HAUMAN" description="rating 6.5" buttonText="BookNow"/>
      <Card imageUrl="https://upload.wikimedia.org/wikipedia/en/d/df/Fighter_film_teaser.jpg" title="FIGHTER" description="rating 5.6" buttonText="BookNow"/>
      <Card imageUrl="https://a.ltrbxd.com/resized/film-poster/8/6/4/6/8/3/864683-dunki-0-230-0-345-crop.jpg?v=aeb97739b1" title="DUNKI" description="rating 8.6" buttonText="BookNow"/>
      <Card imageUrl="https://i.pinimg.com/originals/5b/b3/7b/5bb37b66e72260b6fd6dd97c9596aa65.jpg" title="SALAAR" description="rating 8" buttonText="BookNow"/>
      <Card imageUrl="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/12th-fail-et00363787-1698316138.jpg" title="12th FAIL" description="rating 8" buttonText="BookNow"/>
    </div>
  );
}

export default App;
