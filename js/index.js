function updateTime() {
    // Get references to HTML elements
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    let currentSeconds = parseInt(seconds.innerText, 10);
    let currentMinutes = parseInt(minutes.innerText, 10);
    let currentHours = parseInt(hours.innerText, 10);
    let currentDays = parseInt(days.innerText, 10);

    // Decrement seconds
    if (currentSeconds === 0) {
        currentSeconds = 59;
        if (currentMinutes > 0) {
            currentMinutes--;
            minutes.innerText = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
        }
    } else {
        currentSeconds--;
    }

    // Update seconds
    seconds.innerText = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

    // Decrement minutes
    if (currentMinutes === 0 && currentHours > 0) {
        currentMinutes = 59;
        currentHours--;
        hours.innerText = currentHours < 10 ? "0" + currentHours : currentHours;
    }

    // Update minutes
    minutes.innerText = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

    if (currentHours === 0 && currentDays > 0) {
        currentDays--;
        hours.innerText = "23"; // Set hours to 23 for the new day
        days.innerHTML = currentDays < 10 ? "0" + currentDays : currentDays;
    }    
}

// Call updateTime function every second (1000 milliseconds)
setInterval(updateTime, 1000);