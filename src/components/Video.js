import "./Video.css";
function Video({ title="My first vlog", channel="Piyush khati", views="300k", time="3 years ago" ,isVerified=false, id}) {


  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}

export default Video;




