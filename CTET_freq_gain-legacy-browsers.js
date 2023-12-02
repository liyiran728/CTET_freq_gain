/*********************** 
 * Ctet_Freq_Gain Test *
 ***********************/


// store info about the experiment session:
let expName = 'CTET_freq_gain';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const skipLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(skipLoopBegin(skipLoopScheduler));
flowScheduler.add(skipLoopScheduler);
flowScheduler.add(skipLoopEnd);
const aftereasy_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(aftereasy_loopLoopBegin(aftereasy_loopLoopScheduler));
flowScheduler.add(aftereasy_loopLoopScheduler);
flowScheduler.add(aftereasy_loopLoopEnd);
flowScheduler.add(Final2RoutineBegin());
flowScheduler.add(Final2RoutineEachFrame());
flowScheduler.add(Final2RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'rose8.jpg', 'path': 'rose8.jpg'},
    {'name': 'dandelion19.jpg', 'path': 'dandelion19.jpg'},
    {'name': 'block1.xlsx', 'path': 'block1.xlsx'},
    {'name': 'sunflower3.jpg', 'path': 'sunflower3.jpg'},
    {'name': 'chooseNormalTraining.xlsx', 'path': 'chooseNormalTraining.xlsx'},
    {'name': 'sunflower10.jpg', 'path': 'sunflower10.jpg'},
    {'name': 'block9.xlsx', 'path': 'block9.xlsx'},
    {'name': 'block5.xlsx', 'path': 'block5.xlsx'},
    {'name': 'block8.xlsx', 'path': 'block8.xlsx'},
    {'name': 'tulip13.jpg', 'path': 'tulip13.jpg'},
    {'name': 'rose10.jpg', 'path': 'rose10.jpg'},
    {'name': 'rose17.jpg', 'path': 'rose17.jpg'},
    {'name': 'daisy13.jpg', 'path': 'daisy13.jpg'},
    {'name': 'daisy1.jpg', 'path': 'daisy1.jpg'},
    {'name': 'example_long_easy.xlsx', 'path': 'example_long_easy.xlsx'},
    {'name': 'sunflower20.jpg', 'path': 'sunflower20.jpg'},
    {'name': 'rose20.jpg', 'path': 'rose20.jpg'},
    {'name': 'tulip17.jpg', 'path': 'tulip17.jpg'},
    {'name': 'rose7.jpg', 'path': 'rose7.jpg'},
    {'name': 'rose12.jpg', 'path': 'rose12.jpg'},
    {'name': 'daisy8.jpg', 'path': 'daisy8.jpg'},
    {'name': 'daisy10.jpg', 'path': 'daisy10.jpg'},
    {'name': 'sunflower11.jpg', 'path': 'sunflower11.jpg'},
    {'name': 'tulip2.jpg', 'path': 'tulip2.jpg'},
    {'name': 'PAS.xlsx', 'path': 'PAS.xlsx'},
    {'name': 'training_normal4.xlsx', 'path': 'training_normal4.xlsx'},
    {'name': 'rose22.jpg', 'path': 'rose22.jpg'},
    {'name': 'rose18.jpg', 'path': 'rose18.jpg'},
    {'name': 'rose2.jpg', 'path': 'rose2.jpg'},
    {'name': 'daisy22.jpg', 'path': 'daisy22.jpg'},
    {'name': 'tulip12.jpg', 'path': 'tulip12.jpg'},
    {'name': 'dandelion18.jpg', 'path': 'dandelion18.jpg'},
    {'name': 'sunflower26.jpg', 'path': 'sunflower26.jpg'},
    {'name': 'tulip8.jpg', 'path': 'tulip8.jpg'},
    {'name': 'daisy17.jpg', 'path': 'daisy17.jpg'},
    {'name': 'tulip9.jpg', 'path': 'tulip9.jpg'},
    {'name': 'rose26.jpg', 'path': 'rose26.jpg'},
    {'name': 'NASA.xlsx', 'path': 'NASA.xlsx'},
    {'name': 'rose5.jpg', 'path': 'rose5.jpg'},
    {'name': 'SIPI.xlsx', 'path': 'SIPI.xlsx'},
    {'name': 'tulip27.jpg', 'path': 'tulip27.jpg'},
    {'name': 'dandelion5.jpg', 'path': 'dandelion5.jpg'},
    {'name': 'sunflower9.jpg', 'path': 'sunflower9.jpg'},
    {'name': 'sunflower23.jpg', 'path': 'sunflower23.jpg'},
    {'name': 'sunflower14.jpg', 'path': 'sunflower14.jpg'},
    {'name': 'tulip19.jpg', 'path': 'tulip19.jpg'},
    {'name': 'dandelion13.jpg', 'path': 'dandelion13.jpg'},
    {'name': 'tulip20.jpg', 'path': 'tulip20.jpg'},
    {'name': 'tulip11.jpg', 'path': 'tulip11.jpg'},
    {'name': 'tulip10.jpg', 'path': 'tulip10.jpg'},
    {'name': 'dandelion14.jpg', 'path': 'dandelion14.jpg'},
    {'name': 'tulip23.jpg', 'path': 'tulip23.jpg'},
    {'name': 'block7.xlsx', 'path': 'block7.xlsx'},
    {'name': 'sunflower24.jpg', 'path': 'sunflower24.jpg'},
    {'name': 'daisy6.jpg', 'path': 'daisy6.jpg'},
    {'name': 'daisy11.jpg', 'path': 'daisy11.jpg'},
    {'name': 'tulip15.jpg', 'path': 'tulip15.jpg'},
    {'name': 'block6.xlsx', 'path': 'block6.xlsx'},
    {'name': 'daisy15.jpg', 'path': 'daisy15.jpg'},
    {'name': 'block2.xlsx', 'path': 'block2.xlsx'},
    {'name': 'daisy21.jpg', 'path': 'daisy21.jpg'},
    {'name': 'sunflower19.jpg', 'path': 'sunflower19.jpg'},
    {'name': 'tulip14.jpg', 'path': 'tulip14.jpg'},
    {'name': 'dandelion15.jpg', 'path': 'dandelion15.jpg'},
    {'name': 'tulip7.jpg', 'path': 'tulip7.jpg'},
    {'name': 'rose14.jpg', 'path': 'rose14.jpg'},
    {'name': 'sunflower17.jpg', 'path': 'sunflower17.jpg'},
    {'name': 'tulip16.jpg', 'path': 'tulip16.jpg'},
    {'name': 'sunflower4.jpg', 'path': 'sunflower4.jpg'},
    {'name': 'tulip18.jpg', 'path': 'tulip18.jpg'},
    {'name': 'daisy5.jpg', 'path': 'daisy5.jpg'},
    {'name': 'rose1.jpg', 'path': 'rose1.jpg'},
    {'name': 'daisy14.jpg', 'path': 'daisy14.jpg'},
    {'name': 'training_easy2.xlsx', 'path': 'training_easy2.xlsx'},
    {'name': 'rose6.jpg', 'path': 'rose6.jpg'},
    {'name': 'rose21.jpg', 'path': 'rose21.jpg'},
    {'name': 'chooseBlock.xlsx', 'path': 'chooseBlock.xlsx'},
    {'name': 'rose11.jpg', 'path': 'rose11.jpg'},
    {'name': 'tulip3.jpg', 'path': 'tulip3.jpg'},
    {'name': 'sunflower6.jpg', 'path': 'sunflower6.jpg'},
    {'name': 'sunflower25.jpg', 'path': 'sunflower25.jpg'},
    {'name': 'dandelion4.jpg', 'path': 'dandelion4.jpg'},
    {'name': 'sunflower8.jpg', 'path': 'sunflower8.jpg'},
    {'name': 'tulip22.jpg', 'path': 'tulip22.jpg'},
    {'name': 'example_sandwich_normal.xlsx', 'path': 'example_sandwich_normal.xlsx'},
    {'name': 'daisy7.jpg', 'path': 'daisy7.jpg'},
    {'name': 'sunflower13.jpg', 'path': 'sunflower13.jpg'},
    {'name': 'DSSQ_think.xlsx', 'path': 'DSSQ_think.xlsx'},
    {'name': 'example_short_easy.xlsx', 'path': 'example_short_easy.xlsx'},
    {'name': 'sunflower15.jpg', 'path': 'sunflower15.jpg'},
    {'name': 'sunflower22.jpg', 'path': 'sunflower22.jpg'},
    {'name': 'rose15.jpg', 'path': 'rose15.jpg'},
    {'name': 'rose24.jpg', 'path': 'rose24.jpg'},
    {'name': 'sunflower2.jpg', 'path': 'sunflower2.jpg'},
    {'name': 'rose4.jpg', 'path': 'rose4.jpg'},
    {'name': 'daisy3.jpg', 'path': 'daisy3.jpg'},
    {'name': 'sunflower7.jpg', 'path': 'sunflower7.jpg'},
    {'name': 'daisy25.jpg', 'path': 'daisy25.jpg'},
    {'name': 'sunflower21.jpg', 'path': 'sunflower21.jpg'},
    {'name': 'gain.png', 'path': 'gain.png'},
    {'name': 'dandelion6.jpg', 'path': 'dandelion6.jpg'},
    {'name': 'tulip21.jpg', 'path': 'tulip21.jpg'},
    {'name': 'daisy24.jpg', 'path': 'daisy24.jpg'},
    {'name': 'daisy19.jpg', 'path': 'daisy19.jpg'},
    {'name': 'daisy2.jpg', 'path': 'daisy2.jpg'},
    {'name': 'tulip6.jpg', 'path': 'tulip6.jpg'},
    {'name': 'daisy4.jpg', 'path': 'daisy4.jpg'},
    {'name': 'dandelion23.jpg', 'path': 'dandelion23.jpg'},
    {'name': 'sunflower16.jpg', 'path': 'sunflower16.jpg'},
    {'name': 'sunflower1.jpg', 'path': 'sunflower1.jpg'},
    {'name': 'training_normal2.xlsx', 'path': 'training_normal2.xlsx'},
    {'name': 'dandelion2.jpg', 'path': 'dandelion2.jpg'},
    {'name': 'tulip24.jpg', 'path': 'tulip24.jpg'},
    {'name': 'training_easy1.xlsx', 'path': 'training_easy1.xlsx'},
    {'name': 'rose9.jpg', 'path': 'rose9.jpg'},
    {'name': 'tulip26.jpg', 'path': 'tulip26.jpg'},
    {'name': 'daisy16.jpg', 'path': 'daisy16.jpg'},
    {'name': 'sunflower12.jpg', 'path': 'sunflower12.jpg'},
    {'name': 'dandelion25.jpg', 'path': 'dandelion25.jpg'},
    {'name': 'dandelion12.jpg', 'path': 'dandelion12.jpg'},
    {'name': 'dandelion20.jpg', 'path': 'dandelion20.jpg'},
    {'name': 'daisy26.jpg', 'path': 'daisy26.jpg'},
    {'name': 'daisy12.jpg', 'path': 'daisy12.jpg'},
    {'name': 'rose16.jpg', 'path': 'rose16.jpg'},
    {'name': 'dandelion11.jpg', 'path': 'dandelion11.jpg'},
    {'name': 'dandelion1.jpg', 'path': 'dandelion1.jpg'},
    {'name': 'rose19.jpg', 'path': 'rose19.jpg'},
    {'name': 'training_normal1.xlsx', 'path': 'training_normal1.xlsx'},
    {'name': 'chooseEasyTraining.xlsx', 'path': 'chooseEasyTraining.xlsx'},
    {'name': 'dandelion17.jpg', 'path': 'dandelion17.jpg'},
    {'name': 'rose25.jpg', 'path': 'rose25.jpg'},
    {'name': 'dandelion10.jpg', 'path': 'dandelion10.jpg'},
    {'name': 'dandelion24.jpg', 'path': 'dandelion24.jpg'},
    {'name': 'block10.xlsx', 'path': 'block10.xlsx'},
    {'name': 'rose23.jpg', 'path': 'rose23.jpg'},
    {'name': 'rose13.jpg', 'path': 'rose13.jpg'},
    {'name': 'rose3.jpg', 'path': 'rose3.jpg'},
    {'name': 'dandelion22.jpg', 'path': 'dandelion22.jpg'},
    {'name': 'daisy20.jpg', 'path': 'daisy20.jpg'},
    {'name': 'dandelion3.jpg', 'path': 'dandelion3.jpg'},
    {'name': 'dandelion27.jpg', 'path': 'dandelion27.jpg'},
    {'name': 'tulip1.jpg', 'path': 'tulip1.jpg'},
    {'name': 'dandelion8.jpg', 'path': 'dandelion8.jpg'},
    {'name': 'daisy27.jpg', 'path': 'daisy27.jpg'},
    {'name': 'dandelion9.jpg', 'path': 'dandelion9.jpg'},
    {'name': 'dandelion21.jpg', 'path': 'dandelion21.jpg'},
    {'name': 'sunflower27.jpg', 'path': 'sunflower27.jpg'},
    {'name': 'sunflower5.jpg', 'path': 'sunflower5.jpg'},
    {'name': 'dandelion26.jpg', 'path': 'dandelion26.jpg'},
    {'name': 'dandelion16.jpg', 'path': 'dandelion16.jpg'},
    {'name': 'tulip5.jpg', 'path': 'tulip5.jpg'},
    {'name': 'example_sandwich_easy.xlsx', 'path': 'example_sandwich_easy.xlsx'},
    {'name': 'dandelion7.jpg', 'path': 'dandelion7.jpg'},
    {'name': 'training_normal3.xlsx', 'path': 'training_normal3.xlsx'},
    {'name': 'daisy23.jpg', 'path': 'daisy23.jpg'},
    {'name': 'block3.xlsx', 'path': 'block3.xlsx'},
    {'name': 'tulip4.jpg', 'path': 'tulip4.jpg'},
    {'name': 'tulip25.jpg', 'path': 'tulip25.jpg'},
    {'name': 'daisy18.jpg', 'path': 'daisy18.jpg'},
    {'name': 'block4.xlsx', 'path': 'block4.xlsx'},
    {'name': 'sunflower18.jpg', 'path': 'sunflower18.jpg'},
    {'name': 'daisy9.jpg', 'path': 'daisy9.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=131F17AD', '');

  return Scheduler.Event.NEXT;
}


var InstrClock;
var prac;
var key_resp_intro;
var text_intro;
var Consent1Clock;
var consent1_text;
var consent1_resp;
var SIPI_instClock;
var IPI_inst_text;
var IPI_inst_cont;
var SIPIClock;
var SIPI_text;
var SIPI_scale;
var SIPI_resp;
var PAS_instClock;
var PAS_inst_text;
var PAS_inst_cont;
var PASClock;
var PAS_question;
var PAS_scale;
var PAS_resp;
var Training_Easy_InstrClock;
var key_resp_easy_instr;
var text_easy_instr;
var Instr1Clock;
var key_resp_intro_6;
var text_intro_6;
var Instr2Clock;
var key_resp_intro_2;
var text_intro_2;
var Example_short_easyClock;
var image_easy_ex;
var key_resp_easy_ex;
var Instr3Clock;
var key_resp_intro_3;
var text_intro_3;
var Example_long_easyClock;
var image_easy_ex_2;
var key_resp_easy_ex_2;
var Instr4Clock;
var key_resp_intro_4;
var text_intro_4;
var Example_sandwich_easyClock;
var image_easy_ex_3;
var key_resp_easy_ex_3;
var Training_Easy_StartClock;
var key_resp_easy_instr_2;
var text_easy_instr_2;
var pracRedoClock;
var text_redo;
var key_resp_redo;
var Training_EasyClock;
var image_easy;
var key_resp_easy;
var Question_Mark;
var rightcall_easy;
var falsealarm_easy;
var rightcall_rate_easy;
var correctrejection_rate_easy;
var failed_easy;
var numcorr_easy;
var correctrate_easy;
var aftereasy_loop_rep;
var Training_Easy_FeedbackClock;
var text_easy_feedback;
var key_resp_easy_feedback;
var Training_Normal_InstrClock;
var key_resp_normal_instr;
var text_normal_instr;
var Example_sandwich_normalClock;
var image_normal_ex;
var key_resp_normal_ex;
var Training_Normal_StartClock;
var key_resp_normal_instr_2;
var text_normal_instr_2;
var Training_NormalClock;
var image_normal;
var key_resp_normal;
var Question_Mark_normal;
var numcorr_normal;
var rightcall_normal;
var falsealarm_normal;
var correctrate_normal;
var rightcall_rate_normal;
var correctrejection_rate_normal;
var failed_normal;
var afternormal_loop_rep;
var Training_Normal_FeedbackClock;
var text_normal_feedback;
var key_resp_easy_feedback_2;
var Instr5Clock;
var key_resp_instr5;
var text_instr5;
var IncentiveInfoClock;
var key_resp_incentive;
var text_incentive;
var Instr6Clock;
var key_resp_instr6;
var text_instr6;
var RunClock;
var runtext;
var runNum;
var TrialClock;
var image_trial;
var key_resp_trial;
var Question_Mark_trial;
var numcorr_trial;
var rightcall_trial;
var falsealarm_trial;
var correctrate_trial;
var rightcall_rate_trial;
var correctrejection_rate_trial;
var FeedbackClock;
var bonus;
var text_feedback;
var text_original;
var arrow_rectangle;
var arrow_triangle;
var text_current;
var image;
var text_loss;
var key_resp_feedback;
var text_continue;
var NASA_instClock;
var NASA_inst_text;
var NASA_inst_cont;
var NASAClock;
var NASA_text;
var NASA_slider;
var labels;
var counter;
var NASA_cont;
var NASA_cont_inst;
var BreakClock;
var text_timeout;
var timeoutTimer;
var key_resp_break;
var text_break;
var Final1Clock;
var key_resp_end_2;
var text_end_2;
var DSSQ_think_instClock;
var text_DSSQ_think_inst;
var key_resp_DSSQ_think_inst;
var DSSQ_thinkClock;
var DSSQ_think_text;
var DSSQ_think_scale;
var DSSQ_think_resp;
var Final2Clock;
var key_resp_end;
var text_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instr"
  InstrClock = new util.Clock();
  prac = 0;
  
  key_resp_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_intro',
    text: 'Welcome, and thank you very much for taking part in this study! \n\nWe are interested in how different factors affect people’s ability to stay focused on a task, and how that influences their perception of time.\n\n\nPlease press the spacebar to go to the next screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Consent1"
  Consent1Clock = new util.Clock();
  consent1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent1_text',
    text: 'You may choose to stop your participation at any time by pressing the Esc key on your keyboard.\n\n\nPlease press the spacebar to go to the next screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  consent1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SIPI_inst"
  SIPI_instClock = new util.Clock();
  IPI_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'IPI_inst_text',
    text: 'Now we’re going to ask you some questions about your attention in everyday life. \nAnswer questions as they apply to your life today - not 1 or 2 or 20 years ago.\n\nIndicate to what extent each item applies to you, or is true for you by choosing from the five alternatives listed next:\n\n1. Definitely not true for me\n2. Usually not true for me\n3. Usually true for me\n4. True for me\n5. Very true for me\n\n(SPACEBAR to start)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  IPI_inst_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SIPI"
  SIPIClock = new util.Clock();
  SIPI_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'SIPI_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  SIPI_scale = new visual.TextStim({
    win: psychoJS.window,
    name: 'SIPI_scale',
    text: '1. definitely not true for me\n2. usually not true for me\n3. usually true for me\n4. true for me\n5. very true for me',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.13)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  SIPI_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PAS_inst"
  PAS_instClock = new util.Clock();
  PAS_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'PAS_inst_text',
    text: 'Now we’re going to ask you some questions about how you feel right now. \n\nDifferent people react very differently to the same situations.\n\nYou will be presented with a list of words. Indicate to what extent you feel that way right now, that is, at the present moment.\n\n(SPACEBAR to start)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  PAS_inst_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PAS"
  PASClock = new util.Clock();
  PAS_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'PAS_question',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  PAS_scale = new visual.TextStim({
    win: psychoJS.window,
    name: 'PAS_scale',
    text: '1. very slightly or not at all\n2. a little\n3. moderately\n4. quite a bit\n5. extremely',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.13)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  PAS_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Training_Easy_Instr"
  Training_Easy_InstrClock = new util.Clock();
  key_resp_easy_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_easy_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_easy_instr',
    text: 'In this task, you will see pictures of flowers. Most of them will appear for a relatively short time, but a few will be presented for longer. Your job is to press the “F” key for the pictures presented for the standard (shorter) duration, and press the “J” key for those that are presented for “too long”.\n\nPress the spacebar to go to the next screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instr1"
  Instr1Clock = new util.Clock();
  key_resp_intro_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_intro_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_intro_6',
    text: 'We’ll start with an easy version to make sure the instructions are clear. \n\nIn this training session, the shorter time will be 800 milliseconds, and the longer time will be 1600 milliseconds. \n\nPress the spacebar to go to the next screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instr2"
  Instr2Clock = new util.Clock();
  key_resp_intro_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_intro_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_intro_2',
    text: 'Here are a couple of examples of the standard, shorter duration.  During the task, press “F” AFTER these trials, during the response period, with the question mark on the screen (not while the picture is still being presented). \n\nYou don’t need to press anything during these examples. \n\nPress the spacebar to see the examples.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Example_short_easy"
  Example_short_easyClock = new util.Clock();
  image_easy_ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_easy_ex', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8, 0.48],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_easy_ex = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr3"
  Instr3Clock = new util.Clock();
  key_resp_intro_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_intro_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_intro_3',
    text: 'Next, you will see an example of the 1600-millisecond (longer) duration, followed by a response period.  Remember, when stimuli are presented for this duration, press “J” AFTER these trials, during the response period with the question mark on the screen (not while the picture is still being presented). \n\nPress the spacebar to see the examples.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Example_long_easy"
  Example_long_easyClock = new util.Clock();
  image_easy_ex_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_easy_ex_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8, 0.48],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_easy_ex_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr4"
  Instr4Clock = new util.Clock();
  key_resp_intro_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_intro_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_intro_4',
    text: 'Lastly, we will show you how the long-duration picture is presented among short-duration ones. To demonstrate, we will present it in a short-long-short order - notice now the second picture in this series stays on a bit longer.\n\nPress the spacebar to see the examples.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Example_sandwich_easy"
  Example_sandwich_easyClock = new util.Clock();
  image_easy_ex_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_easy_ex_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8, 0.48],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_easy_ex_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Training_Easy_Start"
  Training_Easy_StartClock = new util.Clock();
  key_resp_easy_instr_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_easy_instr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_easy_instr_2',
    text: 'We will now start with the easy training session that lasts for about 1 minute, during which you will receive feedback to become familiar with the task. Remember, press “f” for the short-duration pictures,and “j” for the long-duration ones. Make your response after the picture, when the question mark is on the screen.\n\nYou need to reach a correct detection rate of 75% in order to move on to the other parts of the experiment. You will have two tries before moving on to the other parts. \n\nPress the spacebar to begin the session. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "pracRedo"
  pracRedoClock = new util.Clock();
  text_redo = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_redo',
    text: 'Let’s redo the practice!\n\nPay attention to the duration of the pictures. Press “f” for the short-duration pictures,and “j” for the long-duration ones. Make your response after the picture, when the question mark is on the screen.\n\n(SPACEBAR to begin)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_redo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Training_Easy"
  Training_EasyClock = new util.Clock();
  image_easy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_easy', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8, 0.48],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_easy = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Question_Mark = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question_Mark',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  rightcall_easy = 0;
  falsealarm_easy = 0;
  rightcall_rate_easy = 0;
  correctrejection_rate_easy = 0;
  failed_easy = 0;
  numcorr_easy = 0;
  correctrate_easy = 0;
  aftereasy_loop_rep = 1;
  
  // Initialize components for Routine "Training_Easy_Feedback"
  Training_Easy_FeedbackClock = new util.Clock();
  text_easy_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_easy_feedback',
    text: 'Well done! you correctly identified x/y of the targets with a z% correct rate. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_easy_feedback = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Training_Normal_Instr"
  Training_Normal_InstrClock = new util.Clock();
  key_resp_normal_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_normal_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_normal_instr',
    text: 'In the next training session, the difference between the longer and shorter time will decrease. Namely, the longer time will become 1070 milliseconds, instead of the previous 1600 milliseconds. The shorter time will remain the same. Remember, “f” for short pictures and “j” for long pictures! \n\nOnce again, we will show you how the long-duration picture is presented among short-duration ones. To demonstrate, we will present it in a short-long-short order - notice now the second picture in this series stays on a bit longer.\n\nPress the spacebar to see the examples.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Example_sandwich_normal"
  Example_sandwich_normalClock = new util.Clock();
  image_normal_ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_normal_ex', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8, 0.48],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_normal_ex = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Training_Normal_Start"
  Training_Normal_StartClock = new util.Clock();
  key_resp_normal_instr_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_normal_instr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_normal_instr_2',
    text: 'We will now go into the normal training session that lasts for about 1 minute, during which you will receive feedback to become familiar with the task. Remember, press “f” for the short-duration pictures,and “j” for the long-duration ones. Make your response after the picture, when the question mark is on the screen.\n\nYou need to reach a correct detection rate of 75% in order to move on to the main experiment. You will have 4 tries before moving on to the main experiment. \n\nPress the spacebar to begin the session. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Training_Normal"
  Training_NormalClock = new util.Clock();
  image_normal = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_normal', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8, 0.48],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_normal = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Question_Mark_normal = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question_Mark_normal',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  numcorr_normal = 0;
  rightcall_normal = 0;
  falsealarm_normal = 0;
  correctrate_normal = 0;
  rightcall_rate_normal = 0;
  correctrejection_rate_normal = 0;
  failed_normal = 0;
  afternormal_loop_rep = 1;
  
  // Initialize components for Routine "Training_Normal_Feedback"
  Training_Normal_FeedbackClock = new util.Clock();
  text_normal_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_normal_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_easy_feedback_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr5"
  Instr5Clock = new util.Clock();
  key_resp_instr5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_instr5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr5',
    text: 'Next you will go into the actual experiment. You will be completing 10 runs, with each one lasting for 4 minutes. \n\nAlthough this task is ‘easy’ in some ways, it is very sensitive to lapses of attention.  It’s ok if you make some mistakes!  However, if your performance on either the task or questionnaires is too low/looks like you were not putting a good effort, your results may be disqualified and you may not be paid.\n\nPress <space> to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "IncentiveInfo"
  IncentiveInfoClock = new util.Clock();
  key_resp_incentive = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_incentive = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_incentive',
    text: 'You can earn up to 10 dollars as bonus money by making as many correct responses as you can. \n\nIf all of your responses are correct, you could get the whole of 10 dollars! \n\nYou will be paid through Prolific after you complete the experiment and your data has been reviewed.\n\n\nPress <space> to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instr6"
  Instr6Clock = new util.Clock();
  key_resp_instr6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_instr6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr6',
    text: 'Ready to start the main task? Press the “R” key to begin running the experiment. Good luck! \n\n\nPress “f” for the short-duration pictures,and “j” for the long-duration ones, and make your response during the period when a “?” is on the screen. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Run"
  RunClock = new util.Clock();
  runtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'runtext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  runNum = 0;
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  image_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_trial', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8, 0.48],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_trial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Question_Mark_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question_Mark_trial',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  numcorr_trial = 0;
  rightcall_trial = 0;
  falsealarm_trial = 0;
  correctrate_trial = 0;
  rightcall_rate_trial = 0;
  correctrejection_rate_trial = 0;
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  bonus = 0;
  
  text_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_original = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_original',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  arrow_rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'arrow_rectangle', 
    width: [0.05, 0.15][0], height: [0.05, 0.15][1],
    ori: 0.0, pos: [0, (- 0.05)],
    lineWidth: 1.0, lineColor: new util.Color('green'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  arrow_triangle = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow_triangle', 
    vertices: [[-[0.12, 0.07][0]/2.0, -[0.12, 0.07][1]/2.0], [+[0.12, 0.07][0]/2.0, -[0.12, 0.07][1]/2.0], [0, [0.12, 0.07][1]/2.0]],
    ori: 180.0, pos: [0, (- 0.15)],
    lineWidth: 1.0, lineColor: new util.Color('green'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  text_current = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_current',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'gain.png', mask : undefined,
    ori : 0.0, pos : [0.4, (- 0.3)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_loss = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_loss',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.65, (- 0.35)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  key_resp_feedback = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_continue',
    text: 'Press “c” to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "NASA_inst"
  NASA_instClock = new util.Clock();
  NASA_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'NASA_inst_text',
    text: 'Now we are going to ask questions about your subjective mental workload during the task. \n\nUse your mouse to click at the point or at the interval that best indicates your experience of the task.\n\nThere will be a short break after this questionnaire.\n\n(SPACEBAR to continue)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  NASA_inst_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "NASA"
  NASAClock = new util.Clock();
  NASA_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'NASA_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  NASA_slider = new visual.Slider({
    win: psychoJS.window, name: 'NASA_slider',
    size: [0.9, 0.07], pos: [0, (- 0.1)], units: 'height',
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    granularity: 1, style: ["RATING"],
    color: new util.Color([0.992, 0.992, 0.992]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  labels = new visual.TextStim({
    win: psychoJS.window,
    name: 'labels',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  counter = 1;
  
  NASA_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  NASA_cont_inst = new visual.TextStim({
    win: psychoJS.window,
    name: 'NASA_cont_inst',
    text: '(Use your mouse to click on the scale and press "return")',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  text_timeout = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_timeout',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: 0.0 
  });
  
  timeoutTimer = new util.Clock();
  key_resp_break = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_break = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_break',
    text: 'Thank you for your response to the questions! If you need to take a short stretch break before starting the time-judgment task again, please go ahead now. However, if you take longer than 5 minutes before restarting the task, the experiment will time out and end automatically.\n\nPress <space> to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Final1"
  Final1Clock = new util.Clock();
  key_resp_end_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_end_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_2',
    text: 'Thank you! You have completed the time judgment part of the experiment.\n\nNext we’ll ask you just a few questions that help assess how doing such a task might have changed your mental/emotional state since starting the experiment. Just a few more things before you’re done! \n\nPress <space> to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "DSSQ_think_inst"
  DSSQ_think_instClock = new util.Clock();
  text_DSSQ_think_inst = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_DSSQ_think_inst',
    text: "This next set of questions concerns the kinds of thoughts that go through people's heads at particular times, for example while they are doing some task or activity. \n\nPlease indicate roughly how often you had each thought WHILE PERFORMING THE TASK, by circling a number from the list below.\n1 = Never \n2 = Once \n3 = A few times\n4 = Often\n5 = Very often\n\n(SPACEBAR to start)",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_DSSQ_think_inst = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "DSSQ_think"
  DSSQ_thinkClock = new util.Clock();
  DSSQ_think_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'DSSQ_think_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  DSSQ_think_scale = new visual.TextStim({
    win: psychoJS.window,
    name: 'DSSQ_think_scale',
    text: '1 = Never \n2 = Once \n3 = A few times\n4 = Often\n5 = Very often',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.13)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  DSSQ_think_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Final2"
  Final2Clock = new util.Clock();
  key_resp_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'Thank you! You have completed the experiment. \n\nAfter you press space, you will be redirected back to Prolific.\n\nPress <space> to exit',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var skip;
var currentLoop;
function skipLoopBegin(skipLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    skip = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'skip'
    });
    psychoJS.experiment.addLoop(skip); // add the loop to the experiment
    currentLoop = skip;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    skip.forEach(function() {
      const snapshot = skip.getSnapshot();
    
      skipLoopScheduler.add(importConditions(snapshot));
      skipLoopScheduler.add(InstrRoutineBegin(snapshot));
      skipLoopScheduler.add(InstrRoutineEachFrame());
      skipLoopScheduler.add(InstrRoutineEnd());
      skipLoopScheduler.add(Consent1RoutineBegin(snapshot));
      skipLoopScheduler.add(Consent1RoutineEachFrame());
      skipLoopScheduler.add(Consent1RoutineEnd());
      skipLoopScheduler.add(SIPI_instRoutineBegin(snapshot));
      skipLoopScheduler.add(SIPI_instRoutineEachFrame());
      skipLoopScheduler.add(SIPI_instRoutineEnd());
      const SIPI_loopLoopScheduler = new Scheduler(psychoJS);
      skipLoopScheduler.add(SIPI_loopLoopBegin(SIPI_loopLoopScheduler, snapshot));
      skipLoopScheduler.add(SIPI_loopLoopScheduler);
      skipLoopScheduler.add(SIPI_loopLoopEnd);
      skipLoopScheduler.add(PAS_instRoutineBegin(snapshot));
      skipLoopScheduler.add(PAS_instRoutineEachFrame());
      skipLoopScheduler.add(PAS_instRoutineEnd());
      const PAS_loop1LoopScheduler = new Scheduler(psychoJS);
      skipLoopScheduler.add(PAS_loop1LoopBegin(PAS_loop1LoopScheduler, snapshot));
      skipLoopScheduler.add(PAS_loop1LoopScheduler);
      skipLoopScheduler.add(PAS_loop1LoopEnd);
      skipLoopScheduler.add(Training_Easy_InstrRoutineBegin(snapshot));
      skipLoopScheduler.add(Training_Easy_InstrRoutineEachFrame());
      skipLoopScheduler.add(Training_Easy_InstrRoutineEnd());
      skipLoopScheduler.add(Instr1RoutineBegin(snapshot));
      skipLoopScheduler.add(Instr1RoutineEachFrame());
      skipLoopScheduler.add(Instr1RoutineEnd());
      skipLoopScheduler.add(Instr2RoutineBegin(snapshot));
      skipLoopScheduler.add(Instr2RoutineEachFrame());
      skipLoopScheduler.add(Instr2RoutineEnd());
      const short_easyLoopScheduler = new Scheduler(psychoJS);
      skipLoopScheduler.add(short_easyLoopBegin(short_easyLoopScheduler, snapshot));
      skipLoopScheduler.add(short_easyLoopScheduler);
      skipLoopScheduler.add(short_easyLoopEnd);
      skipLoopScheduler.add(Instr3RoutineBegin(snapshot));
      skipLoopScheduler.add(Instr3RoutineEachFrame());
      skipLoopScheduler.add(Instr3RoutineEnd());
      const long_easyLoopScheduler = new Scheduler(psychoJS);
      skipLoopScheduler.add(long_easyLoopBegin(long_easyLoopScheduler, snapshot));
      skipLoopScheduler.add(long_easyLoopScheduler);
      skipLoopScheduler.add(long_easyLoopEnd);
      skipLoopScheduler.add(Instr4RoutineBegin(snapshot));
      skipLoopScheduler.add(Instr4RoutineEachFrame());
      skipLoopScheduler.add(Instr4RoutineEnd());
      const sandwich_easyLoopScheduler = new Scheduler(psychoJS);
      skipLoopScheduler.add(sandwich_easyLoopBegin(sandwich_easyLoopScheduler, snapshot));
      skipLoopScheduler.add(sandwich_easyLoopScheduler);
      skipLoopScheduler.add(sandwich_easyLoopEnd);
      skipLoopScheduler.add(Training_Easy_StartRoutineBegin(snapshot));
      skipLoopScheduler.add(Training_Easy_StartRoutineEachFrame());
      skipLoopScheduler.add(Training_Easy_StartRoutineEnd());
      const easy_repeatLoopScheduler = new Scheduler(psychoJS);
      skipLoopScheduler.add(easy_repeatLoopBegin(easy_repeatLoopScheduler, snapshot));
      skipLoopScheduler.add(easy_repeatLoopScheduler);
      skipLoopScheduler.add(easy_repeatLoopEnd);
      skipLoopScheduler.add(endLoopIteration(skipLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var SIPI_loop;
function SIPI_loopLoopBegin(SIPI_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SIPI_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SIPI.xlsx',
      seed: undefined, name: 'SIPI_loop'
    });
    psychoJS.experiment.addLoop(SIPI_loop); // add the loop to the experiment
    currentLoop = SIPI_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    SIPI_loop.forEach(function() {
      const snapshot = SIPI_loop.getSnapshot();
    
      SIPI_loopLoopScheduler.add(importConditions(snapshot));
      SIPI_loopLoopScheduler.add(SIPIRoutineBegin(snapshot));
      SIPI_loopLoopScheduler.add(SIPIRoutineEachFrame());
      SIPI_loopLoopScheduler.add(SIPIRoutineEnd());
      SIPI_loopLoopScheduler.add(endLoopIteration(SIPI_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function SIPI_loopLoopEnd() {
  psychoJS.experiment.removeLoop(SIPI_loop);

  return Scheduler.Event.NEXT;
}


var PAS_loop1;
function PAS_loop1LoopBegin(PAS_loop1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    PAS_loop1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'PAS.xlsx',
      seed: undefined, name: 'PAS_loop1'
    });
    psychoJS.experiment.addLoop(PAS_loop1); // add the loop to the experiment
    currentLoop = PAS_loop1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    PAS_loop1.forEach(function() {
      const snapshot = PAS_loop1.getSnapshot();
    
      PAS_loop1LoopScheduler.add(importConditions(snapshot));
      PAS_loop1LoopScheduler.add(PASRoutineBegin(snapshot));
      PAS_loop1LoopScheduler.add(PASRoutineEachFrame());
      PAS_loop1LoopScheduler.add(PASRoutineEnd());
      PAS_loop1LoopScheduler.add(endLoopIteration(PAS_loop1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function PAS_loop1LoopEnd() {
  psychoJS.experiment.removeLoop(PAS_loop1);

  return Scheduler.Event.NEXT;
}


var short_easy;
function short_easyLoopBegin(short_easyLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    short_easy = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'example_short_easy.xlsx',
      seed: undefined, name: 'short_easy'
    });
    psychoJS.experiment.addLoop(short_easy); // add the loop to the experiment
    currentLoop = short_easy;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    short_easy.forEach(function() {
      const snapshot = short_easy.getSnapshot();
    
      short_easyLoopScheduler.add(importConditions(snapshot));
      short_easyLoopScheduler.add(Example_short_easyRoutineBegin(snapshot));
      short_easyLoopScheduler.add(Example_short_easyRoutineEachFrame());
      short_easyLoopScheduler.add(Example_short_easyRoutineEnd());
      short_easyLoopScheduler.add(endLoopIteration(short_easyLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function short_easyLoopEnd() {
  psychoJS.experiment.removeLoop(short_easy);

  return Scheduler.Event.NEXT;
}


var long_easy;
function long_easyLoopBegin(long_easyLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    long_easy = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'example_long_easy.xlsx',
      seed: undefined, name: 'long_easy'
    });
    psychoJS.experiment.addLoop(long_easy); // add the loop to the experiment
    currentLoop = long_easy;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    long_easy.forEach(function() {
      const snapshot = long_easy.getSnapshot();
    
      long_easyLoopScheduler.add(importConditions(snapshot));
      long_easyLoopScheduler.add(Example_long_easyRoutineBegin(snapshot));
      long_easyLoopScheduler.add(Example_long_easyRoutineEachFrame());
      long_easyLoopScheduler.add(Example_long_easyRoutineEnd());
      long_easyLoopScheduler.add(endLoopIteration(long_easyLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function long_easyLoopEnd() {
  psychoJS.experiment.removeLoop(long_easy);

  return Scheduler.Event.NEXT;
}


var sandwich_easy;
function sandwich_easyLoopBegin(sandwich_easyLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sandwich_easy = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'example_sandwich_easy.xlsx',
      seed: undefined, name: 'sandwich_easy'
    });
    psychoJS.experiment.addLoop(sandwich_easy); // add the loop to the experiment
    currentLoop = sandwich_easy;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    sandwich_easy.forEach(function() {
      const snapshot = sandwich_easy.getSnapshot();
    
      sandwich_easyLoopScheduler.add(importConditions(snapshot));
      sandwich_easyLoopScheduler.add(Example_sandwich_easyRoutineBegin(snapshot));
      sandwich_easyLoopScheduler.add(Example_sandwich_easyRoutineEachFrame());
      sandwich_easyLoopScheduler.add(Example_sandwich_easyRoutineEnd());
      sandwich_easyLoopScheduler.add(endLoopIteration(sandwich_easyLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function sandwich_easyLoopEnd() {
  psychoJS.experiment.removeLoop(sandwich_easy);

  return Scheduler.Event.NEXT;
}


var easy_repeat;
function easy_repeatLoopBegin(easy_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    easy_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'chooseEasyTraining.xlsx',
      seed: undefined, name: 'easy_repeat'
    });
    psychoJS.experiment.addLoop(easy_repeat); // add the loop to the experiment
    currentLoop = easy_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    easy_repeat.forEach(function() {
      const snapshot = easy_repeat.getSnapshot();
    
      easy_repeatLoopScheduler.add(importConditions(snapshot));
      const loop_redo1LoopScheduler = new Scheduler(psychoJS);
      easy_repeatLoopScheduler.add(loop_redo1LoopBegin(loop_redo1LoopScheduler, snapshot));
      easy_repeatLoopScheduler.add(loop_redo1LoopScheduler);
      easy_repeatLoopScheduler.add(loop_redo1LoopEnd);
      const loop_easyLoopScheduler = new Scheduler(psychoJS);
      easy_repeatLoopScheduler.add(loop_easyLoopBegin(loop_easyLoopScheduler, snapshot));
      easy_repeatLoopScheduler.add(loop_easyLoopScheduler);
      easy_repeatLoopScheduler.add(loop_easyLoopEnd);
      easy_repeatLoopScheduler.add(Training_Easy_FeedbackRoutineBegin(snapshot));
      easy_repeatLoopScheduler.add(Training_Easy_FeedbackRoutineEachFrame());
      easy_repeatLoopScheduler.add(Training_Easy_FeedbackRoutineEnd());
      easy_repeatLoopScheduler.add(endLoopIteration(easy_repeatLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var loop_redo1;
function loop_redo1LoopBegin(loop_redo1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_redo1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: prac, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_redo1'
    });
    psychoJS.experiment.addLoop(loop_redo1); // add the loop to the experiment
    currentLoop = loop_redo1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    loop_redo1.forEach(function() {
      const snapshot = loop_redo1.getSnapshot();
    
      loop_redo1LoopScheduler.add(importConditions(snapshot));
      loop_redo1LoopScheduler.add(pracRedoRoutineBegin(snapshot));
      loop_redo1LoopScheduler.add(pracRedoRoutineEachFrame());
      loop_redo1LoopScheduler.add(pracRedoRoutineEnd());
      loop_redo1LoopScheduler.add(endLoopIteration(loop_redo1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_redo1LoopEnd() {
  psychoJS.experiment.removeLoop(loop_redo1);

  return Scheduler.Event.NEXT;
}


var loop_easy;
function loop_easyLoopBegin(loop_easyLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_easy = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: condsFile,
      seed: undefined, name: 'loop_easy'
    });
    psychoJS.experiment.addLoop(loop_easy); // add the loop to the experiment
    currentLoop = loop_easy;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    loop_easy.forEach(function() {
      const snapshot = loop_easy.getSnapshot();
    
      loop_easyLoopScheduler.add(importConditions(snapshot));
      loop_easyLoopScheduler.add(Training_EasyRoutineBegin(snapshot));
      loop_easyLoopScheduler.add(Training_EasyRoutineEachFrame());
      loop_easyLoopScheduler.add(Training_EasyRoutineEnd());
      loop_easyLoopScheduler.add(endLoopIteration(loop_easyLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_easyLoopEnd() {
  psychoJS.experiment.removeLoop(loop_easy);

  return Scheduler.Event.NEXT;
}


async function easy_repeatLoopEnd() {
  psychoJS.experiment.removeLoop(easy_repeat);

  return Scheduler.Event.NEXT;
}


async function skipLoopEnd() {
  psychoJS.experiment.removeLoop(skip);

  return Scheduler.Event.NEXT;
}


var aftereasy_loop;
function aftereasy_loopLoopBegin(aftereasy_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    aftereasy_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: aftereasy_loop_rep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'aftereasy_loop'
    });
    psychoJS.experiment.addLoop(aftereasy_loop); // add the loop to the experiment
    currentLoop = aftereasy_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    aftereasy_loop.forEach(function() {
      const snapshot = aftereasy_loop.getSnapshot();
    
      aftereasy_loopLoopScheduler.add(importConditions(snapshot));
      aftereasy_loopLoopScheduler.add(Training_Normal_InstrRoutineBegin(snapshot));
      aftereasy_loopLoopScheduler.add(Training_Normal_InstrRoutineEachFrame());
      aftereasy_loopLoopScheduler.add(Training_Normal_InstrRoutineEnd());
      const sandwich_normalLoopScheduler = new Scheduler(psychoJS);
      aftereasy_loopLoopScheduler.add(sandwich_normalLoopBegin(sandwich_normalLoopScheduler, snapshot));
      aftereasy_loopLoopScheduler.add(sandwich_normalLoopScheduler);
      aftereasy_loopLoopScheduler.add(sandwich_normalLoopEnd);
      aftereasy_loopLoopScheduler.add(Training_Normal_StartRoutineBegin(snapshot));
      aftereasy_loopLoopScheduler.add(Training_Normal_StartRoutineEachFrame());
      aftereasy_loopLoopScheduler.add(Training_Normal_StartRoutineEnd());
      const normal_repeatLoopScheduler = new Scheduler(psychoJS);
      aftereasy_loopLoopScheduler.add(normal_repeatLoopBegin(normal_repeatLoopScheduler, snapshot));
      aftereasy_loopLoopScheduler.add(normal_repeatLoopScheduler);
      aftereasy_loopLoopScheduler.add(normal_repeatLoopEnd);
      const afternormal_loopLoopScheduler = new Scheduler(psychoJS);
      aftereasy_loopLoopScheduler.add(afternormal_loopLoopBegin(afternormal_loopLoopScheduler, snapshot));
      aftereasy_loopLoopScheduler.add(afternormal_loopLoopScheduler);
      aftereasy_loopLoopScheduler.add(afternormal_loopLoopEnd);
      aftereasy_loopLoopScheduler.add(endLoopIteration(aftereasy_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var sandwich_normal;
function sandwich_normalLoopBegin(sandwich_normalLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sandwich_normal = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'example_sandwich_normal.xlsx',
      seed: undefined, name: 'sandwich_normal'
    });
    psychoJS.experiment.addLoop(sandwich_normal); // add the loop to the experiment
    currentLoop = sandwich_normal;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    sandwich_normal.forEach(function() {
      const snapshot = sandwich_normal.getSnapshot();
    
      sandwich_normalLoopScheduler.add(importConditions(snapshot));
      sandwich_normalLoopScheduler.add(Example_sandwich_normalRoutineBegin(snapshot));
      sandwich_normalLoopScheduler.add(Example_sandwich_normalRoutineEachFrame());
      sandwich_normalLoopScheduler.add(Example_sandwich_normalRoutineEnd());
      sandwich_normalLoopScheduler.add(endLoopIteration(sandwich_normalLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function sandwich_normalLoopEnd() {
  psychoJS.experiment.removeLoop(sandwich_normal);

  return Scheduler.Event.NEXT;
}


var normal_repeat;
function normal_repeatLoopBegin(normal_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    normal_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'chooseNormalTraining.xlsx',
      seed: undefined, name: 'normal_repeat'
    });
    psychoJS.experiment.addLoop(normal_repeat); // add the loop to the experiment
    currentLoop = normal_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    normal_repeat.forEach(function() {
      const snapshot = normal_repeat.getSnapshot();
    
      normal_repeatLoopScheduler.add(importConditions(snapshot));
      const loop_redo2LoopScheduler = new Scheduler(psychoJS);
      normal_repeatLoopScheduler.add(loop_redo2LoopBegin(loop_redo2LoopScheduler, snapshot));
      normal_repeatLoopScheduler.add(loop_redo2LoopScheduler);
      normal_repeatLoopScheduler.add(loop_redo2LoopEnd);
      const loop_normalLoopScheduler = new Scheduler(psychoJS);
      normal_repeatLoopScheduler.add(loop_normalLoopBegin(loop_normalLoopScheduler, snapshot));
      normal_repeatLoopScheduler.add(loop_normalLoopScheduler);
      normal_repeatLoopScheduler.add(loop_normalLoopEnd);
      normal_repeatLoopScheduler.add(Training_Normal_FeedbackRoutineBegin(snapshot));
      normal_repeatLoopScheduler.add(Training_Normal_FeedbackRoutineEachFrame());
      normal_repeatLoopScheduler.add(Training_Normal_FeedbackRoutineEnd());
      normal_repeatLoopScheduler.add(endLoopIteration(normal_repeatLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var loop_redo2;
function loop_redo2LoopBegin(loop_redo2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_redo2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: prac, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_redo2'
    });
    psychoJS.experiment.addLoop(loop_redo2); // add the loop to the experiment
    currentLoop = loop_redo2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    loop_redo2.forEach(function() {
      const snapshot = loop_redo2.getSnapshot();
    
      loop_redo2LoopScheduler.add(importConditions(snapshot));
      loop_redo2LoopScheduler.add(pracRedoRoutineBegin(snapshot));
      loop_redo2LoopScheduler.add(pracRedoRoutineEachFrame());
      loop_redo2LoopScheduler.add(pracRedoRoutineEnd());
      loop_redo2LoopScheduler.add(endLoopIteration(loop_redo2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_redo2LoopEnd() {
  psychoJS.experiment.removeLoop(loop_redo2);

  return Scheduler.Event.NEXT;
}


var loop_normal;
function loop_normalLoopBegin(loop_normalLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_normal = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: condsFile,
      seed: undefined, name: 'loop_normal'
    });
    psychoJS.experiment.addLoop(loop_normal); // add the loop to the experiment
    currentLoop = loop_normal;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    loop_normal.forEach(function() {
      const snapshot = loop_normal.getSnapshot();
    
      loop_normalLoopScheduler.add(importConditions(snapshot));
      loop_normalLoopScheduler.add(Training_NormalRoutineBegin(snapshot));
      loop_normalLoopScheduler.add(Training_NormalRoutineEachFrame());
      loop_normalLoopScheduler.add(Training_NormalRoutineEnd());
      loop_normalLoopScheduler.add(endLoopIteration(loop_normalLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_normalLoopEnd() {
  psychoJS.experiment.removeLoop(loop_normal);

  return Scheduler.Event.NEXT;
}


async function normal_repeatLoopEnd() {
  psychoJS.experiment.removeLoop(normal_repeat);

  return Scheduler.Event.NEXT;
}


var afternormal_loop;
function afternormal_loopLoopBegin(afternormal_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    afternormal_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: afternormal_loop_rep, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'afternormal_loop'
    });
    psychoJS.experiment.addLoop(afternormal_loop); // add the loop to the experiment
    currentLoop = afternormal_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    afternormal_loop.forEach(function() {
      const snapshot = afternormal_loop.getSnapshot();
    
      afternormal_loopLoopScheduler.add(importConditions(snapshot));
      afternormal_loopLoopScheduler.add(Instr5RoutineBegin(snapshot));
      afternormal_loopLoopScheduler.add(Instr5RoutineEachFrame());
      afternormal_loopLoopScheduler.add(Instr5RoutineEnd());
      afternormal_loopLoopScheduler.add(IncentiveInfoRoutineBegin(snapshot));
      afternormal_loopLoopScheduler.add(IncentiveInfoRoutineEachFrame());
      afternormal_loopLoopScheduler.add(IncentiveInfoRoutineEnd());
      afternormal_loopLoopScheduler.add(Instr6RoutineBegin(snapshot));
      afternormal_loopLoopScheduler.add(Instr6RoutineEachFrame());
      afternormal_loopLoopScheduler.add(Instr6RoutineEnd());
      const outerLoopScheduler = new Scheduler(psychoJS);
      afternormal_loopLoopScheduler.add(outerLoopBegin(outerLoopScheduler, snapshot));
      afternormal_loopLoopScheduler.add(outerLoopScheduler);
      afternormal_loopLoopScheduler.add(outerLoopEnd);
      afternormal_loopLoopScheduler.add(Final1RoutineBegin(snapshot));
      afternormal_loopLoopScheduler.add(Final1RoutineEachFrame());
      afternormal_loopLoopScheduler.add(Final1RoutineEnd());
      afternormal_loopLoopScheduler.add(PAS_instRoutineBegin(snapshot));
      afternormal_loopLoopScheduler.add(PAS_instRoutineEachFrame());
      afternormal_loopLoopScheduler.add(PAS_instRoutineEnd());
      const PAS_loop2LoopScheduler = new Scheduler(psychoJS);
      afternormal_loopLoopScheduler.add(PAS_loop2LoopBegin(PAS_loop2LoopScheduler, snapshot));
      afternormal_loopLoopScheduler.add(PAS_loop2LoopScheduler);
      afternormal_loopLoopScheduler.add(PAS_loop2LoopEnd);
      afternormal_loopLoopScheduler.add(DSSQ_think_instRoutineBegin(snapshot));
      afternormal_loopLoopScheduler.add(DSSQ_think_instRoutineEachFrame());
      afternormal_loopLoopScheduler.add(DSSQ_think_instRoutineEnd());
      const DSSQ_think_loopLoopScheduler = new Scheduler(psychoJS);
      afternormal_loopLoopScheduler.add(DSSQ_think_loopLoopBegin(DSSQ_think_loopLoopScheduler, snapshot));
      afternormal_loopLoopScheduler.add(DSSQ_think_loopLoopScheduler);
      afternormal_loopLoopScheduler.add(DSSQ_think_loopLoopEnd);
      afternormal_loopLoopScheduler.add(endLoopIteration(afternormal_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var outer;
function outerLoopBegin(outerLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    outer = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'chooseBlock.xlsx',
      seed: undefined, name: 'outer'
    });
    psychoJS.experiment.addLoop(outer); // add the loop to the experiment
    currentLoop = outer;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    outer.forEach(function() {
      const snapshot = outer.getSnapshot();
    
      outerLoopScheduler.add(importConditions(snapshot));
      outerLoopScheduler.add(RunRoutineBegin(snapshot));
      outerLoopScheduler.add(RunRoutineEachFrame());
      outerLoopScheduler.add(RunRoutineEnd());
      const innerLoopScheduler = new Scheduler(psychoJS);
      outerLoopScheduler.add(innerLoopBegin(innerLoopScheduler, snapshot));
      outerLoopScheduler.add(innerLoopScheduler);
      outerLoopScheduler.add(innerLoopEnd);
      outerLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      outerLoopScheduler.add(FeedbackRoutineEachFrame());
      outerLoopScheduler.add(FeedbackRoutineEnd());
      outerLoopScheduler.add(NASA_instRoutineBegin(snapshot));
      outerLoopScheduler.add(NASA_instRoutineEachFrame());
      outerLoopScheduler.add(NASA_instRoutineEnd());
      const NASA_loopLoopScheduler = new Scheduler(psychoJS);
      outerLoopScheduler.add(NASA_loopLoopBegin(NASA_loopLoopScheduler, snapshot));
      outerLoopScheduler.add(NASA_loopLoopScheduler);
      outerLoopScheduler.add(NASA_loopLoopEnd);
      outerLoopScheduler.add(BreakRoutineBegin(snapshot));
      outerLoopScheduler.add(BreakRoutineEachFrame());
      outerLoopScheduler.add(BreakRoutineEnd());
      outerLoopScheduler.add(endLoopIteration(outerLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var inner;
function innerLoopBegin(innerLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    inner = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: condsFile,
      seed: undefined, name: 'inner'
    });
    psychoJS.experiment.addLoop(inner); // add the loop to the experiment
    currentLoop = inner;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    inner.forEach(function() {
      const snapshot = inner.getSnapshot();
    
      innerLoopScheduler.add(importConditions(snapshot));
      innerLoopScheduler.add(TrialRoutineBegin(snapshot));
      innerLoopScheduler.add(TrialRoutineEachFrame());
      innerLoopScheduler.add(TrialRoutineEnd());
      innerLoopScheduler.add(endLoopIteration(innerLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function innerLoopEnd() {
  psychoJS.experiment.removeLoop(inner);

  return Scheduler.Event.NEXT;
}


var NASA_loop;
function NASA_loopLoopBegin(NASA_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    NASA_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'NASA.xlsx',
      seed: undefined, name: 'NASA_loop'
    });
    psychoJS.experiment.addLoop(NASA_loop); // add the loop to the experiment
    currentLoop = NASA_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    NASA_loop.forEach(function() {
      const snapshot = NASA_loop.getSnapshot();
    
      NASA_loopLoopScheduler.add(importConditions(snapshot));
      NASA_loopLoopScheduler.add(NASARoutineBegin(snapshot));
      NASA_loopLoopScheduler.add(NASARoutineEachFrame());
      NASA_loopLoopScheduler.add(NASARoutineEnd());
      NASA_loopLoopScheduler.add(endLoopIteration(NASA_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function NASA_loopLoopEnd() {
  psychoJS.experiment.removeLoop(NASA_loop);

  return Scheduler.Event.NEXT;
}


async function outerLoopEnd() {
  psychoJS.experiment.removeLoop(outer);

  return Scheduler.Event.NEXT;
}


var PAS_loop2;
function PAS_loop2LoopBegin(PAS_loop2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    PAS_loop2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'PAS.xlsx',
      seed: undefined, name: 'PAS_loop2'
    });
    psychoJS.experiment.addLoop(PAS_loop2); // add the loop to the experiment
    currentLoop = PAS_loop2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    PAS_loop2.forEach(function() {
      const snapshot = PAS_loop2.getSnapshot();
    
      PAS_loop2LoopScheduler.add(importConditions(snapshot));
      PAS_loop2LoopScheduler.add(PASRoutineBegin(snapshot));
      PAS_loop2LoopScheduler.add(PASRoutineEachFrame());
      PAS_loop2LoopScheduler.add(PASRoutineEnd());
      PAS_loop2LoopScheduler.add(endLoopIteration(PAS_loop2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function PAS_loop2LoopEnd() {
  psychoJS.experiment.removeLoop(PAS_loop2);

  return Scheduler.Event.NEXT;
}


var DSSQ_think_loop;
function DSSQ_think_loopLoopBegin(DSSQ_think_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    DSSQ_think_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'DSSQ_think.xlsx',
      seed: undefined, name: 'DSSQ_think_loop'
    });
    psychoJS.experiment.addLoop(DSSQ_think_loop); // add the loop to the experiment
    currentLoop = DSSQ_think_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    DSSQ_think_loop.forEach(function() {
      const snapshot = DSSQ_think_loop.getSnapshot();
    
      DSSQ_think_loopLoopScheduler.add(importConditions(snapshot));
      DSSQ_think_loopLoopScheduler.add(DSSQ_thinkRoutineBegin(snapshot));
      DSSQ_think_loopLoopScheduler.add(DSSQ_thinkRoutineEachFrame());
      DSSQ_think_loopLoopScheduler.add(DSSQ_thinkRoutineEnd());
      DSSQ_think_loopLoopScheduler.add(endLoopIteration(DSSQ_think_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function DSSQ_think_loopLoopEnd() {
  psychoJS.experiment.removeLoop(DSSQ_think_loop);

  return Scheduler.Event.NEXT;
}


async function afternormal_loopLoopEnd() {
  psychoJS.experiment.removeLoop(afternormal_loop);

  return Scheduler.Event.NEXT;
}


async function aftereasy_loopLoopEnd() {
  psychoJS.experiment.removeLoop(aftereasy_loop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_intro_allKeys;
var InstrComponents;
function InstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr'-------
    t = 0;
    InstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_intro.keys = undefined;
    key_resp_intro.rt = undefined;
    _key_resp_intro_allKeys = [];
    // keep track of which components have finished
    InstrComponents = [];
    InstrComponents.push(key_resp_intro);
    InstrComponents.push(text_intro);
    
    InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr'-------
    // get current time
    t = InstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_intro* updates
    if (t >= 0.0 && key_resp_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro.tStart = t;  // (not accounting for frame time here)
      key_resp_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.clearEvents(); });
    }

    if (key_resp_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_allKeys = _key_resp_intro_allKeys.concat(theseKeys);
      if (_key_resp_intro_allKeys.length > 0) {
        key_resp_intro.keys = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro.rt = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_intro* updates
    if (t >= 0.0 && text_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_intro.tStart = t;  // (not accounting for frame time here)
      text_intro.frameNStart = frameN;  // exact frame index
      
      text_intro.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstrRoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr'-------
    InstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_intro.stop();
    // the Routine "Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _consent1_resp_allKeys;
var Consent1Components;
function Consent1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Consent1'-------
    t = 0;
    Consent1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    consent1_resp.keys = undefined;
    consent1_resp.rt = undefined;
    _consent1_resp_allKeys = [];
    // keep track of which components have finished
    Consent1Components = [];
    Consent1Components.push(consent1_text);
    Consent1Components.push(consent1_resp);
    
    Consent1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Consent1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Consent1'-------
    // get current time
    t = Consent1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent1_text* updates
    if (t >= 0.0 && consent1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent1_text.tStart = t;  // (not accounting for frame time here)
      consent1_text.frameNStart = frameN;  // exact frame index
      
      consent1_text.setAutoDraw(true);
    }

    
    // *consent1_resp* updates
    if (t >= 0.0 && consent1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent1_resp.tStart = t;  // (not accounting for frame time here)
      consent1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent1_resp.clearEvents(); });
    }

    if (consent1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent1_resp.getKeys({keyList: ['space'], waitRelease: false});
      _consent1_resp_allKeys = _consent1_resp_allKeys.concat(theseKeys);
      if (_consent1_resp_allKeys.length > 0) {
        consent1_resp.keys = _consent1_resp_allKeys[_consent1_resp_allKeys.length - 1].name;  // just the last key pressed
        consent1_resp.rt = _consent1_resp_allKeys[_consent1_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Consent1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Consent1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Consent1'-------
    Consent1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    consent1_resp.stop();
    // the Routine "Consent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _IPI_inst_cont_allKeys;
var SIPI_instComponents;
function SIPI_instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'SIPI_inst'-------
    t = 0;
    SIPI_instClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    IPI_inst_cont.keys = undefined;
    IPI_inst_cont.rt = undefined;
    _IPI_inst_cont_allKeys = [];
    // keep track of which components have finished
    SIPI_instComponents = [];
    SIPI_instComponents.push(IPI_inst_text);
    SIPI_instComponents.push(IPI_inst_cont);
    
    SIPI_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SIPI_instRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'SIPI_inst'-------
    // get current time
    t = SIPI_instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *IPI_inst_text* updates
    if (t >= 0.0 && IPI_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IPI_inst_text.tStart = t;  // (not accounting for frame time here)
      IPI_inst_text.frameNStart = frameN;  // exact frame index
      
      IPI_inst_text.setAutoDraw(true);
    }

    
    // *IPI_inst_cont* updates
    if (t >= 0.0 && IPI_inst_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IPI_inst_cont.tStart = t;  // (not accounting for frame time here)
      IPI_inst_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { IPI_inst_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { IPI_inst_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { IPI_inst_cont.clearEvents(); });
    }

    if (IPI_inst_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = IPI_inst_cont.getKeys({keyList: ['space'], waitRelease: false});
      _IPI_inst_cont_allKeys = _IPI_inst_cont_allKeys.concat(theseKeys);
      if (_IPI_inst_cont_allKeys.length > 0) {
        IPI_inst_cont.keys = _IPI_inst_cont_allKeys[_IPI_inst_cont_allKeys.length - 1].name;  // just the last key pressed
        IPI_inst_cont.rt = _IPI_inst_cont_allKeys[_IPI_inst_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SIPI_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SIPI_instRoutineEnd() {
  return async function () {
    //------Ending Routine 'SIPI_inst'-------
    SIPI_instComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    IPI_inst_cont.stop();
    // the Routine "SIPI_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _SIPI_resp_allKeys;
var SIPIComponents;
function SIPIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'SIPI'-------
    t = 0;
    SIPIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    SIPI_text.setText(SIPI_item);
    SIPI_resp.keys = undefined;
    SIPI_resp.rt = undefined;
    _SIPI_resp_allKeys = [];
    // keep track of which components have finished
    SIPIComponents = [];
    SIPIComponents.push(SIPI_text);
    SIPIComponents.push(SIPI_scale);
    SIPIComponents.push(SIPI_resp);
    
    SIPIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SIPIRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'SIPI'-------
    // get current time
    t = SIPIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SIPI_text* updates
    if (t >= 0.0 && SIPI_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SIPI_text.tStart = t;  // (not accounting for frame time here)
      SIPI_text.frameNStart = frameN;  // exact frame index
      
      SIPI_text.setAutoDraw(true);
    }

    
    // *SIPI_scale* updates
    if (t >= 0.0 && SIPI_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SIPI_scale.tStart = t;  // (not accounting for frame time here)
      SIPI_scale.frameNStart = frameN;  // exact frame index
      
      SIPI_scale.setAutoDraw(true);
    }

    
    // *SIPI_resp* updates
    if (t >= 0.0 && SIPI_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SIPI_resp.tStart = t;  // (not accounting for frame time here)
      SIPI_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SIPI_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SIPI_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SIPI_resp.clearEvents(); });
    }

    if (SIPI_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = SIPI_resp.getKeys({keyList: ['1', '2', '3', '4', '5', 'right'], waitRelease: false});
      _SIPI_resp_allKeys = _SIPI_resp_allKeys.concat(theseKeys);
      if (_SIPI_resp_allKeys.length > 0) {
        SIPI_resp.keys = _SIPI_resp_allKeys[_SIPI_resp_allKeys.length - 1].name;  // just the last key pressed
        SIPI_resp.rt = _SIPI_resp_allKeys[_SIPI_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SIPIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SIPIRoutineEnd() {
  return async function () {
    //------Ending Routine 'SIPI'-------
    SIPIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SIPI_resp.keys', SIPI_resp.keys);
    if (typeof SIPI_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SIPI_resp.rt', SIPI_resp.rt);
        routineTimer.reset();
        }
    
    SIPI_resp.stop();
    // the Routine "SIPI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _PAS_inst_cont_allKeys;
var PAS_instComponents;
function PAS_instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PAS_inst'-------
    t = 0;
    PAS_instClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    PAS_inst_cont.keys = undefined;
    PAS_inst_cont.rt = undefined;
    _PAS_inst_cont_allKeys = [];
    // keep track of which components have finished
    PAS_instComponents = [];
    PAS_instComponents.push(PAS_inst_text);
    PAS_instComponents.push(PAS_inst_cont);
    
    PAS_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PAS_instRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PAS_inst'-------
    // get current time
    t = PAS_instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PAS_inst_text* updates
    if (t >= 0.0 && PAS_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PAS_inst_text.tStart = t;  // (not accounting for frame time here)
      PAS_inst_text.frameNStart = frameN;  // exact frame index
      
      PAS_inst_text.setAutoDraw(true);
    }

    
    // *PAS_inst_cont* updates
    if (t >= 0.0 && PAS_inst_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PAS_inst_cont.tStart = t;  // (not accounting for frame time here)
      PAS_inst_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { PAS_inst_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { PAS_inst_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { PAS_inst_cont.clearEvents(); });
    }

    if (PAS_inst_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = PAS_inst_cont.getKeys({keyList: ['space'], waitRelease: false});
      _PAS_inst_cont_allKeys = _PAS_inst_cont_allKeys.concat(theseKeys);
      if (_PAS_inst_cont_allKeys.length > 0) {
        PAS_inst_cont.keys = _PAS_inst_cont_allKeys[_PAS_inst_cont_allKeys.length - 1].name;  // just the last key pressed
        PAS_inst_cont.rt = _PAS_inst_cont_allKeys[_PAS_inst_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PAS_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PAS_instRoutineEnd() {
  return async function () {
    //------Ending Routine 'PAS_inst'-------
    PAS_instComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    PAS_inst_cont.stop();
    // the Routine "PAS_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _PAS_resp_allKeys;
var PASComponents;
function PASRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PAS'-------
    t = 0;
    PASClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    PAS_question.setText(PAS_item);
    PAS_resp.keys = undefined;
    PAS_resp.rt = undefined;
    _PAS_resp_allKeys = [];
    // keep track of which components have finished
    PASComponents = [];
    PASComponents.push(PAS_question);
    PASComponents.push(PAS_scale);
    PASComponents.push(PAS_resp);
    
    PASComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PASRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PAS'-------
    // get current time
    t = PASClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PAS_question* updates
    if (t >= 0.0 && PAS_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PAS_question.tStart = t;  // (not accounting for frame time here)
      PAS_question.frameNStart = frameN;  // exact frame index
      
      PAS_question.setAutoDraw(true);
    }

    
    // *PAS_scale* updates
    if (t >= 0.0 && PAS_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PAS_scale.tStart = t;  // (not accounting for frame time here)
      PAS_scale.frameNStart = frameN;  // exact frame index
      
      PAS_scale.setAutoDraw(true);
    }

    
    // *PAS_resp* updates
    if (t >= 0.1 && PAS_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PAS_resp.tStart = t;  // (not accounting for frame time here)
      PAS_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { PAS_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { PAS_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { PAS_resp.clearEvents(); });
    }

    if (PAS_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = PAS_resp.getKeys({keyList: ['1', '2', '3', '4', '5', 'right'], waitRelease: false});
      _PAS_resp_allKeys = _PAS_resp_allKeys.concat(theseKeys);
      if (_PAS_resp_allKeys.length > 0) {
        PAS_resp.keys = _PAS_resp_allKeys[_PAS_resp_allKeys.length - 1].name;  // just the last key pressed
        PAS_resp.rt = _PAS_resp_allKeys[_PAS_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PASComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PASRoutineEnd() {
  return async function () {
    //------Ending Routine 'PAS'-------
    PASComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('PAS_resp.keys', PAS_resp.keys);
    if (typeof PAS_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('PAS_resp.rt', PAS_resp.rt);
        routineTimer.reset();
        }
    
    PAS_resp.stop();
    // the Routine "PAS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_easy_instr_allKeys;
var Training_Easy_InstrComponents;
function Training_Easy_InstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Training_Easy_Instr'-------
    t = 0;
    Training_Easy_InstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_easy_instr.keys = undefined;
    key_resp_easy_instr.rt = undefined;
    _key_resp_easy_instr_allKeys = [];
    // keep track of which components have finished
    Training_Easy_InstrComponents = [];
    Training_Easy_InstrComponents.push(key_resp_easy_instr);
    Training_Easy_InstrComponents.push(text_easy_instr);
    
    Training_Easy_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Training_Easy_InstrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Training_Easy_Instr'-------
    // get current time
    t = Training_Easy_InstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_easy_instr* updates
    if (t >= 0.0 && key_resp_easy_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_easy_instr.tStart = t;  // (not accounting for frame time here)
      key_resp_easy_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_easy_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_instr.clearEvents(); });
    }

    if (key_resp_easy_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_easy_instr.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_easy_instr_allKeys = _key_resp_easy_instr_allKeys.concat(theseKeys);
      if (_key_resp_easy_instr_allKeys.length > 0) {
        key_resp_easy_instr.keys = _key_resp_easy_instr_allKeys[_key_resp_easy_instr_allKeys.length - 1].name;  // just the last key pressed
        key_resp_easy_instr.rt = _key_resp_easy_instr_allKeys[_key_resp_easy_instr_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_easy_instr* updates
    if (t >= 0.0 && text_easy_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_easy_instr.tStart = t;  // (not accounting for frame time here)
      text_easy_instr.frameNStart = frameN;  // exact frame index
      
      text_easy_instr.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Training_Easy_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Training_Easy_InstrRoutineEnd() {
  return async function () {
    //------Ending Routine 'Training_Easy_Instr'-------
    Training_Easy_InstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_easy_instr.stop();
    // the Routine "Training_Easy_Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_intro_6_allKeys;
var Instr1Components;
function Instr1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr1'-------
    t = 0;
    Instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_intro_6.keys = undefined;
    key_resp_intro_6.rt = undefined;
    _key_resp_intro_6_allKeys = [];
    // keep track of which components have finished
    Instr1Components = [];
    Instr1Components.push(key_resp_intro_6);
    Instr1Components.push(text_intro_6);
    
    Instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr1'-------
    // get current time
    t = Instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_intro_6* updates
    if (t >= 0.0 && key_resp_intro_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro_6.tStart = t;  // (not accounting for frame time here)
      key_resp_intro_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_6.clearEvents(); });
    }

    if (key_resp_intro_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_6_allKeys = _key_resp_intro_6_allKeys.concat(theseKeys);
      if (_key_resp_intro_6_allKeys.length > 0) {
        key_resp_intro_6.keys = _key_resp_intro_6_allKeys[_key_resp_intro_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro_6.rt = _key_resp_intro_6_allKeys[_key_resp_intro_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_intro_6* updates
    if (t >= 0.0 && text_intro_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_intro_6.tStart = t;  // (not accounting for frame time here)
      text_intro_6.frameNStart = frameN;  // exact frame index
      
      text_intro_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr1'-------
    Instr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_intro_6.stop();
    // the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_intro_2_allKeys;
var Instr2Components;
function Instr2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr2'-------
    t = 0;
    Instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_intro_2.keys = undefined;
    key_resp_intro_2.rt = undefined;
    _key_resp_intro_2_allKeys = [];
    // keep track of which components have finished
    Instr2Components = [];
    Instr2Components.push(key_resp_intro_2);
    Instr2Components.push(text_intro_2);
    
    Instr2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr2'-------
    // get current time
    t = Instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_intro_2* updates
    if (t >= 0.0 && key_resp_intro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro_2.tStart = t;  // (not accounting for frame time here)
      key_resp_intro_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_2.clearEvents(); });
    }

    if (key_resp_intro_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_2_allKeys = _key_resp_intro_2_allKeys.concat(theseKeys);
      if (_key_resp_intro_2_allKeys.length > 0) {
        key_resp_intro_2.keys = _key_resp_intro_2_allKeys[_key_resp_intro_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro_2.rt = _key_resp_intro_2_allKeys[_key_resp_intro_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_intro_2* updates
    if (t >= 0.0 && text_intro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_intro_2.tStart = t;  // (not accounting for frame time here)
      text_intro_2.frameNStart = frameN;  // exact frame index
      
      text_intro_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr2'-------
    Instr2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_intro_2.stop();
    // the Routine "Instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_easy_ex_allKeys;
var Example_short_easyComponents;
function Example_short_easyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Example_short_easy'-------
    t = 0;
    Example_short_easyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_easy_ex.setImage(Stim);
    key_resp_easy_ex.keys = undefined;
    key_resp_easy_ex.rt = undefined;
    _key_resp_easy_ex_allKeys = [];
    // keep track of which components have finished
    Example_short_easyComponents = [];
    Example_short_easyComponents.push(image_easy_ex);
    Example_short_easyComponents.push(key_resp_easy_ex);
    
    Example_short_easyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Example_short_easyRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Example_short_easy'-------
    // get current time
    t = Example_short_easyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_easy_ex* updates
    if (t >= 0.0 && image_easy_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_easy_ex.tStart = t;  // (not accounting for frame time here)
      image_easy_ex.frameNStart = frameN;  // exact frame index
      
      image_easy_ex.setAutoDraw(true);
    }

    frameRemains = 0.0 + StimulusDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_easy_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_easy_ex.setAutoDraw(false);
    }
    
    // *key_resp_easy_ex* updates
    if (t >= StimulusDuration && key_resp_easy_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_easy_ex.tStart = t;  // (not accounting for frame time here)
      key_resp_easy_ex.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_easy_ex.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_ex.start(); }); // start on screen flip
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_easy_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_easy_ex.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_easy_ex.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_easy_ex.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_easy_ex_allKeys = _key_resp_easy_ex_allKeys.concat(theseKeys);
      if (_key_resp_easy_ex_allKeys.length > 0) {
        key_resp_easy_ex.keys = _key_resp_easy_ex_allKeys[_key_resp_easy_ex_allKeys.length - 1].name;  // just the last key pressed
        key_resp_easy_ex.rt = _key_resp_easy_ex_allKeys[_key_resp_easy_ex_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Example_short_easyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Example_short_easyRoutineEnd() {
  return async function () {
    //------Ending Routine 'Example_short_easy'-------
    Example_short_easyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_easy_ex.stop();
    // the Routine "Example_short_easy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_intro_3_allKeys;
var Instr3Components;
function Instr3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr3'-------
    t = 0;
    Instr3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_intro_3.keys = undefined;
    key_resp_intro_3.rt = undefined;
    _key_resp_intro_3_allKeys = [];
    // keep track of which components have finished
    Instr3Components = [];
    Instr3Components.push(key_resp_intro_3);
    Instr3Components.push(text_intro_3);
    
    Instr3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr3'-------
    // get current time
    t = Instr3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_intro_3* updates
    if (t >= 0.0 && key_resp_intro_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro_3.tStart = t;  // (not accounting for frame time here)
      key_resp_intro_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_3.clearEvents(); });
    }

    if (key_resp_intro_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_3_allKeys = _key_resp_intro_3_allKeys.concat(theseKeys);
      if (_key_resp_intro_3_allKeys.length > 0) {
        key_resp_intro_3.keys = _key_resp_intro_3_allKeys[_key_resp_intro_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro_3.rt = _key_resp_intro_3_allKeys[_key_resp_intro_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_intro_3* updates
    if (t >= 0.0 && text_intro_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_intro_3.tStart = t;  // (not accounting for frame time here)
      text_intro_3.frameNStart = frameN;  // exact frame index
      
      text_intro_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr3'-------
    Instr3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_intro_3.stop();
    // the Routine "Instr3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_easy_ex_2_allKeys;
var Example_long_easyComponents;
function Example_long_easyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Example_long_easy'-------
    t = 0;
    Example_long_easyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_easy_ex_2.setImage(Stim);
    key_resp_easy_ex_2.keys = undefined;
    key_resp_easy_ex_2.rt = undefined;
    _key_resp_easy_ex_2_allKeys = [];
    // keep track of which components have finished
    Example_long_easyComponents = [];
    Example_long_easyComponents.push(image_easy_ex_2);
    Example_long_easyComponents.push(key_resp_easy_ex_2);
    
    Example_long_easyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Example_long_easyRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Example_long_easy'-------
    // get current time
    t = Example_long_easyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_easy_ex_2* updates
    if (t >= 0.0 && image_easy_ex_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_easy_ex_2.tStart = t;  // (not accounting for frame time here)
      image_easy_ex_2.frameNStart = frameN;  // exact frame index
      
      image_easy_ex_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + StimulusDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_easy_ex_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_easy_ex_2.setAutoDraw(false);
    }
    
    // *key_resp_easy_ex_2* updates
    if (t >= StimulusDuration && key_resp_easy_ex_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_easy_ex_2.tStart = t;  // (not accounting for frame time here)
      key_resp_easy_ex_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_easy_ex_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_ex_2.start(); }); // start on screen flip
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_easy_ex_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_easy_ex_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_easy_ex_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_easy_ex_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_easy_ex_2_allKeys = _key_resp_easy_ex_2_allKeys.concat(theseKeys);
      if (_key_resp_easy_ex_2_allKeys.length > 0) {
        key_resp_easy_ex_2.keys = _key_resp_easy_ex_2_allKeys[_key_resp_easy_ex_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_easy_ex_2.rt = _key_resp_easy_ex_2_allKeys[_key_resp_easy_ex_2_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Example_long_easyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Example_long_easyRoutineEnd() {
  return async function () {
    //------Ending Routine 'Example_long_easy'-------
    Example_long_easyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_easy_ex_2.stop();
    // the Routine "Example_long_easy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_intro_4_allKeys;
var Instr4Components;
function Instr4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr4'-------
    t = 0;
    Instr4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_intro_4.keys = undefined;
    key_resp_intro_4.rt = undefined;
    _key_resp_intro_4_allKeys = [];
    // keep track of which components have finished
    Instr4Components = [];
    Instr4Components.push(key_resp_intro_4);
    Instr4Components.push(text_intro_4);
    
    Instr4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr4'-------
    // get current time
    t = Instr4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_intro_4* updates
    if (t >= 0.0 && key_resp_intro_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro_4.tStart = t;  // (not accounting for frame time here)
      key_resp_intro_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_4.clearEvents(); });
    }

    if (key_resp_intro_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_4_allKeys = _key_resp_intro_4_allKeys.concat(theseKeys);
      if (_key_resp_intro_4_allKeys.length > 0) {
        key_resp_intro_4.keys = _key_resp_intro_4_allKeys[_key_resp_intro_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro_4.rt = _key_resp_intro_4_allKeys[_key_resp_intro_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_intro_4* updates
    if (t >= 0.0 && text_intro_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_intro_4.tStart = t;  // (not accounting for frame time here)
      text_intro_4.frameNStart = frameN;  // exact frame index
      
      text_intro_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr4'-------
    Instr4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_intro_4.stop();
    // the Routine "Instr4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_easy_ex_3_allKeys;
var Example_sandwich_easyComponents;
function Example_sandwich_easyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Example_sandwich_easy'-------
    t = 0;
    Example_sandwich_easyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_easy_ex_3.setImage(Stim);
    key_resp_easy_ex_3.keys = undefined;
    key_resp_easy_ex_3.rt = undefined;
    _key_resp_easy_ex_3_allKeys = [];
    // keep track of which components have finished
    Example_sandwich_easyComponents = [];
    Example_sandwich_easyComponents.push(image_easy_ex_3);
    Example_sandwich_easyComponents.push(key_resp_easy_ex_3);
    
    Example_sandwich_easyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Example_sandwich_easyRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Example_sandwich_easy'-------
    // get current time
    t = Example_sandwich_easyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_easy_ex_3* updates
    if (t >= 0.0 && image_easy_ex_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_easy_ex_3.tStart = t;  // (not accounting for frame time here)
      image_easy_ex_3.frameNStart = frameN;  // exact frame index
      
      image_easy_ex_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + StimulusDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_easy_ex_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_easy_ex_3.setAutoDraw(false);
    }
    
    // *key_resp_easy_ex_3* updates
    if (t >= StimulusDuration && key_resp_easy_ex_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_easy_ex_3.tStart = t;  // (not accounting for frame time here)
      key_resp_easy_ex_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_easy_ex_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_ex_3.start(); }); // start on screen flip
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_easy_ex_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_easy_ex_3.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_easy_ex_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_easy_ex_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_easy_ex_3_allKeys = _key_resp_easy_ex_3_allKeys.concat(theseKeys);
      if (_key_resp_easy_ex_3_allKeys.length > 0) {
        key_resp_easy_ex_3.keys = _key_resp_easy_ex_3_allKeys[_key_resp_easy_ex_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_easy_ex_3.rt = _key_resp_easy_ex_3_allKeys[_key_resp_easy_ex_3_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Example_sandwich_easyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Example_sandwich_easyRoutineEnd() {
  return async function () {
    //------Ending Routine 'Example_sandwich_easy'-------
    Example_sandwich_easyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_easy_ex_3.stop();
    // the Routine "Example_sandwich_easy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_easy_instr_2_allKeys;
var Training_Easy_StartComponents;
function Training_Easy_StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Training_Easy_Start'-------
    t = 0;
    Training_Easy_StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_easy_instr_2.keys = undefined;
    key_resp_easy_instr_2.rt = undefined;
    _key_resp_easy_instr_2_allKeys = [];
    // keep track of which components have finished
    Training_Easy_StartComponents = [];
    Training_Easy_StartComponents.push(key_resp_easy_instr_2);
    Training_Easy_StartComponents.push(text_easy_instr_2);
    
    Training_Easy_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Training_Easy_StartRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Training_Easy_Start'-------
    // get current time
    t = Training_Easy_StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_easy_instr_2* updates
    if (t >= 0.0 && key_resp_easy_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_easy_instr_2.tStart = t;  // (not accounting for frame time here)
      key_resp_easy_instr_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_easy_instr_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_instr_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_instr_2.clearEvents(); });
    }

    if (key_resp_easy_instr_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_easy_instr_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_easy_instr_2_allKeys = _key_resp_easy_instr_2_allKeys.concat(theseKeys);
      if (_key_resp_easy_instr_2_allKeys.length > 0) {
        key_resp_easy_instr_2.keys = _key_resp_easy_instr_2_allKeys[_key_resp_easy_instr_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_easy_instr_2.rt = _key_resp_easy_instr_2_allKeys[_key_resp_easy_instr_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_easy_instr_2* updates
    if (t >= 0.0 && text_easy_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_easy_instr_2.tStart = t;  // (not accounting for frame time here)
      text_easy_instr_2.frameNStart = frameN;  // exact frame index
      
      text_easy_instr_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Training_Easy_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Training_Easy_StartRoutineEnd() {
  return async function () {
    //------Ending Routine 'Training_Easy_Start'-------
    Training_Easy_StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_easy_instr_2.stop();
    // the Routine "Training_Easy_Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_redo_allKeys;
var pracRedoComponents;
function pracRedoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pracRedo'-------
    t = 0;
    pracRedoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_redo.keys = undefined;
    key_resp_redo.rt = undefined;
    _key_resp_redo_allKeys = [];
    // keep track of which components have finished
    pracRedoComponents = [];
    pracRedoComponents.push(text_redo);
    pracRedoComponents.push(key_resp_redo);
    
    pracRedoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pracRedoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pracRedo'-------
    // get current time
    t = pracRedoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_redo* updates
    if (t >= 0.0 && text_redo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_redo.tStart = t;  // (not accounting for frame time here)
      text_redo.frameNStart = frameN;  // exact frame index
      
      text_redo.setAutoDraw(true);
    }

    
    // *key_resp_redo* updates
    if (t >= 0.0 && key_resp_redo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_redo.tStart = t;  // (not accounting for frame time here)
      key_resp_redo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_redo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_redo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_redo.clearEvents(); });
    }

    if (key_resp_redo.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_redo.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_redo_allKeys = _key_resp_redo_allKeys.concat(theseKeys);
      if (_key_resp_redo_allKeys.length > 0) {
        key_resp_redo.keys = _key_resp_redo_allKeys[_key_resp_redo_allKeys.length - 1].name;  // just the last key pressed
        key_resp_redo.rt = _key_resp_redo_allKeys[_key_resp_redo_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pracRedoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracRedoRoutineEnd() {
  return async function () {
    //------Ending Routine 'pracRedo'-------
    pracRedoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_redo.stop();
    // the Routine "pracRedo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_easy_allKeys;
var Training_EasyComponents;
function Training_EasyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Training_Easy'-------
    t = 0;
    Training_EasyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_easy.setImage(Stim);
    key_resp_easy.keys = undefined;
    key_resp_easy.rt = undefined;
    _key_resp_easy_allKeys = [];
    // keep track of which components have finished
    Training_EasyComponents = [];
    Training_EasyComponents.push(image_easy);
    Training_EasyComponents.push(key_resp_easy);
    Training_EasyComponents.push(Question_Mark);
    
    Training_EasyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Training_EasyRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Training_Easy'-------
    // get current time
    t = Training_EasyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_easy* updates
    if (t >= 0.0 && image_easy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_easy.tStart = t;  // (not accounting for frame time here)
      image_easy.frameNStart = frameN;  // exact frame index
      
      image_easy.setAutoDraw(true);
    }

    frameRemains = 0.0 + StimulusDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_easy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_easy.setAutoDraw(false);
    }
    
    // *key_resp_easy* updates
    if (t >= StimulusDuration && key_resp_easy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_easy.tStart = t;  // (not accounting for frame time here)
      key_resp_easy.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_easy.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy.clearEvents(); });
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_easy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_easy.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_easy.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_easy.getKeys({keyList: [], waitRelease: false});
      _key_resp_easy_allKeys = _key_resp_easy_allKeys.concat(theseKeys);
      if (_key_resp_easy_allKeys.length > 0) {
        key_resp_easy.keys = _key_resp_easy_allKeys[_key_resp_easy_allKeys.length - 1].name;  // just the last key pressed
        key_resp_easy.rt = _key_resp_easy_allKeys[_key_resp_easy_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_easy.keys == CorrAns) {
            key_resp_easy.corr = 1;
        } else {
            key_resp_easy.corr = 0;
        }
      }
    }
    
    
    // *Question_Mark* updates
    if (t >= StimulusDuration && Question_Mark.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_Mark.tStart = t;  // (not accounting for frame time here)
      Question_Mark.frameNStart = frameN;  // exact frame index
      
      Question_Mark.setAutoDraw(true);
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Question_Mark.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Question_Mark.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Training_EasyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Training_EasyRoutineEnd() {
  return async function () {
    //------Ending Routine 'Training_Easy'-------
    Training_EasyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_easy.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         key_resp_easy.corr = 1;  // correct non-response
      } else {
         key_resp_easy.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_easy.keys', key_resp_easy.keys);
    psychoJS.experiment.addData('key_resp_easy.corr', key_resp_easy.corr);
    if (typeof key_resp_easy.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_easy.rt', key_resp_easy.rt);
        }
    
    key_resp_easy.stop();
    if ((key_resp_easy.corr && (CorrAns === "j"))) {
        rightcall_easy += 1;
    } else {
        if (((key_resp_easy.corr === 0) && (CorrAns === "f"))) {
            falsealarm_easy += 1;
        }
    }
    if (key_resp_easy.corr) {
        numcorr_easy += 1;
    }
    correctrate_easy = (numcorr_easy / 34);
    rightcall_rate_easy = (rightcall_easy / 4);
    correctrejection_rate_easy = (1 - (falsealarm_easy / 30));
    
    // the Routine "Training_Easy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_easy_feedback_allKeys;
var Training_Easy_FeedbackComponents;
function Training_Easy_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Training_Easy_Feedback'-------
    t = 0;
    Training_Easy_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_easy_feedback.keys = undefined;
    key_resp_easy_feedback.rt = undefined;
    _key_resp_easy_feedback_allKeys = [];
    text_easy_feedback.text = (((("You correctly identified " + rightcall_easy.toString()) + "/4 of the long-duration pictures, and ") + (30 - falsealarm_easy).toString()) + "/30 of the short-duration pictures.\n\n");
    if (((correctrejection_rate_easy >= 0.75) && (rightcall_rate_easy >= 0.75))) {
        text_easy_feedback.text += "Well done! You reached the required 75% correct rate, and can now move on to the next session! Press <space> to continue";
    } else {
        if ((easy_repeat.thisN === 1)) {
            text_easy_feedback.text += "You did not reach the required 75% correct rate. Press <space> to continue";
            failed_easy = 1;
        } else {
            text_easy_feedback.text += "You did not reach the required 75% correct rate. Press <space> to start the training again";
            prac = 1;
        }
    }
    
    // keep track of which components have finished
    Training_Easy_FeedbackComponents = [];
    Training_Easy_FeedbackComponents.push(text_easy_feedback);
    Training_Easy_FeedbackComponents.push(key_resp_easy_feedback);
    
    Training_Easy_FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Training_Easy_FeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Training_Easy_Feedback'-------
    // get current time
    t = Training_Easy_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_easy_feedback* updates
    if (t >= 0.0 && text_easy_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_easy_feedback.tStart = t;  // (not accounting for frame time here)
      text_easy_feedback.frameNStart = frameN;  // exact frame index
      
      text_easy_feedback.setAutoDraw(true);
    }

    
    // *key_resp_easy_feedback* updates
    if (t >= 0.0 && key_resp_easy_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_easy_feedback.tStart = t;  // (not accounting for frame time here)
      key_resp_easy_feedback.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_easy_feedback.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_feedback.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_feedback.clearEvents(); });
    }

    if (key_resp_easy_feedback.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_easy_feedback.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_easy_feedback_allKeys = _key_resp_easy_feedback_allKeys.concat(theseKeys);
      if (_key_resp_easy_feedback_allKeys.length > 0) {
        key_resp_easy_feedback.keys = _key_resp_easy_feedback_allKeys[_key_resp_easy_feedback_allKeys.length - 1].name;  // just the last key pressed
        key_resp_easy_feedback.rt = _key_resp_easy_feedback_allKeys[_key_resp_easy_feedback_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Training_Easy_FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Training_Easy_FeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'Training_Easy_Feedback'-------
    Training_Easy_FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_easy_feedback.stop();
    if (((correctrejection_rate_easy >= 0.75) && (rightcall_rate_easy >= 0.75))) {
        easy_repeat.finished = 1;
        prac = 0;
    } else {
        if ((failed_easy === 1)) {
            easy_repeat.finished = 1;
            aftereasy_loop_rep = 0;
            prac = 0;
        }
    }
    rightcall_easy = 0;
    falsealarm_easy = 0;
    correctrejection_rate_easy = 0;
    rightcall_rate_easy = 0;
    
    // the Routine "Training_Easy_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_normal_instr_allKeys;
var Training_Normal_InstrComponents;
function Training_Normal_InstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Training_Normal_Instr'-------
    t = 0;
    Training_Normal_InstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_normal_instr.keys = undefined;
    key_resp_normal_instr.rt = undefined;
    _key_resp_normal_instr_allKeys = [];
    // keep track of which components have finished
    Training_Normal_InstrComponents = [];
    Training_Normal_InstrComponents.push(key_resp_normal_instr);
    Training_Normal_InstrComponents.push(text_normal_instr);
    
    Training_Normal_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Training_Normal_InstrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Training_Normal_Instr'-------
    // get current time
    t = Training_Normal_InstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_normal_instr* updates
    if (t >= 0.0 && key_resp_normal_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_normal_instr.tStart = t;  // (not accounting for frame time here)
      key_resp_normal_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_normal_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_normal_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_normal_instr.clearEvents(); });
    }

    if (key_resp_normal_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_normal_instr.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_normal_instr_allKeys = _key_resp_normal_instr_allKeys.concat(theseKeys);
      if (_key_resp_normal_instr_allKeys.length > 0) {
        key_resp_normal_instr.keys = _key_resp_normal_instr_allKeys[_key_resp_normal_instr_allKeys.length - 1].name;  // just the last key pressed
        key_resp_normal_instr.rt = _key_resp_normal_instr_allKeys[_key_resp_normal_instr_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_normal_instr* updates
    if (t >= 0.0 && text_normal_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_normal_instr.tStart = t;  // (not accounting for frame time here)
      text_normal_instr.frameNStart = frameN;  // exact frame index
      
      text_normal_instr.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Training_Normal_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Training_Normal_InstrRoutineEnd() {
  return async function () {
    //------Ending Routine 'Training_Normal_Instr'-------
    Training_Normal_InstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_normal_instr.stop();
    // the Routine "Training_Normal_Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_normal_ex_allKeys;
var Example_sandwich_normalComponents;
function Example_sandwich_normalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Example_sandwich_normal'-------
    t = 0;
    Example_sandwich_normalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_normal_ex.setImage(Stim);
    key_resp_normal_ex.keys = undefined;
    key_resp_normal_ex.rt = undefined;
    _key_resp_normal_ex_allKeys = [];
    // keep track of which components have finished
    Example_sandwich_normalComponents = [];
    Example_sandwich_normalComponents.push(image_normal_ex);
    Example_sandwich_normalComponents.push(key_resp_normal_ex);
    
    Example_sandwich_normalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Example_sandwich_normalRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Example_sandwich_normal'-------
    // get current time
    t = Example_sandwich_normalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_normal_ex* updates
    if (t >= 0.0 && image_normal_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_normal_ex.tStart = t;  // (not accounting for frame time here)
      image_normal_ex.frameNStart = frameN;  // exact frame index
      
      image_normal_ex.setAutoDraw(true);
    }

    frameRemains = 0.0 + StimulusDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_normal_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_normal_ex.setAutoDraw(false);
    }
    
    // *key_resp_normal_ex* updates
    if (t >= StimulusDuration && key_resp_normal_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_normal_ex.tStart = t;  // (not accounting for frame time here)
      key_resp_normal_ex.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_normal_ex.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_normal_ex.start(); }); // start on screen flip
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_normal_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_normal_ex.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_normal_ex.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_normal_ex.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_normal_ex_allKeys = _key_resp_normal_ex_allKeys.concat(theseKeys);
      if (_key_resp_normal_ex_allKeys.length > 0) {
        key_resp_normal_ex.keys = _key_resp_normal_ex_allKeys[_key_resp_normal_ex_allKeys.length - 1].name;  // just the last key pressed
        key_resp_normal_ex.rt = _key_resp_normal_ex_allKeys[_key_resp_normal_ex_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Example_sandwich_normalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Example_sandwich_normalRoutineEnd() {
  return async function () {
    //------Ending Routine 'Example_sandwich_normal'-------
    Example_sandwich_normalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_normal_ex.stop();
    // the Routine "Example_sandwich_normal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_normal_instr_2_allKeys;
var Training_Normal_StartComponents;
function Training_Normal_StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Training_Normal_Start'-------
    t = 0;
    Training_Normal_StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_normal_instr_2.keys = undefined;
    key_resp_normal_instr_2.rt = undefined;
    _key_resp_normal_instr_2_allKeys = [];
    // keep track of which components have finished
    Training_Normal_StartComponents = [];
    Training_Normal_StartComponents.push(key_resp_normal_instr_2);
    Training_Normal_StartComponents.push(text_normal_instr_2);
    
    Training_Normal_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Training_Normal_StartRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Training_Normal_Start'-------
    // get current time
    t = Training_Normal_StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_normal_instr_2* updates
    if (t >= 0.0 && key_resp_normal_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_normal_instr_2.tStart = t;  // (not accounting for frame time here)
      key_resp_normal_instr_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_normal_instr_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_normal_instr_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_normal_instr_2.clearEvents(); });
    }

    if (key_resp_normal_instr_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_normal_instr_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_normal_instr_2_allKeys = _key_resp_normal_instr_2_allKeys.concat(theseKeys);
      if (_key_resp_normal_instr_2_allKeys.length > 0) {
        key_resp_normal_instr_2.keys = _key_resp_normal_instr_2_allKeys[_key_resp_normal_instr_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_normal_instr_2.rt = _key_resp_normal_instr_2_allKeys[_key_resp_normal_instr_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_normal_instr_2* updates
    if (t >= 0.0 && text_normal_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_normal_instr_2.tStart = t;  // (not accounting for frame time here)
      text_normal_instr_2.frameNStart = frameN;  // exact frame index
      
      text_normal_instr_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Training_Normal_StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Training_Normal_StartRoutineEnd() {
  return async function () {
    //------Ending Routine 'Training_Normal_Start'-------
    Training_Normal_StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_normal_instr_2.stop();
    // the Routine "Training_Normal_Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_normal_allKeys;
var Training_NormalComponents;
function Training_NormalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Training_Normal'-------
    t = 0;
    Training_NormalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_normal.setImage(Stim);
    key_resp_normal.keys = undefined;
    key_resp_normal.rt = undefined;
    _key_resp_normal_allKeys = [];
    // keep track of which components have finished
    Training_NormalComponents = [];
    Training_NormalComponents.push(image_normal);
    Training_NormalComponents.push(key_resp_normal);
    Training_NormalComponents.push(Question_Mark_normal);
    
    Training_NormalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Training_NormalRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Training_Normal'-------
    // get current time
    t = Training_NormalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_normal* updates
    if (t >= 0.0 && image_normal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_normal.tStart = t;  // (not accounting for frame time here)
      image_normal.frameNStart = frameN;  // exact frame index
      
      image_normal.setAutoDraw(true);
    }

    frameRemains = 0.0 + StimulusDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_normal.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_normal.setAutoDraw(false);
    }
    
    // *key_resp_normal* updates
    if (t >= StimulusDuration && key_resp_normal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_normal.tStart = t;  // (not accounting for frame time here)
      key_resp_normal.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_normal.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_normal.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_normal.clearEvents(); });
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_normal.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_normal.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_normal.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_normal.getKeys({keyList: [], waitRelease: false});
      _key_resp_normal_allKeys = _key_resp_normal_allKeys.concat(theseKeys);
      if (_key_resp_normal_allKeys.length > 0) {
        key_resp_normal.keys = _key_resp_normal_allKeys[_key_resp_normal_allKeys.length - 1].name;  // just the last key pressed
        key_resp_normal.rt = _key_resp_normal_allKeys[_key_resp_normal_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_normal.keys == CorrAns) {
            key_resp_normal.corr = 1;
        } else {
            key_resp_normal.corr = 0;
        }
      }
    }
    
    
    // *Question_Mark_normal* updates
    if (t >= StimulusDuration && Question_Mark_normal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_Mark_normal.tStart = t;  // (not accounting for frame time here)
      Question_Mark_normal.frameNStart = frameN;  // exact frame index
      
      Question_Mark_normal.setAutoDraw(true);
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Question_Mark_normal.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Question_Mark_normal.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Training_NormalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Training_NormalRoutineEnd() {
  return async function () {
    //------Ending Routine 'Training_Normal'-------
    Training_NormalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_normal.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         key_resp_normal.corr = 1;  // correct non-response
      } else {
         key_resp_normal.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_normal.keys', key_resp_normal.keys);
    psychoJS.experiment.addData('key_resp_normal.corr', key_resp_normal.corr);
    if (typeof key_resp_normal.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_normal.rt', key_resp_normal.rt);
        }
    
    key_resp_normal.stop();
    if ((key_resp_normal.corr && (CorrAns === "j"))) {
        numcorr_normal += 1;
        rightcall_normal += 1;
    } else {
        if (((key_resp_normal.corr === 0) && (CorrAns === "f"))) {
            numcorr_normal -= 1;
            falsealarm_normal += 1;
        }
    }
    correctrate_normal = (numcorr_normal / 4);
    rightcall_rate_normal = (rightcall_normal / 4);
    correctrejection_rate_normal = (1 - (falsealarm_normal / 30));
    
    // the Routine "Training_Normal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_easy_feedback_2_allKeys;
var Training_Normal_FeedbackComponents;
function Training_Normal_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Training_Normal_Feedback'-------
    t = 0;
    Training_Normal_FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_easy_feedback_2.keys = undefined;
    key_resp_easy_feedback_2.rt = undefined;
    _key_resp_easy_feedback_2_allKeys = [];
    text_normal_feedback.text = (((("You correctly identified " + rightcall_normal.toString()) + "/4 of the long-duration pictures, and ") + (30 - falsealarm_normal).toString()) + "/30 of the short-duration pictures.\n\n");
    if (((correctrejection_rate_normal >= 0.75) && (rightcall_rate_normal >= 0.75))) {
        text_normal_feedback.text += "Well done! You can now move on to the next session, press <space> to continue";
    } else {
        if ((normal_repeat.thisN === 3)) {
            text_normal_feedback.text += "You did not reach the required 75% correct rate. Press <space> to continue";
            failed_normal = 1;
        } else {
            text_normal_feedback.text += "You did not reach the required 75% correct rate. Press <space> to start the training again";
            prac = 1;
        }
    }
    
    // keep track of which components have finished
    Training_Normal_FeedbackComponents = [];
    Training_Normal_FeedbackComponents.push(text_normal_feedback);
    Training_Normal_FeedbackComponents.push(key_resp_easy_feedback_2);
    
    Training_Normal_FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Training_Normal_FeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Training_Normal_Feedback'-------
    // get current time
    t = Training_Normal_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_normal_feedback* updates
    if (t >= 0.0 && text_normal_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_normal_feedback.tStart = t;  // (not accounting for frame time here)
      text_normal_feedback.frameNStart = frameN;  // exact frame index
      
      text_normal_feedback.setAutoDraw(true);
    }

    
    // *key_resp_easy_feedback_2* updates
    if (t >= 0.0 && key_resp_easy_feedback_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_easy_feedback_2.tStart = t;  // (not accounting for frame time here)
      key_resp_easy_feedback_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_easy_feedback_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_feedback_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_easy_feedback_2.clearEvents(); });
    }

    if (key_resp_easy_feedback_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_easy_feedback_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_easy_feedback_2_allKeys = _key_resp_easy_feedback_2_allKeys.concat(theseKeys);
      if (_key_resp_easy_feedback_2_allKeys.length > 0) {
        key_resp_easy_feedback_2.keys = _key_resp_easy_feedback_2_allKeys[_key_resp_easy_feedback_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_easy_feedback_2.rt = _key_resp_easy_feedback_2_allKeys[_key_resp_easy_feedback_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Training_Normal_FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Training_Normal_FeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'Training_Normal_Feedback'-------
    Training_Normal_FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_easy_feedback_2.stop();
    if (((correctrejection_rate_normal >= 0.75) && (rightcall_rate_normal >= 0.75))) {
        normal_repeat.finished = 1;
        prac = 0;
    } else {
        if ((failed_normal === 1)) {
            normal_repeat.finished = 1;
            afternormal_loop_rep = 0;
            prac = 0;
        }
    }
    numcorr_normal = 0;
    rightcall_normal = 0;
    falsealarm_normal = 0;
    correctrate_normal = 0;
    correctrejection_rate_normal = 0;
    rightcall_rate_normal = 0;
    
    // the Routine "Training_Normal_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instr5_allKeys;
var Instr5Components;
function Instr5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr5'-------
    t = 0;
    Instr5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr5.keys = undefined;
    key_resp_instr5.rt = undefined;
    _key_resp_instr5_allKeys = [];
    // keep track of which components have finished
    Instr5Components = [];
    Instr5Components.push(key_resp_instr5);
    Instr5Components.push(text_instr5);
    
    Instr5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr5'-------
    // get current time
    t = Instr5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_instr5* updates
    if (t >= 0.0 && key_resp_instr5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr5.tStart = t;  // (not accounting for frame time here)
      key_resp_instr5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr5.clearEvents(); });
    }

    if (key_resp_instr5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr5_allKeys = _key_resp_instr5_allKeys.concat(theseKeys);
      if (_key_resp_instr5_allKeys.length > 0) {
        key_resp_instr5.keys = _key_resp_instr5_allKeys[_key_resp_instr5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr5.rt = _key_resp_instr5_allKeys[_key_resp_instr5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_instr5* updates
    if (t >= 0.0 && text_instr5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr5.tStart = t;  // (not accounting for frame time here)
      text_instr5.frameNStart = frameN;  // exact frame index
      
      text_instr5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr5'-------
    Instr5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_instr5.stop();
    // the Routine "Instr5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_incentive_allKeys;
var IncentiveInfoComponents;
function IncentiveInfoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'IncentiveInfo'-------
    t = 0;
    IncentiveInfoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_incentive.keys = undefined;
    key_resp_incentive.rt = undefined;
    _key_resp_incentive_allKeys = [];
    // keep track of which components have finished
    IncentiveInfoComponents = [];
    IncentiveInfoComponents.push(key_resp_incentive);
    IncentiveInfoComponents.push(text_incentive);
    
    IncentiveInfoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IncentiveInfoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'IncentiveInfo'-------
    // get current time
    t = IncentiveInfoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_incentive* updates
    if (t >= 0.0 && key_resp_incentive.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_incentive.tStart = t;  // (not accounting for frame time here)
      key_resp_incentive.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_incentive.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_incentive.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_incentive.clearEvents(); });
    }

    if (key_resp_incentive.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_incentive.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_incentive_allKeys = _key_resp_incentive_allKeys.concat(theseKeys);
      if (_key_resp_incentive_allKeys.length > 0) {
        key_resp_incentive.keys = _key_resp_incentive_allKeys[_key_resp_incentive_allKeys.length - 1].name;  // just the last key pressed
        key_resp_incentive.rt = _key_resp_incentive_allKeys[_key_resp_incentive_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_incentive* updates
    if (t >= 0.0 && text_incentive.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_incentive.tStart = t;  // (not accounting for frame time here)
      text_incentive.frameNStart = frameN;  // exact frame index
      
      text_incentive.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IncentiveInfoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IncentiveInfoRoutineEnd() {
  return async function () {
    //------Ending Routine 'IncentiveInfo'-------
    IncentiveInfoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_incentive.stop();
    // the Routine "IncentiveInfo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instr6_allKeys;
var Instr6Components;
function Instr6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instr6'-------
    t = 0;
    Instr6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr6.keys = undefined;
    key_resp_instr6.rt = undefined;
    _key_resp_instr6_allKeys = [];
    // keep track of which components have finished
    Instr6Components = [];
    Instr6Components.push(key_resp_instr6);
    Instr6Components.push(text_instr6);
    
    Instr6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instr6'-------
    // get current time
    t = Instr6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_instr6* updates
    if (t >= 0.0 && key_resp_instr6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr6.tStart = t;  // (not accounting for frame time here)
      key_resp_instr6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr6.clearEvents(); });
    }

    if (key_resp_instr6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr6.getKeys({keyList: ['r', 'R'], waitRelease: false});
      _key_resp_instr6_allKeys = _key_resp_instr6_allKeys.concat(theseKeys);
      if (_key_resp_instr6_allKeys.length > 0) {
        key_resp_instr6.keys = _key_resp_instr6_allKeys[_key_resp_instr6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr6.rt = _key_resp_instr6_allKeys[_key_resp_instr6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_instr6* updates
    if (t >= 0.0 && text_instr6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr6.tStart = t;  // (not accounting for frame time here)
      text_instr6.frameNStart = frameN;  // exact frame index
      
      text_instr6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr6RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instr6'-------
    Instr6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_instr6.stop();
    // the Routine "Instr6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RunComponents;
function RunRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Run'-------
    t = 0;
    RunClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    runNum += 1;
    runtext.text = ("Run " + runNum.toString());
    
    // keep track of which components have finished
    RunComponents = [];
    RunComponents.push(runtext);
    
    RunComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function RunRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Run'-------
    // get current time
    t = RunClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *runtext* updates
    if (t >= 0.0 && runtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      runtext.tStart = t;  // (not accounting for frame time here)
      runtext.frameNStart = frameN;  // exact frame index
      
      runtext.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (runtext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      runtext.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    RunComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RunRoutineEnd() {
  return async function () {
    //------Ending Routine 'Run'-------
    RunComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_trial_allKeys;
var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Trial'-------
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_trial.setImage(Stim);
    key_resp_trial.keys = undefined;
    key_resp_trial.rt = undefined;
    _key_resp_trial_allKeys = [];
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(image_trial);
    TrialComponents.push(key_resp_trial);
    TrialComponents.push(Question_Mark_trial);
    
    TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function TrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Trial'-------
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_trial* updates
    if (t >= 0.0 && image_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_trial.tStart = t;  // (not accounting for frame time here)
      image_trial.frameNStart = frameN;  // exact frame index
      
      image_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + StimulusDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_trial.setAutoDraw(false);
    }
    
    // *key_resp_trial* updates
    if (t >= StimulusDuration && key_resp_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_trial.tStart = t;  // (not accounting for frame time here)
      key_resp_trial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_trial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_trial.clearEvents(); });
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_trial.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_trial.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_trial.getKeys({keyList: [], waitRelease: false});
      _key_resp_trial_allKeys = _key_resp_trial_allKeys.concat(theseKeys);
      if (_key_resp_trial_allKeys.length > 0) {
        key_resp_trial.keys = _key_resp_trial_allKeys[_key_resp_trial_allKeys.length - 1].name;  // just the last key pressed
        key_resp_trial.rt = _key_resp_trial_allKeys[_key_resp_trial_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_trial.keys == CorrAns) {
            key_resp_trial.corr = 1;
        } else {
            key_resp_trial.corr = 0;
        }
      }
    }
    
    
    // *Question_Mark_trial* updates
    if (t >= StimulusDuration && Question_Mark_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_Mark_trial.tStart = t;  // (not accounting for frame time here)
      Question_Mark_trial.frameNStart = frameN;  // exact frame index
      
      Question_Mark_trial.setAutoDraw(true);
    }

    frameRemains = StimulusDuration + ResponseDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Question_Mark_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Question_Mark_trial.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'Trial'-------
    TrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_trial.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         key_resp_trial.corr = 1;  // correct non-response
      } else {
         key_resp_trial.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_trial.keys', key_resp_trial.keys);
    psychoJS.experiment.addData('key_resp_trial.corr', key_resp_trial.corr);
    if (typeof key_resp_trial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_trial.rt', key_resp_trial.rt);
        }
    
    key_resp_trial.stop();
    if (key_resp_trial.corr) {
        numcorr_trial += 1;
    }
    if ((key_resp_trial.corr && (CorrAns === "j"))) {
        rightcall_trial += 1;
    } else {
        if (((key_resp_trial.corr === 0) && (CorrAns === "f"))) {
            falsealarm_trial += 1;
        }
    }
    correctrate_trial = (numcorr_trial / 134);
    rightcall_rate_trial = (rightcall_trial / 16);
    correctrejection_rate_trial = (1 - (falsealarm_trial / 118));
    
    // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var targetgain;
var nontargetgain;
var totalgain;
var _key_resp_feedback_allKeys;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Feedback'-------
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    targetgain = 0;
    nontargetgain = 0;
    totalgain = 0;
    if ((rightcall_rate_trial <= 0.5)) {
        targetgain = 0;
    } else {
        targetgain = round((((rightcall_trial - 8) / 8) * 0.5), 2);
    }
    if ((correctrejection_rate_trial <= 0.5)) {
        nontargetgain = 0;
    } else {
        nontargetgain = round((((59 - falsealarm_trial) / 59) * 0.5), 2);
    }
    totalgain = (targetgain + nontargetgain);
    
    key_resp_feedback.keys = undefined;
    key_resp_feedback.rt = undefined;
    _key_resp_feedback_allKeys = [];
    text_feedback.text = (("Congratulations! Because of the correct responses you made during this trial, you WON " + totalgain.toString()) + " dollar.");
    text_original.text = ("$" + bonus.toString());
    text_current.text = ("$" + (bonus + totalgain).toString());
    text_loss.text = ("$" + totalgain.toString());
    psychoJS.experiment.addData("oldtotal", bonus);
    psychoJS.experiment.addData("totalgain", totalgain);
    psychoJS.experiment.addData("newtotal", (bonus + totalgain));
    
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(text_feedback);
    FeedbackComponents.push(text_original);
    FeedbackComponents.push(arrow_rectangle);
    FeedbackComponents.push(arrow_triangle);
    FeedbackComponents.push(text_current);
    FeedbackComponents.push(image);
    FeedbackComponents.push(text_loss);
    FeedbackComponents.push(key_resp_feedback);
    FeedbackComponents.push(text_continue);
    
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Feedback'-------
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_feedback* updates
    if (t >= 0.0 && text_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback.tStart = t;  // (not accounting for frame time here)
      text_feedback.frameNStart = frameN;  // exact frame index
      
      text_feedback.setAutoDraw(true);
    }

    
    // *text_original* updates
    if (t >= 0.0 && text_original.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_original.tStart = t;  // (not accounting for frame time here)
      text_original.frameNStart = frameN;  // exact frame index
      
      text_original.setAutoDraw(true);
    }

    
    // *arrow_rectangle* updates
    if (t >= 0.0 && arrow_rectangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_rectangle.tStart = t;  // (not accounting for frame time here)
      arrow_rectangle.frameNStart = frameN;  // exact frame index
      
      arrow_rectangle.setAutoDraw(true);
    }

    
    // *arrow_triangle* updates
    if (t >= 0.0 && arrow_triangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_triangle.tStart = t;  // (not accounting for frame time here)
      arrow_triangle.frameNStart = frameN;  // exact frame index
      
      arrow_triangle.setAutoDraw(true);
    }

    
    // *text_current* updates
    if (t >= 0.0 && text_current.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_current.tStart = t;  // (not accounting for frame time here)
      text_current.frameNStart = frameN;  // exact frame index
      
      text_current.setAutoDraw(true);
    }

    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *text_loss* updates
    if (t >= 0.0 && text_loss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_loss.tStart = t;  // (not accounting for frame time here)
      text_loss.frameNStart = frameN;  // exact frame index
      
      text_loss.setAutoDraw(true);
    }

    
    // *key_resp_feedback* updates
    if (t >= 0.0 && key_resp_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_feedback.tStart = t;  // (not accounting for frame time here)
      key_resp_feedback.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_feedback.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feedback.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feedback.clearEvents(); });
    }

    if (key_resp_feedback.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_feedback.getKeys({keyList: ['c'], waitRelease: false});
      _key_resp_feedback_allKeys = _key_resp_feedback_allKeys.concat(theseKeys);
      if (_key_resp_feedback_allKeys.length > 0) {
        key_resp_feedback.keys = _key_resp_feedback_allKeys[_key_resp_feedback_allKeys.length - 1].name;  // just the last key pressed
        key_resp_feedback.rt = _key_resp_feedback_allKeys[_key_resp_feedback_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_continue* updates
    if (t >= 0.0 && text_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_continue.tStart = t;  // (not accounting for frame time here)
      text_continue.frameNStart = frameN;  // exact frame index
      
      text_continue.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'Feedback'-------
    FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    numcorr_trial = 0;
    rightcall_trial = 0;
    falsealarm_trial = 0;
    correctrate_trial = 0;
    rightcall_rate_trial = 0;
    correctrejection_rate_trial = 0;
    
    key_resp_feedback.stop();
    bonus = (bonus + totalgain);
    
    // the Routine "Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _NASA_inst_cont_allKeys;
var NASA_instComponents;
function NASA_instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'NASA_inst'-------
    t = 0;
    NASA_instClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    NASA_inst_cont.keys = undefined;
    NASA_inst_cont.rt = undefined;
    _NASA_inst_cont_allKeys = [];
    // keep track of which components have finished
    NASA_instComponents = [];
    NASA_instComponents.push(NASA_inst_text);
    NASA_instComponents.push(NASA_inst_cont);
    
    NASA_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function NASA_instRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'NASA_inst'-------
    // get current time
    t = NASA_instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *NASA_inst_text* updates
    if (t >= 0.0 && NASA_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NASA_inst_text.tStart = t;  // (not accounting for frame time here)
      NASA_inst_text.frameNStart = frameN;  // exact frame index
      
      NASA_inst_text.setAutoDraw(true);
    }

    
    // *NASA_inst_cont* updates
    if (t >= 0.0 && NASA_inst_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NASA_inst_cont.tStart = t;  // (not accounting for frame time here)
      NASA_inst_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { NASA_inst_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { NASA_inst_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { NASA_inst_cont.clearEvents(); });
    }

    if (NASA_inst_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = NASA_inst_cont.getKeys({keyList: ['space'], waitRelease: false});
      _NASA_inst_cont_allKeys = _NASA_inst_cont_allKeys.concat(theseKeys);
      if (_NASA_inst_cont_allKeys.length > 0) {
        NASA_inst_cont.keys = _NASA_inst_cont_allKeys[_NASA_inst_cont_allKeys.length - 1].name;  // just the last key pressed
        NASA_inst_cont.rt = _NASA_inst_cont_allKeys[_NASA_inst_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    NASA_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NASA_instRoutineEnd() {
  return async function () {
    //------Ending Routine 'NASA_inst'-------
    NASA_instComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    NASA_inst_cont.stop();
    // the Routine "NASA_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _NASA_cont_allKeys;
var NASAComponents;
function NASARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'NASA'-------
    t = 0;
    NASAClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    NASA_text.setText(nasa_question);
    NASA_slider.reset()
    labels.setText('Very Low                                         Very High');
    if ((counter === 4)) {
        labels.text = "Perfect                                                 Failure";
    }
    if ((counter === 9)) {
        counter = 0;
    }
    counter = (counter + 1);
    
    NASA_cont.keys = undefined;
    NASA_cont.rt = undefined;
    _NASA_cont_allKeys = [];
    // keep track of which components have finished
    NASAComponents = [];
    NASAComponents.push(NASA_text);
    NASAComponents.push(NASA_slider);
    NASAComponents.push(labels);
    NASAComponents.push(NASA_cont);
    NASAComponents.push(NASA_cont_inst);
    
    NASAComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function NASARoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'NASA'-------
    // get current time
    t = NASAClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *NASA_text* updates
    if (t >= 0.0 && NASA_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NASA_text.tStart = t;  // (not accounting for frame time here)
      NASA_text.frameNStart = frameN;  // exact frame index
      
      NASA_text.setAutoDraw(true);
    }

    
    // *NASA_slider* updates
    if (t >= 0.0 && NASA_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NASA_slider.tStart = t;  // (not accounting for frame time here)
      NASA_slider.frameNStart = frameN;  // exact frame index
      
      NASA_slider.setAutoDraw(true);
    }

    
    // *labels* updates
    if (t >= 0.0 && labels.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      labels.tStart = t;  // (not accounting for frame time here)
      labels.frameNStart = frameN;  // exact frame index
      
      labels.setAutoDraw(true);
    }

    
    // *NASA_cont* updates
    if (t >= 0.5 && NASA_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NASA_cont.tStart = t;  // (not accounting for frame time here)
      NASA_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { NASA_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { NASA_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { NASA_cont.clearEvents(); });
    }

    if (NASA_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = NASA_cont.getKeys({keyList: ['return'], waitRelease: false});
      _NASA_cont_allKeys = _NASA_cont_allKeys.concat(theseKeys);
      if (_NASA_cont_allKeys.length > 0) {
        NASA_cont.keys = _NASA_cont_allKeys[_NASA_cont_allKeys.length - 1].name;  // just the last key pressed
        NASA_cont.rt = _NASA_cont_allKeys[_NASA_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *NASA_cont_inst* updates
    if (t >= 0.0 && NASA_cont_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NASA_cont_inst.tStart = t;  // (not accounting for frame time here)
      NASA_cont_inst.frameNStart = frameN;  // exact frame index
      
      NASA_cont_inst.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    NASAComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NASARoutineEnd() {
  return async function () {
    //------Ending Routine 'NASA'-------
    NASAComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('NASA_slider.response', NASA_slider.getRating());
    psychoJS.experiment.addData('NASA_slider.rt', NASA_slider.getRT());
    NASA_cont.stop();
    // the Routine "NASA" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_break_allKeys;
var BreakComponents;
function BreakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Break'-------
    t = 0;
    BreakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    timeoutTimer.reset();
    timeoutTimer.add(300);
    
    key_resp_break.keys = undefined;
    key_resp_break.rt = undefined;
    _key_resp_break_allKeys = [];
    // keep track of which components have finished
    BreakComponents = [];
    BreakComponents.push(text_timeout);
    BreakComponents.push(key_resp_break);
    BreakComponents.push(text_break);
    
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BreakRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Break'-------
    // get current time
    t = BreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_timeout* updates
    if (t >= 0.0 && text_timeout.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_timeout.tStart = t;  // (not accounting for frame time here)
      text_timeout.frameNStart = frameN;  // exact frame index
      
      text_timeout.setAutoDraw(true);
    }

    if ((timeoutTimer.getTime() >= (-300))) {
        text_timeout.text = (("Timeout in " + Number.parseInt((- timeoutTimer.getTime())).toString()) + " secs");
    }
    if ((timeoutTimer.getTime() >= 0)) {
        psychoJS.quit();
    }
    
    // *key_resp_break* updates
    if (t >= 0.0 && key_resp_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_break.tStart = t;  // (not accounting for frame time here)
      key_resp_break.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_break.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_break.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_break.clearEvents(); });
    }

    if (key_resp_break.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_break.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_break_allKeys = _key_resp_break_allKeys.concat(theseKeys);
      if (_key_resp_break_allKeys.length > 0) {
        key_resp_break.keys = _key_resp_break_allKeys[_key_resp_break_allKeys.length - 1].name;  // just the last key pressed
        key_resp_break.rt = _key_resp_break_allKeys[_key_resp_break_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_break* updates
    if (t >= 0.0 && text_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_break.tStart = t;  // (not accounting for frame time here)
      text_break.frameNStart = frameN;  // exact frame index
      
      text_break.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BreakRoutineEnd() {
  return async function () {
    //------Ending Routine 'Break'-------
    BreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_break.stop();
    // the Routine "Break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_end_2_allKeys;
var Final1Components;
function Final1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Final1'-------
    t = 0;
    Final1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_end_2.keys = undefined;
    key_resp_end_2.rt = undefined;
    _key_resp_end_2_allKeys = [];
    // keep track of which components have finished
    Final1Components = [];
    Final1Components.push(key_resp_end_2);
    Final1Components.push(text_end_2);
    
    Final1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Final1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Final1'-------
    // get current time
    t = Final1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_end_2* updates
    if (t >= 0.0 && key_resp_end_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end_2.tStart = t;  // (not accounting for frame time here)
      key_resp_end_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end_2.clearEvents(); });
    }

    if (key_resp_end_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_end_2_allKeys = _key_resp_end_2_allKeys.concat(theseKeys);
      if (_key_resp_end_2_allKeys.length > 0) {
        key_resp_end_2.keys = _key_resp_end_2_allKeys[_key_resp_end_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end_2.rt = _key_resp_end_2_allKeys[_key_resp_end_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_end_2* updates
    if (t >= 0.0 && text_end_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_2.tStart = t;  // (not accounting for frame time here)
      text_end_2.frameNStart = frameN;  // exact frame index
      
      text_end_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Final1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Final1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Final1'-------
    Final1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_end_2.stop();
    // the Routine "Final1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_DSSQ_think_inst_allKeys;
var DSSQ_think_instComponents;
function DSSQ_think_instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'DSSQ_think_inst'-------
    t = 0;
    DSSQ_think_instClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_DSSQ_think_inst.keys = undefined;
    key_resp_DSSQ_think_inst.rt = undefined;
    _key_resp_DSSQ_think_inst_allKeys = [];
    // keep track of which components have finished
    DSSQ_think_instComponents = [];
    DSSQ_think_instComponents.push(text_DSSQ_think_inst);
    DSSQ_think_instComponents.push(key_resp_DSSQ_think_inst);
    
    DSSQ_think_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function DSSQ_think_instRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'DSSQ_think_inst'-------
    // get current time
    t = DSSQ_think_instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_DSSQ_think_inst* updates
    if (t >= 0.0 && text_DSSQ_think_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_DSSQ_think_inst.tStart = t;  // (not accounting for frame time here)
      text_DSSQ_think_inst.frameNStart = frameN;  // exact frame index
      
      text_DSSQ_think_inst.setAutoDraw(true);
    }

    
    // *key_resp_DSSQ_think_inst* updates
    if (t >= 0.0 && key_resp_DSSQ_think_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_DSSQ_think_inst.tStart = t;  // (not accounting for frame time here)
      key_resp_DSSQ_think_inst.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_DSSQ_think_inst.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_DSSQ_think_inst.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_DSSQ_think_inst.clearEvents(); });
    }

    if (key_resp_DSSQ_think_inst.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_DSSQ_think_inst.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_DSSQ_think_inst_allKeys = _key_resp_DSSQ_think_inst_allKeys.concat(theseKeys);
      if (_key_resp_DSSQ_think_inst_allKeys.length > 0) {
        key_resp_DSSQ_think_inst.keys = _key_resp_DSSQ_think_inst_allKeys[_key_resp_DSSQ_think_inst_allKeys.length - 1].name;  // just the last key pressed
        key_resp_DSSQ_think_inst.rt = _key_resp_DSSQ_think_inst_allKeys[_key_resp_DSSQ_think_inst_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    DSSQ_think_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DSSQ_think_instRoutineEnd() {
  return async function () {
    //------Ending Routine 'DSSQ_think_inst'-------
    DSSQ_think_instComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_DSSQ_think_inst.stop();
    // the Routine "DSSQ_think_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _DSSQ_think_resp_allKeys;
var DSSQ_thinkComponents;
function DSSQ_thinkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'DSSQ_think'-------
    t = 0;
    DSSQ_thinkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    DSSQ_think_text.setText(DSSQ_think_item);
    DSSQ_think_resp.keys = undefined;
    DSSQ_think_resp.rt = undefined;
    _DSSQ_think_resp_allKeys = [];
    // keep track of which components have finished
    DSSQ_thinkComponents = [];
    DSSQ_thinkComponents.push(DSSQ_think_text);
    DSSQ_thinkComponents.push(DSSQ_think_scale);
    DSSQ_thinkComponents.push(DSSQ_think_resp);
    
    DSSQ_thinkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function DSSQ_thinkRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'DSSQ_think'-------
    // get current time
    t = DSSQ_thinkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DSSQ_think_text* updates
    if (t >= 0.0 && DSSQ_think_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DSSQ_think_text.tStart = t;  // (not accounting for frame time here)
      DSSQ_think_text.frameNStart = frameN;  // exact frame index
      
      DSSQ_think_text.setAutoDraw(true);
    }

    
    // *DSSQ_think_scale* updates
    if (t >= 0.0 && DSSQ_think_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DSSQ_think_scale.tStart = t;  // (not accounting for frame time here)
      DSSQ_think_scale.frameNStart = frameN;  // exact frame index
      
      DSSQ_think_scale.setAutoDraw(true);
    }

    
    // *DSSQ_think_resp* updates
    if (t >= 0.0 && DSSQ_think_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DSSQ_think_resp.tStart = t;  // (not accounting for frame time here)
      DSSQ_think_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { DSSQ_think_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { DSSQ_think_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { DSSQ_think_resp.clearEvents(); });
    }

    if (DSSQ_think_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = DSSQ_think_resp.getKeys({keyList: ['1', '2', '3', '4', '5', 'right'], waitRelease: false});
      _DSSQ_think_resp_allKeys = _DSSQ_think_resp_allKeys.concat(theseKeys);
      if (_DSSQ_think_resp_allKeys.length > 0) {
        DSSQ_think_resp.keys = _DSSQ_think_resp_allKeys[_DSSQ_think_resp_allKeys.length - 1].name;  // just the last key pressed
        DSSQ_think_resp.rt = _DSSQ_think_resp_allKeys[_DSSQ_think_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    DSSQ_thinkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DSSQ_thinkRoutineEnd() {
  return async function () {
    //------Ending Routine 'DSSQ_think'-------
    DSSQ_thinkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('DSSQ_think_resp.keys', DSSQ_think_resp.keys);
    if (typeof DSSQ_think_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('DSSQ_think_resp.rt', DSSQ_think_resp.rt);
        routineTimer.reset();
        }
    
    DSSQ_think_resp.stop();
    // the Routine "DSSQ_think" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_end_allKeys;
var Final2Components;
function Final2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Final2'-------
    t = 0;
    Final2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_end.keys = undefined;
    key_resp_end.rt = undefined;
    _key_resp_end_allKeys = [];
    // keep track of which components have finished
    Final2Components = [];
    Final2Components.push(key_resp_end);
    Final2Components.push(text_end);
    
    Final2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Final2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Final2'-------
    // get current time
    t = Final2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_end* updates
    if (t >= 0.0 && key_resp_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end.tStart = t;  // (not accounting for frame time here)
      key_resp_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.clearEvents(); });
    }

    if (key_resp_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_end_allKeys = _key_resp_end_allKeys.concat(theseKeys);
      if (_key_resp_end_allKeys.length > 0) {
        key_resp_end.keys = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end.rt = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Final2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Final2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Final2'-------
    Final2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_end.stop();
    // the Routine "Final2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
