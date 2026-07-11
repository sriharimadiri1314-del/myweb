// ==============================
// AOS ANIMATION
// ==============================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
// ==============================
// TOAST NOTIFICATION SYSTEM
// ==============================
const toastContainer = document.createElement("div");
toastContainer.id = "toast-container";
toastContainer.className = "toast-container";
document.body.appendChild(toastContainer);

function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "✅" : "❌";
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;
    toastContainer.appendChild(toast);
    
    // Force reflow
    toast.offsetHeight;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
        toast.addEventListener("transitionend", () => {
            toast.remove();
        });
    }, 4000);
}

// EmailJS configuration and initialization
const EMAILJS_PUBLIC_KEY = "SxwrU-bxla0acLvhe";
const EMAILJS_SERVICE_ID = "service_k6oz9cu";
const EMAILJS_TEMPLATE_ID = "template_yylumol";

// Initialize EmailJS with v4 options object
emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});

const contactForm = document.querySelector("form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.textContent : "Send Message";
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
        }
        const nameVal = contactForm.querySelector('input[type="text"]').value;
        const emailVal = contactForm.querySelector('input[type="email"]').value;
        const messageVal = contactForm.querySelector('textarea').value;
        console.log("Attempting to send email via EmailJS with:", {
            publicKey: EMAILJS_PUBLIC_KEY,
            serviceId: EMAILJS_SERVICE_ID,
            templateId: EMAILJS_TEMPLATE_ID
        });
        
        // Live EmailJS send
        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                name: nameVal,
                from_name: nameVal,   // Compatibility for default templates
                email: emailVal,
                reply_to: emailVal,   // Compatibility for default templates
                message: messageVal
            },
            {
                publicKey: EMAILJS_PUBLIC_KEY
            }
        )
            .then(() => {
                showToast("Message Sent Successfully!", "success");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error Details:", error);
                showToast("Failed to send message: " + (error.text || error.message || "Please check your network."), "error");
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            });
    });
}
// ==============================
// TYPING EFFECT
// ==============================
const typingElement = document.querySelector(".typing-text");
const roles = [
    "Frontend Developer",
    "Web Designer",
    "Problem Solver",
    "Tech Enthusiast"
];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
function typeEffect() {
    const currentRole = roles[roleIndex];
    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 120
    );
}
typeEffect();

// ==============================
// PARTICLES JS
// ==============================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#d4af37"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#d4af37",
            opacity: 0.2,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false
        }
    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            }
        },

        modes: {

            repulse: {
                distance: 100
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollPercent =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = scrollPercent + "%";

});
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.querySelector(".loader");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            document.body.classList.remove("loading");
            showToast("Welcome to my portfolio!", "success");
        }, 500);
    }, 1000);
});


// ==============================
// STAT COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

function startCounters() {

    if (started) return;

    const trigger =
        document.querySelector(".stats-grid");

    if (!trigger) return;

    const top =
        trigger.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const text =
                counter.innerText.replace("+", "")
                    .replace("%", "");

            const target =
                parseInt(text);

            let count = 0;

            const speed =
                target / 60;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    if (
                        counter.innerText.includes("%")
                    ) {

                        counter.innerText =
                            Math.floor(count) + "%";

                    } else {

                        counter.innerText =
                            Math.floor(count) + "+";
                    }

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    if (
                        counter.innerText.includes("%")
                    ) {

                        counter.innerText =
                            target + "%";

                    } else {

                        counter.innerText =
                            target + "+";
                    }
                }
            };

            updateCounter();
        });
    }
}

window.addEventListener(
    "scroll",
    startCounters
);


// ==============================
// SMOOTH ACTIVE LINK
// ==============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }
    });
});


// ==============================
// PROJECT CARD HOVER EFFECT
// ==============================

const cards =
    document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / 20) * -1;
        const rotateY = ((x - centerX) / 20);

        card.style.transition = "none";
        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transition = "transform 0.4s ease";
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
});


// ==============================
// FADE IN PAGE
// ==============================

// ==============================
// GITHUB REPOSITORIES FETCH
// ==============================

const GITHUB_USERNAME = "sriharimadiri1314-del";
const repoContainer = document.getElementById("repo-container");

async function fetchGitHubRepos() {
    if (!repoContainer) return;
    
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }
        
        const repos = await response.json();
        repoContainer.innerHTML = "";
        
        if (repos.length === 0) {
            repoContainer.innerHTML = `
                <div class="no-repos" data-aos="fade-up">
                    <p style="margin-bottom: 20px;">No public repositories are currently available on this account.</p>
                    <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" class="btn-primary" style="display: inline-block; padding: 15px 35px;">
                        Visit GitHub Profile
                    </a>
                </div>
            `;
            return;
        }
        
        repos.forEach((repo, index) => {
            const delay = (index + 1) * 100;
            const repoCard = document.createElement("div");
            repoCard.classList.add("repo-card");
            repoCard.setAttribute("data-aos", "fade-up");
            repoCard.setAttribute("data-aos-delay", delay);
            
            repoCard.innerHTML = `
                <div>
                    <div class="repo-header">
                        <span class="repo-icon">📁</span>
                        <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
                    </div>
                    <p class="repo-desc">${repo.description || "No description provided."}</p>
                </div>
                <div class="repo-stats">
                    <span class="repo-lang">${repo.language || "HTML"}</span>
                    <span class="repo-stars">⭐ ${repo.stargazers_count}</span>
                </div>
            `;
            repoContainer.appendChild(repoCard);
        });
        
        // Re-initialize AOS if it's already loaded to pick up dynamic elements
        if (window.AOS) {
            AOS.refresh();
        }
        
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        repoContainer.innerHTML = "<p class='repo-error'>Could not load repositories. Please try again later.</p>";
    }
}

fetchGitHubRepos();
