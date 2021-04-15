const themeChange = document.querySelector('#dark')

themeChange.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
})
function theme_button(){
    
    if (document.getElementById("dark").innerHTML==="dark_mode"){
        document.getElementById("dark").innerHTML="light_mode";
    }
    else {
        document.getElementById("dark").innerHTML="dark_mode";
    }

}
    