// JavaScript to handle time, date, and hover functionalities

function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const timezoneElement = document.getElementById('timezone');

    // Get current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Format hours to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros to minutes, seconds, and milliseconds
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    milliseconds = milliseconds < 100 ? `0${milliseconds}` : milliseconds;

    // Display time in HH:MM:SS:MMM AM/PM format
    const currentTime = `${hours}:${minutes}:${seconds}:${milliseconds} ${ampm}`;
    timeElement.innerText = currentTime;

    // Display date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString(undefined, options);
    dateElement.innerText = currentDate;

    // Display timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timezoneElement.innerText = `Timezone: ${timezone}`;

    // Update time every 50ms to reflect changes in milliseconds
    setTimeout(updateTime, 50);
}

// Initialize the time display
updateTime();
