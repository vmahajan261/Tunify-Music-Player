console.log("Welcome to Tunify");
//intialize variables
let songindex=0;
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let mastersongname=document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Schedule", filePath:"songs/1.mp3", coverpath:"covers/Schedule.jpg"},
    {songName:"Don't Look", filePath:"songs/2.mp3", coverpath:"covers/DL.jpg"},
    {songName:"Excuses", filePath:"songs/3.mp3", coverpath:"covers/EX.jpg"},
    {songName:"Fully Loaded", filePath:"songs/4.mp3", coverpath:"covers/FL.png"},
    {songName:"Insane", filePath:"songs/5.mp3", coverpath:"covers/IS.jpg"},
    {songName:"Brown Munde", filePath:"songs/6.mp3", coverpath:"covers/BM.jfif"},
    {songName:"Top notch Gabru", filePath:"songs/7.mp3", coverpath:"covers/TNG.jpg"},
    {songName:"Shah Ji", filePath:"songs/8.mp3", coverpath:"covers/SJ.jpg"},
]


songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();

//handle play pause button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause'); 
        giff.style.opacity=1;    
    }
 else{
     audioElement.pause();
     masterplay.classList.remove('fa-pause');
     masterplay.classList.add('fa-play');  
     giff.style.opacity=0;    

 }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
// //update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
audioElement.currentTime=progressbar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause'); 
        element.classList.add('fa-play'); 

    })


}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
e.target.classList.remove('fa-play');
e.target.classList.add('fa-pause'); 
mastersongname.innerText=songs[songindex].songName;
audioElement.src = `songs/${songindex+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();
giff.style.opacity=1;    

masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause');
 
    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>9){
        songindex=0
    }
    else{
        songindex+=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
audioElement.currentTime=0;
mastersongname.innerText=songs[songindex].songName;

audioElement.play();
giff.style.opacity=1;    

masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause'); 
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex-=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songName;
audioElement.currentTime=0;
audioElement.play();
giff.style.opacity=1;    

masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause'); 
})