const VideoPlayer = ({ movieId }) => {
  return (
    <div className="w-screen m-0 bg-black">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + movieId + "?&autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  );
};

export default VideoPlayer;
