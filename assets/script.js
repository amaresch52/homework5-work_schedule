$('#currentDay').text(dayjs().format('MMMM DD YYYY'));

$('.saveBtn').on("click",function(event) {
    var timeSlot = $(this).siblings(".description").val();
    var inputText = $(this).parent().attr("id");
    event.preventDefault();
    console.log(this);
localStorage.setItem(inputText,timeSlot);
});

function loadData() {
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
}
function timeSave() {

var date = new Date();
var currentHour = date.getHours();
console.log(currentHour);

$('.time-block').each(function() {
    var inputHour = parseInt($(this).attr('id').split('hour-')[1]);
    console.log(inputHour,currentHour)
    if (inputHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (inputHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
        

    
    })
}
    timeSave();
    loadData();

