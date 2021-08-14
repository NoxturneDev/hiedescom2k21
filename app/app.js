const botsContainer = document.querySelector(".bots-container")
const yukSinauBtn = document.querySelector(".btn-belajar")
const closeBtn = document.querySelector(".close-btn")

yukSinauBtn.addEventListener("click", () => {
    botsContainer.style.visibility = `visible`;
})

closeBtn.addEventListener("click", () => {
    botsContainer.style.visibility = `hidden`;
})