interface VideoElements {
  VideoPlayer: HTMLVideoElement;
  ButtonPlay: HTMLButtonElement;
  ButtonPause: HTMLButtonElement;
}

interface VideoProtocol {
  play(): void;
  pause(): void;
  init(): void;
}

export default class VideoPlayer implements VideoProtocol {
  private VideoPlayer: HTMLVideoElement;
  private ButtonPlay: HTMLButtonElement;
  private ButtonPause: HTMLButtonElement;

  constructor(videoElements: VideoElements) {
    this.VideoPlayer = videoElements.VideoPlayer;
    this.ButtonPlay = videoElements.ButtonPlay;
    this.ButtonPause = videoElements.ButtonPause;
  }
  play(): void {
    this.ButtonPlay.addEventListener('click', () => {
      if (this.VideoPlayer.paused) {
        this.VideoPlayer.play();
        this.ButtonPlay.innerText = 'Pause';
      } else {
        this.VideoPlayer.pause();
        this.ButtonPlay.innerText = 'Play';
      }
    });
  }

  pause(): void {
    this.ButtonPause.addEventListener('click', () => {
      this.VideoPlayer.currentTime = 0;
      this.VideoPlayer.pause();
      this.ButtonPlay.innerText = 'Play';
    });
  }
  init(): void {
    this.play();
    this.pause();
  }
}

const video = new VideoPlayer({
  VideoPlayer: document.querySelector('.video') as HTMLVideoElement,
  ButtonPlay: document.querySelector('.play') as HTMLButtonElement,
  ButtonPause: document.querySelector('.stop') as HTMLButtonElement,
});

video.init();
