var video=document.getElementById("video"),canvas=document.getElementById("canvas"),context=canvas.getContext("2d"),snap=document.getElementById("snap");video.style.width=document.width+"px",video.style.height=document.height+"px",video.setAttribute("autoplay",""),video.setAttribute("muted",""),video.setAttribute("playsinline","");var constraints={audio:!1,video:{facingMode:"user"}};navigator.mediaDevices.getUserMedia(constraints).then(function(e){video.srcObject=e}),snap.addEventListener("click",function(){context.drawImage(video,0,0,640,480);var e=canvas.toDataURL("image/jpeg");context.setTransform(1,0,0,1,0,0);var t=new Image,a=[];t.src=e,a.push(t.src);for(var n=0;n<a.length;n++){var i=document.createElement("span");i.className="item__image";var o=document.createElement("a");o.className="href__image",o.innerText="Download",o.href=a[n];var c=document.createElement("img");c.className="snap__photo",c.src=a[n],document.querySelector(".images__container").appendChild(i),document.querySelectorAll(".item__image").forEach(function(e){e.appendChild(c),e.appendChild(o)})}});