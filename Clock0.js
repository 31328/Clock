

const svg = document.querySelector('svg');
const currentTime = new Date();
console.log(currentTime.getSeconds());
svg.style.setProperty('--start-seconds', currentTime.getSeconds());
svg.style.setProperty('--start-minutes', currentTime.getMinutes());
svg.style.setProperty('--start-hours', currentTime.getHours() % 12);

