const $ = (selector) => document.querySelector(selector)

// dark mode:

$("#button__dark").addEventListener("click", () => {
    const modeChange = $("body").getAttribute("code-light")
    if (modeChange) {
        $("#button__light").classList.add("hidden")
        $("#button__dark").classList.remove("hidden")
        $("body").removeAttribute("code-light", "light-mode")
    } else {
        $("#button__dark").classList.remove("hidden")
        $("#button__light").classList.add("hidden")
        $("body").setAttribute("code-light", "light-mode")
    }
})


// BUTTONS HEADER

$("#button__img").addEventListener("click", () => {
   if ($(".image__content").style.display = "block"){
       $(".text__container").style.display = "none"
   }
})

$("#button__text").addEventListener("click", () => {
    if ($(".text__container").style.display = "block"){
        $(".image__content").style.display = "none"
    }
 })
 

// IMAGE SECTION

// insert background image:
$("#image__url").addEventListener("input", () => {
    const imgUrl = $("#image__url").value
    $("#generator__square").style.backgroundImage = `url(${imgUrl})`
})

// insert background color:
$("#backgroundcolor__image").addEventListener("input", () => {
    $("#generator__square").style.backgroundColor = $("#backgroundcolor__image").value
})

// Change background blend mode:

$("#background__option").addEventListener("input", () => {
    $("#generator__square").style.backgroundBlendMode = $("#background__option").value

})

// image filters:

$("#brightness__choice").addEventListener("input", ()=> {
     $("#generator__square").style.filter = `brightness(${$("#brightness__choice").value})`
    
})

$("#opacity__choice").addEventListener("input", ()=> {
    $("#generator__square").style.filter = `opacity(${$("#opacity__choice").value})`
   
})

$("#contrast__choice").addEventListener("input", () => { 
    $("#generator__square").style.filter = `contrast(${$("#contrast__choice").value}%)`
})

$("#blur__choice").addEventListener("input", () => {
    $("#generator__square").style.filter = `blur(${$("#blur__choice").value}px)`
})

$("#grayscale__choice").addEventListener("input", () => {
    $("#generator__square").style.filter = `grayscale(${$("#grayscale__choice").value}%)`
})

$("#sepia__choice").addEventListener("input", () => {
    $("#generator__square").style.filter = `sepia(${$("#sepia__choice").value}%)`
})

$("#hue__choice").addEventListener("input", () => {
    $("#generator__square").style.filter = `hue-rotate(${$("#hue__choice").value}deg)`
})

$("#saturation__choice").addEventListener("input", () => {
    $("#generator__square").style.filter = `saturate(${$("#saturation__choice").value}%)`
})

$("#invert__choice").addEventListener("input", () => {
    $("#generator__square").style.filter = `invert(${$("#invert__choice").value})`
})



// SECTION TEXT

//insert top text:

$("#superior__text").addEventListener("input", () => {
    $("#generator__top").innerText = $("#superior__text").value

})

//insert bottom text:

$("#inferior__text").addEventListener("input", () => {
    $("#generator__bottom").innerText = $("#inferior__text").value

})

// No top text
$("#input__check").addEventListener("input", () => {
    const isChecked = $("#input__check").checked
    if (isChecked) {
        $("#generator__top").classList.add("hidden")

    } else {
        $("#generator__top").classList.remove("hidden")

    }

})

// FONTS

$("#font__selector").addEventListener("input", () => {
    $("#generator__top").style.fontFamily = $("#font__selector").value
    $("#generator__bottom").style.fontFamily = $("#font__selector").value
})

// FONT SIZE

$("#fontsize__item").addEventListener("input", () => {
    $("#generator__top").style.fontSize = `${$("#fontsize__item").value}px `
    $("#generator__bottom").style.fontSize = `${$("#fontsize__item").value}px `

})
























