import "./AddVideo.css";
import { useEffect, useState } from "react";
const initialState = {
    channel: "Code Academy",
    time: "5 days ago",
    isVerified: true,
    title: "",
    views: "",
  };

function AddVideo({ addVideos,updateVideo,editableVideo }) {
  
  const [video, setVideo] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    if(editableVideo){
            updateVideo(video);
    }
    else{

        addVideos(video);
    }
    setVideo(initialState);
  }
  function handleChange(event) {
    event.stopPropagation();
    let name = event.target.name;
    let value = event.target.value;
    setVideo({ ...video, [name]: value });
  }

  useEffect(()=>{
    if(editableVideo){

        setVideo(editableVideo)
    }
  },[editableVideo])
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
        <button onClick={handleSubmit}>{editableVideo? 'Edit': 'Add'} video</button>
      </form>
    </>
  );
}

export default AddVideo;
