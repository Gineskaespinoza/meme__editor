const $ = (selector) => document.querySelector(selector)

// $("#button__light").addEventListener("click", () => {
//     const modeChange = $("body").getAttribute("code-light")
//     if (modeChange) {
//         $("#button__dark").classList.add("hidden")
//         $("#button__light").classList.remove("hidden")
//         $("body").removeAttribute("code-light", "light-mode")
//     } else {
//         $("#button__light").classList.remove("hidden")
//         $("#button__dark").classList.add("hidden")
//         $("body").setAttribute("code-light", "light-mode")
//     }
// })

$("#superior__text").addEventListener("input", () => {
    $("#generator__top").innerText = $("#superior__text").value 



})