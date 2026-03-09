lucide.createIcons();

gsap.registerPlugin(ScrollTrigger);

const codeSnippets = [
    // JavaScript/TypeScript
    'const app = createAI();',
    'async function build() {',
    'import { Agent } from "jarvis";',
    'for (let i = 0; i < n; i++) {',
    'export default class Bot {',
    'if (coding) coffee++;',
    'while (true) { learn(); }',
    'const jarvis = new AI();',
    'async function think() {',
    'return <Component />;',
    'export const skills = [];',
    'function createMagic() {',
    'await asyncOperation();',
    'const result = await bot.think();',
    'import { Terminal } from "cli";',
    'const [state, setState] = useState();',
    'useEffect(() => { fetchData(); });',
    'const router = useRouter();',
    'export async function GET() {',
    'interface User { name: string; }',
    'type Response = { data: any };',
    'const { data, error } = await supabase',
    'app.use(express.json());',
    'router.get("/api/users", handler);',
    'const payload = jwt.verify(token);',
    'bcrypt.hash(password, 10);',
    'const ws = new WebSocket(url);',
    'localStorage.setItem("key", val);',
    'document.querySelector(".app");',
    'addEventListener("load", init);',
    'git commit -m "ship it"',
    'git push origin main',
    'git merge --no-ff feature',
    'git rebase -i HEAD~3',
    'npm install --save ai',
    'cursorx run script.cursor',
    'yarn add discord.js',
    'pnpm install && pnpm dev',
    'npx prisma migrate dev',
    'docker compose up -d',
    'kubectl apply -f deploy.yaml',
    'terraform apply --auto-approve',
    'import tensorflow as tf',
    'from fastapi import FastAPI',
    'def train_model(data):',
    'class NeuralNetwork:',
    'import torch.nn as nn',
    'app = Flask(__name__)',
    'asyncio.run(main())',
    'print("Hello, World!")',
    'df = pd.read_csv("data.csv")',
    'model.fit(X_train, y_train)',
    'np.array([1, 2, 3])',
    'lambda x: x * 2',
    'fn main() { println!(); }',
    'let mut x = Vec::new();',
    'impl Handler for Server { }',
    'go func() { doWork() }()',
    'package main',
    'func main() { http.ListenAndServe() }',
    'printf("Hello World\\n");',
    'int main(int argc, char *argv[])',
    'malloc(sizeof(Node));',
    'SELECT * FROM ideas;',
    'INSERT INTO users VALUES (1, "AI");',
    'CREATE TABLE projects (id INT);',
    'DROP DATABASE production; -- oops',
    'MONGODB_URI=mongodb://localhost',
    'redis.connect("localhost:6379");',
    'this.velocity += gravity;',
    'scene.add(mesh);',
    'ctx.drawImage(sprite, x, y);',
    'rigidbody.AddForce(dir);',
    'transform.position = newPos;',
    'Vector3.up * jumpForce',
    'player.GetComponent<Animator>();',
    'glBindTexture(GL_TEXTURE_2D, id);',
    'shader.setUniform("time", t);',
    '// TODO: fix this later',
    '// It works, don\'t touch it',
    'console.log("debug");',
    'debugger;',
    'catch (e) { /* ignore */ }',
    'if (bug) { console.log("feature"); }',
    'while (!success) { tryAgain(); }',
    '404: Sleep not found',
    'rm -rf /node_modules',
    'git push --force origin main',
    'sudo rm -rf / (just kidding)',
    'itWorksOnMyMachine = true;',
    'deployToProduction(); // yolo',
    'socket.on("message", handle);',
    'train(model, data);'
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
const terminalTitle = document.querySelector('.terminal-title');
const promptSpans = document.querySelectorAll('.prompt');

// Terminal State
let isRoot = false;
let currentDir = '~';
let commandHistory = [];
let historyIndex = -1;

// Simulated File System
const fileSystem = {
    '~': {
        type: 'dir',
        contents: ['projects', 'skills.txt', 'about.txt', 'contact.txt', 'secret']
    },
    '~/projects': {
        type: 'dir',
        contents: ['jarvis.txt', 'harmony.txt', 'cursorlibs.txt', 'botcreator.txt']
    },
    '~/secret': {
        type: 'dir',
        contents: ['.flag', 'easter_egg.txt']
    },
    '~/skills.txt': {
        type: 'file',
        content: 'Languages: JavaScript, TypeScript, Python, CursorScript\nFrameworks: Discord.js, Node.js, React\nSpecialties: AI/ML, Bot Development, CLI Tools\nDatabases: MongoDB, PostgreSQL, Redis'
    },
    '~/about.txt': {
        type: 'file',
        content: 'Hey! I\'m AI-dude - a developer who loves building random things.\nI make AI bots, CLI tools, and libraries at 3am.\nProfessional Stack Overflow copy-paster.\nCertified "it works on my machine" advocate.'
    },
    '~/contact.txt': {
        type: 'file',
        content: 'GitHub: https://github.com/AI-dude2026\nDiscord: ai_dude_3249\nEmail: not-gonna-share@nice.try'
    },
    '~/projects/jarvis.txt': {
        type: 'file',
        content: '═══════════════════════════════════\n         JARVIS - AI Discord Bot\n═══════════════════════════════════\nStatus: Online 24/7\nFeatures: Music, AI Chat, Image Gen\nWebsite: https://jarvis.is-live.xyz\n"Works 60% of the time, every time"'
    },
    '~/projects/harmony.txt': {
        type: 'file',
        content: '═══════════════════════════════════\n      H.A.R.M.O.N.Y - Music Bot\n═══════════════════════════════════\nStatus: Archived (RIP 😭)\nFeatures: High-quality music, playlists\nNote: Source available on request'
    },
    '~/projects/cursorlibs.txt': {
        type: 'file',
        content: '═══════════════════════════════════\n      CursorScript Libraries\n═══════════════════════════════════\nStatus: Active Development\nRepo: github.com/AI-dude2026/CursorScript\n"If it breaks, you can fix it yourself 😤"'
    },
    '~/projects/botcreator.txt': {
        type: 'file',
        content: '═══════════════════════════════════\n      Discord Bot Creator\n═══════════════════════════════════\nStatus: In Development\nDesc: Custom Discord bots on demand\nComing Soon™'
    },
    '~/secret/.flag': {
        type: 'file',
        content: '🎯 You found the secret directory!\nBut can you find the real easter egg?\nHint: try becoming root...'
    },
    '~/secret/easter_egg.txt': {
        type: 'file',
        content: '🥚🥚🥚 CONGRATULATIONS 🥚🥚🥚\nYou found the easter egg!\nBut wait... there\'s more secrets hidden.\nTry: su -i'
    }
};

// Command Definitions
const commands = {
    help: () => `<span style='color: #61afef;'>Available commands:</span>
  <span style='color: #c678dd;'>help</span>      - Show this message
  <span style='color: #c678dd;'>ls</span>        - List directory contents
  <span style='color: #c678dd;'>cd</span>        - Change directory
  <span style='color: #c678dd;'>pwd</span>       - Print working directory
  <span style='color: #c678dd;'>cat</span>       - Read file contents
  <span style='color: #c678dd;'>echo</span>      - Print text
  <span style='color: #c678dd;'>whoami</span>    - Display current user
  <span style='color: #c678dd;'>date</span>      - Show current date/time
  <span style='color: #c678dd;'>uname</span>     - System information
  <span style='color: #c678dd;'>clear</span>     - Clear terminal
  <span style='color: #c678dd;'>history</span>   - Command history
  <span style='color: #c678dd;'>neofetch</span>  - System info (fancy)
  <span style='color: #c678dd;'>matrix</span>    - Enter the matrix
  <span style='color: #c678dd;'>hack</span>      - ???`,

    ls: (args) => {
        let dir = currentDir;
        if (args && args !== '-la' && args !== '-a' && args !== '-l') {
            dir = resolvePath(args);
        }
        const showHidden = args === '-la' || args === '-a';
        const folder = fileSystem[dir];
        if (!folder || folder.type !== 'dir') {
            return `<span style='color: #e06c75;'>ls: cannot access '${args || dir}': No such file or directory</span>`;
        }
        let items = folder.contents.map(item => {
            const isHidden = item.startsWith('.');
            if (isHidden && !showHidden) return null;
            const fullPath = dir === '/' ? `/${item}` : `${dir}/${item}`;
            const isDir = fileSystem[fullPath]?.type === 'dir';
            const color = isDir ? '#61afef' : (isHidden ? '#5c6370' : '#98c379');
            return `<span style='color: ${color};'>${item}${isDir ? '/' : ''}</span>`;
        }).filter(Boolean);
        return items.join('  ') || '<span style="color: #5c6370;">(empty)</span>';
    },

    cd: (args) => {
        if (!args || args === '~') {
            currentDir = '~';
            updatePrompt();
            return '';
        }
        // Handle ../ with optional trailing slash and multiple levels
        if (args.match(/^(\.\.\/)+$/)) {
            const levels = args.split('/').filter(p => p === '..').length;
            let newDir = currentDir;
            for (let i = 0; i < levels; i++) {
                if (newDir === '~') {
                    return `<span style='color: #e06c75;'>cd: already at root</span>`;
                }
                const parts = newDir.split('/');
                parts.pop();
                newDir = parts.join('/') || '~';
            }
            currentDir = newDir;
            updatePrompt();
            return '';
        }
        // Handle single ..
        if (args === '..') {
            if (currentDir === '~') return `<span style='color: #e06c75;'>cd: already at root</span>`;
            const parts = currentDir.split('/');
            parts.pop();
            currentDir = parts.join('/') || '~';
            updatePrompt();
            return '';
        }
        const newPath = resolvePath(args);
        if (!fileSystem[newPath]) {
            return `<span style='color: #e06c75;'>cd: ${args}: No such file or directory</span>`;
        }
        if (fileSystem[newPath].type !== 'dir') {
            return `<span style='color: #e06c75;'>cd: ${args}: Not a directory</span>`;
        }
        currentDir = newPath;
        updatePrompt();
        return '';
    },

    pwd: () => currentDir.replace('~', '/home/guest'),

    cat: (args) => {
        if (!args) return `<span style='color: #e06c75;'>cat: missing file operand</span>`;
        const path = resolvePath(args);
        const file = fileSystem[path];
        if (!file) return `<span style='color: #e06c75;'>cat: ${args}: No such file or directory</span>`;
        if (file.type !== 'file') return `<span style='color: #e06c75;'>cat: ${args}: Is a directory</span>`;
        return file.content;
    },

    echo: (args) => args ? args : '',

    whoami: () => isRoot ? 'root' : 'guest',

    date: () => new Date().toString(),

    uname: (args) => {
        if (args === '-a') {
            return 'AI-dudeOS 1.0.0 Portfolio x86_64 GNU/Linux (totally real)';
        }
        return 'AI-dudeOS';
    },

    clear: () => 'CLEAR',

    history: () => commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('\n') || '<span style="color: #5c6370;">No commands in history</span>',

    neofetch: () => `<span style='color: #61afef;'>        .--.        </span>  <span style='color: #c678dd;'>${isRoot ? 'root' : 'guest'}</span>@<span style='color: #98c379;'>AI-dude</span>
<span style='color: #61afef;'>       |o_o |       </span>  ─────────────
<span style='color: #61afef;'>       |:_/ |       </span>  <span style='color: #c678dd;'>OS:</span> AI-dudeOS 1.0
<span style='color: #61afef;'>      //   \ \      </span>  <span style='color: #c678dd;'>Host:</span> Portfolio Website
<span style='color: #61afef;'>     (|     | )     </span>  <span style='color: #c678dd;'>Kernel:</span> JavaScript ES6
<span style='color: #61afef;'>'|\_   _/|\`     </span>  <span style='color: #c678dd;'>Uptime:</span> Since you loaded the page
<span style='color: #61afef;'>   \_\_)(_/_/      </span>  <span style='color: #c678dd;'>Shell:</span> WebTerm 1.0
                       <span style='color: #c678dd;'>Terminal:</span> AI-dude Term
                       <span style='color: #c678dd;'>CPU:</span> Your browser's patience
                       <span style='color: #c678dd;'>Memory:</span> ∞ MB

<span style='color: #e5c07b;'>You found the neofetch! Nice.</span>`,

    matrix: () => {
        document.body.style.animation = 'matrixFlash 0.5s';
        setTimeout(() => document.body.style.animation = '', 500);
        return `<span style='color: #00ff00;'>Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

🐇</span>
<span style='color: #5c6370;'>(refresh to escape)</span>`;
    },

    hack: () => {
        const hacks = [
            'Accessing mainframe...',
            'Bypassing firewall...',
            'Decrypting data...',
            'Uploading virus.exe...',
            'JUST KIDDING 😂',
            'This is just a portfolio site!',
            'But nice try, hacker!'
        ];
        return hacks.join('\n');
    },

    // EASTER EGG - su command (not in help!)
    su: (args) => {
        if (args === '-i' || args === '-' || args === '') {
            if (isRoot) {
                return `<span style='color: #e5c07b;'>Already logged in as root!</span>`;
            }
            isRoot = true;
            updatePrompt();
            document.querySelector('.terminal-container').style.boxShadow = '0 0 50px rgba(255, 0, 0, 0.5)';
            return `<pre style='color: #ff0000; margin: 0; font-size: 0.75rem; line-height: 1.2;'>
██████╗ ██╗   ██╗ ██████╗     ██████╗ ██████╗ ███████╗
██╔══██╗██║   ██║██╔════╝    ██╔══██╗██╔══██║██╔════╝
██║  ██║██║   ██║██║         ██║  ██║███████║███████╗
██║  ██║██║   ██║██║         ██║  ██║██╔══██║╚════██║
██████╔╝╚██████╔╝╚██████╗    ██████╔╝██║  ██║███████║
╚═════╝  ╚═════╝  ╚═════╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝</pre>
<span style='color: #ff0000;'>ROOT ACCESS GRANTED</span>
<span style='color: #5c6370;'>Welcome to the dark side. 🖤</span>
<span style='color: #98c379;'>Type 'exit' to return to guest mode.</span>`;
        }
        return `<span style='color: #e06c75;'>su: invalid option '${args}'</span>`;
    },

    exit: () => {
        if (isRoot) {
            isRoot = false;
            updatePrompt();
            document.querySelector('.terminal-container').style.boxShadow = '';
            return `<span style='color: #98c379;'>Logging out of root...
Back to guest mode. 👋</span>`;
        }
        return `<span style='color: #e06c75;'>Not logged in as root.</span>`;
    },

    // Secret root-only command
    rm: (args) => {
        if (!isRoot) return `<span style='color: #e06c75;'>rm: Permission denied. Are you root?</span>`;
        if (args === '-rf /' || args === '-rf /*') {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#ff0000;font-family:monospace;font-size:24px;">💥 SYSTEM DESTROYED 💥<br><span style="font-size:14px;color:#666;">(refresh to recover)</span></div>';
            return '';
        }
        return `<span style='color: #ff0000;'>Nice try! But I'm not letting you delete anything important. 😏</span>`;
    },

    reboot: () => {
        if (!isRoot) return `<span style='color: #e06c75;'>reboot: Permission denied. Are you root?</span>`;
        location.reload();
        return 'Rebooting...';
    }
};

function resolvePath(path) {
    if (path.startsWith('~/')) return path;
    if (path.startsWith('/')) return path;
    if (path === '.') return currentDir;
    return currentDir === '~' ? `~/${path}` : `${currentDir}/${path}`;
}

function updatePrompt() {
    const user = isRoot ? 'root' : 'guest';
    const color = isRoot ? '#ff0000' : '#98c379';
    const promptText = `${user}@AI-dude:${currentDir}$`;

    document.querySelectorAll('.prompt').forEach(el => {
        el.textContent = promptText;
        el.style.color = color;
    });

    if (terminalTitle) {
        terminalTitle.textContent = `${user}@AI-dude: ${currentDir}`;
    }
}

function executeCommand(input) {
    const parts = input.trim().split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    commandHistory.push(input);
    historyIndex = commandHistory.length;

    if (commands[cmd]) {
        const result = commands[cmd](args);
        if (result === 'CLEAR') {
            terminalOutput.innerHTML = `<div class="terminal-line" style="color: #98c379;">Terminal cleared. Type 'help' for commands.</div>`;
            return;
        }
        return result;
    }

    return `<span style="color: #e06c75;">Command not found: ${cmd}</span>\n<span style="color: #5c6370;">Type 'help' for available commands.</span>`;
}

if (cmdInput) {
    cmdInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const val = this.value.trim();
            if (!val) return;

            const promptLine = document.createElement('div');
            promptLine.className = 'terminal-line';
            promptLine.innerHTML = `<span class="prompt" style="color: ${isRoot ? '#ff0000' : '#98c379'}">${isRoot ? 'root' : 'guest'}@AI-dude:${currentDir}$</span> <span style="color: #fff">${this.value}</span>`;
            terminalOutput.appendChild(promptLine);

            const result = executeCommand(val);
            if (result) {
                const responseLine = document.createElement('div');
                responseLine.className = 'terminal-line';
                responseLine.innerHTML = result;
                terminalOutput.appendChild(responseLine);
            }

            this.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }

        // Command history navigation
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                this.value = commandHistory[historyIndex];
            }
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                this.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                this.value = '';
            }
        }
    });
}

if ('ontouchstart' in window) {
    if (cursorGlow) cursorGlow.style.display = 'none';
    if (cursorTrail) cursorTrail.style.display = 'none';
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

setTimeout(() => {
    lucide.createIcons();
}, 100);