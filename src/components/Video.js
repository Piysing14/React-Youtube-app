import "./Video.css";
function Video({ title="My first vlog", channel="Piyush khati", views="300k", time="3 years ago" ,isVerified=false, id,children,deleteVideo,editVideo}) {


  return (
    <>
      <div className="container">
        <button className="close" onClick={()=>deleteVideo(id)}>❌</button>
        <button className="edit" onClick={()=>editVideo(id)}>edit</button>

        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Error showing"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {isVerified ? "✅": null }</div>
        <div className="views">
          {views} views <span>. </span>
          {time}
        </div>
        {children}
      </div>
    </>
  );
}

export default Video;




