setInterval( () =>{
 d = new Date();
 hr = d.getHours();
 min = d.getMinutes();
 secs = d.getSeconds();
 hrotation = 30*hr + min/2;
 minrotation = 6*min;
 srotation = 6*secs;

 hour.style.transform = `rotate(${hrotation}deg)`
 minute.style.transform = `rotate(${minrotation}deg)`
 second.style.transform = `rotate(${srotation}deg)`
},1000)