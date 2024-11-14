// App.js
import React, { useContext, useState } from "react";
import "./App.css";
import List from "./components/List/List";
import ImageSizeProvider, { imgSizeContext } from "./context/imageSize.context";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeProvider size={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeProvider>
  );
}

export default App;
