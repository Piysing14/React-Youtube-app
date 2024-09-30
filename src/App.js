import "./App.css";
import videoDB from "./data/data";
import Counter from "./components/counter";
import AddVideo from "./components/AddVideo"
import VideoList from "./components/VideoList"
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
      <VideoList videos={videos}></VideoList>
      <div style={{ clear: "both" }}>
      </div>
    </div>
  );
}

export default App;
