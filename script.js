const PASSWORD = "RoKo";

function unlockVault(){

const input = document.getElementById("password").value;
const error = document.getElementById("error");

if(input === PASSWORD){

error.style.color="#8CFF9F";
error.innerHTML="✅ Access Granted...";

setTimeout(function(){

window.location.href="choose.html";

},1000);

}

else{

error.style.color="#ff9b9b";
error.innerHTML="❌ Wrong Password";

document.getElementById("password").value="";

}

}
