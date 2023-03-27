const $ = (selector) => document.querySelector(selector)


// Buttons header

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

 // Dark mode

 $("#button__dark").addEventListener("click", () => {
    const modeChange = $("body").getAttribute("code-light")
    if ($("#button__dark").style.display = "none"){
        $("#button__light").style.display = "block"
        $("body").setAttribute("code-light", "light-mode")
    }
 })

 //Light Mode
 
 $("#button__light").addEventListener("click", () => {
     if ($("#button__light").style.display = "none"){
         $("#button__dark").style.display = "block"
         $("body").removeAttribute("code-light", "light-mode")
     }
  })


 //download image

 const downloadImage = () => {
    domtoimage.toBlob($("#generator__meme")).then((blob) => {
        saveAs(blob, 'my-meme.png')
      })
}

$("#button__download").addEventListener('click', downloadImage)

 

// -------------------------------IMAGE SECTION------------------------------------

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


//reset filters

const resetFilters = () => {
    $("#brightness__choice").value = 1
    $("#opacity__choice").value = 1
    $("#contrast__choice").value = 100
    $("#blur__choice").value = 0
    $("#grayscale__choice").value = 0
    $("#sepia__choice").value = 0
    $("#hue__choice").value = 0
    $("#saturate__choice").value = 100
    $("#invert__choice").value = 0
}

$("#reset__btn").addEventListener("click", resetFilters)


const resetImage = () => {
    $("#generator__square").style.filter = `brightness(${$("#brightness__choice").value = 1}) opacity(${$("#opacity__choice").value = 1}) contrast(${$("#contrast__choice").value = 100}%) blur(${$("#blur__choice").value = 0}px) grayscale(${$("#grayscale__choice").value = 0}%) sepia(${$("#sepia__choice").value = 0}%) hue-rotate(${$("#hue__choice").value = 0}deg) saturate(${$("#saturate__choice").value = 100}%) invert(${$("#invert__choice").value = 0})` 
}

$("#reset__btn").addEventListener("click", resetImage)


// -----------------------------------SECTION TEXT------------------------------

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

// No bottom text

$("#text__input").addEventListener("input", () => {
    const isChecked = $("#text__input").checked
    if (isChecked) {
        $("#generator__bottom").classList.add("hidden")

    } else {
        $("#generator__bottom").classList.remove("hidden")
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

// transparent background

$("#checkbox__background").addEventListener("click", () => {
    const isChecked = $("#checkbox__background").checked
    if (isChecked){
        $("#generator__top").style.backgroundColor = "transparent"
        $("#generator__bottom").style.backgroundColor = "transparent"
        $("#generator__top").style.position = "absolute"
        $("#generator__bottom").style.position = "absolute"
    } else {
        $("#generator__top").style.position = "static"
        $("#generator__bottom").style.position = "static"
    }
})

$("#text__input").addEventListener("input", () => {
    const isChecked = $("#text__input").checked
    if (isChecked) {
        $("#generator__bottom").classList.add("hidden")

    } else {
        $("#generator__bottom").classList.remove("hidden")
    }
})


// outline buttons

$("#contorn__none").addEventListener("click", () => {
    $("#generator__top").style.webkitTextStroke = "0"
    $("#generator__bottom").style.webkitTextStroke = "0"
})

$("#contorn__light").addEventListener("click", () => {
    $("#generator__top").style.webkitTextStroke = "1.5px" 
    $("#generator__bottom").style.webkitTextStroke = "1.5px" 
})

$("#contorn__dark").addEventListener("click", () => {
    $("#generator__top").style.webkitTextStroke = "2.5px " 
    $("#generator__bottom").style.webkitTextStroke = "2.5px" 
})


// spacing

$("#spacing__input").addEventListener("input", () => {
    $("#generator__top").style.padding =  `${$("#spacing__input").value}px ` 

})

$("#spacing__input").addEventListener("input", () => {
    $("#generator__bottom").style.padding =  `${$("#spacing__input").value}px ` 

})

// line height 
$("#lineheight__input").addEventListener("input", () => {
    $("#generator__top").style.lineHeight= $("#lineheight__input").value

})

$("#lineheight__input").addEventListener("input", () => {
    $("#generator__bottom").style.lineHeight = $("#lineheight__input").value 

})


// hidden aside


const asideHidden = () => {
    $("#aside").classList.add("hidden")
}

const asideShow = () => {
    $("#aside").classList.remove("hidden")
}

$("#close__btn").addEventListener("click", asideHidden)

$("#button__img").addEventListener("click", asideShow)


$("#button__text").addEventListener("click", asideShow)


const asideNone = window.matchMedia( "(max-width: 700px)");

if (asideNone.matches) {
    $("#aside").classList.add("hidden")
} else {
    $("#aside").classList.remove("hidden")
}
















































