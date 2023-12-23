// Add new features to the webpage
function addNewFeatures() {
    // Add navigation bar
    const navBar = document.createElement('nav');
    navBar.innerHTML = `
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;

    // Append navigation bar to the black screen
    document.getElementById('blackScreen').appendChild(navBar);

    // Add horizontal line
    const horizontalLine = document.createElement('div');
    horizontalLine.style.width = '200%';
    horizontalLine.style.height = '1px';
    horizontalLine.style.backgroundColor = 'white';
    horizontalLine.style.position = 'fixed';
    horizontalLine.style.top = '50%';
    horizontalLine.style.left = '50%';
    horizontalLine.style.transform = 'translate(-50%, -50%) rotate(45deg)'; // Center the line
    horizontalLine.style.zIndex = '1000';

    // Append horizontal line to the black screen
    document.getElementById('blackScreen').appendChild(horizontalLine);

    // Add other horizontal line
    const otherHorizontalLine = document.createElement('div');
    otherHorizontalLine.style.width = '200%';
    otherHorizontalLine.style.height = '1px';
    otherHorizontalLine.style.backgroundColor = 'white';
    otherHorizontalLine.style.position = 'fixed';
    otherHorizontalLine.style.top = '50%';
    otherHorizontalLine.style.left = '50%';
    otherHorizontalLine.style.transform = 'translate(-50%, -50%) rotate(-45deg)'; // Center the line
    otherHorizontalLine.style.zIndex = '1000';

    // Append other horizontal line to the black screen
    document.getElementById('blackScreen').appendChild(otherHorizontalLine);

}

// Remove the cube element after the zoomInAnimation
    setTimeout(function () {
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
