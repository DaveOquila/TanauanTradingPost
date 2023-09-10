$(document).ready( function () {

    $('#draw_table').DataTable();
    $('#request_table').DataTable();

    $('#date_start').calendar({
        type: 'date',
        formatter: {
            date: function (date, settings) {
                if (!date) return '';
                var day = date.getDate() + '';
                if (day.length < 2) {
                    day = '0' + day;
                }
                var month = (date.getMonth() + 1) + '';
                if (month.length < 2) {
                    month = '0' + month;
                }
                var year = date.getFullYear();

                var dateFrom = year + '-' + month + '-' + day
                return dateFrom
            }
        }
    });
    
    $('#date_end').calendar({
        type: 'date',
        formatter: {
            date: function (date, settings) {
                if (!date) return '';
                var day = date.getDate() + '';
                if (day.length < 2) {
                    day = '0' + day;
                }
                var month = (date.getMonth() + 1) + '';
                if (month.length < 2) {
                    month = '0' + month;
                }
                var year = date.getFullYear();

                var dateFrom = year + '-' + month + '-' + day
                return dateFrom
            }
        }
    });
    current_jackpot()
});

function current_jackpot(){
    $.ajax({
        method: 'POST',
        url: 'assets/php/sel_jackpot_amount.php',
        dataType: 'json',
        success: ((result)=>{
            console.log(result)

            $('#gold_jack').html(Number(result[0]['JackpotAmount']).toLocaleString('en-US'))
            $('#pla_jack').html(Number(result[1]['JackpotAmount']).toLocaleString('en-US'))
            $('#dia_jack').html(Number(result[2]['JackpotAmount']).toLocaleString('en-US'))
           
        }),
        error: ((error)=>{
            
            console.log(error)  
        })
    })
}

function get_draw_data(){
    $("#draw_table").DataTable().clear()
    $("#draw_table").DataTable().destroy()
    var loading = ""
    var data = ""

    loading += `<tr>`
    loading += `<td colspan="10" class="text-center">Loading...</td>` 
    loading += `</tr>`
    $('#draw_data').html(loading)
    $.ajax({
        method: 'POST',
        url: 'assets/php/sel_draw_data.php',
        data:{
            game_idx: $('#game_category').val(),
            date_start: $('#datestart').val()+' '+'05:59:59',
            date_end: $('#dateend').val()+' '+'05:59:59'
        },
        dataType: 'json',
        success: ((result)=>{
            // console.log(result)

            for(let i = 0; i<result.length; i++) {                 
                data += "<tr>"
                    data += `<td>${result[i]["IsDrawn"]}</td>`
                    data += `<td>${result[i]["DrawDate"]}</td>`
                    data += `<td>${result[i]["GameIdx"]}</td>`
                    data += `<td>${result[i]["RoundId"]}</td>`
                    data += `<td>${result[i]["SeedAmount"]}</td>`
                    data += `<td>${result[i]["JackpotContribution"]}</td>`
                    data += `<td>${result[i]["JackpotAmount"]}</td>`
                    data += `<td>${result[i]["WinningEntries"]}</td>`
                    data += `<td>${result[i]["WinnerCount"]}</td>`
                data += "</tr>"                
            }

            $("#draw_data").html(data) 
            $('#draw_table').DataTable();
           
        }),
        error: ((error)=>{
            
            console.log(error)  
        })
    })
}



