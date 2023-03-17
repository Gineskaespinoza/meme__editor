const $ = (selector) => document.querySelector(selector)

$("#button__light").addEventListener("click", () => {
    const modeChange = $("body").getAttribute("code-light")
    if (modeChange) {
        $("#button__light").classList.remove("hidden")
        $("#button__dark").classList.add("hidden")
        $("body").removeAttribute("code-light", "light-mode")
    } else {
        $("#button__dark").classList.add("hidden")
        $("#button__light").classList.remove("hidden")
        $("body").setAttribute("code-light", "light-mode")
    }
})


//insert top text

$("#superior__text").addEventListener("input", () => {
    $("#generator__top").innerText = $("#superior__text").value

})

//insert bottom text

$("#inferior__text").addEventListener("input", () => {
    $("#generator__bottom").innerText = $("#inferior__text").value

})

// generator__square 
// input image__url

// insert URL

$("#image__url").addEventListener("input", () => {
    const imgUrl = $("#image__url").value
    $("#generator__square").style.backgroundImage = `url(${imgUrl})`
})







