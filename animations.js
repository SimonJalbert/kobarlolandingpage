// Heart animation
const heartAnimation = anime({
    targets: '.heart-animation',
    scale: [0.8, 1],
    opacity: [0, 1],
    rotate: ['-15deg', '0deg'],
    duration: 1000,
    easing: 'spring(1, 80, 10, 0)',
    delay: 300
});

// Floating animation for the heart
anime({
    targets: '.heart-animation',
    translateY: [-5, 5],
    direction: 'alternate',
    loop: true,
    duration: 1500,
    easing: 'easeInOutSine'
});

// Staggered text animations for main elements
const textElements = anime.timeline({
    easing: 'easeOutExpo',
    delay: 1000
});

textElements
    .add({
        targets: '.title',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800
    })
    .add({
        targets: '.subtitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800
    }, '-=600')
    .add({
        targets: '.search-container',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800
    }, '-=600');

// Quick actions animation
anime({
    targets: '.quick-actions',
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 800,
    delay: anime.stagger(100, {start: 2000}),
    easing: 'easeOutExpo'
});

// Divider animation
anime({
    targets: '.divider-line',
    scaleX: [0, 1],
    opacity: [0, 1],
    duration: 1200,
    delay: 2500,
    easing: 'easeOutExpo'
});

// Button hover animations
const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        anime({
            targets: button,
            scale: 1.05,
            duration: 200,
            easing: 'easeOutQuad'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        anime({
            targets: button,
            scale: 1,
            duration: 200,
            easing: 'easeOutQuad'
        });
    });
});

// ========================================================
// ANIMATION SHOWCASE: STAGGERING BETWEEN TWO
// Based on anime.js examples
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  // Get animation container
  const animationContainer = document.querySelector('.animation-container');
  if (!animationContainer) return;
  
  // Clear existing content
  animationContainer.innerHTML = '';
  
  // Create animation stage
  const animationStage = document.createElement('div');
  animationStage.className = 'animation-stage';
  animationStage.style.cssText = `
    width: 100%;
    height: 100%;
    background-color: rgba(20, 20, 30, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  `;
  
  // Create animation title
  const animationTitle = document.createElement('div');
  animationTitle.className = 'animation-title';
  animationTitle.textContent = 'Transform Static to Dynamic';
  animationTitle.style.cssText = `
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    opacity: 0;
    z-index: 10;
  `;
  
  // Create elements container
  const elementsContainer = document.createElement('div');
  elementsContainer.className = 'staggering-demo';
  elementsContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 240px;
  `;
  
  // Create grid elements
  const gridSize = 10;
  const elementSize = 16;
  const elementMargin = 2;
  const totalElements = gridSize * gridSize;
  
  for (let i = 0; i < totalElements; i++) {
    const element = document.createElement('div');
    element.className = 'staggering-element';
    element.style.cssText = `
      width: ${elementSize}px;
      height: ${elementSize}px;
      background-color: #7C5BFB;
      margin: ${elementMargin}px;
      border-radius: 4px;
      opacity: 0.2;
    `;
    elementsContainer.appendChild(element);
  }
  
  // Add elements to stage
  animationStage.appendChild(animationTitle);
  animationStage.appendChild(elementsContainer);
  animationContainer.appendChild(animationStage);
  
  // Animation function
  function animateElements() {
    // Animate title
    anime({
      targets: '.animation-title',
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1500,
      easing: 'easeOutExpo',
      delay: 300
    });
    
    // Function to animate elements
    function animateGrid(direction = 'normal') {
      anime({
        targets: '.staggering-element',
        scale: [
          {value: 1, duration: 0, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})},
          {value: 1.5, duration: 500, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})},
          {value: 1, duration: 500, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})}
        ],
        opacity: [
          {value: 1, duration: 0, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})},
          {value: 1, duration: 500, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})},
          {value: 0.2, duration: 500, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})}
        ],
        backgroundColor: [
          {value: '#7C5BFB', duration: 0, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})},
          {value: '#CC66FF', duration: 500, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})},
          {value: '#7C5BFB', duration: 500, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})}
        ],
        borderRadius: [
          {value: '4px', duration: 0, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})},
          {value: '50%', duration: 500, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})},
          {value: '4px', duration: 500, delay: anime.stagger(50, {grid: [gridSize, gridSize], from: direction})}
        ],
        easing: 'easeInOutQuad',
        complete: function(anim) {
          // When animation completes, start from a different direction
          const directions = ['center', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
          const nextDirection = directions[Math.floor(Math.random() * directions.length)];
          animateGrid(nextDirection);
        }
      });
    }
    
    // Start the animation
    animateGrid('center');
  }
  
  // Start animation
  animateElements();
}); 