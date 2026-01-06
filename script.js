//// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 🔐 UNLOCK TIME (YYYY, MM-1, DD, HH, MM)
    const unlockTime = new Date(2026, 0, 7, 0, 45); 
    const now = new Date();
  
    const body = document.body;
  
    // Disable pointer events initially
    body.classList.add('locked');
  
    // Show lock message
    const lockMsg = document.createElement('div');
    lockMsg.id = 'lockMessage';
    lockMsg.innerHTML = `
      <div class="lock-box">
        🎁 Ha ha ha! Won't unlock till <br>
        <strong>7th Jan, 12:45 AM</strong>
      </div>`;
    document.body.appendChild(lockMsg);
  
    function unlockExperience() {
      body.classList.remove('locked');
      lockMsg.remove();
      initBirthdayScript(); // 🔥 Start main script
    }
  
    if (now >= unlockTime) {
      unlockExperience();
    } else {
      const interval = setInterval(() => {
        if (new Date() >= unlockTime) {
          clearInterval(interval);
          unlockExperience();
        }
      }, 1000);
    }
  
    // ---------------- MAIN SCRIPT ----------------
    function initBirthdayScript() {
  
      const backgroundMusic = document.getElementById('backgroundMusic');
      const startButton = document.getElementById('startButton');
      const envelopeContainer = document.getElementById('envelopeContainer');
      const unfoldButton = document.getElementById('unfoldButton');
      const finalGreetingElement = document.getElementById('finalGreeting');
      const cakeContainer = document.getElementById('cakeContainer');
  
      const steps = {
        step1: document.getElementById('step1'),
        step2: document.getElementById('step2'),
        step3: document.getElementById('step3'),
        step4: document.getElementById('step4')
      };
  
      const recipientName = "Aurora";
      const messageGreeting = "Happiest Birthday";
  
      function transitionToStep(targetStepId) {
        const active = document.querySelector('.step.active');
        if (active) active.classList.remove('active');
        steps[targetStepId].classList.add('active');
      }
  
      // STEP 1
      startButton.addEventListener('click', () => {
        transitionToStep('step2');
        backgroundMusic.play().catch(() => {});
      });
  
      // STEP 2
      envelopeContainer.addEventListener('click', () => {
        envelopeContainer.classList.add('open');
        envelopeContainer.querySelector('.click-instruction').style.opacity = '0';
  
        setTimeout(() => {
          transitionToStep('step3');
          setTimeout(() => {
            document.getElementById('letterContainer').classList.add('show');
          }, 100);
        }, 700);
      });
  
      // STEP 3
      unfoldButton.addEventListener('click', () => {
        transitionToStep('step4');
        startCelebrationAnimations();
      });
  
      function startCelebrationAnimations() {
        let i = 0;
        finalGreetingElement.textContent = '';
        finalGreetingElement.style.borderRight = '3px solid var(--accent-yellow)';
  
        const typing = setInterval(() => {
          if (i < messageGreeting.length) {
            finalGreetingElement.textContent += messageGreeting.charAt(i++);
          } else {
            clearInterval(typing);
            finalGreetingElement.classList.add('typed');
          }
        }, 100);
  
        createConfettiCannon(100, 0.5);
        setTimeout(() => createConfettiCannon(80, 0.3), 500);
        setTimeout(() => createConfettiCannon(60, 0.2), 1000);
  
        createBalloons(15);
        createFireworks(5);
  
        setTimeout(() => {
          cakeContainer.classList.remove('hidden');
        }, messageGreeting.length * 100 + 600);
      }
  
      cakeContainer.addEventListener('click', () => {
        document.querySelectorAll('.flame').forEach(f => f.style.display = 'none');
        createConfettiCannon(60, 0.3);
      });
  
      function createConfettiCannon(count, delayMultiplier) {
        const container = document.querySelector('.confetti-cannon-container');
        const colors = ['#ff4f70', '#ffd93d', '#ffffff', '#00d8d6', '#8e44ad'];
  
        for (let i = 0; i < count; i++) {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.left = Math.random() * 100 + 'vw';
          confetti.style.top = Math.random() * 20 - 10 + 'vh';
          confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
          confetti.style.animationDelay = Math.random() * delayMultiplier + 's';
  
          container.appendChild(confetti);
          confetti.addEventListener('animationend', () => confetti.remove());
        }
      }
  
      function createBalloons(count) {
        const container = document.querySelector('.balloons-container');
        const colors = ['#ff4f70', '#ffd93d', '#00d8d6', '#8e44ad'];
  
        for (let i = 0; i < count; i++) {
          const balloon = document.createElement('div');
          balloon.className = 'balloon';
          balloon.style.left = Math.random() * 80 + 10 + 'vw';
          balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          balloon.style.animationDuration = Math.random() * 6 + 10 + 's';
  
          container.appendChild(balloon);
          balloon.addEventListener('animationend', () => balloon.remove());
        }
      }
  
      function createFireworks(count) {
        const container = document.querySelector('.fireworks-container');
        const colors = ['#ff4f70', '#ffd93d', '#ffffff'];
  
        for (let i = 0; i < count; i++) {
          const firework = document.createElement('div');
          firework.className = 'firework';
          firework.style.left = Math.random() * 80 + 10 + 'vw';
          firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
          container.appendChild(firework);
          firework.addEventListener('animationend', () => firework.remove());
        }
      }
    }
  });
  