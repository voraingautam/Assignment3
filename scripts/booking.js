/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// let cost = 0;
let days = 0;
let daysContainer = [];
// let halfrate = 20;
// let fullrate = 35;
let selectedrate = 35;
let totalcost = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function DaySelections(day) {
    if(day.classList.contains('clicked')){
        day.classList.remove('clicked');
        days--;
    } else {
        day.classList.add('clicked');
        days++;
    }
    calculatecost();
}
let SelectedDays = document.querySelectorAll('.day-selector li');
SelectedDays.forEach(function(day) {
    daysContainer.push(day);
    day.addEventListener('click',function() {
        DaySelections(day);
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let cleardayButton = document.getElementById('clear-button');
cleardayButton.addEventListener('click', function() {
    daysContainer.forEach(function(day){
        day.classList.remove('clicked');
    });
    days = 0;
    calculatecost();
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfbutton = document.getElementById('half');
halfbutton.addEventListener("click", sethalfrate);
function sethalfrate() {
    selectedrate = 20;
    halfbutton.classList.add("clicked");
    fullbutton.classList.remove("clicked");
    calculatecost();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullbutton = document.getElementById('full');
fullbutton.addEventListener("click", setfullrate);
function setfullrate() {
    selectedrate = 35;
    fullbutton.classList.add("clicked");
    halfbutton.classList.remove("clicked");
    calculatecost();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculatecost()
{
    totalcost = days*selectedrate;
    document.getElementById('calculated-cost').innerHTML = totalcost;
}
