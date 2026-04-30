/**
 * LiveFeed Controller
 * Handles the floating terminal dashboard and technical log streaming.
 */
class LiveFeed {
    constructor() {
        this.container = document.getElementById('terminalDashboard');
        this.body = document.getElementById('terminalBody');
        this.isVisible = false;
        this.maxLogs = 50;

        this.init();
    }

    init() {
        // Show terminal after a delay
        setTimeout(() => this.show(), 2000);

        // Listen for scroll to trigger visibility
        window.addEventListener('scroll', () => {
            if (!this.isVisible && window.scrollY > 300) {
                this.show();
            }
        });

        // Initial system logs
        this.log('BOOT', 'Kernel v1.0.4-LTS initialized');
        this.log('NET', 'Establishing encrypted websocket handshake...');
        setTimeout(() => this.log('NET', 'Connection established. Mirroring production metrics.'), 1000);
    }

    show() {
        this.isVisible = true;
        this.container.classList.add('visible');
    }

    hide() {
        this.isVisible = false;
        this.container.classList.remove('visible');
    }

    /**
     * Log a message to the terminal
     * @param {string} type - LOG, INFO, WARN, ERROR, NET, SYSTEM
     * @param {string} message - The message content
     */
    log(type, message) {
        const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
        const entry = document.createElement('div');
        entry.className = `log-entry ${type.toLowerCase()}`;
        entry.innerHTML = `<span class="time">[${time}]</span> ${type}: ${message}`;

        this.body.appendChild(entry);

        // Auto-scroll to bottom
        this.body.scrollTop = this.body.scrollHeight;

        // Visual feedback on the terminal container
        this.container.classList.add('active');
        setTimeout(() => this.container.classList.remove('active'), 200);

        // Cleanup old logs
        if (this.body.children.length > this.maxLogs) {
            this.body.removeChild(this.body.children[0]);
        }
    }
}

// Initialize on window load
window.LiveSystem = new LiveFeed();
