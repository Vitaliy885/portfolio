var xmlhttp=new XMLHttpRequest,url="questions.txt";function myFunction(t){var e,n="";for(e=0;e<t.length;e++)n+="<p>"+t[e].display+"</p>";document.querySelector(".question__list").innerHTML=n}xmlhttp.onreadystatechange=function(){4==this.readyState&&200==this.status&&myFunction(JSON.parse(this.responseText))},xmlhttp.open("GET",url,!0),xmlhttp.send();