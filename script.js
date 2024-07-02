document.addEventListener('DOMContentLoaded', () => {
  const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const currentDayElement = document.querySelector('[data-testid="currentDay"]');


  const updateDateTime = () => {
    const now = new Date();
    const timeParts = now.toUTCString().split(' ')[4].split(':');
    const currentTime = `${timeParts[0]}:${timeParts[1]}`;
    const currentDay = now.toLocaleString('en-Us', {weekday: 'long'});

    currentTimeUTCElement.textContent = currentTime;
    currentDayElement.textContent = currentDay;
  }

updateDateTime();
})