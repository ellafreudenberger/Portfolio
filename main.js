const cube = document.querySelector(".cube");
let rotateX = 0;
let rotateY = 0;
let isRotating = true;
let rotationInterval;
const rotationValue = 0.1;  // Adjust rotation sensitivity
const transitionDuration = 0.8;  // Adjust transition duration in seconds

const rotateCube = () => {
    rotateX += rotationValue * 360;
    rotateY += rotationValue * 360;

    cube.style.transition = `transform ${transitionDuration}s ease-in-out`;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const handleMouseMove = (event) => {
    if (isRotating) {
        rotateY = (event.clientX / window.innerWidth - 0.5) * 360;
        cube.style.transition = "none";  // Disable transition during manual rotation
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
};

const handleClick = () => {
    isRotating = !isRotating;
};

const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", handleClick);

// Automatic rotation
rotationInterval = setInterval(() => {
    if (isRotating) {
        rotateCube();
    }
}, 800);  // Adjust the interval for smoother animation

// https://www.youtube.com/watch?v=nJRtKf6NWSY
// https://www.youtube.com/watch?v=ijFOmcsFeXo

