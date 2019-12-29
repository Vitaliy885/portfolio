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
    var base64dataUrl = canvas.toDataURL('image/png');
    context.setTransform(1, 0, 0, 1, 0, 0);
    var img = new Image();
    img.src = base64dataUrl;
    console.log(img);
});
