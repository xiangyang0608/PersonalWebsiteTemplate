function showContent(section) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach((content) => {
        content.style.display = 'none';
    });

    // Unhighlight all buttons
    document.querySelectorAll('.btn').forEach((btn) => {
        btn.classList.remove('active');
    });

    // Show the content of the clicked section
    document.querySelector(`.right_present_${section}`).style.display = 'block';

    // Highlight the clicked button
    document.querySelector(`.btn.${section}`).classList.add('active');
}

// Initialize with 'Professional' content displayed
// showContent('professional');

