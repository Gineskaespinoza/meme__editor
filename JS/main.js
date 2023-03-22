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

const generatorFilters = () => {
    $("#generator__square").style.filter = `brightness(${$("#brightness__choice").value}) opacity(${$("#opacity__choice").value}) contrast(${$("#contrast__choice").value}%) blur(${$("#blur__choice").value}px) grayscale(${$("#grayscale__choice").value}%) sepia(${$("#sepia__choice").value}%) hue-rotate(${$("#hue__choice").value}deg) saturate(${$("#saturate__choice").value}%) invert(${$("#invert__choice").value})` 
}

$("#brightness__choice").addEventListener("input", generatorFilters)

$("#opacity__choice").addEventListener("input", generatorFilters)
    
$("#contrast__choice").addEventListener("input", generatorFilters) 
    
$("#blur__choice").addEventListener("input", generatorFilters) 

$("#grayscale__choice").addEventListener("input", generatorFilters) 

$("#sepia__choice").addEventListener("input", generatorFilters) 

$("#hue__choice").addEventListener("input", generatorFilters)

$("#saturate__choice").addEventListener("input", generatorFilters) 

$("#invert__choice").addEventListener("input", generatorFilters) 


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
        $("#generator__top").style.backgroundColor = "rgb(0, 0, 0)"

    } else {
        $("#generator__top").style.backgroundColor = "#ffffff"

    }
})

// No bottom text

$("#text__input").addEventListener("input", () => {
    const isChecked = $("#text__input").checked
    if (isChecked) {
        $("#generator__bottom").style.backgroundColor = "rgb(0, 0, 0)"

    } else {
        $("#generator__bottom").style.backgroundColor = "#ffffff"
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


//   text alignment
$("#align__btn--left").addEventListener("click", () => {
    $("#generator__top").style.textAlign = "left"
    $("#generator__bottom").style.textAlign = "left"

})

$("#align__btn--center").addEventListener("click", () => {
    $("#generator__top").style.textAlign = "center"
    $("#generator__bottom").style.textAlign = "center"

})

$("#align__btn--right").addEventListener("click", () => {
    $("#generator__top").style.textAlign = "right"
    $("#generator__bottom").style.textAlign = "right"

})


// text color
$("#text__color").addEventListener("input", () => {
    $("#generator__top").style.color = $("#text__color").value
})

$("#text__color").addEventListener("input", () => {
    $("#generator__bottom").style.color = $("#text__color").value
})


// text background color
$("#background__color").addEventListener("input", () => {
    $("#generator__top").style.backgroundColor = $("#background__color").value
})

$("#background__color").addEventListener("input", () => {
    $("#generator__bottom").style.backgroundColor = $("#background__color").value
})







// outline buttons

$("#contorn__none").addEventListener("click", () => {
    $("#generator__top").style.webkitTextStroke = "none"
})

$("#contorn__light").addEventListener("click", () => {
    $("#generator__top").style.webkitTextStroke = "1px currentColor" 
})










































