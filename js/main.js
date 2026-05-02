/* ==== MODAL ==== */
function openBooking() {
  document.getElementById("bookingModal").style.display = "flex";
}
function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}

/* ==== FADE ==== */
const fades = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  fades.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

/* ==== CURSOR ==== */
const cursor = document.getElementById('cursor');
const cursorText = document.getElementById('cursorText');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;
let speed = 0.12;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener('mousedown', () => {
  speed = 0.2;
  cursor.style.background = '#555';
  cursorText.innerText = 'CLICK';
});
window.addEventListener('mouseup', () => {
  speed = 0.12;
  cursor.style.background = 'rgba(0,0,0,0.8)';
  cursorText.innerText = '';
});

/* ==== HOVER + MAGNET ==== */
const hoverTargets = document.querySelectorAll('a, .btn');

hoverTargets.forEach(el => {

  el.addEventListener('mouseenter', () => {
    cursor.style.width = '40px';
    cursor.style.height = '40px';
    cursor.style.background = 'rgba(0,0,0,0.6)';
    cursorText.innerText = 'VIEW';
  });

  el.addEventListener('mouseleave', () => {
    cursor.style.width = '14px';
    cursor.style.height = '14px';
    cursor.style.background = 'rgba(0,0,0,0.8)';
    cursorText.innerText = '';
    el.style.transform = 'translate(0,0)';
  });

  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${offsetX * 0.2}px, ${offsetY * 0.2}px)`;
  });

});

/* ==== ANIMATION LOOP ==== */
function animate() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;
  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';
  requestAnimationFrame(animate);
}
animate();