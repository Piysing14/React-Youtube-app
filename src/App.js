import "./App.css";
import Video from "./components/Video";
import videoDB from "./data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/counter";
import { Children, useState } from "react";

function App() {
  const [videos, setVideos] = useState(videoDB);
  function handleClick(e) {
    e.stopPropagation();
    setVideos([
      ...videos,
      {
        title: "Learn JavaScript Basics",
        channel: "Code Academy",
        views: "200k",
        time: "5 days ago",
        isVerified: true,
        id: videos.length + 1,
      },
    ]);
  }
  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>Add video</button>
      </div>
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
            onPlay={() => console.log("Playing....", video.title)}
            onPause={() => console.log("Paused....", video.title)}
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
      <Counter></Counter>
    </div>
  );
}

export default App;
