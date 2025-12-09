document.addEventListener('DOMContentLoaded', () => {
    // Video list (hardcoded for now; replace with actual video filenames when uploading them)
    const videoFiles = [
        "video1.mp4",
        "video2.mp4",
        "sneak_peek_build.mp4",
        "funny_moments.mp4"
    ];

    const videoListContainer = document.getElementById('video-list-container');

    // Loop through each video file and create a list item
    videoFiles.forEach((file) => {
        const videoName = file.replace('.mp4', '').replace(/_/g, ' ').toUpperCase(); // Format the title

        // Create a new div for each video
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        // Create the HTML content for the video item
        videoItem.innerHTML = `
            <a href="video.html?video=${file.replace('.mp4', '')}">
                <img src="images/${file.replace('.mp4', '')}_thumbnail.jpg" alt="${videoName} Thumbnail" class="thumbnail">
                <p>${videoName}</p>
            </a>
        `;

        // Append to the video list container
        videoListContainer.appendChild(videoItem);
    });
});
