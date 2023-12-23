// Function to add new features to the webpage
function addNewFeatures() {
    // Add navigation bar
    const navBar = document.createElement('nav');
    navBar.innerHTML = `
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    `;

    navBar.style.opacity = 0;
    navBar.style.transition = 'opacity 4s';

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetPage = this.getAttribute('href').substring(1);
            navigateTo(targetPage);
        });
    });

    // Append navigation bar to the black screen with a delay
    document.getElementById('blackScreen').appendChild(navBar);

    function navigateTo(page) {
        // Handle navigation logic here
        // You can load content dynamically based on the page parameter
    
        // For example, load different content based on the page
        switch (page) {
            case 'home':
                loadContent('<h2>Home Page Content</h2>');
                break;
            case 'about':
                loadContent('<h2>About Page Content</h2>');
                break;
            case 'contact':
                loadContent('<h2>Contact Page Content</h2>');
                break;
            default:
                break;
        }
    }
    
    // Function to load content into the app container
    function loadContent(content) {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = content;
    }

    // Add horizontal line
    const horizontalLine = document.createElement('div');
    horizontalLine.className = 'horizontal-line'; 
    horizontalLine.style.width = '200%';
    horizontalLine.style.height = '1px';
    horizontalLine.style.backgroundColor = 'rgb(45, 45, 45)';
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
    otherHorizontalLine.style.height = '1px';
    otherHorizontalLine.style.backgroundColor = 'rgb(45, 45, 45)';
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
    blackScreen.style.left = '0%';
    blackScreen.style.width = '200%';
    blackScreen.style.height = '100%';
    blackScreen.style.backgroundColor = '#000';
    blackScreen.style.zIndex = '1000'; // Adjust the z-index as needed

    // Append black screen to the body
    document.body.appendChild(blackScreen);

    // Call the function to add new features
    addNewFeatures();
}, 5500); // Adjust the duration as needed (in milliseconds)
