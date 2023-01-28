var currentDay = $("#currentDay");
var todaysDate = moment();
var scheduleArray = [[], [], [], [], [], [], [], [], []];
var storedSchedule = JSON.parse(localStorage.getItem("timetable"));
var timetable = $("#timetable");

scheduleArray = storedSchedule;

console.log(scheduleArray);

currentDay.text(todaysDate.format("dddd, D MMMM"));

function textRestore() {
    for(var i = 0; i < scheduleArray.length; i++) {
        var timetableRestore = timetable.children().eq(i).children().eq(0);
        timetableRestore.text(scheduleArray[i]);
    }
}

textRestore()

$("#save-1").on("click", function() {
    console.log("Switch clicked!");
    var textSave = $("#text-1").val();
    console.log(textSave);
    scheduleArray[0] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)

$("#save-2").on("click", function() {
    console.log("Switch clicked!");
    var textSave = $("#text-2").val();
    console.log(textSave);
    scheduleArray[1] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)

$("#save-3").on("click", function() {
    var textSave = $("#text-3").val();
    scheduleArray[2] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)

$("#save-4").on("click", function() {
    var textSave = $("#text-4").val();
    scheduleArray[3] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)

$("#save-5").on("click", function() {
    var textSave = $("#text-5").val();
    scheduleArray[4] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)

$("#save-6").on("click", function() {
    var textSave = $("#text-6").val();
    scheduleArray[5] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)

$("#save-7").on("click", function() {
    var textSave = $("#text-7").val();
    scheduleArray[6] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)

$("#save-8").on("click", function() {
    var textSave = $("#text-8").val();
    scheduleArray[7] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)

$("#save-9").on("click", function() {
    var textSave = $("#text-9").val();
    scheduleArray[8] = textSave;
    localStorage.setItem("timetable", (JSON.stringify(scheduleArray)));
    }
)