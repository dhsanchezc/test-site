const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/car.png") {
        myImage.setAttribute("src", "images/rotatedCar.png");
    } else {
        myImage.setAttribute("src", "images/car.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is col, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is so cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}