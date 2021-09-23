const audios = document.querySelectorAll("audio");
const keys = document.querySelectorAll("div.key");



audiosArr = [...audios];

// keys.forEach(item => item.addEventListener("keydown", (e) => {

//     if (e.keyCode == item.dataset.key) {
//         console.log("asdasd")
//     }
// }))

window.addEventListener("keydown", (e) => {
    
    keys.forEach(item => {
        if (e.keyCode == item.dataset.key) {

            audiosArr.forEach(el => {
                if (el.dataset.key === item.dataset.key) {
                    el.play()
                    item.classList.add("playing")
                    setTimeout(() => {
                        item.classList.remove("playing")
                    }, 300);
                }
            });
        }
    });
    
   
});