import "./App.css";
import videoDB from "./data/data";
import Counter from "./components/counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { Children, useState } from "react";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo,seteditableVideo]=useState(null);
  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id != id));
  }
  function editVideo(id) {
  
    seteditableVideo( videos.find((video) => video.id=== id));
  }
  function updateVideo(video){
    const index= videos.findIndex(v=>v.id===video.id)
    const newVideos=[...videos];
    newVideos.splice(index,1,video)
    setVideos(newVideos);
  }

  return (
    <div className="App">
      <div>
        <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      </div>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
      <div style={{ clear: "both" }}></div>
    </div>
  ); 
}

export default App;
