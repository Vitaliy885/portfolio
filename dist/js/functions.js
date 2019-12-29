var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var snap = document.getElementById('snap');

video.style.width = document.width + 'px';
video.style.height = document.height + 'px';
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('playsinline', '');

var constraints = {
    audio: false,
    video: {
        facingMode: 'user'
    }
}

navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    video.srcObject = stream;
});

snap.addEventListener('click', function () {
    context.drawImage(video, 0, 0, 640, 480);
    var base64dataUrl = canvas.toDataURL('image/jpeg');

    context.setTransform(1, 0, 0, 1, 0, 0);
    var img = new Image();
    img.src = base64dataUrl;
    var new_img = document.createElement('img');
    var new_href = document.createElement('a');
    new_href.className = "href__photo";
    new_href.setAttribute('download','download');
    new_href.href = img.src;
    new_img.className = "snap__photo";
    new_img.src = img.src;
    document.querySelector('.images__container').appendChild(new_href);
    document.querySelector('.href__photo').appendChild(new_img);

    console.log(img);
});
