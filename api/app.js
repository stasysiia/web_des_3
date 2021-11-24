const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = "3Re0P0dULxOpg4EW0hzmIQaGVopmKb1BchFEvHMs";
if(data.media_type=="video"){
    mediaSection.innerHTML=videoSection;
    document.getElementById("videoLink").src=data.url;

    }else{
    mediaSection.innerHTML=imageSection;
    document.getElementById("hdimg").href=data.hdurl;
    document.getElementById("image_of_the_day").src=data.url;
    }
    const imageSection =`<a id="hdimg" href="" target="-blank">
     <div class="image-div">
     <img id="image_of_the_day" src="" alt="image-by-nasa">
     </div>
     </a>`

const videoSection=`<div class="video-div"> <iframe id="videoLink" src="" frameborder="0"></iframe></div>`