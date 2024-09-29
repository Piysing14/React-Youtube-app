import { Children, useState } from "react";
import "./PlayButton.css";
function PlayButton({ message, children, onSmash, onPlay, onPause }) {
    const [play,setPlay]=useState(false);
  function handleClick(e) {
    e.stopPropagation();
    // onSmash();
    if (play) onPause();
    else onPlay();
    setPlay(!play);
  }
  return (
    <>
      <button onClick={handleClick}>{children}: {play ? "⏸️": "▶️"}</button>
    </>
  );
}

export default PlayButton;
