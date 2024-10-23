chrome.storage.local.get('videoSpeed', (data) => {
  const speed = data.videoSpeed || 1;
  document.querySelectorAll('video').forEach(video => {
    video.playbackRate = speed;
  });
});
