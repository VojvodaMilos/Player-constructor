//First way**************************************************************
// const videoDiv = document.getElementById("videoPlayer")
// const videoDiv2 = document.getElementById("videoPlayer2")
// const play1Btn = videoDiv.querySelector(".playPause")
// const play2Btn = videoDiv2.querySelector(".playPause")
// const reload1Btn = videoDiv.querySelector(".reload")
// const reload2Btn = videoDiv2.querySelector(".reload")
// const playIcon = `<i class="fa-solid fa-play"></i>`
// const pauseIcon = `<i class="fa-solid fa-pause"></i>`

// // Listener
// play1Btn.addEventListener("click", () => {
//     playVideo(videoDiv)
// });
// play2Btn.addEventListener("click", () => {
//     playVideo(videoDiv2)
// })
// reload1Btn.addEventListener("click", () => {
//     videoDiv.querySelector("video").load();
//     play1Btn.innerHTML = playIcon
// })
// reload2Btn.addEventListener("click", () => {
//     videoDiv2.querySelector("video").load()
//     play2Btn.innerHTML = playIcon
// })

// function playVideo(div) {
//     const video = div.querySelector("video");
//     const playButton = div.querySelector(".playPause ")

//     if (playButton.innerHTML === playIcon) {
//         video.play();
//         playButton.innerHTML = pauseIcon;
//         console.log(playButton);
//     } else {
//         video.pause();
//         playButton.innerHTML = playIcon;
//     }

// }

//Second wey ***************************************************************


p1 = new PlayVideo("videoPlayer")
p1.init()

p2 = new PlayVideo("videoPlayer2")
p2.init()
