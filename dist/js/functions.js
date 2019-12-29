var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var snap = document.getElementById('snap');
var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal__box');
var modalImage = document.querySelector('.modal__image');
var closeModal = document.querySelector('.close__modal');


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
    var imagesArray = [];
    img.src = base64dataUrl;
    imagesArray.push(img.src);


    for (var i = 0; i < imagesArray.length; i++) {


        var itemImage = document.createElement('span');
        itemImage.className = "item__image";

        var linkImage = document.createElement('a');
        linkImage.className = "href__image";
        linkImage.innerText = 'Download';
        linkImage.href = imagesArray[i];


        var image = document.createElement('img');
        image.className = "snap__photo";
        image.src = imagesArray[i];
        document.querySelector('.images__container').appendChild(itemImage);
        document.querySelectorAll('.item__image').forEach(function (item) {
            item.appendChild(image);
            item.appendChild(linkImage);
        });
    }

    ;

    document.querySelectorAll('.item__image').forEach(function (photo) {
        photo.addEventListener('click', function () {
            modalImage.src = this.firstElementChild.src;
            overlay.classList.add('active');
            modal.classList.add('active');
            closeModal.classList.add('active');
        });
    });

    overlay.addEventListener('click', function () {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        closeModal.classList.remove('active');
    });

    closeModal.addEventListener('click', function () {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        closeModal.classList.remove('active');
    });

});



