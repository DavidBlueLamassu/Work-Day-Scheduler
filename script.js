var currentDay = $("#currentDay");
var todaysDate = moment();
var scheduleArray = [[], [], [], [], [], [], [], [], []];
var storedSchedule = JSON.parse(localStorage.getItem("timetable"));
var timetable = $("#timetable");
var saveTime = 0;
var colorArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var hour = todaysDate.format("H");
var hourNumbered = parseInt(hour);

scheduleArray = storedSchedule;

currentDay.text(todaysDate.format("dddd, D MMMM"));

$("#alertMessage").css("height", "20px");

function textRestore() {
    $.each(scheduleArray, function(i) {
        var timeTableRestore = timetable.children().eq(i).children().eq(0);
        timeTableRestore.text(scheduleArray[i]);
        }
    )
}

function colorSet() {
    $.each(colorArray, function(i) {
        var colorTableSet = colorArray[i];
        var color;
        var colorChanger = timetable.children().eq(i).children().eq(0);
        if (colorTableSet > hourNumbered) {
            color = "#77dd77";
        } else if (colorTableSet === hourNumbered) {
            color = "#ff6961";
        } else if (colorTableSet < hourNumbered) {
         color = "#d3d3d3";
        }
        colorChanger.css("background-color", color);
        }
    )

}

textRestore();
colorSet();

$("#save-1").on("click", function() {
        if (saveTime === 0) {
            var textSave = $("#text-1").val();
            scheduleArray[0] = textSave;
            localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
            savingAlert();
        }
    }
)

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

function savingAlert() {
    saveTime = 2;
    $("#alertMessage").text("Appointment added to localStorage! ✔️");
    $("#alertMessage").css({"display": "flex", "color": "white", "justify-content": "center"});
   var saveAlert = setInterval(function() {
        saveTime--;
        if (saveTime === 0) {
            clearInterval(saveAlert);
            $("#alertMessage").text("");
            $("#body").css("background-color", "rgb(20, 82, 237)");
        }
    }, 1000);
}