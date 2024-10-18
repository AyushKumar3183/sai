console.log("welcome to spotify");
let songIndex = 0;
let audioElement=new Audio('songs/song1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let song=[
    {songName:"salm-e-ishq",filePath:"songs/song1.mp3",coverPath:"cover/song1.jpg"},
    {songName:"salm-e-ishq",filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"salm-e-ishq",filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"salm-e-ishq",filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"salm-e-ishq",filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"salm-e-ishq",filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
]
songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = song[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = song[i].songName;
    })
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
;})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        })
    })
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src =`songs/${songIndexIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})