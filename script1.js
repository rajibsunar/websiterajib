// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Add animation to home content
    const homeContent = document.querySelector(".home-content");
    homeContent.style.transition = "transform 1s ease, opacity 1s ease";
    homeContent.style.transform = "translateY(0)";
    homeContent.style.opacity = "1";

    // Change skill color on hover
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.color = "#007BFF";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.color = "#000";
        });
    });

    // Gallery image layout adjustments (optional: enhance UX)
    const galleryImages = document.querySelectorAll(".gallery-container img");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            window.open(img.src, "_blank");
        });
    });
});document.getElementById("youtubeLink").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("youtubeModal").style.display = "block";
        });

        function closeModal() {
            document.getElementById("youtubeModal").style.display = "none";
        }

        function showCallMessageForm() {
            document.getElementById("callMessageForm").style.display = "block";
        }

        function makeCall() {
            window.location.href = "tel:+9779817156473";
        }

        function sendMessage() {
            window.location.href = "sms:+9779817156473";
        }


        
        
        document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll('.home-content h1, .home-content p, #skills, #gallery, #contact, #skills ul li, .gallery-container img, .contact-form');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Increment view count for a video when clicked
        function incrementViewCount(videoId) {
            let viewCount = localStorage.getItem(videoId) || 0;
            viewCount++;
            localStorage.setItem(videoId, viewCount);

            // Update the view count in the DOM
            document.getElementById(`viewCount-${videoId}`).innerText = `Views: ${viewCount}`;
        }

        // On page load, display the current view counts for all videos
        document.addEventListener("DOMContentLoaded", function () {
            const videos = [
                'XuXC8lI_b80', '8WknkV_jFhs', 'RZIsG7d_ccE', 'b4Dw5C7s6gU', '961mJIpvOeM',
                'TdLTgW9DQMI', 'iXUTz2pGzVw', 'Glh-xe6wMUM', 'Mly2M93kGpk', 'EvXRkrl-ugQ'
            ]; // List of video IDs

            videos.forEach(videoId => {
                let viewCount = localStorage.getItem(videoId) || 0;
                document.getElementById(`viewCount-${videoId}`).innerText = `Views: ${viewCount}`;
            });
        });

       
       // You can use JavaScript for further dynamic functionalities if needed
document.getElementById('education-link').addEventListener('click', function() {
    alert('You are now on the Education page!');
});

document.getElementById('educationLink').addEventListener('click', function() {
    var educationSection = document.getElementById('education');
    // Toggle the visibility of the education section
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
    } else {
        educationSection.style.display = 'none';
    }
});


  