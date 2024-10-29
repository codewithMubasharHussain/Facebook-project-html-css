var setting = document.querySelector(".user-setting");
var darkbtn  = document.getElementById("dark-btn");
function settingmenutoggle(){

    setting.classList.toggle("user-setting-height")
}
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}