import Video from "./Video";
import PlayButton from "./PlayButton";


function VideoList({videos,deleteVideo,editVideo}){
    return(
        <>
        {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          isVerified={video.isVerified}
          id={video.id}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing....", video.title)}
            onPause={() => console.log("Paused....", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
        </>
    );
}

export default VideoList;