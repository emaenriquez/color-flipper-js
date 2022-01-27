const color = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById("btn");

const colorSpan = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = color[randomNumber];
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * color.length);
}