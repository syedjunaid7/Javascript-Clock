setInterval(() => {
    time = new Date();
    hTime = time.getHours();
    mTime = time.getMinutes();
    sTime = time.getSeconds();
    hDegre = 30*hTime+mTime/2
    mDgree = 6*mTime
    sDegree = 6*sTime


    hour.style.transform = `rotate(${hDegre}deg)`;
    minute.style.transform = `rotate(${mDgree}deg)`;
    second.style.transform = `rotate(${sDegree}deg)`;

},1000 );



