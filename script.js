lucide.createIcons();

gsap.registerPlugin(ScrollTrigger);

const codeSnippets = [
    'const app = createAI();',
    'async function build() {',
    'import { Agent } from "jarvis";',
    'git commit -m "ship it"',
    'for (let i = 0; i < n; i++) {',
    'export default class Bot {',
    'cursorx run script.cursor',
    'npm install --save ai',
    'if (coding) coffee++;',
    'while (true) { learn(); }',
    'const jarvis = new AI();',
    'async function think() {',
    'return <Component />;',
    'SELECT * FROM ideas;',
    'docker compose up -d',
    'this.velocity += gravity;',
    'scene.add(mesh);',
    'socket.on("message", handle);',
    'export const skills = [];',
    'function createMagic() {',
    'await asyncOperation();',
    'class NeuralNetwork {',
    'train(model, data);',
    'const result = await bot.think();',
    'import { Terminal } from "cli";'
];

function createFloatingCode() {
    const container = document.getElementById('floating-code');
    const snippetCount = Math.floor(window.innerWidth / 150);

    for (let i = 0; i < snippetCount; i++) {
        setTimeout(() => {
            createCodeElement(container);
        }, i * 500);
    }
}

function createCodeElement(container) {
    const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    const element = document.createElement('div');
    element.className = 'code-snippet';
    element.textContent = snippet;

    const colors = ['#00ffff', '#ff00ff', '#9d00ff', '#ff8000', '#00ff88'];
    element.style.color = colors[Math.floor(Math.random() * colors.length)];
    element.style.left = Math.random() * 100 + '%';
    element.style.fontSize = (Math.random() * 6 + 10) + 'px';
    element.style.animationDuration = (Math.random() * 20 + 20) + 's';
    element.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(element);

    element.addEventListener('animationend', () => {
        element.remove();
        createCodeElement(container);
    });
}

createFloatingCode();

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const particles = [];
let mouseX = -1000;
let mouseY = -1000;
const colors = ['#00ffff', '#ff00ff', '#9d00ff', '#ff8000', '#00ff88'];

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.density = Math.random() * 30 + 10;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.3;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    update() {
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = 150;

        if (distance < maxDistance) {
            let force = (maxDistance - distance) / maxDistance;
            let directionX = (dx / distance) * force * (this.density / 10);
            let directionY = (dy / distance) * force * (this.density / 10);
            this.x -= directionX;
            this.y -= directionY;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.draw();
    }
}

function initParticles() {
    particles.length = 0;
    let particleCount = Math.min((width * height) / 12000, 150);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let maxDistance = 120;

            if (distance < maxDistance) {
                let opacity = 1 - (distance / maxDistance);
                ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.15})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    connectParticles();
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
});

const cursorGlow = document.querySelector('.cursor-glow');
const cursorTrail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorGlow) {
        gsap.to(cursorGlow, {
            x: mouseX,
            y: mouseY,
            duration: 0.5,
            ease: "power2.out"
        });
    }

    if (cursorTrail) {
        gsap.to(cursorTrail, {
            x: mouseX,
            y: mouseY,
            duration: 0.15,
            ease: "power2.out"
        });
    }
});

const interactiveElements = document.querySelectorAll('a, button, .project-card, .tag, .skill-item, .social-link, .stat-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursorTrail) {
            gsap.to(cursorTrail, {
                scale: 2,
                backgroundColor: '#ff00ff',
                boxShadow: '0 0 30px #ff00ff, 0 0 60px #ff00ff',
                duration: 0.3
            });
        }
    });
    el.addEventListener('mouseleave', () => {
        if (cursorTrail) {
            gsap.to(cursorTrail, {
                scale: 1,
                backgroundColor: '#00ffff',
                boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff',
                duration: 0.3
            });
        }
    });
});

const magneticElements = document.querySelectorAll('.magnetic');
magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    el.addEventListener('mouseleave', () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)"
        });
    });
});

const cards = document.querySelectorAll('[data-tilt]');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: "power2.out"
        });

        const cardGlow = card.querySelector('.card-glow');
        if (cardGlow) {
            cardGlow.style.setProperty('--mouse-x', (x / rect.width * 100) + '%');
            cardGlow.style.setProperty('--mouse-y', (y / rect.height * 100) + '%');
        }
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

const typingText = document.getElementById('typing-text');
const textToType = "Professional yapper, part-time coder. I build stuff, break stuff, then act like I meant to do that.";
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 30 + Math.random() * 30);
    }
}

setTimeout(typeText, 2000);

function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                let current = 0;
                const increment = target / 50;
                const duration = 2000;
                const stepTime = duration / 50;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, stepTime);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => observer.observe(num));
}

animateCounters();

gsap.from(".pfp-container", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power4.out"
});

gsap.from(".glitch-text", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.3,
    stagger: 0.2,
    ease: "power4.out"
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const cmdInput = document.getElementById('cmd-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalBody = document.getElementById('terminal-body');

const commands = {
    help: `<span style='color: #61afef;'>Available commands:</span>
  <span style='color: #c678dd;'>help</span>     - Show this message
  <span style='color: #c678dd;'>about</span>    - Learn more about me
  <span style='color: #c678dd;'>skills</span>   - View my tech stack
  <span style='color: #c678dd;'>projects</span> - View my projects
  <span style='color: #c678dd;'>social</span>   - Get social links
  <span style='color: #c678dd;'>clear</span>    - Clear terminal`,

    about: `<span style='color: #98c379;'>┌──────────────────────────────────┐</span>
<span style='color: #98c379;'>│</span>  I'm AI-dude, a developer who  <span style='color: #98c379;'>│</span>
<span style='color: #98c379;'>│</span>  loves building random things!  <span style='color: #98c379;'>│</span>
<span style='color: #98c379;'>│</span>  AI bots, CLI tools, libraries  <span style='color: #98c379;'>│</span>
<span style='color: #98c379;'>└──────────────────────────────────┘</span>`,

    skills: `<span style='color: #e5c07b;'>Languages:</span>  JavaScript, TypeScript, Python
<span style='color: #e5c07b;'>Specialties:</span> AI/ML, Bot Development, CLI Tools
<span style='color: #e5c07b;'>Frameworks:</span> Discord.js, Node.js, CursorScript`,

    projects: `<span style='color: #c678dd;'>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
<span style='color: #61afef;'>🤖 Jarvis</span>      - AI Discord Bot (Online)
<span style='color: #61afef;'>🎮 Bot Creator</span> - Custom Discord Bots
<span style='color: #61afef;'>📦 CS Libs</span>     - CursorScript Libraries
<span style='color: #61afef;'>🎵 HARMONY</span>     - Music Bot (Archived)
<span style='color: #c678dd;'>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>`,

    social: `<span style='color: #98c379;'>GitHub:</span>   https://github.com/AI-dude2026
<span style='color: #98c379;'>Discord:</span>  ai_dude_3249`,

    clear: ''
};

if (cmdInput) {
    cmdInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const val = this.value.trim().toLowerCase();
            if (!val) return;

            const promptLine = document.createElement('div');
            promptLine.className = 'terminal-line';
            promptLine.innerHTML = `<span class="prompt">guest@AI-dude:~$</span> <span style="color: #fff">${this.value}</span>`;
            terminalOutput.appendChild(promptLine);

            if (val === 'clear') {
                terminalOutput.innerHTML = `<div class="terminal-line" style="color: #98c379;">Terminal cleared. Type 'help' for commands.</div>`;
            } else {
                const responseLine = document.createElement('div');
                responseLine.className = 'terminal-line';
                if (commands[val]) {
                    responseLine.innerHTML = commands[val];
                } else {
                    responseLine.innerHTML = `<span style="color: #e06c75;">Command not found: ${val}</span>
<span style="color: #5c6370;">Type 'help' for available commands.</span>`;
                }
                terminalOutput.appendChild(responseLine);
            }

            this.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
}

if ('ontouchstart' in window) {
    if (cursorGlow) cursorGlow.style.display = 'none';
    if (cursorTrail) cursorTrail.style.display = 'none';
}

setTimeout(() => {
    lucide.createIcons();
}, 100);