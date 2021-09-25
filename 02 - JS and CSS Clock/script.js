const minute = document.querySelector(".hand") 
    minute.style.transformOrigin = "100%";
    let second = 0;
    
    setInterval(() => {
        console.log("asdasd")
        minute.style.transform = `rotate(${second += 6}deg)`
    },1000)
