document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    const images = document.querySelectorAll(".image1");

    // Function to set random position for an element
    function setRandomPosition(element) {
        element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }

    // Set random position for each image
    images.forEach(image => setRandomPosition(image));
});

function angry() {
    const images = document.querySelectorAll(".image1");
    const absImg = document.getElementById("absImg");
    const mainImg = document.getElementById("mainImg");

    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    absImg.style.display = "flex";

    images.forEach(image => {
        image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
}

function happy() {
    const images = document.querySelectorAll(".image1");
    const absImg = document.getElementById("absImg");
    const mainImg = document.getElementById("mainImg");

    absImg.style.display = "flex";
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";

    images.forEach(image => {
        image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
}

const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
];

const blackmail = [
    "Please",
    "I'm begging you",
    "I'm crying",
    "I'm sad",
    "HUHUHUHU",
    "Please Say Yes",
    "I'm gonna cry",
];

function normal() {
    const absImg = document.getElementById("absImg");
    const mainImg = document.getElementById("mainImg");

    absImg.style.display = "none";
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
}

let counter = 0;

function no() {
    counter++;
    const sadMusic = document.getElementById("sadMusic");
    const happyMusic = document.getElementById("happyMusic");
    happyMusic.pause();
    sadMusic.play();

    const model = document.getElementById("model");
    model.style.display = "none";

    setTimeout(() => {
        model.style.display = "flex";
        const modelImage = document.getElementById("modelImg");
        const modelText = document.getElementById("modelText");

        modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
        modelText.innerText = blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
}

function yes() {
    if (counter >= 3) {
        let model = document.getElementById("model2");
        let model2 = document.getElementById("model");
        let sadMusic = document.getElementById("sadMusic");
        sadMusic.pause();
        model2.style.display = "none";
        let happyMusic = document.getElementById("happyMusic");
        happyMusic.play();
        model.style.display = "none";

        const wedate = document.getElementById("wedate");
        const btns = document.getElementById("btns");
        btns.style.display = "none";
        wedate.innerText = "We are each other's valentine now. I love you cutie. ❤️😘";

        // Open valentine.html in a new tab (make sure filename matches exactly)
        window.open("valentine.html", "_blank");

    } else {
        alert("Don't say yes right away, cutie. Play around a bit 😉😘");
    }
}

function ly2() {
    const model = document.getElementById("model2");
    const modelSad = document.getElementById("model");

    if (model)    model.style.display = "none";
    if (modelSad) modelSad.style.display = "none";
}
