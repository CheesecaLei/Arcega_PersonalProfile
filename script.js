const colors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB', '#FF91A4', '#DA70D6', '#BA55D3', '#9370DB', '#8B008B', '#FF00FF'];
let currentColorIndex = 0;

// Welcome button (alert message)
function showWelcome() {
    const welcomeMessages = [
        "🎀 Hello! Welcome to my digital world!",
        "✨ Hi there! Let's create something magical together!",
        "🌸 Welcome! Time to spread some love!",
        "🎈 Hello! Let's make this day extra special!"
    ];
    
    const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    alert(randomMessage);
    
    // Profile animation
    const profilePic = document.getElementById('profilePic');
    
    if (profilePic) {
        profilePic.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            profilePic.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    }
}

// Change color button
function changeBioColor() {
    const bioText = document.getElementById('bioText');
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    bioText.style.color = colors[currentColorIndex];

    bioText.style.transform = 'scale(1.02)';
    setTimeout(() => {
        bioText.style.transform = 'scale(1)';
    }, 200);
}

// Make it magical button
function makeItRain() {
    // Emoji elements
    const emojiElements = ['🎀', '💖', '🌸', '🎈', '✨', '🌙', '⭐', '🦄', '🍓', '🎵', '🎶', '💕', '💝', '🌺', '🎪', '🎭', '🎨', '🍰', '🧸', '🎡'];
    const numElements = 50;

    // Make it magical - magical emoji elements
    for (let i = 0; i < numElements; i++) {
        setTimeout(() => {
            createMagicalElement(helloKittyElements);
        }, i * 150);
    }
}

function createMagicalElement(helloKittyElements) {
    const element = document.createElement('div');
    element.className = 'heart';
    element.textContent = helloKittyElements[Math.floor(Math.random() * helloKittyElements.length)];
    
    element.style.left = Math.random() * 100 + 'vw';
    
    // Random animation duration (2-5 seconds)
    const duration = Math.random() * 3 + 2;
    element.style.animationDuration = duration + 's';
    
    const size = Math.random() * 25 + 20;
    element.style.fontSize = size + 'px';
    
    document.body.appendChild(element);

    // Remove element after animation
    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }, duration * 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    // hover effects (Skills)
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%)';
            this.style.color = 'white';
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            if (icon) icon.style.color = 'white';
            if (text) text.style.color = 'white';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #FFF0F5 0%, #FFE4E1 100%)';
            this.style.color = '#2d3436';
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            if (icon) icon.style.color = '#FF1493';
            if (text) text.style.color = '#2d3436';
        });
    });
    
    // Loading animation
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.8s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Hellow Kitty Click Interaction
    const dancingKitty = document.getElementById('dancingKitty');
    
    if (dancingKitty) {
        // Add click interaction for excitement animation
        dancingKitty.addEventListener('click', function() {
            this.style.animation = 'kittyExcited 0.5s ease-in-out 3';
            
            setTimeout(() => {
                this.style.animation = 'none';
            }, 1500);
        });
    }
});

// Random Thoughts Bubble - kita ko sa tiktok HAHAHA angas
function showKittyThought() {
    const thoughts = [
        "💭 Hello Kitty says: 'Friendship is the most precious thing!'",
        "💭 Kitty believes: 'Every day is a gift, that's why it's called the present!'",
        "💭 Hello Kitty thinks: 'A smile is the best accessory you can wear!'",
        "💭 Kitty wisdom: 'Dreams come true when you believe in yourself!'"
    ];
    
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    
    // Floating Thought Bubble
    const thoughtBubble = document.createElement('div');
    thoughtBubble.style.position = 'fixed';
    thoughtBubble.style.top = '20px';
    thoughtBubble.style.right = '20px';
    thoughtBubble.style.background = 'rgba(255, 255, 255, 0.95)';
    thoughtBubble.style.padding = '15px 20px';
    thoughtBubble.style.borderRadius = '15px';
    thoughtBubble.style.border = '2px solid #FFB6C1';
    thoughtBubble.style.boxShadow = '0 5px 15px rgba(255, 20, 147, 0.2)';
    thoughtBubble.style.maxWidth = '300px';
    thoughtBubble.style.fontSize = '0.9rem';
    thoughtBubble.style.zIndex = '1001';
    thoughtBubble.style.opacity = '0';
    thoughtBubble.style.transform = 'translateY(-20px)';
    thoughtBubble.style.transition = 'all 0.3s ease';
    thoughtBubble.textContent = randomThought;
    
    document.body.appendChild(thoughtBubble);
    
    // Animate in
    setTimeout(() => {
        thoughtBubble.style.opacity = '1';
        thoughtBubble.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        thoughtBubble.style.opacity = '0';
        thoughtBubble.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (thoughtBubble.parentNode) {
                thoughtBubble.parentNode.removeChild(thoughtBubble);
            }
        }, 300);
    }, 4000);
}

// Random Thoughts Every 30-60 Seconds
setInterval(() => {
    if (Math.random() > 0.7) {
        showKittyThought();
    }
}, 30000);

window.addEventListener('load', updateGreeting);