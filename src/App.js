import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";
function App() {
  return (
    <div className="App">
      <div> Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          isVerified={video.isVerified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing....",video.title)}
            onPause={() => console.log("Paused....",video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="Play-msg" onSmash={()=>console.log("Play")} >Play</PlayButton>
      <PlayButton message="Pause-msg" onSmash={()=>console.log("Pause")}>Pause</PlayButton> */}
        {/* <PlayButton onPlay={()=>console.log("Play")} onPause={()=>console.log("Pause")} >Play</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
