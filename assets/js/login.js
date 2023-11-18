$(document).ready(function () {
    // console.log($('#gameName').val())
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
            username: $('#loginEmail').val(),
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
                    window.location.href = "index.html?"
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
                        sessionStorage.setItem("admin", 'Admin')
                        window.location.href = "admin_page.html" 
                })
            }else if(result[0] == 3 && grecaptcha.getResponse().length !== 0){
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
                        sessionStorage.setItem("stall holder", 'Admin')
                        window.location.href = "stall_page.html" 
                })
            }else if(result[0] == 4 && grecaptcha.getResponse().length !== 0){
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
                        sessionStorage.setItem("Trader", 'Admin')
                        window.location.href = "trader_page.html" 
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
const logout = () => { 
    Swal.fire({
        icon: 'info',
        title: 'Are you sure you want to Logout?',
        confirmButtonText: 'Okay',
        showCancelButton: true
      }).then((res) => {
        if (res.isConfirmed) {
            window.location.href = "login.html"
        }
    
      })
}
$('#login').on('click', function(e){
    
    login()
})
$('#logout').on('click', function(e){
    
    logout()
})

const SendEmail =()=>{
    
    var params ={
        from_name : $("#TestName").val(),
        email_id : $("#TestEmail").val(),
        message : $("#TestText").val()
    }
    emailjs.send("service_4zgdtai","template_9xscl2n",params).then((res)=>{
        alert("Success!" + res.status);
        console.log(res)
    })
    console.log($("#TestName").val())
    alert(1)
}