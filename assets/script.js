$('#currentDay').text(dayjs().format('MMMM DD YYYY'));

$('.saveBtn').on("click",function() {
    var timeSlot = $(this).siblings(".description").val();
    var inputText = $(this).parent("#id");

    console.log(this);
localStorage.setItem(timeSlot,inputText);
});


$("#hour-9 .description").val(localStorage.getItem("hour9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));

var date = new Date();
var currentHour = date.getHours();
console.log(currentHour);

$('.time-block').each(function() {

})
