const PASSWORD = "RoKo";

const button = document.getElementById("unlockBtn");
const password = document.getElementById("password");
const error = document.getElementById("error");

button.addEventListener("click", unlock);

password.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        unlock();
    }
});

function unlock(){

    if(password.value === PASSWORD){

        error.style.color="#22c55e";
        error.innerHTML="🔓 Access Granted...";

        button.innerHTML="Opening...";
        button.disabled=true;

        setTimeout(function(){

            window.location.href="choose.html";

        },1500);

    }

    else{

        error.style.color="#ef4444";
        error.innerHTML="❌ Wrong Password";

        document.querySelector(".glass-card").animate([

            {transform:"translateX(-8px)"},
            {transform:"translateX(8px)"},
            {transform:"translateX(-8px)"},
            {transform:"translateX(8px)"},
            {transform:"translateX(0)"}

        ],{

            duration:350

        });

        password.value="";

        password.focus();

    }

              }
