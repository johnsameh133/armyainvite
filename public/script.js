document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
    const openingScreen = document.getElementById('opening-screen');
    const mainContent = document.getElementById('main-content');
    const cardWrapper = document.querySelector('.card-wrapper');

    openBtn.addEventListener('click', () => {
        // 1. Trigger Animation on Cover
        cardWrapper.style.transform = "scale(1.5) ";
        cardWrapper.style.opacity = "0";
        document.querySelector('.instruction-text').style.opacity = "0";

        // 2. Wait and then switch screens
        setTimeout(() => {
            openingScreen.classList.add('hidden');
            openingScreen.style.display = 'none'; // Ensure it's gone

            mainContent.classList.remove('hidden');
            mainContent.style.display = 'flex'; // Restore flex display

            // Allow reflow for animation to trigger if needed, though CSS animation on display block usually handles itself or needs requestAnimationFrame.
            // But here the elements have animation classes with 'forwards' so they will run once they appear.

        }, 600); // Matches the transition time roughly
    });
});
