const time = document.getElementById('time');

const timeFormat = document.getElementById('timeFormator');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showDateTime,1000);
});

const showDateTime = ()=> {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novenber', 'December' ];

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    document.getElementById('date').innerHTML = `${dayNames[date.getDay()]} ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`

    hr = hr<10? `0${hr}` : hr;
    min = min<10? `0${min}` : min;
    sec = sec<10? `0${sec}` : sec;

    time.innerHTML = `${hr} : ${min} : ${sec}`;
    timeFormater.innerHTML = hr>12 ? 'PM' : 'AM';
}

