// const btn = document.querySelector(".switch-btn");
// const video = document.querySelector(".video-container");

// btn.addEventListener("click", function () {
//     if (!btn.classList.contains("slide")) {
//         btn.classList.add("slide");
//         video.pause();
//     } else {
//         btn.classList.remove("slide");
//         video.play();
//     }
// });

// // preloader
// const preloader = document.querySelector(".preloader");

// // window.addEventListener("load", function () {
// //     preloader.classList.add("hide-preloader");
// // });

// setTimeout(()=>{
//     preloader.styles.visibility=hidden;
// },5000)



const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//   preloader.classList.add("hide-preloader");
// });
setTimeout(()=>{
    preloader.classList.add("hide-preloader");
},5000)