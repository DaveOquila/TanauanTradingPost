$(document).ready(function () {
    paymentHistory()
    complaintHistory()

    manageAccount()
    manageApplication()
    managePayment()
    manageComplaints()
    userBalance()
    complaintStatus()
    priceMonitoringEdit()
    goodReports()

    priceMonitoring()
    graphReports()
    radio_checker()
    togglePassword()
    radio_checker()
    
    
  });
  setInterval(function() {
    // console.log($('#third_photo_two').val())
    
    }, 1000);
    

// Global
const globalUrl = 'http://localhost'
const togglePassword =()=>{
    const togglePassword = document
            .querySelector('#togglePassword');
        const password = document.querySelector('#password');
        togglePassword.addEventListener('click', () => {
            // Toggle the type attribute using
            // getAttribure() method
            const type = password
                .getAttribute('type') === 'password' ?
                'text' : 'password';
            password.setAttribute('type', type);
            // Toggle the eye and bi-eye icon
            this.classList.toggle('bi-eye');
        });
}
var browserWindow = $(window);
browserWindow.on('load', function(){
  $('.testingIt').fadeOut('slow', function (){
    $('.testingIt').addClass('loader-modal')
    
  })
});


// Navbar
document.addEventListener("DOMContentLoaded", function(event) {
    
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)
        // show navbar
        nav.classList.toggle('show-side-bar')
        // change icon
        toggle.classList.toggle('bi-caret-left-fill')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        // headerpd.classList.toggle('body-pd')
            
            // Validate that all variables exist
        if(toggle && nav && bodypd && headerpd){
            toggle.addEventListener('click', ()=>{
                console.log(2)
                // show navbar
                nav.classList.toggle('show-side-bar')
                // change icon
                toggle.classList.toggle('bi-caret-right-fill')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                // headerpd.classList.toggle('body-pd')
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
                        window.location.href = "stall_holder.html" 
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
                        sessionStorage.setItem("Trader", 'Admin')
                        window.location.href = "trader_main.html" 
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

$('#goLogin').on('click', function(e){
    window.location.href = `${globalUrl}/admin-tanauan/login.html`
})
$('#goHome').on('click', function(e){
    window.location.href = `${globalUrl}/admin-tanauan/index.html`
})

// Create Account
const radio_checker =()=>{
    if($('input[name="flexRadioDefault"]:checked').val() == ''){
        // console.log($('input[name="flexRadioDefault"]:checked').val())
        Swal.fire({
            icon: 'warning',
            title: 'please fill in the missing radio Buttons!',
            confirmButtonText: 'Okay'
          })
    }
    // $("input[name=radio_driver]:checked").click(function () {
    //     alert(1)
    // });
}
$('#create_trader').on('click', function(e){
    if($('#traders_fullname').val() == '' || $('#traders_email').val() == '' || $('#traders_phone').val() == '' || $('#traders_vehicle').val() == '' || $('#traders_plate').val() == '' || $('#traders_pw').val() == '' || $('#traders_fpw').val() == '' || $('#traders_photo_one').val() == '') {
        Swal.fire({
            icon: 'warning',
            title: 'please fill in the missing fields!',
            confirmButtonText: 'Okay'
          })
    }else{
        Swal.fire({
        icon: 'success',
        title: 'Registration is in Process.',
        html: '<p>Please wait for the approval</p>',
        confirmButtonText: 'Okay'
      }).then((res) => {
        if (res.isConfirmed) {
            window.location.href = "index.html"
        }
    
      })
        // window.location.href = "application_letter_three.html"
    }
})

// Stall
$('#stallMap').on('click', function(e){
    $("#mapping").addClass("active")
      Swal.fire({
        title: 'Loading...',
        timer: 2000,
        timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
        }, 5000)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
        window.location.href = `${globalUrl}/admin-tanauan/stall_page.html`;
        
        
    }).then(()=>{
        
        location.reload();
        
    })
    
    
})

const paymentHistory = async ()=>{
    $("#paymentHistoryTable").DataTable().clear()
    $("#paymentHistoryTable").DataTable().destroy()
    var data = ""
    var loading = ""
  
    loading += `<tr>`
    loading += `<td colspan="4" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#paymentHistoryData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="">${result.results[h].name}</td>`
                    data += `<td class="">No</td>`
                    data += `<td class="">Payment</td>`
                    data += "</tr>"
                }
                $("#paymentHistoryData").html(data)
                var oTable = $('#paymentHistoryTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "ftip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'desc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));

            
  
}
const complaintHistory = async ()=>{
$("#complaintHistoryTable").DataTable().clear()
$("#complaintHistoryTable").DataTable().destroy()
var data = ""
var loading = ""

loading += `<tr>`
loading += `<td colspan="3" class="text-center">Loading...</td>`
loading += `</tr>`
$('#complaintHistoryData').html(loading)
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    
    fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
    .then(response => response.json())
    .then(result => {
        
            for(let h = 0; h < result.results.length; h++){
                data += "<tr>"
                data += `<td class="">${result.results[h].name}</td>`
                data += `<td class="">Y</td>`
                // data += `<td class=""><button class="btn btn-warning">View Payment</button></td>`
                data += "</tr>"
            }
            $("#complaintHistoryData").html(data)
            var oTable = $('#complaintHistoryTable').DataTable({
                orderCellsTop: true,
                fixedHeader: true,
                lengthChange: false,
                pageLength: 8,
                dom: "ftip",
                info:false,
                ordering: true,
                aaSorting:[[0, 'desc']],
                bSortable: true
                    });
    })
    .catch(error => console.log('error', error));

        

}
const userBalance = async ()=>{
    $("#userBalanceTable").DataTable().clear()
    $("#userBalanceTable").DataTable().destroy()
    var data = ""
    var loading = ""
    
    loading += `<tr>`
    loading += `<td colspan="1" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#userBalanceData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        
        fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
            
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="">${result.results[h].name}</td>`
                    data += "</tr>"
                }
                $("#userBalanceData").html(data)
                var oTable = $('#userBalanceTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "tip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'desc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));
    
            
    
}
const complaintStatus = async ()=>{
    $("#complaintStatusTable").DataTable().clear()
    $("#complaintStatusTable").DataTable().destroy()
    var data = ""
    var loading = ""
    
    loading += `<tr>`
    loading += `<td colspan="2" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#complaintStatusData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        
        fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
            
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="">${result.results[h].name}</td>`
                    data += `<td class="">Resolved</td>`
                    data += "</tr>"
                }
                $("#complaintStatusData").html(data)
                var oTable = $('#complaintStatusTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "ftip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'desc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));
    
            
    
}

// Admin
$('#admin_logout').on('click', function(e){
    
    logout()
})
$('#create_accountTraders').on('click', function(e){
    
    window.location.href = "account_for_traders.html"
})
$('#create_stallHolder').on('click', function(e){
    
    window.location.href = "application_letter.html"
})
const priceMonitoringEdit = async ()=>{
    $("#priceMonitoringEditTable").DataTable().clear()
    $("#priceMonitoringEditTable").DataTable().destroy()
    var data = ""
    var loading = ""
  
    loading += `<tr>`
    loading += `<td colspan="3" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#priceMonitoringEditData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
            
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="">${result.results[h].name}</td>`
                    data += `<td class="">None</td>`
                    data += `<td class="">0.00</td>`
                    data += `<td class=""><button class="btn btn-warning" onclick="edit_commodity_button()">Edit</button></td>`
                    data += "</tr>"
                }
                $("#priceMonitoringEditData").html(data)
                var oTable = $('#priceMonitoringEditTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "ftip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'desc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));

            
  
}
const manageAccount = async ()=>{
    $("#manageAccountTable").DataTable().clear()
    $("#manageAccountTable").DataTable().destroy()
    var data = ""
    var loading = ""
    
    loading += `<tr>`
    loading += `<td colspan="4" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#manageAccountData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        
        fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="">${h}</td>`
                    data += `<td class="">Dave ${result.results[h].name}</td>`
                    data += `<td class="">${result.results[h].name}</td>`
                    data += `<td class="">09150174538</td>`
                    data += `<td class="">Stall Holder</td>`
                    // data += `<td class=""><button class="btn btn-success">View</button></td>`
                    data += `<td class=""><button class="btn btn-primary" onclick="edit_account_button()">Edit</button></td>`
                    // data += `<td class=""><button class="btn btn-danger">Remove</button></td>`
                    data += "</tr>"
                }
                $("#manageAccountData").html(data)
                var oTable = $('#manageAccountTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "tip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'asc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));
    
            
    
}
const manageApplication = async ()=>{
    $("#manageApplicationTable").DataTable().clear()
    $("#manageApplicationTable").DataTable().destroy()
    var data = ""
    var loading = ""
    
    loading += `<tr>`
    loading += `<td colspan="4" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#manageApplicationData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        
        fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="">${h}</td>`
                    data += `<td class="">Dave ${result.results[h].name}</td>`
                    data += `<td class="">Stall ${h}</td>`
                    data += `<td class="">09150174538</td>`
                    // data += `<td class="">Stall Holder</td>`
                    data += `<td class=""><button class="btn btn-success" onclick="remarks_application_button()">Remarks</button></td>`
                    data += "</tr>"
                }
                $("#manageApplicationData").html(data)
                var oTable = $('#manageApplicationTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "tip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'asc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));
    
            
    
}
const managePayment = async ()=>{
    $("#managePaymentTable").DataTable().clear()
    $("#managePaymentTable").DataTable().destroy()
    var data = ""
    var loading = ""
    
    loading += `<tr>`
    loading += `<td colspan="4" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#managePaymentData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        
        fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="" data-sort="${h}">Dave ${result.results[h].name}</td>`
                    data += `<td class="">${h + 1}</td>`
                    data += `<td class="">1,000.00</td>`
                    data += `<td class=""><button class="btn btn-secondary" onclick="manage_payment_history_button()">View History</button></td>`
                    data += "</tr>"
                }
                $("#managePaymentData").html(data)
                var oTable = $('#managePaymentTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "Bftip",
                    info:true,
                    ordering: true,
                    aaSorting:[[0, 'asc']],
                    bSortable: true,
                    buttons: [
                        'copy', 'excel', 'pdf'
                        ],
                        });
                        $(".buttons-csv").html('Print Report') 
        })
        .catch(error => console.log('error', error));
    
            
    
}
const manageComplaints = async ()=>{
    $("#manageComplaintsTable").DataTable().clear()
    $("#manageComplaintsTable").DataTable().destroy()
    var data = ""
    var loading = ""
    
    loading += `<tr>`
    loading += `<td colspan="4" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#manageComplaintsData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        
        fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
            
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="">${h}</td>`
                    data += `<td class="">${moment().format('LL')}</td>`
                    data += `<td class="">Dave ${result.results[h].name}</td>`
                    data += `<td class="">Stall Holder</td>`
                    data += `<td class=""><button class="btn btn-success">View</button></td>`
                    data += `<td class=""><button class="btn btn-secondary">Resolve</button></td>`
                    data += `<td class=""><button class="btn btn-danger">Close Complaint</button></td>`
                    data += "</tr>"
                }
                $("#manageComplaintsData").html(data)
                var oTable = $('#manageComplaintsTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "ftip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'asc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));
    
            
    
}
const manage_payment_history_button =()=>{
    $('#manage_payment_history_modal').modal('show'); 
}
$('#manage_payment_history_button_close').on('click', (e)=>{
    $('#manage_payment_history_modal').modal('hide');
})
$('#add_news_button').on('click', function(e){
    $('#add_news_modal').modal('show'); 
})
$('#add_news_button_close').on('click', (e)=>{
    $('#add_news_modal').modal('hide');
})
$('#add_commodity_button').on('click', function(e){
    $('#add_commodity_modal').modal('show'); 
})
$('#add_commodity_button_close').on('click', (e)=>{
    $('#add_commodity_modal').modal('hide');
})
// $('#edit_commodity_button').on('click', function(e){
//     $('#add_commodity_modal').modal('show'); 
// })

const edit_commodity_button =()=>{
    $('#edit_commodity_modal').modal('show'); 
}
$('#edit_commodity_button_close').on('click', (e)=>{
    $('#edit_commodity_modal').modal('hide');
})

const edit_account_button =()=>{
    $('#edit_account_modal').modal('show'); 
}
$('#edit_account_button_close').on('click', (e)=>{
    $('#edit_account_modal').modal('hide');
})
const remarks_application_button =()=>{
    $('#remarks_application_modal').modal('show'); 
}
$('#remarks_application_button_close').on('click', (e)=>{
    $('#remarks_application_modal').modal('hide');
})
$('#add_payment_button').on('click', (e)=>{
    $('#add_payment_modal').modal('show'); 
})
$('#add_payment_button_close').on('click', (e)=>{
    $('#add_payment_modal').modal('hide');
})

const graphReports =()=>{
    
    var data1 = [12, 20, 30, 40, 50, 15, 0, 95, 43, 55, 10, 25];
            var data2 = [15, 25, 35, 45, 55, 26, 12, 15, 75, 90, 40, 64];

            // Create a bar chart
            var ctx = document.getElementById('barChart').getContext('2d');
            var barChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                    ],
                    datasets: [
                        {
                            label: 'No Penalty',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            data: data1
                        },
                        {
                            label: 'With Penalty',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            data: data2
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
}

const goodReports =()=>{
    var testingData = [
        {
            commodity: 'calamansi',
            quantity: 20,
            percentage: '20%'
        },
        {
            commodity: 'sibuyas',
            quantity: 50,
            percentage: '50%'
        },
        {
            commodity: 'kamatis',
            quantity: 30,
            percentage: '30%'
        }
    ]

    $("#goodReportTable").DataTable().clear()
    $("#goodReportTable").DataTable().destroy()
    var data = ""
    var loading = ""
  
    loading += `<tr>`
    loading += `<td colspan="3" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#goodReportData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
            
                for(let h = 0; h < testingData.length; h++){
                    data += "<tr>"
                    data += `<td class="">${testingData[h].commodity}</td>`
                    data += `<td class="">${testingData[h].quantity}</td>`
                    data += `<td class="">${testingData[h].percentage}</td>`
                    data += "</tr>"
                }
                $("#goodReportData").html(data)
                var oTable = $('#goodReportTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "Bftip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'desc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));
}




// Application_letter
$('#stall_yes').on('click', function(e){
    
    window.location.href = "application_letter_one.html"
})
$('#stall_no').on('click', function(e){
    
    window.location.href = "application_letter_two.html"
})

$('#next-one').on('click', function(e){
    if($('#first-fullName').val() == '' || $('#first-stallNumber').val() == '') {
        Swal.fire({
            icon: 'warning',
            title: 'please fill in the missing fields!',
            confirmButtonText: 'Okay'
          })
    }else{
        window.location.href = "application_letter_two.html"
    }
    // Swal.fire({
    //     icon: 'info',
    //     title: 'Are you sure you want to Logout?',
    //     confirmButtonText: 'Okay',
    //     showCancelButton: true
    //   }).then((res) => {
    //     if (res.isConfirmed) {
    //         window.location.href = "login.html"
    //     }
    
    //   })
    // window.location.href = `${globalUrl}/admin-tanauan/login.html`
})
$('#next-two').on('click', function(e){
    if($('#second_username').val() == '' || $('#second-password').val() == '' || $('#second-textArea').val() == '') {
        Swal.fire({
            icon: 'warning',
            title: 'please fill in the missing fields!',
            confirmButtonText: 'Okay'
          })
    }else{
        window.location.href = "application_letter_three.html"
    }
    // Swal.fire({
    //     icon: 'info',
    //     title: 'Are you sure you want to Logout?',
    //     confirmButtonText: 'Okay',
    //     showCancelButton: true
    //   }).then((res) => {
    //     if (res.isConfirmed) {
    //         window.location.href = "login.html"
    //     }
    
    //   })
    // window.location.href = `${globalUrl}/admin-tanauan/login.html`
})
$('#next-three').on('click', function(e){
    if($('#third_firstName').val() == '' || $('#third_lastname').val() == '' || $('#third_email').val() == '' || $('#third_phone').val() == '' || $('#third_address').val() == '' || $('#third_birthday').val() == '' || $('#third_gender').val() == '' || $('#third_fullName').val() == '' || $('#third_number').val() == '' || $('#third_gender').val() == '' || $('#third_fullName').val() == '' || $('#third_number').val() == '') {
        Swal.fire({
            icon: 'warning',
            title: 'please fill in the missing fields!',
            confirmButtonText: 'Okay'
          })
    }else if($('#third_photo_one').val() == '' || $('#third_photo_two').val() == '' || $('#third_photo_three').val() == ''){
        Swal.fire({
            icon: 'warning',
            title: 'please fill in the missing fields',
            confirmButtonText: 'Okay'
          })
    }else{
        Swal.fire({
        icon: 'success',
        title: 'Registration is in Process.',
        html: '<p>Please wait for the approval</p>',
        confirmButtonText: 'Okay'
      }).then((res) => {
        if (res.isConfirmed) {
            window.location.href = "index.html"
        }
    
      })
        // window.location.href = "application_letter_three.html"
    }
    // Swal.fire({
    //     icon: 'info',
    //     title: 'Are you sure you want to Logout?',
    //     confirmButtonText: 'Okay',
    //     showCancelButton: true
    //   }).then((res) => {
    //     if (res.isConfirmed) {
    //         window.location.href = "login.html"
    //     }
    
    //   })
    // window.location.href = `${globalUrl}/admin-tanauan/login.html`
})

// User
const priceMonitoring = async ()=>{
    $("#priceMonitoringTable").DataTable().clear()
    $("#priceMonitoringTable").DataTable().destroy()
    var data = ""
    var loading = ""
  
    loading += `<tr>`
    loading += `<td colspan="3" class="text-center">Loading...</td>`
    loading += `</tr>`
    $('#priceMonitoringData').html(loading)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
        .then(response => response.json())
        .then(result => {
                for(let h = 0; h < result.results.length; h++){
                    data += "<tr>"
                    data += `<td class="">${result.results[h].name}</td>`
                    data += `<td class="">None</td>`
                    data += `<td class="">0.00</td>`
                    data += "</tr>"
                }
                $("#priceMonitoringData").html(data)
                var oTable = $('#priceMonitoringTable').DataTable({
                    orderCellsTop: true,
                    fixedHeader: true,
                    lengthChange: false,
                    pageLength: 8,
                    dom: "ftip",
                    info:false,
                    ordering: true,
                    aaSorting:[[0, 'desc']],
                    bSortable: true
                        });
        })
        .catch(error => console.log('error', error));

            
  
}
$('#index_available_stall').on('click', function(e){
    $('#avaible_stall_modal').modal('show'); 
})
$('#index_available_stall_close').on('click', (e)=>{
    $('#avaible_stall_modal').modal('hide');
})

// Mapping
$('#map_stall_1').on('click', function(e){
    $('.border-stall-all').addClass('border-stall-center'); 
    $('.border-stall-all2').removeClass('border-stall-start'); 
    $('.mapping-line-1').addClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
    Swal.fire({
        icon: 'info',
        title: 'Stall #1',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
    
})
$('#map_stall_2').on('click', function(e){
    $('.border-stall-all').removeClass('border-stall-center'); 
    $('.border-stall-all2').addClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').addClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
    Swal.fire({
        icon: 'info',
        title: 'Stall #2',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})
$('#map_stall_3').on('click', function(e){
    $('.border-stall-all').addClass('border-stall-center'); 
    $('.border-stall-all2').removeClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').addClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
     Swal.fire({
        icon: 'info',
        title: 'Stall #3',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})
$('#map_stall_4').on('click', function(e){
    $('.border-stall-all').removeClass('border-stall-center'); 
    $('.border-stall-all2').addClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').addClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
     Swal.fire({
        icon: 'info',
        title: 'Stall #4',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})
$('#map_stall_5').on('click', function(e){
    $('.border-stall-all').addClass('border-stall-center'); 
    $('.border-stall-all2').removeClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').addClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
     Swal.fire({
        icon: 'info',
        title: 'Stall #5',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})
$('#map_stall_6').on('click', function(e){
    $('.border-stall-all').removeClass('border-stall-center'); 
    $('.border-stall-all2').addClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').addClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
     Swal.fire({
        icon: 'info',
        title: 'Stall #6',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})
$('#map_stall_7').on('click', function(e){
    $('.border-stall-all').addClass('border-stall-center'); 
    $('.border-stall-all2').removeClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').addClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
     Swal.fire({
        icon: 'info',
        title: 'Stall #7',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})
$('#map_stall_8').on('click', function(e){
    $('.border-stall-all').removeClass('border-stall-center'); 
    $('.border-stall-all2').addClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').addClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
     Swal.fire({
        icon: 'info',
        title: 'Stall #8',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})
$('#map_stall_9').on('click', function(e){
    $('.border-stall-all').addClass('border-stall-center'); 
    $('.border-stall-all2').removeClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').addClass('mapping-line-none'); 
    $('.mapping-line-10').removeClass('mapping-line-none'); 
     Swal.fire({
        icon: 'info',
        title: 'Stall #9',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})
$('#map_stall_10').on('click', function(e){
    $('.border-stall-all').removeClass('border-stall-center'); 
    $('.border-stall-all2').addClass('border-stall-start'); 
    $('.mapping-line-1').removeClass('mapping-line-none'); 
    $('.mapping-line-2').removeClass('mapping-line-none'); 
    $('.mapping-line-3').removeClass('mapping-line-none'); 
    $('.mapping-line-4').removeClass('mapping-line-none'); 
    $('.mapping-line-5').removeClass('mapping-line-none'); 
    $('.mapping-line-6').removeClass('mapping-line-none'); 
    $('.mapping-line-7').removeClass('mapping-line-none'); 
    $('.mapping-line-8').removeClass('mapping-line-none'); 
    $('.mapping-line-9').removeClass('mapping-line-none'); 
    $('.mapping-line-10').addClass('mapping-line-none'); 
     Swal.fire({
        icon: 'info',
        title: 'Stall #10',
        html:`<img src="./assets/image/next-two.png" class="rounded-5 w-75 m-3" alt="">
        <br>
        <h4>Owner: Doe</h4>`,
        confirmButtonText: 'Okay',
      })
})