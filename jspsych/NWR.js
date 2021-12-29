//import "./jspsych-image-audio-response-with-animation.js";
//import "./jspsych-audio-keyboard-response.js";
//import "./NWRead_items_verified20211228.js";
var practice = ["jilb", "mup", "frin", "lisk", "glavmep", "reripab"];
var NWRitems = [
    "Hain",
    "Squoaff",
    "Mulph",
    "Nuz",
    "Talv",
    "Pym",
    "Zib",
    "Chol",
    "Choub",
    "Chud",
    "Fep",
    "Fiss",
    "Fod",
    "Foon",
    "Goan",
    "Haip",
    "Jeeb",
    "Juf",
    "Laosh",
    "Leck",
    "Leem",
    "Meesh",
    "Paf",
    "Paig",
    "Soag",
    "Taich",
    "Veeg",
    "Vep",
    "Vud",
    "Yol",
    "Goach",
    "Lum",
    "Sug",
    "Veed",
    "Vess",
    "Chail",
    "Cheed",
    "Fimviz",
    "Sombas",
    "Gizub",
    "Dwuftib",
    "Yufnuz",
    "Kilvmuz",
    "Nindwup",
    "Nupmin",
    "Simftulp",
    "Giskrin",
    "sizblin",
    "Dituf",
    "Hilnduz",
    "Wuvmilb",
    "Rimpak",
    "Tibvoz",
    "Zazuflin",
    "Zibakuv",
    "Gatkuzib",
    "Jivafril",
    "Kibrempiln",
    "Zovrilkubmin",
    "Ditkazufhib",
];
var twocolumns = function(myjson, mid, end) {
    var tmpstr = "";
    tmpstr +=
        '<div style="display:flex; font-size: x-large;"><div style="flex: 50%;  padding: 50px; line-height: 0.6;">';
    for (let i = 0; i < mid; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += '</div><div style="flex: 50%; padding: 50px; line-height: 0.6; " >';
    for (let i = mid; i < end; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += "</div></div>";
    console.log(tmpstr);
    return tmpstr;
};
var threecolumns = function(myjson, first, second, end) {
    var tmpstr = "";
    tmpstr +=
        '<div style="display:flex; font-size: smaller;"><div style="flex: 50%;  padding: 50px; line-height: 0.3;">';
    for (let i = 0; i < first; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += '</div><div style="flex: 50%; padding: 50px; line-height: 0.3; " >';
    for (let i = first; i < second; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += '</div><div style="flex: 50%; padding: 50px; line-height: 0.3; " >';
    for (let i = second; i < end; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += "</div></div>";
    console.log(tmpstr);
    return tmpstr;
};
var fourcolumns = function(myjson, first, second, third, end) {
    var tmpstr = "";
    tmpstr +=
        '<div style="display:flex; font-size: x-large;"><div style="flex: 50%;  padding: 50px; line-height: 0.6;">';
    for (let i = 0; i < first; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += '</div><div style="flex: 50%; padding: 50px; line-height: 0.6; " >';
    for (let i = first; i < second; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += '</div><div style="flex: 50%; padding: 50px; line-height: 0.6; " >';
    for (let i = second; i < third; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += '</div><div style="flex: 50%; padding: 50px; line-height: 0.6; " >';
    for (let i = third; i < end; i++) {
        tmpstr += "<p>" + myjson[i] + "</p>";
    }
    tmpstr += "</div></div>";
    console.log(tmpstr);
    return tmpstr;
};
var playbeepTrial = {
    type: "audio-keyboard-response",
    stimulus: "tone.wav",
    choices: jsPsych.NO_KEYS,
    trial_ends_after_audio: true,
    prompt: "<p></p>",
};
var experimentTimeline = [];
var urlvar = jsPsych.data.urlVariables();
//var myPractice = JSON.parse(practice);
var enterfullscreen = {
    type: "fullscreen",
    message: "<p>Press the button below to enter full screen mode</p>",
    fullscreen_mode: true,
};
var getIdTrial = {
    type: "survey-text",
    questions: [{
        prompt: "If the ID displayed is not correct, please enter it now.",
        placeholder: urlvar.subjectID,
    }, ],
    preamble: "This task will record your voice. It will tell you what to say.",
    button_label: "Click to enter ID",
};

var startScreen = {
    type: "html-button-response",
    stimulus: "For this task, we are asking you to <u>quickly</u> read a list of non-words. <br>\
  These non-words will be presented on the screen in columns. <br><br>\
  Read the left most column from TOP to BOTTOM and then move to the next column. <br><br>\
  If there is a non-word you cannot figure out how to read say “SKIP” and go to the next non-word.\
  First let’s practice.<br><br>",
    choices: ["Continue"],
};
var realScreen = {
    type: "html-button-response",
    stimulus: "Great! Now let’s do it for real. <br><br>Remember start at the <u>top of the left most</u> column, \
  read to the <u>bottom</u> and then go to the top of the next column, moving towards the right of the screen. <br><br>\
  Say “SKIP” for non-words you cannot \
  figure out how to pronounce. You have 60 seconds. Read as quickly as you can. The green bar is your timer.<br><br>\
  ",
    choices: ["Continue"],
};

var initiateTrial1 = {
    type: "html-button-response",
    choices: ["Click when done"],
    stimulus: twocolumns(practice, 3, 6),
};
var recordsoundTrial = {
    type: "image-audio-response-with-animation",

    prompt: fourcolumns(NWRitems, 15, 15 + 15, 15 + 2 * 15, 15 + 3 * 15),
    allow_playback: false,
    show_mic_label: false,
    stimulus: "",
    stimulus_duration: 0,
    buffer_length: 60000,
    wait_for_mic_approval: false,
    // https://stackoverflow.com/a/15945825
    recording_light: `
        <div style="height:20px; position:relative; background:#666666; overflow:hidden;">
          <span style="display:block; width:100%; height:100%;">
            <span id="my-recording-light" style="background-color:#00ff00; display:grid; height:100%; width:0%; animation-fill-mode:both;">
            </span>
          </span>
        </div>`,
    recording_animation_keyframes: [{ width: "0%" }, { width: "100%" }],
    recording_animation_id: "my-recording-light",
};

var sequenceFinishedScreen = {
    type: "html-button-response",
    stimulus: "Thanks for participating! Press Done to finish.",
    choices: ["Done"],
    prompt: "<p></p>",
};

experimentTimeline = experimentTimeline.concat(getIdTrial);
experimentTimeline = experimentTimeline.concat(enterfullscreen);
experimentTimeline = experimentTimeline.concat(startScreen);
experimentTimeline = experimentTimeline.concat(playbeepTrial);
experimentTimeline = experimentTimeline.concat(initiateTrial1);
experimentTimeline = experimentTimeline.concat(realScreen);
experimentTimeline = experimentTimeline.concat(playbeepTrial);
experimentTimeline = experimentTimeline.concat(recordsoundTrial);
experimentTimeline = experimentTimeline.concat(sequenceFinishedScreen);

jsPsych.init({
    timeline: experimentTimeline,
    on_finish: function() {
        window.close();
    },
});