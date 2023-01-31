//'querySelector' for the element which will display the date of the current day.
var currentDay = $("#currentDay");

//The current date and time as provided by moment.js.
var todaysDate = moment();

//An array with nine empty arrays inside (each empty array corresponds to the 
//nine textareas for each hour of the working day in the day scheduler). This array of 
//arrays holds events saved in the day scheduler and copies of this array are saved 
//using 'localStorage'. 
var scheduleArray = [[], [], [], [], [], [], [], [], []];

//A variable to retrieve saved versions of the 'scheduleArray' held in 'localStorage'.
var storedSchedule = JSON.parse(localStorage.getItem("timetable"));

//'querySelector' for the timetable section of the day scheduler. This holds nine
//'textarea' elements for typing and storing events. This will serve as a reference point when 
//the textareas are populated with stored information.
var timetable = $("#timetable");

//Variable to hold time for the setInterval() method which allows a brief (2-second)
//display to indicate that the contents of a 'textarea' have been saved to 'localStorage'.
var saveTime = 0;

//This array is used to color-code the different textareas based upon whether they 
//represent the present, past or future. Each number represents the time of day 
//according to a 24-hour clock and corresponds to each of the nine textareas of the 
//day scheduler.
var colorArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//A variable to indicate the present hour on a 24-hour clock. This is used to determine
//whether the textareas represent the present, past or future.
var hour = todaysDate.format("H");

//This variable holds a number value corresponding to the string value of the 'hour' 
//variable.
var hourNumbered = parseInt(hour);

//This introduces the values held in localStorage (if any) into the 'scheduleArray'. 
//The 'scheduleArray' will next be used to populate the textareas with any stored
//information.
scheduleArray = storedSchedule;

//This displays the current date (in the format Day of the week, date, month) using the
//"#currentDay" element.
currentDay.text(todaysDate.format("dddd, D MMMM"));

//This formats the element labelled with the id "alertMessage" to 20px. This is to 
//prevent the element from expanding when text is introduced to indicate that 
//information has been saved to 'localStorage'. If the element were to expand this
//would push down the day scheduler below, leading to a less-professional appearance.
$("#alertMessage").css("height", "20px");

//This function restores all stored events to the textareas using a 'for' loop. 
function textRestore() {
    $.each(scheduleArray, function(i) {
        
        //A variable to allow the 'for' loop to introduce text into each of the 
        //textareas within the day scheduler. Each 'textarea' element is held 
        //within a 'div' (for ease of formatting in CSS). Accordingly, the loop 
        //iterates through the nine 'div' children of the "#timetable" element, 
        //and these serve as reference points to populate each of their 'textarea' 
        //children.
        var timeTableRestore = timetable.children().eq(i).children().eq(0);
        
        //Each 'textarea' is populated with text from 'scheduleArray'.
        timeTableRestore.text(scheduleArray[i]);
        }
    )
}

//This function color-codes each 'textarea' to indicate whether the hour it represents
//is in the present (red), past (grey) or future (green). It uses a 'for' loop to cycle
//through the textareas.
function colorSet() {
    $.each(colorArray, function(i) {
        
        //This variable holds different color values depending upon the value of the 
        //numbers stored within the coloArray, each number corresponds to the time 
        //of day represented by the textareas.
        var color;

        //A variable to allow the 'for' loop to reformat the color of each of the 
        //textareas within the day scheduler. Each 'textarea' element is held 
        //within a 'div' (for ease of formatting in CSS). Accordingly, the loop 
        //iterates through the nine 'div' children of the "#timetable" element, 
        //and these serve as reference points to format each of their 'textarea' 
        //children.
        var colorChanger = timetable.children().eq(i).children().eq(0);
        
        //Conditions to determine whether 'color' will hold values for 'red', present; 
        //'grey', past; or 'green', future.
        if (colorArray[i] > hourNumbered) {
            color = "#77dd77";
        } else if (colorArray[i] === hourNumbered) {
            color = "#ff6961";
        } else if (colorArray[i] < hourNumbered) {
         color = "#d3d3d3";
        }

        //The 'background-color' for each 'textarea' is reformatted according to the 
        //value held by the 'color' variable.
        colorChanger.css("background-color", color);
        }
    )

}

//The calling of these functions sets up the day scheduler display.
textRestore();
colorSet();

//Event listeners are set up for each of the nine textareas representing the hours
//of the working day. When one of the '#save' elements to the right of the textareas is
//clicked the content of the 'textarea' immediately to its left will be copied to the 
//appropriate array within 'scheduleArray' and the updated version of 'scheduleArray' 
//will be saved to 'localStorage'.
$("#save-1").on("click", function() {
    
    //A conditional statement to prevent the function from running if the saving alert is
    //still being displayed. The savingAlert() function which displays this alert is called
    //whenever a save button is clicked to save the information in a 'textarea'. The 'saveTime'
    //variable is used by a setInterval() method within the function to display this alert
    //for 2 seconds. Whenever the alert is displayed 'saveTime''s value will be above 0. Its
    //default value (as declared with the other global variables) is 0.
    if (saveTime === 0) {
            
            //A variable representing the value of the text in the 'textarea' element
            //represented by "#text-1". 
            var textSave = $("#text-1").val();
            
            //Index 0 of the 'scheduleArray' is made to equal to the value of 'textSave':
            //this is the current text held in the 'textarea' "#text-1".
            scheduleArray[0] = textSave;
            
            //The updated version of 'scheduleArray' is copied to 'localStorage'.
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            
            //An alert function is called to indicate the contents of the 'textarea' have
            //been saved.
            savingAlert();
        }
    }
)

//The following eight event listeners are identical to the first, except that they save 
//information for each corresponding 'textarea' to each of the ensuing arrays within
//'scheduleArray'.
$("#save-2").on("click", function() {
    
    if (saveTime === 0) {
            var textSave = $("#text-2").val();
            scheduleArray[1] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }
    }
)

$("#save-3").on("click", function() {
    if (saveTime === 0) {
            var textSave = $("#text-3").val();
            scheduleArray[2] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }
    }
)

$("#save-4").on("click", function() {
    if (saveTime === 0) {
            var textSave = $("#text-4").val();
            scheduleArray[3] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }
    }
)

$("#save-5").on("click", function() {
    if (saveTime === 0) {
            var textSave = $("#text-5").val();
            scheduleArray[4] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }
    }
)

$("#save-6").on("click", function() {
    if (saveTime === 0) {
            var textSave = $("#text-6").val();
            scheduleArray[5] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }
    }
)

$("#save-7").on("click", function() {
    if (saveTime === 0) {
            var textSave = $("#text-7").val();
            scheduleArray[6] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }   
    }
)

$("#save-8").on("click", function() {
    if (saveTime === 0) {
            var textSave = $("#text-8").val();
            scheduleArray[7] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }
    }
)

$("#save-9").on("click", function() {
    if (saveTime === 0) {
            var textSave = $("#text-9").val();
            scheduleArray[8] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }
    }
)

//This function alerts the user that the information within a 'textarea' has been successfully saved
//to 'localStorage'. It is called when one of the divs within the save column of the day scheduler has
//been activated by 'click'. A setInterval() method ensures that the alert is displayed for only 2 seconds.
function savingAlert() {
    
    //A variable to set the time for which the alert is set to run.
    saveTime = 2;

    //Alert message content and formatting to be displayed on the "#alertMessage" element. The check mark
    //emoji was copied from 'Emojis.Wiki' ("Check Mark", Emojis.Wiki -- Emoji Meanings Encyclopedia, 
    //last visited 30 January 2023: https://emojis.wiki/floppy-disk/).
    $("#alertMessage").text("Appointment added to localStorage! ✔️");
    $("#alertMessage").css({"display": "flex", "color": "white", "justify-content": "center"});
   
    //The setInterval() method is activated. Once it has finished (after 2 seconds), the alert message
    //is removed.
    var saveAlert = setInterval(function() {
        saveTime--;
        if (saveTime === 0) {
            clearInterval(saveAlert);
            $("#alertMessage").text("");
        }
    }, 1000); //Interval set to 1000 milliseconds.
}