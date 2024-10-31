
function updateClock() {
    const now = new Date();

    //Digital Clock
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //digital time
    const hoursStr = String(hours).padStart(2, "0");
    const minutesStr = String(minutes).padStart(2, "0");
    const secondsStr = String(seconds).padStart(2, "0");
    document.getElementById("clock").textContent = `${hoursStr}:${minutesStr}:${secondsStr} ${meridiem}`;

    //Analog Clock
    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const hourHand = document.querySelector(".hour-hand");

    //Angles for hands
    const secondsAngle = ((seconds + 30) / 60) * 360;                             
    const minutesAngle = ((minutes + 30) / 60) * 360 + (seconds / 60) * 6;      
    const hoursAngle = (now.getHours() % 12) * 30 + (now.getMinutes() / 60) * 30;

    //Apply angles to the hands
    secondHand.style.transform = `rotate(${secondsAngle + 90}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle + 90}deg)`;
    hourHand.style.transform = `rotate(${hoursAngle - 90}deg)`;
}

//Initial call and update every second
updateClock();
setInterval(updateClock, 1000);
