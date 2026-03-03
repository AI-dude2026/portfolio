lucide.createIcons();

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero .pfp-container", {
    duration: 1.5,
    y: 30,
    opacity: 0,
    ease: "power4.out"
});

gsap.from(".hero h1", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: "power4.out"
});

gsap.from(".hero p", {
    duration: 1.5,
    y: 30,
    opacity: 0,
    delay: 0.5,
    ease: "power4.out"
});

gsap.from(".hero .btn", {
    duration: 1.5,
    y: 20,
    opacity: 0,
    delay: 0.8,
    ease: "power4.out"
});

gsap.to(".project-card", {
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
        once: true
    },
    duration: 1,
    y: 0,
    opacity: 1,
    stagger: 0.15,
    ease: "power3.out"
});

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const colors = ['#00ffff', '#ff00ff', '#9d00ff', '#ff8000', '#ffff00'];
const particles = [];
let mouseX = -1000;
let mouseY = -1000;

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1.5;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.density = Math.random() * 30 + 10;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = 150;

        if (distance < maxDistance) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * (this.density / 4);
            let directionY = forceDirectionY * force * (this.density / 4);
            this.x -= directionX;
            this.y -= directionY;
        }
        this.draw();
    }
}

function init() {
    particles.length = 0;
    let particleCount = (width * height) / 10000;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    init();
});

init();
animate();

const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursor) {
        gsap.to(cursor, {
            x: mouseX,
            y: mouseY,
            duration: 0.1,
            ease: "power2.out"
        });
    }
});

const interactiveElements = document.querySelectorAll('a, button, .project-card, .btn');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor) {
            gsap.to(cursor, { scale: 1.5, opacity: 0.8, duration: 0.2 });
        }
    });
    el.addEventListener('mouseleave', () => {
        if (cursor) {
            gsap.to(cursor, { scale: 1, opacity: 0.6, duration: 0.2 });
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const cmdInput = document.getElementById('cmd-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalBody = document.getElementById('terminal-body');

const commands = {
    help: "<span style='color: #61afef;'>Available commands:</span>\n  <span style='color: #c678dd;'>help</span>    - Show this message\n  <span style='color: #c678dd;'>about</span>   - Learn more about me\n  <span style='color: #c678dd;'>skills</span>  - View my tech stack\n  <span style='color: #c678dd;'>clear</span>   - Clear terminal",
    about: "I make and develop Agentic AI, CLI tools, and CursorScript libraries. Always building random things, one function at a time.",
    skills: "<span style='color: #98c379;'>Languages:</span> JavaScript, TypeScript, Python, HTML/CSS\n<span style='color: #98c379;'>Specialties:</span> AI integration, Automation, Bot Development",
    clear: ""
};

if (cmdInput) {
    cmdInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const val = this.value.trim().toLowerCase();
            if (!val) return;

            const promptLine = document.createElement('div');
            promptLine.className = 'terminal-line';
            promptLine.innerHTML = `<span class="prompt">guest@AI-dude:~$</span> ${this.value}`;
            terminalOutput.appendChild(promptLine);

            if (val === 'clear') {
                terminalOutput.innerHTML = '';
            } else {
                const responseLine = document.createElement('div');
                responseLine.className = 'terminal-line';
                if (commands[val]) {
                    responseLine.innerHTML = commands[val];
                } else {
                    responseLine.innerHTML = `<span style="color: #e06c75;">Command not found: ${val}. Type 'help' for a list of commands.</span>`;
                }
                terminalOutput.appendChild(responseLine);
            }

            this.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
}
