export async function detectAutoplay() {
  return new Promise((resolve) => {
    // Create a tiny muted video element to test autoplay capability
    const video = document.createElement('video');
    video.src =
      'data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTY4Lm12aGQAAAAAZG1oZAAAAAEAAQABAAAALW1oZAAAAAEAAQABAAAAAAEAAAAGaGRscgAAAAAAAAAAbWRpcwAAACBtZGhkAAAAAQABAAEAAAAAAgAAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAIAAAAeZHVybwAAAAAAAAAAc3RibAAAABBzdHNkAAAAAAAAAAEAAQABAAAAbHN0cwAAAAAAAAABAAAAAABhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAA=='
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay works
          video.pause();
          resolve(true);
        })
        .catch(() => {
          resolve(false);
        });
    } else {
      resolve(false);
    }
  });
} 