import { useRef, useEffect } from "react";
import { forwardRef } from "react";

const VideoPlayer = forwardRef(({ videoUrl, poster, className = "" }, ref) => {
  useEffect(() => {
    // Attempt to programmatically play the video
    if (ref.current) {
      const playPromise = ref.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video playback started successfully
          })
          .catch((error) => {
            console.error("Error attempting to play the video:", error);
          });
      }
    }
  }, [videoUrl]);

  return (
    <video
      ref={ref}
      src={videoUrl}
      autoPlay
      muted
      controls
      poster={poster || "/images/default-poster.png"}
      className={`aspect-video object-cover w-full rounded-lg ${className}`}
    />
  );
});

export default VideoPlayer;
