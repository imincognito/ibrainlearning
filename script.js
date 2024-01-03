// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    document.getElementById('theme');
    const isDarkMode = body.classList.contains('dark-mode');
    const sections = document.querySelectorAll('section');
    const mobileMenuMode1 = document.querySelector('.mobile-menu');
    var homeBtn = document.getElementById('home');
    var tipsBtn = document.getElementById('tips&tricks');
    var ibrainlearningBtn = document.getElementById('ibrainlearning');
    var privacypolicyBtn = document.getElementById('privacy&policy');
    var contactBtn = document.getElementById('contact');
    var updatenewsBtn = document.getElementById('update&news');
    var feedbackBtn = document.getElementById('feedback');
    // Add vibration
    if ('vibrate' in navigator) {
        navigator.vibrate([50]); // Vibrate for 1 second
    }

    if (isDarkMode) {
        body.classList.remove('dark-mode');

        // Remove dark mode styles from sections
        sections.forEach(section => {
            section.style.backgroundColor = '#ddd';
            section.style.color = '#333';
            section.style.borderBottom = '2px solid #EE0292';
            theme.innerHTML = 'Light';
            mobileMenuMode.style.backgroundColor = '#fff';
            mobileMenuMode.style.color = '#000';
            homeBtn.style.backgroundColor = "#";
            tipsBtn.style.backgroundColor = '#';
            ibrainlearningBtn.style.backgroundColor = '#';
            privacypolicyBtn.style.backgroundColor = '#';
            contactBtn.style.backgroundColor = '#';
            updatenewsBtn.style.backgroundColor = '#';
            feedbackBtn.style.backgroundColor = '#';
            homeBtn.style.color = "#EE0292";
            tipsBtn.style.color = '#EE0292';
            ibrainlearningBtn.style.color = '#EE0292';
            privacypolicyBtn.style.color = '#EE0292';
            contactBtn.style.color = '#EE0292';
            updatenewsBtn.style.color = '#EE0292';
            feedbackBtn.style.color = '#EE0292';
            homeBtn.style.borderBottom = "2px solid #EE0292";
            tipsBtn.style.borderBottom = '2px solid #EE0292';
            ibrainlearningBtn.style.borderBottom = '2px solid #EE0292';
            privacypolicyBtn.style.borderBottom = '2px solid #EE0292';
            contactBtn.style.borderBottom = '2px solid #EE0292';
            updatenewsBtn.style.borderBottom = '2px solid #EE0292';
            feedbackBtn.style.borderBottom = '2px solid #EE0292';

        });
    } else {
        body.classList.add('dark-mode');

        // Add dark mode styles to sections
        sections.forEach(section => {
            section.style.backgroundColor = '#333';
            section.style.color = 'white';
            section.style.borderBottom = '2px solid #00BCF9';
            theme.innerHTML = 'Dark';
            mobileMenuMode.style.backgroundColor = '#121212';
            mobileMenuMode.style.color = '#fff';
            homeBtn.style.backgroundColor = "#";
            tipsBtn.style.backgroundColor = '#';
            ibrainlearningBtn.style.backgroundColor = '#';
            privacypolicyBtn.style.backgroundColor = '#';
            contactBtn.style.backgroundColor = '#';
            updatenewsBtn.style.backgroundColor = '#';
            feedbackBtn.style.backgroundColor = '#';
            homeBtn.style.color = "#00BCF9";
            tipsBtn.style.color = '#00BCF9';
            ibrainlearningBtn.style.color = '#00BCF9';
            privacypolicyBtn.style.color = '#00BCF9';
            contactBtn.style.color = '#00BCF9';
            updatenewsBtn.style.color = '#00BCF9';
            feedbackBtn.style.color = '#00BCF9';
            homeBtn.style.borderBottom = " 2px solid #00BCF9";
            tipsBtn.style.borderBottom = ' 2px solid #00BCF9';
            ibrainlearningBtn.style.borderBottom = '2px solid #00BCF9';
            privacypolicyBtn.style.borderBottom = '2px solid #00BCF9';
            contactBtn.style.borderBottom = '2px solid #00BCF9';
            updatenewsBtn.style.borderBottom = '2px solid #00BCF9';
            feedbackBtn.style.borderBottom = '2px solid #00BCF9';

        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    var mobileMenu = document.querySelector(".mobile-menu");
    var overlay = document.querySelector(".overlay");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        mobileMenu.classList.toggle("open");
        overlay.classList.toggle("overlay-active", mobileMenu.classList.contains("open"));
    });
    // Function to open the mobile menu
    function openMobileMenu() {
        var hamburger = document.querySelector(".hamburger");
        var mobileMenu = document.querySelector(".mobile-menu");
        var overlay = document.querySelector(".overlay");

        hamburger.classList.add("is-active");
        mobileMenu.classList.add("open");
        overlay.classList.add("overlay-active");
    }

    // Example of usage
    // You can call this function when you want to open the mobile menu, for instance, in response to a user action or specific event.
    // openMobileMenu();


    const sections = document.querySelectorAll('section');

    // Function to show/hide sections based on scroll position
    function handleScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight / 1.3 && sectionTop > 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Invoke the scroll event logic once on page load
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener('scroll',
        handleScroll);

    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const content = this.previousElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null: content.scrollHeight + "px";
        });
    });

    document.getElementById("hamburger-1").addEventListener("click",
        function() {
            // Check if the Vibration API is supported
            if ("vibrate" in navigator) {
                // Vibrate for a short duration
                navigator.vibrate(100); // Adjust the duration as needed
            }

            // Your menu click handling code here
        });
});

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var slideIndex = 1;
showSlides(slideIndex);

// Function to advance the slider automatically
function autoSlide() {
    plusSlides(1); // Advance to the next slide
}

// Set the interval for automatic sliding (e.g., every 3 seconds)
var slideInterval = setInterval(autoSlide, 3000); // 3000 milliseconds (3 seconds)

// Pause the automatic sliding when the user hovers over the slider (optional)
var slider = document.getElementById("yourSliderId"); // Replace with your slider's ID
slider.addEventListener("mouseenter", function() {
    clearInterval(slideInterval); // Pause the automatic sliding
});

// Resume automatic sliding when the user leaves the slider (optional)
slider.addEventListener("mouseleave", function() {
    slideInterval = setInterval(autoSlide, 3000); // Resume automatic sliding
});