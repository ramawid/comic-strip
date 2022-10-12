let specifics = document.querySelectorAll(".item");
let audios = ["https://web.opendrive.com/api/v1/download/file.json/NTVfMjM4MzgwNjdf?temp_key=%A5%A9%DE%97Y%A9&inline=1",
"https://web.opendrive.com/api/v1/download/file.json/NTVfMjM4MzgwODlf?temp_key=%A5%A9%DE%97i%A9&inline=1",
"https://web.opendrive.com/api/v1/download/file.json/NTVfMjM4MzgwOTBf?temp_key=%A5%A9%DE%97y%A9&inline=1",
"https://web.opendrive.com/api/v1/download/file.json/NTVfMjM4MzgwOTRf?temp_key=%A5%A9%DE%97%89%A9&inline=1", 
"https://web.opendrive.com/api/v1/download/file.json/NTVfMjM4MzgwODVf?temp_key=%A5%A9%DE%97%9D%A6%A7&inline=1",
"https://web.opendrive.com/api/v1/download/file.json/NTVfMjM4MzgyMjlf?temp_key=%A5%A9%DE%97%A9%A9&inline=1",
"https://web.opendrive.com/api/v1/download/file.json/NTVfMjM4MzgyMzBf?temp_key=%A5%A9%DE%97%B9%A9&inline=1",
"https://web.opendrive.com/api/v1/download/file.json/NTVfMjM4MzgyMzFf?temp_key=%A5%A9%DE%97%C9%A9&inline=1"];

for(i = 0; i < specifics.length; i++){
    let specific = specifics[i];

    let audio = document.createElement("audio");
    audio.src = audios[i];
    document.body.appendChild(audio);

    specific.onmouseover = () => {
        audio.play();
    }
    specific.onmouseout = () => {
        audio.pause();
        audio.currentTime = 0;
    }
} 