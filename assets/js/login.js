$(document).ready(function () {
    console.log($('#gameName').val())
});

// Get Data using Dropdown
$("#gameName").change(function(){
    var value = $('#gameName').val();
    if(value == 1){
        console.log(value)
    }else if(value == 2){
        console.log(value)
    }else{
        console.log('alert')
    }
  });
  

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
