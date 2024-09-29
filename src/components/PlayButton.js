import { Children } from "react";
import "./PlayButton.css";
function PlayButton({ message, children, onSmash, onPlay, onPause }) {
    let play = false;
  function handleClick(e) {
    e.stopPropagation();
    // onSmash();
    if (play) onPause();
    else onPlay();
    play=!play;
  }
  return (
    <>
      <button onClick={handleClick}>{children}: {play ? ">":"||"}</button>
    </>
  );
}

export default PlayButton;
