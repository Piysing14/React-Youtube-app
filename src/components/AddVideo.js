import "./AddVideo.css";
import { useState } from "react";
function AddVideo({ addVideos }) {
  const initialState = {
    channel: "Code Academy",
    time: "5 days ago",
    isVerified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    addVideos(video);
    setVideo(initialState);
  }
  function handleChange(event) {
    event.stopPropagation();
    let name = event.target.name;
    let value = event.target.value;

    console.log(name, value);
    setVideo({ ...video, [name]: value });
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button onClick={handleSubmit}>Add video</button>
      </form>
    </>
  );
}

export default AddVideo;
