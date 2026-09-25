/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
};

// Sample content data - replace with real content later
const RAW_CONTENT_DATA = [
    // ============ YouTube Videos ============
    {
        id: 'yt-001',
        platform: 'youtube',
        title: 'DuckyScript Auto-Documenter',
        description: 'Web application designed to bridge the gap between technical script execution and corporate compliance reporting.',
        thumbnail: null,
        url: 'https://github.com/Sunil56224972/DuckyScript-Auto-Documenter',
        date: '2026-05-01',
        views: '1.5K',
        duration: '12:05',
    },
    {
        id: 'yt-002',
        platform: 'youtube',
        title: 'Raspberry Pi Pico Rubber Ducky',
        description: 'Cheap but deadly — Raspberry Pi Pico as a USB Rubber Ducky with DuckyScript payloads and stealth USB mode.',
        thumbnail: null,
        url: 'https://github.com/Sunil56224972/pico-rubber-ducky',
        date: '2026-04-15',
        views: '3.2K',
        duration: '8:30',
    },
    {
        id: 'yt-003',
        platform: 'youtube',
        title: 'IoT Face Recognition Attendance',
        description: 'Real-time face recognition attendance system using ESP32-CAM + OpenCV. Detects faces over WiFi and logs to CSV automatically.',
        thumbnail: null,
        url: 'https://github.com/Sunil56224972/-Face-Recognition-based-Smart-Attendance-System-using-IoT.Sunil',
        date: '2026-03-20',
        views: '2.8K',
        duration: '15:45',
    },

    // ============ Blog Posts ============
    {
        id: 'blog-001',
        platform: 'blog',
        title: 'WiFi Blaster: Network Destroyer',
        description: 'Auto-detects all connected devices & kicks them all off using Scapy deauth attack. Runs until you stop it.',
        thumbnail: null,
        url: 'https://github.com/Sunil56224972/wifi-blaster',
        date: '2026-02-10',
        readTime: '5 min',
    },
    {
        id: 'blog-002',
        platform: 'blog',
        title: 'ESP8266 Fake WiFi Captive Portal',
        description: 'ESP8266 WiFi captive portal with DNS spoofing — creates a fake login page to capture credentials over a rogue access point.',
        thumbnail: null,
        url: 'https://github.com/Sunil56224972/ESP8266_WiFi_Captive_Portal_2.1',
        date: '2026-01-25',
        readTime: '8 min',
    },
    {
        id: 'blog-003',
        platform: 'blog',
        title: 'DDOS Traffic Simulator',
        description: 'Python-based UDP traffic simulator built for educational network testing, demonstrating socket programming and packet generation.',
        thumbnail: null,
        url: 'https://github.com/Sunil56224972/DDOS-By-Sunil',
        date: '2025-12-12',
        readTime: '6 min',
    },

    // ============ TikToks ============
    {
        id: 'tt-001',
        platform: 'tiktok',
        title: 'SystemReaper Demo',
        description: 'Tiny but powerful programs that overwhelm computers by CPU overload and RAM exhaustion. Cute… but deadly.',
        thumbnail: null,
        url: 'https://github.com/Sunil56224972/SystemReaper',
        date: '2025-11-05',
        views: '15.2K',
        likes: '1.2K',
    },
    {
        id: 'tt-002',
        platform: 'tiktok',
        title: 'Credential Stealer Python Spyware',
        description: 'Captures keystrokes, mouse inputs, screenshots & microphone audio — exfiltrates via email with self-delete on discovery.',
        thumbnail: null,
        url: 'https://github.com/Sunil56224972/Cridential-Stealer',
        date: '2025-10-20',
        views: '22.1K',
        likes: '3.4K',
    },
];

// Front textures without people (same device frames, empty screens)
const ytTextures = ['/textures/studio/tv_front.webp'];
const ytPaintedTextures = ['/textures/studio/tv_front_painted.webp'];
const blogTextures = ['/textures/studio/monitor_front.webp'];
const blogPaintedTextures = ['/textures/studio/monitor_front_painted.webp'];
const ttTextures = ['/textures/studio/phone_front.webp'];
const ttPaintedTextures = ['/textures/studio/phone_front_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = [];

// Repeat the 8 items 4 times to fill the tower with 32 monitors, making it dense
for (let i = 0; i < 4; i++) {
    RAW_CONTENT_DATA.forEach((item) => {
        CONTENT_DATA.push({
            ...item,
            id: `${item.id}-${i}`, // Ensure unique IDs
            frontTexture: item.frontTexture || (
                item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                    item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                        ttTextures[ttIdx++ % ttTextures.length]
            ),
            paintedFrontTexture: item.paintedFrontTexture || (
                item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                    item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                        ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
            )
        });
    });
}

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
