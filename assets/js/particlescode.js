
particlesJS("particles-js", {
    particles: {
        number: {
            value: 150, // Number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff" // White particles to represent stars
        },
        shape: {
            type: "circle", // Circular particles
            stroke: {
                width: 0,
                color: "#000000"
            },
        },
        opacity: {
            value: 0.7, // Base opacity for brightness
            random: true, // Random opacity for blinking effect
            anim: {
                enable: false,
            }
        },
        size: {
            value: 3, // Size of particles
            random: true,
            anim: {
                enable: false,
            }
        },
        line_linked: {
            enable: false, // Disable connecting lines
        },
        move: {
            enable: true,
            speed: 5, // Slower speed for a more realistic flying effect
            direction: "top-right", // Particle movement direction
            random: true, // Random movement for a more dynamic effect
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false, // Disable hover effect
            },
            onclick: {
                enable: false, // Disable click effect
            },
            resize: true
        }
    },
    retina_detect: true
});