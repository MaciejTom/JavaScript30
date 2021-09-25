let second = document.querySelector(".second-hand");
hour = document.querySelector(".hour-hand"),
    minute = document.querySelector(".min-hand"),
    hands = document.querySelectorAll(".hand");



const setDate = function () {

    let now = new Date();

    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let hours = now.getHours();
    // console.log(seconds)
    console.log(minutes)

    second.style.transform = `rotate(${seconds * 6 + 90}deg)`;
    minute.style.transform = `rotate(${minutes * 6 + 90}deg)`;
    hour.style.transform = `rotate(${hours * 6 + 90}deg)`;
}

setInterval(setDate, 1000);


// let seconds = 90,
//     minutes = 90,
//     hours = 90;

// let now = new Date();
// console.log(now)
// console.log(now.getMinutes())

// setInterval(() => {

//     second.style.transform = `rotate(${seconds += 6}deg)`
// }, 100);

// setInterval(() => {

//     minute.style.transform = `rotate(${minutes += 6}deg)`
//     console.log("zaczynamy odliczanie")
// }, 6000);

// setInterval(() => {

//     hour.style.transform = `rotate(${hours += 6}deg)`
// }, 3600000);

