import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
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
        ></Video>
      ))}
    </div>
  );
}

export default App;
