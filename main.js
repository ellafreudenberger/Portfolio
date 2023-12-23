// Function to add new features to the webpage
function addNewFeatures() {
    // Add navigation bar
    const navBar = document.createElement('nav');
    navBar.innerHTML = `
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;

    navBar.style.opacity = 0;
    navBar.style.transition = 'opacity 7s';

    // Append navigation bar to the black screen with a delay
    document.getElementById('blackScreen').appendChild(navBar);

    // Add horizontal line
    const horizontalLine = document.createElement('div');
    horizontalLine.className = 'horizontal-line'; 
    horizontalLine.style.width = '200%';
    horizontalLine.style.height = '2px';
    horizontalLine.style.backgroundColor = 'white';
    horizontalLine.style.position = 'fixed';
    horizontalLine.style.top = '50%';
    horizontalLine.style.left = '50%';
    horizontalLine.style.transform = 'translate(-50%, -50%) rotate(45deg)'; 
    horizontalLine.style.zIndex = '1000';
    horizontalLine.style.opacity = 0; // Set initial opacity to 0
    horizontalLine.style.transition = 'opacity 7s'; // Adjust duration for fade-in

    // Add other horizontal line
    const otherHorizontalLine = document.createElement('div');
    otherHorizontalLine.className = 'other-horizontal-line'; 
    otherHorizontalLine.style.width = '200%';
    otherHorizontalLine.style.height = '2px';
    otherHorizontalLine.style.backgroundColor = 'white';
    otherHorizontalLine.style.position = 'fixed';
    otherHorizontalLine.style.top = '50%';
    otherHorizontalLine.style.left = '50%';
    otherHorizontalLine.style.transform = 'translate(-50%, -50%) rotate(-45deg)'; 
    otherHorizontalLine.style.zIndex = '1000';
    otherHorizontalLine.style.opacity = 0; // Set initial opacity to 0
    otherHorizontalLine.style.transition = 'opacity 7s'; // Adjust duration for fade-in

    // Append lines to the black screen with a delay
    setTimeout(() => {
        document.getElementById('blackScreen').appendChild(horizontalLine);
        document.getElementById('blackScreen').appendChild(otherHorizontalLine);

        // Trigger reflow to apply initial styles before fading in
        void horizontalLine.offsetWidth;
        void otherHorizontalLine.offsetWidth;

        // Apply the fade-in effect for the lines
        horizontalLine.style.opacity = 1;
        otherHorizontalLine.style.opacity = 1;
    }, 1500);

    // Apply the fade-in effect for the navigation bar
    setTimeout(() => {
        navBar.style.opacity = 1;
    }, 10);
}

// Remove the cube element after the zoomInAnimation
setTimeout(() => {
    document.querySelector('.cube').style.display = 'none';

    // Add a black screen
    const blackScreen = document.createElement('div');
    blackScreen.id = 'blackScreen'; // Set an id for easy reference
    blackScreen.style.position = 'fixed';
    blackScreen.style.top = '0';
    blackScreen.style.left = '50%';
    blackScreen.style.width = '100%';
    blackScreen.style.height = '100%';
    blackScreen.style.backgroundColor = '#000';
    blackScreen.style.zIndex = '1000'; // Adjust the z-index as needed

    // Append black screen to the body
    document.body.appendChild(blackScreen);

    // Call the function to add new features
    addNewFeatures();
}, 7000); // Adjust the duration as needed (in milliseconds)
