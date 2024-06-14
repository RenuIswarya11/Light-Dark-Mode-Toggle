document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    // Function to update button text based on current mode
    const updateButtonText = () => {
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Toggle Light Mode';
        } else {
            toggleButton.textContent = 'Toggle Dark Mode';
        }
    };

    // Check if there's a saved mode in localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    // Set the initial button text
    updateButtonText();

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('mode', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark-mode');
        }
        // Update the button text after toggling the mode
        updateButtonText();
    });
});
