let clock = document.getElementById('Clock');

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
})
