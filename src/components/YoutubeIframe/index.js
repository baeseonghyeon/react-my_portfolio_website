import React from 'react';

function YoutubeIframe(props) {
  const { src, className, width, height } = props;

  return (
    <iframe
      title="youtube_video"
      className={className}
      width={width}
      height={height}
      src={`${src}?autoplay=1&showinfo=0&loop=1&mute=1&rel=0`}
      frameBorder="0"
      allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeIframe;
