


window.onload = function() {
    function setBackgroundColor(color) {
      let content = document.querySelector(".content")
      content.style.backgroundColor = color
      localStorage.setItem("backgroundColor", color)
    }

    function setFontColor(color) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let i = 0; i < paragraphs.length; i += 1) {
        paragraphs[i].style.color = color
      }
      localStorage.setItem("fontColor", color)
    }

    function setFontSize(size) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let i = 0; i < paragraphs.length; i += 1) {
        paragraphs[i].style.fontSize = size
      }
      localStorage.setItem("fontSize", size)
    }

    function setLineHeight(height) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let i = 0; i < paragraphs.length; i += 1) {
        paragraphs[i].style.lineHeight = height
      }
      localStorage.setItem("lineHeight", height)
    }

    function setFontFamily(family) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let i = 0; i < paragraphs.length; i += 1) {
        paragraphs[i].style.fontFamily = family
      }
      localStorage.setItem("fontFamily", family)
    }

    //list of color for background and font
    var arrayColors = ["black", "yellow", "green", "purple", "red", "blue"]
    let backgroundColorButton = document.querySelector("#background-color");
    let fontColorButton = document.querySelector("#font-color");
    for(var index = 0; index < arrayColors.length; index +=1){
        buttonColorBackground = document.createElement("BUTTON");
        buttonColorFont = document.createElement("BUTTON");
        buttonColorBackground.id = arrayColors[index]+"Button";
        buttonColorBackground.innerHTML = arrayColors[index];  
        buttonColorFont.id = arrayColors[index]+"Button";
        buttonColorFont.innerHTML = arrayColors[index];  
        backgroundColorButton.appendChild(buttonColorBackground);
        fontColorButton.appendChild(buttonColorFont);

    }


    //list of font sizes
    var arraySizes = ["8pt", "10pt", "12pt", "14pt", "20pt"]
    let fontSize = document.querySelector("#font-size");
    for(var index = 0; index < arraySizes.length; index +=1){
        let fontSizeButton = document.createElement("BUTTON");
        fontSizeButton.id = arraySizes[index]+"Button";
        fontSizeButton.innerHTML = arraySizes[index];  
        fontSize.appendChild(fontSizeButton);
    }

    //list of heights
    var arrayLineHeight = ["1", "normal", "1.5", "2.0", "3.0"];
    let lineHeight = document.querySelector("#line-height");
    for(var index = 0; index < arrayLineHeight.length; index +=1){
        let lineHeightButton = document.createElement("BUTTON");
        lineHeightButton.id = arrayLineHeight[index]+"Button";
        lineHeightButton.innerHTML = arrayLineHeight[index];  
        lineHeight.appendChild(lineHeightButton);
    }


    //Font Type
    var arrayFontType = ["Arial", "Times New Roman"];
    let fontType = document.querySelector("#font-family");
    for(var index = 0; index < arrayFontType.length; index +=1){
        let fontTypeButton = document.createElement("BUTTON");
        fontTypeButton.id = arrayFontType[index]+"Button";
        fontTypeButton.innerHTML = arrayFontType[index];  
        fontType.appendChild(fontTypeButton);
    }
    
    // background-color
   let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let i = 0; i < backgroundColorButtons.length; i += 1) {
        backgroundColorButtons[i].addEventListener("click", function(event) {
        setBackgroundColor(event.target.innerHTML)
      })
    }

    // font-color
   
    let fontColorButtons = document.querySelectorAll("#font-color>button")
    for (let i = 0; i < fontColorButtons.length; i += 1) {
      fontColorButtons[i].addEventListener("click", function(event) {
        setFontColor(event.target.innerHTML)
      })
    }

    // font-size
    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    for (let i = 0; i < fontSizeButtons.length; i += 1) {
      fontSizeButtons[i].addEventListener("click", function(event) {
        setFontSize(event.target.innerHTML)
      })
    }

    // line-height
    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let i = 0; i < lineHeightButtons.length; i += 1) {
      lineHeightButtons[i].addEventListener("click", function(event) {
        setLineHeight(event.target.innerHTML)
      })
    }

    // font-family
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let i = 0; i < fontFamilyButtons.length; i += 1) {
      fontFamilyButtons[i].addEventListener("click", function(event) {
        setFontFamily(event.target.innerHTML)
      })
    }

    function initialize() {
      let backgroundColor = localStorage.getItem("backgroundColor")
      if (backgroundColor) setBackgroundColor(backgroundColor)

      let fontColor = localStorage.getItem("fontColor")
      if (fontColor) setFontColor(fontColor)

      let fontSize = localStorage.getItem("fontSize")
      if (fontSize) setFontSize(fontSize)

      let lineHeight = localStorage.getItem("lineHeight")
      if (lineHeight) setLineHeight(lineHeight)

      let fontFamily = localStorage.getItem("fontFamily")
      if (fontFamily) setFontSize(fontFamily)
    }

    initialize()
  }