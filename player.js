function PlayVideo(id) {
    this.div = document.getElementById(id);
    this.video = this.div.querySelector("video")
    this.playPauseBtn = this.div.querySelector(".playPause");
    this.reloadBtn = this.div.querySelector(".reload");
    this.playIcon = `<i class="fa-solid fa-play"></i>`
    this.pauseIcon = `<i class="fa-solid fa-pause"></i>`






}
PlayVideo.prototype.init = function () {
    this.playPauseBtn.addEventListener("click", () => {
        this.startVideo(this)
    })
    this.reloadBtn.addEventListener("click", this.reloadVideo.bind(this))

}
PlayVideo.prototype.startVideo = function (play) {
    if (play.playPauseBtn.innerHTML === this.playIcon) {
        play.video.play()
        play.playPauseBtn.innerHTML = this.pauseIcon
    } else {
        play.video.pause()
        play.playPauseBtn.innerHTML = this.playIcon
    }

}
PlayVideo.prototype.reloadVideo = function () {
    this.video.load()
    this.playPauseBtn.innerHTML = this.playIcon
}