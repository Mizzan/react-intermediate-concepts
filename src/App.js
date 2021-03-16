import "./App.css";
import { ThumbUp, ThumbDown } from "@material-ui/icons";
import { useState } from "react";

function App() {
  const [likeColor, setLikeColor] = useState("");
  const [disLikeColor, setdisLikeColor] = useState("");

  const handleLike = () => {
    const color = likeColor ? "" : "primary";
    setLikeColor(color);
  };
  const handleDisLike = () => {
    const color = disLikeColor ? "" : "secondary";
    setdisLikeColor(color);
  };

  return (
    <div>
      <ThumbUp
        onClick={handleLike}
        color={likeColor}
        style={{ fontSize: 60 }}
      ></ThumbUp>
      <ThumbDown
        onClick={handleDisLike}
        color={disLikeColor}
        style={{ fontSize: 60 }}
      ></ThumbDown>
    </div>
  );
}

export default App;
