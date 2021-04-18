$('#currentDay').text(dayjs().format('MMMM DD YYYY'));

$('#delete').on("click", function() {
    localStorage.clear();
    location.reload();
    return false;
});

//Save input onclick to localStorage
$('.saveBtn').on("click",function() {
    var timeSlot = $(this).siblings(".description").val();
    var inputText = $(this).parent().attr("id");

localStorage.setItem(inputText,timeSlot);
});

//Load data from local storage
function loadData() {
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
}

function timeSave() {

var timeNow = dayjs().format('H');

//Check time for css property
$('.time-block').each(function() {
    var inputHour = parseInt($(this).attr('id').split('hour-')[1]);
    console.log(inputHour,timeNow)
    if (inputHour < timeNow) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (inputHour == timeNow) {
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

