// Navbar
document.addEventListener("DOMContentLoaded", function(event) {
    
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)
        // show navbar
        nav.classList.toggle('show')
        // change icon
        toggle.classList.toggle('bi-x')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
            
            // Validate that all variables exist
        if(toggle && nav && bodypd && headerpd){
            toggle.addEventListener('click', ()=>{
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bi-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }
        
    showNavbar('header-toggle','nav-bar','body-pd','header')
        
        /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
        
    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))

        
            // Your code to run since DOM is loaded and ready
});

// Login
const login = () => { 
    $.ajax({
        method: 'POST',
        url: 'assets/php/login.php',
        data:{
            username: $('#username').val(),
            password: $('#password').val()
        },
        dataType: 'json',
        success: ((result)=>{
            if(result[0] == 1 && grecaptcha.getResponse().length !== 0){
                let timerInterval
                Swal.fire({
                    title: 'Loading...',
                    timer: 2000,
                    timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                    sessionStorage.setItem("user", 'Admin')
                    window.location.href = "admin_page.html?"
                })
            }else if(result[0] == 2 && grecaptcha.getResponse().length !== 0){
                let timerInterval
                Swal.fire({
                    title: 'Loading...',
                    timer: 2000,
                    timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                        sessionStorage.setItem("user", 'Admin')
                        window.location.href = "https://www.google.com/" 
                })
            }else{
                Swal.fire({
                    text: 'please fill in the missing fields!',
                    icon: "error",
                });
            }
            
            
            if (grecaptcha.getResponse().length === 0 && result[0] > 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have to check the recaptcha !',
                  })
            }
        }),
        error: ((error)=>{
            console.log(error)  
        })
    })
}
$('#login').on('click', function(e){
    
    login()
})
