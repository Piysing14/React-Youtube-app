import "./App.css";
import Video from "./components/Video";
import videoDB from "./data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/counter";
import AddVideo from "./components/AddVideo"
import { Children, useState } from "react";

function App() {
  const [videos, setVideos] = useState(videoDB);
  function addVideos(video){
    setVideos([
        ...videos,
        {...video, id: videos.length + 1}
      ]);
  }
  return (
    <div className="App">
      <div>
       <AddVideo addVideos={addVideos}></AddVideo>
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
      </div>
    </div>
  );
}

export default App;
