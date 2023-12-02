#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Sat Jan  8 22:28:11 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'CTET_freq_gain'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/yiranli/Downloads/UMich/Research/Thesis/CTET_freq_gain/CTET_freq_gain.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 800], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instr"
InstrClock = core.Clock()
prac=0
key_resp_intro = keyboard.Keyboard()
text_intro = visual.TextStim(win=win, name='text_intro',
    text='Welcome, and thank you very much for taking part in this study! \n\nWe are interested in how different factors affect people’s ability to stay focused on a task, and how that influences their perception of time.\n\n\nPlease press the spacebar to go to the next screen.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "Consent1"
Consent1Clock = core.Clock()
consent1_text = visual.TextStim(win=win, name='consent1_text',
    text='You may choose to stop your participation at any time by pressing the Esc key on your keyboard.\n\nYou may choose to skip any question by pressing the right arrow key on your keyboard.\n\nPlease press the spacebar to go to the next screen.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
consent1_resp = keyboard.Keyboard()

# Initialize components for Routine "SIPI_inst"
SIPI_instClock = core.Clock()
IPI_inst_text = visual.TextStim(win=win, name='IPI_inst_text',
    text='Now we’re going to ask you some questions about your attention in everyday life. \nAnswer questions as they apply to your life today - not 1 or 2 or 20 years ago.\n\nIndicate to what extent each item applies to you, or is true for you by choosing from the five alternatives listed next:\n\n1. Definitely not true for me\n2. Usually not true for me\n3. Usually true for me\n4. True for me\n5. Very true for me\n\n(SPACEBAR to start)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
IPI_inst_cont = keyboard.Keyboard()

# Initialize components for Routine "SIPI"
SIPIClock = core.Clock()
SIPI_text = visual.TextStim(win=win, name='SIPI_text',
    text='',
    font='Arial',
    pos=(0, .15), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
SIPI_scale = visual.TextStim(win=win, name='SIPI_scale',
    text='1. definitely not true for me\n2. usually not true for me\n3. usually true for me\n4. true for me\n5. very true for me',
    font='Arial',
    pos=(0, -.13), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
SIPI_resp = keyboard.Keyboard()

# Initialize components for Routine "PAS_inst"
PAS_instClock = core.Clock()
PAS_inst_text = visual.TextStim(win=win, name='PAS_inst_text',
    text='Now we’re going to ask you some questions about how you feel right now. \n\nDifferent people react very differently to the same situations.\n\nYou will be presented with a list of words. Indicate to what extent you feel that way right now, that is, at the present moment.\n\n(SPACEBAR to start)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
PAS_inst_cont = keyboard.Keyboard()

# Initialize components for Routine "PAS"
PASClock = core.Clock()
PAS_question = visual.TextStim(win=win, name='PAS_question',
    text='',
    font='Arial',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
PAS_scale = visual.TextStim(win=win, name='PAS_scale',
    text='1. very slightly or not at all\n2. a little\n3. moderately\n4. quite a bit\n5. extremely',
    font='Arial',
    pos=(0, -.13), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
PAS_resp = keyboard.Keyboard()

# Initialize components for Routine "Training_Easy_Instr"
Training_Easy_InstrClock = core.Clock()
key_resp_easy_instr = keyboard.Keyboard()
text_easy_instr = visual.TextStim(win=win, name='text_easy_instr',
    text='In this task, you will see pictures of flowers. Most of them will appear for a relatively short time, but a few will be presented for longer. Your job is to press the “F” key for the pictures presented for the standard (shorter) duration, and press the “J” key for those that are presented for “too long”.\n\nPress the spacebar to go to the next screen.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Instr1"
Instr1Clock = core.Clock()
key_resp_intro_6 = keyboard.Keyboard()
text_intro_6 = visual.TextStim(win=win, name='text_intro_6',
    text='We’ll start with an easy version to make sure the instructions are clear. \n\nIn this training session, the shorter time will be 800 milliseconds, and the longer time will be 1600 milliseconds. \n\nPress the spacebar to go to the next screen.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Instr2"
Instr2Clock = core.Clock()
key_resp_intro_2 = keyboard.Keyboard()
text_intro_2 = visual.TextStim(win=win, name='text_intro_2',
    text='Here are a couple of examples of the standard, shorter duration.  During the task, press “F” AFTER these trials, during the response period, with the question mark on the screen (not while the picture is still being presented). \n\nYou don’t need to press anything during these examples. \n\nPress the spacebar to see the examples.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Example_short_easy"
Example_short_easyClock = core.Clock()
image_easy_ex = visual.ImageStim(
    win=win,
    name='image_easy_ex', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.8, 0.48),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_easy_ex = keyboard.Keyboard()

# Initialize components for Routine "Instr3"
Instr3Clock = core.Clock()
key_resp_intro_3 = keyboard.Keyboard()
text_intro_3 = visual.TextStim(win=win, name='text_intro_3',
    text='Next, you will see an example of the 1600-millisecond (longer) duration, followed by a response period.  Remember, when stimuli are presented for this duration, press “J” AFTER these trials, during the response period with the question mark on the screen (not while the picture is still being presented). \n\nPress the spacebar to see the examples.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Example_long_easy"
Example_long_easyClock = core.Clock()
image_easy_ex_2 = visual.ImageStim(
    win=win,
    name='image_easy_ex_2', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.8, 0.48),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_easy_ex_2 = keyboard.Keyboard()

# Initialize components for Routine "Instr4"
Instr4Clock = core.Clock()
key_resp_intro_4 = keyboard.Keyboard()
text_intro_4 = visual.TextStim(win=win, name='text_intro_4',
    text='Lastly, we will show you how the long-duration picture is presented among short-duration ones. To demonstrate, we will present it in a short-long-short order - notice now the second picture in this series stays on a bit longer.\n\nPress the spacebar to see the examples.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Example_sandwich_easy"
Example_sandwich_easyClock = core.Clock()
image_easy_ex_3 = visual.ImageStim(
    win=win,
    name='image_easy_ex_3', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.8, 0.48),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_easy_ex_3 = keyboard.Keyboard()

# Initialize components for Routine "Training_Easy_Start"
Training_Easy_StartClock = core.Clock()
key_resp_easy_instr_2 = keyboard.Keyboard()
text_easy_instr_2 = visual.TextStim(win=win, name='text_easy_instr_2',
    text='We will now start with the easy training session that lasts for about 1 minute, during which you will receive feedback to become familiar with the task. Remember, press “f” for the short-duration pictures,and “j” for the long-duration ones. Make your response after the picture, when the question mark is on the screen.\n\nYou need to reach a correct detection rate of 75% in order to move on to the other parts of the experiment. You will have two tries before moving on to the other parts. \n\nPress the spacebar to begin the session. ',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "pracRedo"
pracRedoClock = core.Clock()
text_redo = visual.TextStim(win=win, name='text_redo',
    text='Let’s redo the practice!\n\nPay attention to the duration of the pictures. Press “f” for the short-duration pictures,and “j” for the long-duration ones. Make your response after the picture, when the question mark is on the screen.\n\n(SPACEBAR to begin)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_redo = keyboard.Keyboard()

# Initialize components for Routine "Training_Easy"
Training_EasyClock = core.Clock()
image_easy = visual.ImageStim(
    win=win,
    name='image_easy', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.8, 0.48),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_easy = keyboard.Keyboard()
Question_Mark = visual.TextStim(win=win, name='Question_Mark',
    text='?',
    font='Arial',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
rightcall_easy=0
falsealarm_easy=0
rightcall_rate_easy = 0
correctrejection_rate_easy = 0
failed_easy = 0
numcorr_easy = 0
correctrate_easy = 0
aftereasy_loop_rep = 1

# Initialize components for Routine "Training_Easy_Feedback"
Training_Easy_FeedbackClock = core.Clock()
text_easy_feedback = visual.TextStim(win=win, name='text_easy_feedback',
    text='Well done! you correctly identified x/y of the targets with a z% correct rate. ',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_easy_feedback = keyboard.Keyboard()

# Initialize components for Routine "Training_Normal_Instr"
Training_Normal_InstrClock = core.Clock()
key_resp_normal_instr = keyboard.Keyboard()
text_normal_instr = visual.TextStim(win=win, name='text_normal_instr',
    text='In the next training session, the difference between the longer and shorter time will decrease. Namely, the longer time will become 1070 milliseconds, instead of the previous 1600 milliseconds. The shorter time will remain the same. Remember, “f” for short pictures and “j” for long pictures! \n\nOnce again, we will show you how the long-duration picture is presented among short-duration ones. To demonstrate, we will present it in a short-long-short order - notice now the second picture in this series stays on a bit longer.\n\nPress the spacebar to see the examples.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Example_sandwich_normal"
Example_sandwich_normalClock = core.Clock()
image_normal_ex = visual.ImageStim(
    win=win,
    name='image_normal_ex', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.8, 0.48),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_normal_ex = keyboard.Keyboard()

# Initialize components for Routine "Training_Normal_Start"
Training_Normal_StartClock = core.Clock()
key_resp_normal_instr_2 = keyboard.Keyboard()
text_normal_instr_2 = visual.TextStim(win=win, name='text_normal_instr_2',
    text='We will now go into the normal training session that lasts for about 1 minute, during which you will receive feedback to become familiar with the task. Remember, press “f” for the short-duration pictures,and “j” for the long-duration ones. Make your response after the picture, when the question mark is on the screen.\n\nYou need to reach a correct detection rate of 75% in order to move on to the main experiment. You will have 4 tries before moving on to the main experiment. \n\nPress the spacebar to begin the session. ',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "pracRedo"
pracRedoClock = core.Clock()
text_redo = visual.TextStim(win=win, name='text_redo',
    text='Let’s redo the practice!\n\nPay attention to the duration of the pictures. Press “f” for the short-duration pictures,and “j” for the long-duration ones. Make your response after the picture, when the question mark is on the screen.\n\n(SPACEBAR to begin)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_redo = keyboard.Keyboard()

# Initialize components for Routine "Training_Normal"
Training_NormalClock = core.Clock()
image_normal = visual.ImageStim(
    win=win,
    name='image_normal', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.8, 0.48),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_normal = keyboard.Keyboard()
Question_Mark_normal = visual.TextStim(win=win, name='Question_Mark_normal',
    text='?',
    font='Arial',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
numcorr_normal=0
rightcall_normal=0
falsealarm_normal=0
correctrate_normal = 0
rightcall_rate_normal = 0
correctrejection_rate_normal = 0
failed_normal = 0
afternormal_loop_rep = 1

# Initialize components for Routine "Training_Normal_Feedback"
Training_Normal_FeedbackClock = core.Clock()
text_normal_feedback = visual.TextStim(win=win, name='text_normal_feedback',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_easy_feedback_2 = keyboard.Keyboard()

# Initialize components for Routine "Instr5"
Instr5Clock = core.Clock()
key_resp_instr5 = keyboard.Keyboard()
text_instr5 = visual.TextStim(win=win, name='text_instr5',
    text='Next you will go into the actual experiment. You will be completing 10 runs, with each one lasting for 4 minutes. \n\nAlthough this task is ‘easy’ in some ways, it is very sensitive to lapses of attention.  It’s ok if you make some mistakes!  However, if your performance on either the task or questionnaires is too low/looks like you were not putting a good effort, your results may be disqualified and you may not be paid.\n\nPress <space> to continue',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "IncentiveInfo"
IncentiveInfoClock = core.Clock()
key_resp_incentive = keyboard.Keyboard()
text_incentive = visual.TextStim(win=win, name='text_incentive',
    text='You can earn up to 10 dollars as bonus money by making as many correct responses as you can. \n\nIf all of your correct responses are correct, you could get the whole of 10 dollars! \n\nYou will be paid through Prolific after you complete the experiment and your data has been reviewed.\n\n\nPress <space> to continue',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Instr6"
Instr6Clock = core.Clock()
key_resp_instr6 = keyboard.Keyboard()
text_instr6 = visual.TextStim(win=win, name='text_instr6',
    text='Ready to start the main task? Press the “R” key to begin running the experiment. Good luck! \n\n\nPress “f” for the short-duration pictures,and “j” for the long-duration ones, and make your response during the period when a “?” is on the screen. ',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Run"
RunClock = core.Clock()
runtext = visual.TextStim(win=win, name='runtext',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
runNum = 0

# Initialize components for Routine "Trial"
TrialClock = core.Clock()
image_trial = visual.ImageStim(
    win=win,
    name='image_trial', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.8, 0.48),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_trial = keyboard.Keyboard()
Question_Mark_trial = visual.TextStim(win=win, name='Question_Mark_trial',
    text='?',
    font='Arial',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
numcorr_trial=0
rightcall_trial=0
falsealarm_trial=0
correctrate_trial = 0
rightcall_rate_trial = 0
correctrejection_rate_trial = 0

# Initialize components for Routine "Feedback"
FeedbackClock = core.Clock()
bonus = 0
text_feedback = visual.TextStim(win=win, name='text_feedback',
    text=None,
    font='Arial',
    pos=(0, 0.3), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_original = visual.TextStim(win=win, name='text_original',
    text=None,
    font='Arial',
    pos=(0, 0.1), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
arrow_rectangle = visual.Rect(
    win=win, name='arrow_rectangle',
    width=(0.05, 0.15)[0], height=(0.05, 0.15)[1],
    ori=0.0, pos=(0, -0.05),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='green', fillColor='green',
    opacity=None, depth=-3.0, interpolate=True)
arrow_triangle = visual.ShapeStim(
    win=win, name='arrow_triangle',
    size=(0.12, 0.07), vertices='triangle',
    ori=180.0, pos=(0, -0.15),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='green', fillColor='green',
    opacity=None, depth=-4.0, interpolate=True)
text_current = visual.TextStim(win=win, name='text_current',
    text=None,
    font='Arial',
    pos=(0, -0.25), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
image = visual.ImageStim(
    win=win,
    name='image', 
    image='gain.png', mask=None,
    ori=0.0, pos=(0.4,-0.3), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
text_loss = visual.TextStim(win=win, name='text_loss',
    text=None,
    font='Arial',
    pos=(0.65,-0.35), height=0.07, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
key_resp_feedback = keyboard.Keyboard()
text_continue = visual.TextStim(win=win, name='text_continue',
    text='Press “c” to continue',
    font='Arial',
    pos=(0, -0.4), height=0.06, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);

# Initialize components for Routine "NASA_inst"
NASA_instClock = core.Clock()
NASA_inst_text = visual.TextStim(win=win, name='NASA_inst_text',
    text='Now we are going to ask questions about your subjective mental workload during the task. \n\nUse your mouse to click at the point or at the interval that best indicates your experience of the task.\n\nThere will be a short break after this questionnaire.\n\n(SPACEBAR to continue)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
NASA_inst_cont = keyboard.Keyboard()

# Initialize components for Routine "NASA"
NASAClock = core.Clock()
NASA_text = visual.TextStim(win=win, name='NASA_text',
    text='',
    font='Arial',
    pos=(0, .15), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
NASA_slider = visual.Slider(win=win, name='NASA_slider',
    startValue=None, size=(0.9, 0.07), pos=(0, -0.1), units=None,
    labels=(0,10,20,30,40,50,60,70,80,90,100), ticks=(0,10,20,30,40,50,60,70,80,90,100), granularity=1,
    style=['rating'], styleTweaks=(), opacity=1,
    color=[0.992,0.992,0.992], fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, depth=-1, readOnly=False)
labels = visual.TextStim(win=win, name='labels',
    text='',
    font='Arial',
    pos=(0, -0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
counter = 1
NASA_cont = keyboard.Keyboard()
NASA_cont_inst = visual.TextStim(win=win, name='NASA_cont_inst',
    text='(Use your mouse to click on the scale and press "return")',
    font='Arial',
    pos=(0, -.4), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "Break"
BreakClock = core.Clock()
text_timeout = visual.TextStim(win=win, name='text_timeout',
    text=None,
    font='Arial',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
timeoutTimer = core.Clock()
key_resp_break = keyboard.Keyboard()
text_break = visual.TextStim(win=win, name='text_break',
    text='Thank you for your response to the questions! If you need to take a short stretch break before starting the time-judgment task again, please go ahead now. However, if you take longer than 5 minutes before restarting the task, the experiment will time out and end automatically.\n\nPress <space> to continue',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "Final1"
Final1Clock = core.Clock()
key_resp_end_2 = keyboard.Keyboard()
text_end_2 = visual.TextStim(win=win, name='text_end_2',
    text='Thank you! You have completed the time judgment part of the experiment.\n\nNext we’ll ask you just a few questions that help assess how doing such a task might have changed your mental/emotional state since starting the experiment. Just a few more things before you’re done! \n\nPress <space> to continue',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "PAS_inst"
PAS_instClock = core.Clock()
PAS_inst_text = visual.TextStim(win=win, name='PAS_inst_text',
    text='Now we’re going to ask you some questions about how you feel right now. \n\nDifferent people react very differently to the same situations.\n\nYou will be presented with a list of words. Indicate to what extent you feel that way right now, that is, at the present moment.\n\n(SPACEBAR to start)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
PAS_inst_cont = keyboard.Keyboard()

# Initialize components for Routine "PAS"
PASClock = core.Clock()
PAS_question = visual.TextStim(win=win, name='PAS_question',
    text='',
    font='Arial',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
PAS_scale = visual.TextStim(win=win, name='PAS_scale',
    text='1. very slightly or not at all\n2. a little\n3. moderately\n4. quite a bit\n5. extremely',
    font='Arial',
    pos=(0, -.13), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
PAS_resp = keyboard.Keyboard()

# Initialize components for Routine "DSSQ_think_inst"
DSSQ_think_instClock = core.Clock()
text_DSSQ_think_inst = visual.TextStim(win=win, name='text_DSSQ_think_inst',
    text="This next set of questions concerns the kinds of thoughts that go through people's heads at particular times, for example while they are doing some task or activity. \n\nPlease indicate roughly how often you had each thought WHILE PERFORMING THE TASK, by circling a number from the list below.\n1 = Never \n2 = Once \n3 = A few times\n4 = Often\n5 = Very often\n\n(SPACEBAR to start)",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_DSSQ_think_inst = keyboard.Keyboard()

# Initialize components for Routine "DSSQ_think"
DSSQ_thinkClock = core.Clock()
DSSQ_think_text = visual.TextStim(win=win, name='DSSQ_think_text',
    text='',
    font='Arial',
    pos=(0, .15), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
DSSQ_think_scale = visual.TextStim(win=win, name='DSSQ_think_scale',
    text='1 = Never \n2 = Once \n3 = A few times\n4 = Often\n5 = Very often',
    font='Arial',
    pos=(0, -.13), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
DSSQ_think_resp = keyboard.Keyboard()

# Initialize components for Routine "Final2"
Final2Clock = core.Clock()
key_resp_end = keyboard.Keyboard()
text_end = visual.TextStim(win=win, name='text_end',
    text='Thank you! You have completed the experiment. \n\nAfter you press space, you will be redirected back to Prolific.\n\nPress <space> to exit',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
skip = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='skip')
thisExp.addLoop(skip)  # add the loop to the experiment
thisSkip = skip.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSkip.rgb)
if thisSkip != None:
    for paramName in thisSkip:
        exec('{} = thisSkip[paramName]'.format(paramName))

for thisSkip in skip:
    currentLoop = skip
    # abbreviate parameter names if possible (e.g. rgb = thisSkip.rgb)
    if thisSkip != None:
        for paramName in thisSkip:
            exec('{} = thisSkip[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Instr"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_intro.keys = []
    key_resp_intro.rt = []
    _key_resp_intro_allKeys = []
    # keep track of which components have finished
    InstrComponents = [key_resp_intro, text_intro]
    for thisComponent in InstrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Instr"-------
    while continueRoutine:
        # get current time
        t = InstrClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=InstrClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_intro* updates
        waitOnFlip = False
        if key_resp_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_intro.frameNStart = frameN  # exact frame index
            key_resp_intro.tStart = t  # local t and not account for scr refresh
            key_resp_intro.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_intro, 'tStartRefresh')  # time at next scr refresh
            key_resp_intro.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_intro.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_intro.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_intro.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_intro.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_intro_allKeys.extend(theseKeys)
            if len(_key_resp_intro_allKeys):
                key_resp_intro.keys = _key_resp_intro_allKeys[-1].name  # just the last key pressed
                key_resp_intro.rt = _key_resp_intro_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_intro* updates
        if text_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_intro.frameNStart = frameN  # exact frame index
            text_intro.tStart = t  # local t and not account for scr refresh
            text_intro.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_intro, 'tStartRefresh')  # time at next scr refresh
            text_intro.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in InstrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Instr"-------
    for thisComponent in InstrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Consent1"-------
    continueRoutine = True
    # update component parameters for each repeat
    consent1_resp.keys = []
    consent1_resp.rt = []
    _consent1_resp_allKeys = []
    # keep track of which components have finished
    Consent1Components = [consent1_text, consent1_resp]
    for thisComponent in Consent1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Consent1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Consent1"-------
    while continueRoutine:
        # get current time
        t = Consent1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Consent1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *consent1_text* updates
        if consent1_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            consent1_text.frameNStart = frameN  # exact frame index
            consent1_text.tStart = t  # local t and not account for scr refresh
            consent1_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(consent1_text, 'tStartRefresh')  # time at next scr refresh
            consent1_text.setAutoDraw(True)
        
        # *consent1_resp* updates
        waitOnFlip = False
        if consent1_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            consent1_resp.frameNStart = frameN  # exact frame index
            consent1_resp.tStart = t  # local t and not account for scr refresh
            consent1_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(consent1_resp, 'tStartRefresh')  # time at next scr refresh
            consent1_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(consent1_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(consent1_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if consent1_resp.status == STARTED and not waitOnFlip:
            theseKeys = consent1_resp.getKeys(keyList=['space'], waitRelease=False)
            _consent1_resp_allKeys.extend(theseKeys)
            if len(_consent1_resp_allKeys):
                consent1_resp.keys = _consent1_resp_allKeys[-1].name  # just the last key pressed
                consent1_resp.rt = _consent1_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Consent1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Consent1"-------
    for thisComponent in Consent1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Consent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "SIPI_inst"-------
    continueRoutine = True
    # update component parameters for each repeat
    IPI_inst_cont.keys = []
    IPI_inst_cont.rt = []
    _IPI_inst_cont_allKeys = []
    # keep track of which components have finished
    SIPI_instComponents = [IPI_inst_text, IPI_inst_cont]
    for thisComponent in SIPI_instComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    SIPI_instClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "SIPI_inst"-------
    while continueRoutine:
        # get current time
        t = SIPI_instClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=SIPI_instClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *IPI_inst_text* updates
        if IPI_inst_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            IPI_inst_text.frameNStart = frameN  # exact frame index
            IPI_inst_text.tStart = t  # local t and not account for scr refresh
            IPI_inst_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(IPI_inst_text, 'tStartRefresh')  # time at next scr refresh
            IPI_inst_text.setAutoDraw(True)
        
        # *IPI_inst_cont* updates
        waitOnFlip = False
        if IPI_inst_cont.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            IPI_inst_cont.frameNStart = frameN  # exact frame index
            IPI_inst_cont.tStart = t  # local t and not account for scr refresh
            IPI_inst_cont.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(IPI_inst_cont, 'tStartRefresh')  # time at next scr refresh
            IPI_inst_cont.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(IPI_inst_cont.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(IPI_inst_cont.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if IPI_inst_cont.status == STARTED and not waitOnFlip:
            theseKeys = IPI_inst_cont.getKeys(keyList=['space'], waitRelease=False)
            _IPI_inst_cont_allKeys.extend(theseKeys)
            if len(_IPI_inst_cont_allKeys):
                IPI_inst_cont.keys = _IPI_inst_cont_allKeys[-1].name  # just the last key pressed
                IPI_inst_cont.rt = _IPI_inst_cont_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in SIPI_instComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "SIPI_inst"-------
    for thisComponent in SIPI_instComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "SIPI_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    SIPI_loop = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('SIPI.xlsx'),
        seed=None, name='SIPI_loop')
    thisExp.addLoop(SIPI_loop)  # add the loop to the experiment
    thisSIPI_loop = SIPI_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisSIPI_loop.rgb)
    if thisSIPI_loop != None:
        for paramName in thisSIPI_loop:
            exec('{} = thisSIPI_loop[paramName]'.format(paramName))
    
    for thisSIPI_loop in SIPI_loop:
        currentLoop = SIPI_loop
        # abbreviate parameter names if possible (e.g. rgb = thisSIPI_loop.rgb)
        if thisSIPI_loop != None:
            for paramName in thisSIPI_loop:
                exec('{} = thisSIPI_loop[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "SIPI"-------
        continueRoutine = True
        # update component parameters for each repeat
        SIPI_text.setText(SIPI_item)
        SIPI_resp.keys = []
        SIPI_resp.rt = []
        _SIPI_resp_allKeys = []
        # keep track of which components have finished
        SIPIComponents = [SIPI_text, SIPI_scale, SIPI_resp]
        for thisComponent in SIPIComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        SIPIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "SIPI"-------
        while continueRoutine:
            # get current time
            t = SIPIClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=SIPIClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *SIPI_text* updates
            if SIPI_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                SIPI_text.frameNStart = frameN  # exact frame index
                SIPI_text.tStart = t  # local t and not account for scr refresh
                SIPI_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(SIPI_text, 'tStartRefresh')  # time at next scr refresh
                SIPI_text.setAutoDraw(True)
            
            # *SIPI_scale* updates
            if SIPI_scale.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                SIPI_scale.frameNStart = frameN  # exact frame index
                SIPI_scale.tStart = t  # local t and not account for scr refresh
                SIPI_scale.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(SIPI_scale, 'tStartRefresh')  # time at next scr refresh
                SIPI_scale.setAutoDraw(True)
            
            # *SIPI_resp* updates
            waitOnFlip = False
            if SIPI_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                SIPI_resp.frameNStart = frameN  # exact frame index
                SIPI_resp.tStart = t  # local t and not account for scr refresh
                SIPI_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(SIPI_resp, 'tStartRefresh')  # time at next scr refresh
                SIPI_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(SIPI_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(SIPI_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if SIPI_resp.status == STARTED and not waitOnFlip:
                theseKeys = SIPI_resp.getKeys(keyList=['1', '2', '3', '4', '5', 'right'], waitRelease=False)
                _SIPI_resp_allKeys.extend(theseKeys)
                if len(_SIPI_resp_allKeys):
                    SIPI_resp.keys = _SIPI_resp_allKeys[-1].name  # just the last key pressed
                    SIPI_resp.rt = _SIPI_resp_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in SIPIComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "SIPI"-------
        for thisComponent in SIPIComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if SIPI_resp.keys in ['', [], None]:  # No response was made
            SIPI_resp.keys = None
        SIPI_loop.addData('SIPI_resp.keys',SIPI_resp.keys)
        if SIPI_resp.keys != None:  # we had a response
            SIPI_loop.addData('SIPI_resp.rt', SIPI_resp.rt)
        # the Routine "SIPI" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'SIPI_loop'
    
    # get names of stimulus parameters
    if SIPI_loop.trialList in ([], [None], None):
        params = []
    else:
        params = SIPI_loop.trialList[0].keys()
    # save data for this loop
    SIPI_loop.saveAsExcel(filename + '.xlsx', sheetName='SIPI_loop',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    SIPI_loop.saveAsText(filename + 'SIPI_loop.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "PAS_inst"-------
    continueRoutine = True
    # update component parameters for each repeat
    PAS_inst_cont.keys = []
    PAS_inst_cont.rt = []
    _PAS_inst_cont_allKeys = []
    # keep track of which components have finished
    PAS_instComponents = [PAS_inst_text, PAS_inst_cont]
    for thisComponent in PAS_instComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    PAS_instClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "PAS_inst"-------
    while continueRoutine:
        # get current time
        t = PAS_instClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=PAS_instClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *PAS_inst_text* updates
        if PAS_inst_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            PAS_inst_text.frameNStart = frameN  # exact frame index
            PAS_inst_text.tStart = t  # local t and not account for scr refresh
            PAS_inst_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(PAS_inst_text, 'tStartRefresh')  # time at next scr refresh
            PAS_inst_text.setAutoDraw(True)
        
        # *PAS_inst_cont* updates
        waitOnFlip = False
        if PAS_inst_cont.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            PAS_inst_cont.frameNStart = frameN  # exact frame index
            PAS_inst_cont.tStart = t  # local t and not account for scr refresh
            PAS_inst_cont.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(PAS_inst_cont, 'tStartRefresh')  # time at next scr refresh
            PAS_inst_cont.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(PAS_inst_cont.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(PAS_inst_cont.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if PAS_inst_cont.status == STARTED and not waitOnFlip:
            theseKeys = PAS_inst_cont.getKeys(keyList=['space'], waitRelease=False)
            _PAS_inst_cont_allKeys.extend(theseKeys)
            if len(_PAS_inst_cont_allKeys):
                PAS_inst_cont.keys = _PAS_inst_cont_allKeys[-1].name  # just the last key pressed
                PAS_inst_cont.rt = _PAS_inst_cont_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in PAS_instComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "PAS_inst"-------
    for thisComponent in PAS_instComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "PAS_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    PAS_loop1 = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('PAS.xlsx'),
        seed=None, name='PAS_loop1')
    thisExp.addLoop(PAS_loop1)  # add the loop to the experiment
    thisPAS_loop1 = PAS_loop1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPAS_loop1.rgb)
    if thisPAS_loop1 != None:
        for paramName in thisPAS_loop1:
            exec('{} = thisPAS_loop1[paramName]'.format(paramName))
    
    for thisPAS_loop1 in PAS_loop1:
        currentLoop = PAS_loop1
        # abbreviate parameter names if possible (e.g. rgb = thisPAS_loop1.rgb)
        if thisPAS_loop1 != None:
            for paramName in thisPAS_loop1:
                exec('{} = thisPAS_loop1[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "PAS"-------
        continueRoutine = True
        # update component parameters for each repeat
        PAS_question.setText(PAS_item)
        PAS_resp.keys = []
        PAS_resp.rt = []
        _PAS_resp_allKeys = []
        # keep track of which components have finished
        PASComponents = [PAS_question, PAS_scale, PAS_resp]
        for thisComponent in PASComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        PASClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "PAS"-------
        while continueRoutine:
            # get current time
            t = PASClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=PASClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *PAS_question* updates
            if PAS_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                PAS_question.frameNStart = frameN  # exact frame index
                PAS_question.tStart = t  # local t and not account for scr refresh
                PAS_question.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(PAS_question, 'tStartRefresh')  # time at next scr refresh
                PAS_question.setAutoDraw(True)
            
            # *PAS_scale* updates
            if PAS_scale.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                PAS_scale.frameNStart = frameN  # exact frame index
                PAS_scale.tStart = t  # local t and not account for scr refresh
                PAS_scale.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(PAS_scale, 'tStartRefresh')  # time at next scr refresh
                PAS_scale.setAutoDraw(True)
            
            # *PAS_resp* updates
            waitOnFlip = False
            if PAS_resp.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                PAS_resp.frameNStart = frameN  # exact frame index
                PAS_resp.tStart = t  # local t and not account for scr refresh
                PAS_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(PAS_resp, 'tStartRefresh')  # time at next scr refresh
                PAS_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(PAS_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(PAS_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if PAS_resp.status == STARTED and not waitOnFlip:
                theseKeys = PAS_resp.getKeys(keyList=['1', '2', '3', '4', '5', 'right'], waitRelease=False)
                _PAS_resp_allKeys.extend(theseKeys)
                if len(_PAS_resp_allKeys):
                    PAS_resp.keys = _PAS_resp_allKeys[-1].name  # just the last key pressed
                    PAS_resp.rt = _PAS_resp_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in PASComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "PAS"-------
        for thisComponent in PASComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if PAS_resp.keys in ['', [], None]:  # No response was made
            PAS_resp.keys = None
        PAS_loop1.addData('PAS_resp.keys',PAS_resp.keys)
        if PAS_resp.keys != None:  # we had a response
            PAS_loop1.addData('PAS_resp.rt', PAS_resp.rt)
        # the Routine "PAS" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'PAS_loop1'
    
    # get names of stimulus parameters
    if PAS_loop1.trialList in ([], [None], None):
        params = []
    else:
        params = PAS_loop1.trialList[0].keys()
    # save data for this loop
    PAS_loop1.saveAsExcel(filename + '.xlsx', sheetName='PAS_loop1',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    PAS_loop1.saveAsText(filename + 'PAS_loop1.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "Training_Easy_Instr"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_easy_instr.keys = []
    key_resp_easy_instr.rt = []
    _key_resp_easy_instr_allKeys = []
    # keep track of which components have finished
    Training_Easy_InstrComponents = [key_resp_easy_instr, text_easy_instr]
    for thisComponent in Training_Easy_InstrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Training_Easy_InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Training_Easy_Instr"-------
    while continueRoutine:
        # get current time
        t = Training_Easy_InstrClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Training_Easy_InstrClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_easy_instr* updates
        waitOnFlip = False
        if key_resp_easy_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_easy_instr.frameNStart = frameN  # exact frame index
            key_resp_easy_instr.tStart = t  # local t and not account for scr refresh
            key_resp_easy_instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_easy_instr, 'tStartRefresh')  # time at next scr refresh
            key_resp_easy_instr.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_easy_instr.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_easy_instr.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_easy_instr.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_easy_instr.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_easy_instr_allKeys.extend(theseKeys)
            if len(_key_resp_easy_instr_allKeys):
                key_resp_easy_instr.keys = _key_resp_easy_instr_allKeys[-1].name  # just the last key pressed
                key_resp_easy_instr.rt = _key_resp_easy_instr_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_easy_instr* updates
        if text_easy_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_easy_instr.frameNStart = frameN  # exact frame index
            text_easy_instr.tStart = t  # local t and not account for scr refresh
            text_easy_instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_easy_instr, 'tStartRefresh')  # time at next scr refresh
            text_easy_instr.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Training_Easy_InstrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Training_Easy_Instr"-------
    for thisComponent in Training_Easy_InstrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Training_Easy_Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Instr1"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_intro_6.keys = []
    key_resp_intro_6.rt = []
    _key_resp_intro_6_allKeys = []
    # keep track of which components have finished
    Instr1Components = [key_resp_intro_6, text_intro_6]
    for thisComponent in Instr1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Instr1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Instr1"-------
    while continueRoutine:
        # get current time
        t = Instr1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Instr1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_intro_6* updates
        waitOnFlip = False
        if key_resp_intro_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_intro_6.frameNStart = frameN  # exact frame index
            key_resp_intro_6.tStart = t  # local t and not account for scr refresh
            key_resp_intro_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_intro_6, 'tStartRefresh')  # time at next scr refresh
            key_resp_intro_6.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_intro_6.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_intro_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_intro_6.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_intro_6.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_intro_6_allKeys.extend(theseKeys)
            if len(_key_resp_intro_6_allKeys):
                key_resp_intro_6.keys = _key_resp_intro_6_allKeys[-1].name  # just the last key pressed
                key_resp_intro_6.rt = _key_resp_intro_6_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_intro_6* updates
        if text_intro_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_intro_6.frameNStart = frameN  # exact frame index
            text_intro_6.tStart = t  # local t and not account for scr refresh
            text_intro_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_intro_6, 'tStartRefresh')  # time at next scr refresh
            text_intro_6.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Instr1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Instr1"-------
    for thisComponent in Instr1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Instr2"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_intro_2.keys = []
    key_resp_intro_2.rt = []
    _key_resp_intro_2_allKeys = []
    # keep track of which components have finished
    Instr2Components = [key_resp_intro_2, text_intro_2]
    for thisComponent in Instr2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Instr2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Instr2"-------
    while continueRoutine:
        # get current time
        t = Instr2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Instr2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_intro_2* updates
        waitOnFlip = False
        if key_resp_intro_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_intro_2.frameNStart = frameN  # exact frame index
            key_resp_intro_2.tStart = t  # local t and not account for scr refresh
            key_resp_intro_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_intro_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_intro_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_intro_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_intro_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_intro_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_intro_2.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_intro_2_allKeys.extend(theseKeys)
            if len(_key_resp_intro_2_allKeys):
                key_resp_intro_2.keys = _key_resp_intro_2_allKeys[-1].name  # just the last key pressed
                key_resp_intro_2.rt = _key_resp_intro_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_intro_2* updates
        if text_intro_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_intro_2.frameNStart = frameN  # exact frame index
            text_intro_2.tStart = t  # local t and not account for scr refresh
            text_intro_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_intro_2, 'tStartRefresh')  # time at next scr refresh
            text_intro_2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Instr2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Instr2"-------
    for thisComponent in Instr2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    short_easy = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('example_short_easy.xlsx'),
        seed=None, name='short_easy')
    thisExp.addLoop(short_easy)  # add the loop to the experiment
    thisShort_easy = short_easy.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisShort_easy.rgb)
    if thisShort_easy != None:
        for paramName in thisShort_easy:
            exec('{} = thisShort_easy[paramName]'.format(paramName))
    
    for thisShort_easy in short_easy:
        currentLoop = short_easy
        # abbreviate parameter names if possible (e.g. rgb = thisShort_easy.rgb)
        if thisShort_easy != None:
            for paramName in thisShort_easy:
                exec('{} = thisShort_easy[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Example_short_easy"-------
        continueRoutine = True
        # update component parameters for each repeat
        image_easy_ex.setImage(Stim)
        key_resp_easy_ex.keys = []
        key_resp_easy_ex.rt = []
        _key_resp_easy_ex_allKeys = []
        # keep track of which components have finished
        Example_short_easyComponents = [image_easy_ex, key_resp_easy_ex]
        for thisComponent in Example_short_easyComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Example_short_easyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Example_short_easy"-------
        while continueRoutine:
            # get current time
            t = Example_short_easyClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Example_short_easyClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_easy_ex* updates
            if image_easy_ex.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_easy_ex.frameNStart = frameN  # exact frame index
                image_easy_ex.tStart = t  # local t and not account for scr refresh
                image_easy_ex.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_easy_ex, 'tStartRefresh')  # time at next scr refresh
                image_easy_ex.setAutoDraw(True)
            if image_easy_ex.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_easy_ex.tStartRefresh + StimulusDuration-frameTolerance:
                    # keep track of stop time/frame for later
                    image_easy_ex.tStop = t  # not accounting for scr refresh
                    image_easy_ex.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_easy_ex, 'tStopRefresh')  # time at next scr refresh
                    image_easy_ex.setAutoDraw(False)
            
            # *key_resp_easy_ex* updates
            waitOnFlip = False
            if key_resp_easy_ex.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                # keep track of start time/frame for later
                key_resp_easy_ex.frameNStart = frameN  # exact frame index
                key_resp_easy_ex.tStart = t  # local t and not account for scr refresh
                key_resp_easy_ex.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_easy_ex, 'tStartRefresh')  # time at next scr refresh
                key_resp_easy_ex.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_easy_ex.clock.reset)  # t=0 on next screen flip
            if key_resp_easy_ex.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_easy_ex.tStartRefresh + ResponseDuration-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_easy_ex.tStop = t  # not accounting for scr refresh
                    key_resp_easy_ex.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_easy_ex, 'tStopRefresh')  # time at next scr refresh
                    key_resp_easy_ex.status = FINISHED
            if key_resp_easy_ex.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_easy_ex.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_easy_ex_allKeys.extend(theseKeys)
                if len(_key_resp_easy_ex_allKeys):
                    key_resp_easy_ex.keys = _key_resp_easy_ex_allKeys[-1].name  # just the last key pressed
                    key_resp_easy_ex.rt = _key_resp_easy_ex_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Example_short_easyComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Example_short_easy"-------
        for thisComponent in Example_short_easyComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "Example_short_easy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'short_easy'
    
    # get names of stimulus parameters
    if short_easy.trialList in ([], [None], None):
        params = []
    else:
        params = short_easy.trialList[0].keys()
    # save data for this loop
    short_easy.saveAsExcel(filename + '.xlsx', sheetName='short_easy',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    short_easy.saveAsText(filename + 'short_easy.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "Instr3"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_intro_3.keys = []
    key_resp_intro_3.rt = []
    _key_resp_intro_3_allKeys = []
    # keep track of which components have finished
    Instr3Components = [key_resp_intro_3, text_intro_3]
    for thisComponent in Instr3Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Instr3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Instr3"-------
    while continueRoutine:
        # get current time
        t = Instr3Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Instr3Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_intro_3* updates
        waitOnFlip = False
        if key_resp_intro_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_intro_3.frameNStart = frameN  # exact frame index
            key_resp_intro_3.tStart = t  # local t and not account for scr refresh
            key_resp_intro_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_intro_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_intro_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_intro_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_intro_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_intro_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_intro_3.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_intro_3_allKeys.extend(theseKeys)
            if len(_key_resp_intro_3_allKeys):
                key_resp_intro_3.keys = _key_resp_intro_3_allKeys[-1].name  # just the last key pressed
                key_resp_intro_3.rt = _key_resp_intro_3_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_intro_3* updates
        if text_intro_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_intro_3.frameNStart = frameN  # exact frame index
            text_intro_3.tStart = t  # local t and not account for scr refresh
            text_intro_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_intro_3, 'tStartRefresh')  # time at next scr refresh
            text_intro_3.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Instr3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Instr3"-------
    for thisComponent in Instr3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Instr3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    long_easy = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('example_long_easy.xlsx'),
        seed=None, name='long_easy')
    thisExp.addLoop(long_easy)  # add the loop to the experiment
    thisLong_easy = long_easy.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLong_easy.rgb)
    if thisLong_easy != None:
        for paramName in thisLong_easy:
            exec('{} = thisLong_easy[paramName]'.format(paramName))
    
    for thisLong_easy in long_easy:
        currentLoop = long_easy
        # abbreviate parameter names if possible (e.g. rgb = thisLong_easy.rgb)
        if thisLong_easy != None:
            for paramName in thisLong_easy:
                exec('{} = thisLong_easy[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Example_long_easy"-------
        continueRoutine = True
        # update component parameters for each repeat
        image_easy_ex_2.setImage(Stim)
        key_resp_easy_ex_2.keys = []
        key_resp_easy_ex_2.rt = []
        _key_resp_easy_ex_2_allKeys = []
        # keep track of which components have finished
        Example_long_easyComponents = [image_easy_ex_2, key_resp_easy_ex_2]
        for thisComponent in Example_long_easyComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Example_long_easyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Example_long_easy"-------
        while continueRoutine:
            # get current time
            t = Example_long_easyClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Example_long_easyClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_easy_ex_2* updates
            if image_easy_ex_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_easy_ex_2.frameNStart = frameN  # exact frame index
                image_easy_ex_2.tStart = t  # local t and not account for scr refresh
                image_easy_ex_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_easy_ex_2, 'tStartRefresh')  # time at next scr refresh
                image_easy_ex_2.setAutoDraw(True)
            if image_easy_ex_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_easy_ex_2.tStartRefresh + StimulusDuration-frameTolerance:
                    # keep track of stop time/frame for later
                    image_easy_ex_2.tStop = t  # not accounting for scr refresh
                    image_easy_ex_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_easy_ex_2, 'tStopRefresh')  # time at next scr refresh
                    image_easy_ex_2.setAutoDraw(False)
            
            # *key_resp_easy_ex_2* updates
            waitOnFlip = False
            if key_resp_easy_ex_2.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                # keep track of start time/frame for later
                key_resp_easy_ex_2.frameNStart = frameN  # exact frame index
                key_resp_easy_ex_2.tStart = t  # local t and not account for scr refresh
                key_resp_easy_ex_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_easy_ex_2, 'tStartRefresh')  # time at next scr refresh
                key_resp_easy_ex_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_easy_ex_2.clock.reset)  # t=0 on next screen flip
            if key_resp_easy_ex_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_easy_ex_2.tStartRefresh + ResponseDuration-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_easy_ex_2.tStop = t  # not accounting for scr refresh
                    key_resp_easy_ex_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_easy_ex_2, 'tStopRefresh')  # time at next scr refresh
                    key_resp_easy_ex_2.status = FINISHED
            if key_resp_easy_ex_2.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_easy_ex_2.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_easy_ex_2_allKeys.extend(theseKeys)
                if len(_key_resp_easy_ex_2_allKeys):
                    key_resp_easy_ex_2.keys = _key_resp_easy_ex_2_allKeys[-1].name  # just the last key pressed
                    key_resp_easy_ex_2.rt = _key_resp_easy_ex_2_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Example_long_easyComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Example_long_easy"-------
        for thisComponent in Example_long_easyComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "Example_long_easy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'long_easy'
    
    # get names of stimulus parameters
    if long_easy.trialList in ([], [None], None):
        params = []
    else:
        params = long_easy.trialList[0].keys()
    # save data for this loop
    long_easy.saveAsExcel(filename + '.xlsx', sheetName='long_easy',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    long_easy.saveAsText(filename + 'long_easy.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "Instr4"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_intro_4.keys = []
    key_resp_intro_4.rt = []
    _key_resp_intro_4_allKeys = []
    # keep track of which components have finished
    Instr4Components = [key_resp_intro_4, text_intro_4]
    for thisComponent in Instr4Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Instr4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Instr4"-------
    while continueRoutine:
        # get current time
        t = Instr4Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Instr4Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_intro_4* updates
        waitOnFlip = False
        if key_resp_intro_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_intro_4.frameNStart = frameN  # exact frame index
            key_resp_intro_4.tStart = t  # local t and not account for scr refresh
            key_resp_intro_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_intro_4, 'tStartRefresh')  # time at next scr refresh
            key_resp_intro_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_intro_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_intro_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_intro_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_intro_4.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_intro_4_allKeys.extend(theseKeys)
            if len(_key_resp_intro_4_allKeys):
                key_resp_intro_4.keys = _key_resp_intro_4_allKeys[-1].name  # just the last key pressed
                key_resp_intro_4.rt = _key_resp_intro_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_intro_4* updates
        if text_intro_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_intro_4.frameNStart = frameN  # exact frame index
            text_intro_4.tStart = t  # local t and not account for scr refresh
            text_intro_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_intro_4, 'tStartRefresh')  # time at next scr refresh
            text_intro_4.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Instr4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Instr4"-------
    for thisComponent in Instr4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Instr4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    sandwich_easy = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('example_sandwich_easy.xlsx'),
        seed=None, name='sandwich_easy')
    thisExp.addLoop(sandwich_easy)  # add the loop to the experiment
    thisSandwich_easy = sandwich_easy.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisSandwich_easy.rgb)
    if thisSandwich_easy != None:
        for paramName in thisSandwich_easy:
            exec('{} = thisSandwich_easy[paramName]'.format(paramName))
    
    for thisSandwich_easy in sandwich_easy:
        currentLoop = sandwich_easy
        # abbreviate parameter names if possible (e.g. rgb = thisSandwich_easy.rgb)
        if thisSandwich_easy != None:
            for paramName in thisSandwich_easy:
                exec('{} = thisSandwich_easy[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Example_sandwich_easy"-------
        continueRoutine = True
        # update component parameters for each repeat
        image_easy_ex_3.setImage(Stim)
        key_resp_easy_ex_3.keys = []
        key_resp_easy_ex_3.rt = []
        _key_resp_easy_ex_3_allKeys = []
        # keep track of which components have finished
        Example_sandwich_easyComponents = [image_easy_ex_3, key_resp_easy_ex_3]
        for thisComponent in Example_sandwich_easyComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Example_sandwich_easyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Example_sandwich_easy"-------
        while continueRoutine:
            # get current time
            t = Example_sandwich_easyClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Example_sandwich_easyClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_easy_ex_3* updates
            if image_easy_ex_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_easy_ex_3.frameNStart = frameN  # exact frame index
                image_easy_ex_3.tStart = t  # local t and not account for scr refresh
                image_easy_ex_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_easy_ex_3, 'tStartRefresh')  # time at next scr refresh
                image_easy_ex_3.setAutoDraw(True)
            if image_easy_ex_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_easy_ex_3.tStartRefresh + StimulusDuration-frameTolerance:
                    # keep track of stop time/frame for later
                    image_easy_ex_3.tStop = t  # not accounting for scr refresh
                    image_easy_ex_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_easy_ex_3, 'tStopRefresh')  # time at next scr refresh
                    image_easy_ex_3.setAutoDraw(False)
            
            # *key_resp_easy_ex_3* updates
            waitOnFlip = False
            if key_resp_easy_ex_3.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                # keep track of start time/frame for later
                key_resp_easy_ex_3.frameNStart = frameN  # exact frame index
                key_resp_easy_ex_3.tStart = t  # local t and not account for scr refresh
                key_resp_easy_ex_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_easy_ex_3, 'tStartRefresh')  # time at next scr refresh
                key_resp_easy_ex_3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_easy_ex_3.clock.reset)  # t=0 on next screen flip
            if key_resp_easy_ex_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_easy_ex_3.tStartRefresh + ResponseDuration-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_easy_ex_3.tStop = t  # not accounting for scr refresh
                    key_resp_easy_ex_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_easy_ex_3, 'tStopRefresh')  # time at next scr refresh
                    key_resp_easy_ex_3.status = FINISHED
            if key_resp_easy_ex_3.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_easy_ex_3.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_easy_ex_3_allKeys.extend(theseKeys)
                if len(_key_resp_easy_ex_3_allKeys):
                    key_resp_easy_ex_3.keys = _key_resp_easy_ex_3_allKeys[-1].name  # just the last key pressed
                    key_resp_easy_ex_3.rt = _key_resp_easy_ex_3_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Example_sandwich_easyComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Example_sandwich_easy"-------
        for thisComponent in Example_sandwich_easyComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "Example_sandwich_easy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'sandwich_easy'
    
    # get names of stimulus parameters
    if sandwich_easy.trialList in ([], [None], None):
        params = []
    else:
        params = sandwich_easy.trialList[0].keys()
    # save data for this loop
    sandwich_easy.saveAsExcel(filename + '.xlsx', sheetName='sandwich_easy',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    sandwich_easy.saveAsText(filename + 'sandwich_easy.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "Training_Easy_Start"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_easy_instr_2.keys = []
    key_resp_easy_instr_2.rt = []
    _key_resp_easy_instr_2_allKeys = []
    # keep track of which components have finished
    Training_Easy_StartComponents = [key_resp_easy_instr_2, text_easy_instr_2]
    for thisComponent in Training_Easy_StartComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Training_Easy_StartClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Training_Easy_Start"-------
    while continueRoutine:
        # get current time
        t = Training_Easy_StartClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Training_Easy_StartClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_easy_instr_2* updates
        waitOnFlip = False
        if key_resp_easy_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_easy_instr_2.frameNStart = frameN  # exact frame index
            key_resp_easy_instr_2.tStart = t  # local t and not account for scr refresh
            key_resp_easy_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_easy_instr_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_easy_instr_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_easy_instr_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_easy_instr_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_easy_instr_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_easy_instr_2.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_easy_instr_2_allKeys.extend(theseKeys)
            if len(_key_resp_easy_instr_2_allKeys):
                key_resp_easy_instr_2.keys = _key_resp_easy_instr_2_allKeys[-1].name  # just the last key pressed
                key_resp_easy_instr_2.rt = _key_resp_easy_instr_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_easy_instr_2* updates
        if text_easy_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_easy_instr_2.frameNStart = frameN  # exact frame index
            text_easy_instr_2.tStart = t  # local t and not account for scr refresh
            text_easy_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_easy_instr_2, 'tStartRefresh')  # time at next scr refresh
            text_easy_instr_2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Training_Easy_StartComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Training_Easy_Start"-------
    for thisComponent in Training_Easy_StartComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Training_Easy_Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    easy_repeat = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('chooseEasyTraining.xlsx'),
        seed=None, name='easy_repeat')
    thisExp.addLoop(easy_repeat)  # add the loop to the experiment
    thisEasy_repeat = easy_repeat.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisEasy_repeat.rgb)
    if thisEasy_repeat != None:
        for paramName in thisEasy_repeat:
            exec('{} = thisEasy_repeat[paramName]'.format(paramName))
    
    for thisEasy_repeat in easy_repeat:
        currentLoop = easy_repeat
        # abbreviate parameter names if possible (e.g. rgb = thisEasy_repeat.rgb)
        if thisEasy_repeat != None:
            for paramName in thisEasy_repeat:
                exec('{} = thisEasy_repeat[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        loop_redo1 = data.TrialHandler(nReps=prac, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='loop_redo1')
        thisExp.addLoop(loop_redo1)  # add the loop to the experiment
        thisLoop_redo1 = loop_redo1.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLoop_redo1.rgb)
        if thisLoop_redo1 != None:
            for paramName in thisLoop_redo1:
                exec('{} = thisLoop_redo1[paramName]'.format(paramName))
        
        for thisLoop_redo1 in loop_redo1:
            currentLoop = loop_redo1
            # abbreviate parameter names if possible (e.g. rgb = thisLoop_redo1.rgb)
            if thisLoop_redo1 != None:
                for paramName in thisLoop_redo1:
                    exec('{} = thisLoop_redo1[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "pracRedo"-------
            continueRoutine = True
            # update component parameters for each repeat
            key_resp_redo.keys = []
            key_resp_redo.rt = []
            _key_resp_redo_allKeys = []
            # keep track of which components have finished
            pracRedoComponents = [text_redo, key_resp_redo]
            for thisComponent in pracRedoComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            pracRedoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "pracRedo"-------
            while continueRoutine:
                # get current time
                t = pracRedoClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=pracRedoClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_redo* updates
                if text_redo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_redo.frameNStart = frameN  # exact frame index
                    text_redo.tStart = t  # local t and not account for scr refresh
                    text_redo.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_redo, 'tStartRefresh')  # time at next scr refresh
                    text_redo.setAutoDraw(True)
                
                # *key_resp_redo* updates
                waitOnFlip = False
                if key_resp_redo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_redo.frameNStart = frameN  # exact frame index
                    key_resp_redo.tStart = t  # local t and not account for scr refresh
                    key_resp_redo.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_redo, 'tStartRefresh')  # time at next scr refresh
                    key_resp_redo.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_redo.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_redo.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_redo.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_redo.getKeys(keyList=['space'], waitRelease=False)
                    _key_resp_redo_allKeys.extend(theseKeys)
                    if len(_key_resp_redo_allKeys):
                        key_resp_redo.keys = _key_resp_redo_allKeys[-1].name  # just the last key pressed
                        key_resp_redo.rt = _key_resp_redo_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in pracRedoComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "pracRedo"-------
            for thisComponent in pracRedoComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "pracRedo" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed prac repeats of 'loop_redo1'
        
        
        # set up handler to look after randomisation of conditions etc
        loop_easy = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(condsFile),
            seed=None, name='loop_easy')
        thisExp.addLoop(loop_easy)  # add the loop to the experiment
        thisLoop_easy = loop_easy.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLoop_easy.rgb)
        if thisLoop_easy != None:
            for paramName in thisLoop_easy:
                exec('{} = thisLoop_easy[paramName]'.format(paramName))
        
        for thisLoop_easy in loop_easy:
            currentLoop = loop_easy
            # abbreviate parameter names if possible (e.g. rgb = thisLoop_easy.rgb)
            if thisLoop_easy != None:
                for paramName in thisLoop_easy:
                    exec('{} = thisLoop_easy[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "Training_Easy"-------
            continueRoutine = True
            # update component parameters for each repeat
            image_easy.setImage(Stim)
            key_resp_easy.keys = []
            key_resp_easy.rt = []
            _key_resp_easy_allKeys = []
            # keep track of which components have finished
            Training_EasyComponents = [image_easy, key_resp_easy, Question_Mark]
            for thisComponent in Training_EasyComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            Training_EasyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "Training_Easy"-------
            while continueRoutine:
                # get current time
                t = Training_EasyClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=Training_EasyClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_easy* updates
                if image_easy.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_easy.frameNStart = frameN  # exact frame index
                    image_easy.tStart = t  # local t and not account for scr refresh
                    image_easy.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_easy, 'tStartRefresh')  # time at next scr refresh
                    image_easy.setAutoDraw(True)
                if image_easy.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_easy.tStartRefresh + StimulusDuration-frameTolerance:
                        # keep track of stop time/frame for later
                        image_easy.tStop = t  # not accounting for scr refresh
                        image_easy.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(image_easy, 'tStopRefresh')  # time at next scr refresh
                        image_easy.setAutoDraw(False)
                
                # *key_resp_easy* updates
                waitOnFlip = False
                if key_resp_easy.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_easy.frameNStart = frameN  # exact frame index
                    key_resp_easy.tStart = t  # local t and not account for scr refresh
                    key_resp_easy.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_easy, 'tStartRefresh')  # time at next scr refresh
                    key_resp_easy.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_easy.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_easy.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_easy.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_easy.tStartRefresh + ResponseDuration-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_easy.tStop = t  # not accounting for scr refresh
                        key_resp_easy.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(key_resp_easy, 'tStopRefresh')  # time at next scr refresh
                        key_resp_easy.status = FINISHED
                if key_resp_easy.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_easy.getKeys(keyList=None, waitRelease=False)
                    _key_resp_easy_allKeys.extend(theseKeys)
                    if len(_key_resp_easy_allKeys):
                        key_resp_easy.keys = [key.name for key in _key_resp_easy_allKeys]  # storing all keys
                        key_resp_easy.rt = [key.rt for key in _key_resp_easy_allKeys]
                        # was this correct?
                        if (key_resp_easy.keys == str(CorrAns)) or (key_resp_easy.keys == CorrAns):
                            key_resp_easy.corr = 1
                        else:
                            key_resp_easy.corr = 0
                
                # *Question_Mark* updates
                if Question_Mark.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                    # keep track of start time/frame for later
                    Question_Mark.frameNStart = frameN  # exact frame index
                    Question_Mark.tStart = t  # local t and not account for scr refresh
                    Question_Mark.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(Question_Mark, 'tStartRefresh')  # time at next scr refresh
                    Question_Mark.setAutoDraw(True)
                if Question_Mark.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > Question_Mark.tStartRefresh + ResponseDuration-frameTolerance:
                        # keep track of stop time/frame for later
                        Question_Mark.tStop = t  # not accounting for scr refresh
                        Question_Mark.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(Question_Mark, 'tStopRefresh')  # time at next scr refresh
                        Question_Mark.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in Training_EasyComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "Training_Easy"-------
            for thisComponent in Training_EasyComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if key_resp_easy.keys in ['', [], None]:  # No response was made
                key_resp_easy.keys = None
                # was no response the correct answer?!
                if str(CorrAns).lower() == 'none':
                   key_resp_easy.corr = 1;  # correct non-response
                else:
                   key_resp_easy.corr = 0;  # failed to respond (incorrectly)
            # store data for loop_easy (TrialHandler)
            loop_easy.addData('key_resp_easy.keys',key_resp_easy.keys)
            loop_easy.addData('key_resp_easy.corr', key_resp_easy.corr)
            if key_resp_easy.keys != None:  # we had a response
                loop_easy.addData('key_resp_easy.rt', key_resp_easy.rt)
            if key_resp_easy.corr and CorrAns == "j":
                rightcall_easy += 1
            elif key_resp_easy.corr==0 and CorrAns == "f":
                falsealarm_easy += 1
            if key_resp_easy.corr: 
                numcorr_easy += 1
            correctrate_easy = numcorr_easy/34
            rightcall_rate_easy = rightcall_easy/4
            correctrejection_rate_easy = 1-(falsealarm_easy/30)
            # the Routine "Training_Easy" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'loop_easy'
        
        # get names of stimulus parameters
        if loop_easy.trialList in ([], [None], None):
            params = []
        else:
            params = loop_easy.trialList[0].keys()
        # save data for this loop
        loop_easy.saveAsExcel(filename + '.xlsx', sheetName='loop_easy',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
        loop_easy.saveAsText(filename + 'loop_easy.csv', delim=',',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
        
        # ------Prepare to start Routine "Training_Easy_Feedback"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_easy_feedback.keys = []
        key_resp_easy_feedback.rt = []
        _key_resp_easy_feedback_allKeys = []
        text_easy_feedback.text = "You correctly identified " + str(rightcall_easy) + "/4 of the long-duration pictures, and " + str(30-falsealarm_easy) + "/30 of the short-duration pictures.\n\n"
        if correctrejection_rate_easy >= 0.75 and rightcall_rate_easy >=0.75:
            text_easy_feedback.text += "Well done! You reached the required 75% correct rate, and can now move on to the next session! Press <space> to continue"
        elif easy_repeat.thisN ==1:
            text_easy_feedback.text += "You did not reach the required 75% correct rate. Press <space> to continue"
            failed_easy=1
        else: 
            text_easy_feedback.text += "You did not reach the required 75% correct rate. Press <space> to start the training again"
            prac=1
        # keep track of which components have finished
        Training_Easy_FeedbackComponents = [text_easy_feedback, key_resp_easy_feedback]
        for thisComponent in Training_Easy_FeedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Training_Easy_FeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Training_Easy_Feedback"-------
        while continueRoutine:
            # get current time
            t = Training_Easy_FeedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Training_Easy_FeedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_easy_feedback* updates
            if text_easy_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_easy_feedback.frameNStart = frameN  # exact frame index
                text_easy_feedback.tStart = t  # local t and not account for scr refresh
                text_easy_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_easy_feedback, 'tStartRefresh')  # time at next scr refresh
                text_easy_feedback.setAutoDraw(True)
            
            # *key_resp_easy_feedback* updates
            waitOnFlip = False
            if key_resp_easy_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_easy_feedback.frameNStart = frameN  # exact frame index
                key_resp_easy_feedback.tStart = t  # local t and not account for scr refresh
                key_resp_easy_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_easy_feedback, 'tStartRefresh')  # time at next scr refresh
                key_resp_easy_feedback.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_easy_feedback.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_easy_feedback.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_easy_feedback.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_easy_feedback.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_easy_feedback_allKeys.extend(theseKeys)
                if len(_key_resp_easy_feedback_allKeys):
                    key_resp_easy_feedback.keys = _key_resp_easy_feedback_allKeys[-1].name  # just the last key pressed
                    key_resp_easy_feedback.rt = _key_resp_easy_feedback_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Training_Easy_FeedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Training_Easy_Feedback"-------
        for thisComponent in Training_Easy_FeedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if correctrejection_rate_easy >= 0.75 and rightcall_rate_easy >=0.75:
            easy_repeat.finished = 1
            prac=0
        elif failed_easy==1:
            easy_repeat.finished = 1
            aftereasy_loop_rep = 0
            prac=0
        rightcall_easy=0
        falsealarm_easy=0
        correctrejection_rate_easy = 0
        rightcall_rate_easy = 0
        # the Routine "Training_Easy_Feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed 1.0 repeats of 'easy_repeat'
    
# completed 1.0 repeats of 'skip'


# set up handler to look after randomisation of conditions etc
aftereasy_loop = data.TrialHandler(nReps=aftereasy_loop_rep, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='aftereasy_loop')
thisExp.addLoop(aftereasy_loop)  # add the loop to the experiment
thisAftereasy_loop = aftereasy_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisAftereasy_loop.rgb)
if thisAftereasy_loop != None:
    for paramName in thisAftereasy_loop:
        exec('{} = thisAftereasy_loop[paramName]'.format(paramName))

for thisAftereasy_loop in aftereasy_loop:
    currentLoop = aftereasy_loop
    # abbreviate parameter names if possible (e.g. rgb = thisAftereasy_loop.rgb)
    if thisAftereasy_loop != None:
        for paramName in thisAftereasy_loop:
            exec('{} = thisAftereasy_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Training_Normal_Instr"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_normal_instr.keys = []
    key_resp_normal_instr.rt = []
    _key_resp_normal_instr_allKeys = []
    # keep track of which components have finished
    Training_Normal_InstrComponents = [key_resp_normal_instr, text_normal_instr]
    for thisComponent in Training_Normal_InstrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Training_Normal_InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Training_Normal_Instr"-------
    while continueRoutine:
        # get current time
        t = Training_Normal_InstrClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Training_Normal_InstrClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_normal_instr* updates
        waitOnFlip = False
        if key_resp_normal_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_normal_instr.frameNStart = frameN  # exact frame index
            key_resp_normal_instr.tStart = t  # local t and not account for scr refresh
            key_resp_normal_instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_normal_instr, 'tStartRefresh')  # time at next scr refresh
            key_resp_normal_instr.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_normal_instr.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_normal_instr.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_normal_instr.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_normal_instr.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_normal_instr_allKeys.extend(theseKeys)
            if len(_key_resp_normal_instr_allKeys):
                key_resp_normal_instr.keys = _key_resp_normal_instr_allKeys[-1].name  # just the last key pressed
                key_resp_normal_instr.rt = _key_resp_normal_instr_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_normal_instr* updates
        if text_normal_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_normal_instr.frameNStart = frameN  # exact frame index
            text_normal_instr.tStart = t  # local t and not account for scr refresh
            text_normal_instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_normal_instr, 'tStartRefresh')  # time at next scr refresh
            text_normal_instr.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Training_Normal_InstrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Training_Normal_Instr"-------
    for thisComponent in Training_Normal_InstrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Training_Normal_Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    sandwich_normal = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('example_sandwich_normal.xlsx'),
        seed=None, name='sandwich_normal')
    thisExp.addLoop(sandwich_normal)  # add the loop to the experiment
    thisSandwich_normal = sandwich_normal.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisSandwich_normal.rgb)
    if thisSandwich_normal != None:
        for paramName in thisSandwich_normal:
            exec('{} = thisSandwich_normal[paramName]'.format(paramName))
    
    for thisSandwich_normal in sandwich_normal:
        currentLoop = sandwich_normal
        # abbreviate parameter names if possible (e.g. rgb = thisSandwich_normal.rgb)
        if thisSandwich_normal != None:
            for paramName in thisSandwich_normal:
                exec('{} = thisSandwich_normal[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Example_sandwich_normal"-------
        continueRoutine = True
        # update component parameters for each repeat
        image_normal_ex.setImage(Stim)
        key_resp_normal_ex.keys = []
        key_resp_normal_ex.rt = []
        _key_resp_normal_ex_allKeys = []
        # keep track of which components have finished
        Example_sandwich_normalComponents = [image_normal_ex, key_resp_normal_ex]
        for thisComponent in Example_sandwich_normalComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Example_sandwich_normalClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Example_sandwich_normal"-------
        while continueRoutine:
            # get current time
            t = Example_sandwich_normalClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Example_sandwich_normalClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_normal_ex* updates
            if image_normal_ex.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_normal_ex.frameNStart = frameN  # exact frame index
                image_normal_ex.tStart = t  # local t and not account for scr refresh
                image_normal_ex.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_normal_ex, 'tStartRefresh')  # time at next scr refresh
                image_normal_ex.setAutoDraw(True)
            if image_normal_ex.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_normal_ex.tStartRefresh + StimulusDuration-frameTolerance:
                    # keep track of stop time/frame for later
                    image_normal_ex.tStop = t  # not accounting for scr refresh
                    image_normal_ex.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_normal_ex, 'tStopRefresh')  # time at next scr refresh
                    image_normal_ex.setAutoDraw(False)
            
            # *key_resp_normal_ex* updates
            waitOnFlip = False
            if key_resp_normal_ex.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                # keep track of start time/frame for later
                key_resp_normal_ex.frameNStart = frameN  # exact frame index
                key_resp_normal_ex.tStart = t  # local t and not account for scr refresh
                key_resp_normal_ex.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_normal_ex, 'tStartRefresh')  # time at next scr refresh
                key_resp_normal_ex.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_normal_ex.clock.reset)  # t=0 on next screen flip
            if key_resp_normal_ex.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_normal_ex.tStartRefresh + ResponseDuration-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_normal_ex.tStop = t  # not accounting for scr refresh
                    key_resp_normal_ex.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_normal_ex, 'tStopRefresh')  # time at next scr refresh
                    key_resp_normal_ex.status = FINISHED
            if key_resp_normal_ex.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_normal_ex.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_normal_ex_allKeys.extend(theseKeys)
                if len(_key_resp_normal_ex_allKeys):
                    key_resp_normal_ex.keys = _key_resp_normal_ex_allKeys[-1].name  # just the last key pressed
                    key_resp_normal_ex.rt = _key_resp_normal_ex_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Example_sandwich_normalComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Example_sandwich_normal"-------
        for thisComponent in Example_sandwich_normalComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "Example_sandwich_normal" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'sandwich_normal'
    
    # get names of stimulus parameters
    if sandwich_normal.trialList in ([], [None], None):
        params = []
    else:
        params = sandwich_normal.trialList[0].keys()
    # save data for this loop
    sandwich_normal.saveAsExcel(filename + '.xlsx', sheetName='sandwich_normal',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    sandwich_normal.saveAsText(filename + 'sandwich_normal.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "Training_Normal_Start"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_normal_instr_2.keys = []
    key_resp_normal_instr_2.rt = []
    _key_resp_normal_instr_2_allKeys = []
    # keep track of which components have finished
    Training_Normal_StartComponents = [key_resp_normal_instr_2, text_normal_instr_2]
    for thisComponent in Training_Normal_StartComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Training_Normal_StartClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Training_Normal_Start"-------
    while continueRoutine:
        # get current time
        t = Training_Normal_StartClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Training_Normal_StartClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_normal_instr_2* updates
        waitOnFlip = False
        if key_resp_normal_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_normal_instr_2.frameNStart = frameN  # exact frame index
            key_resp_normal_instr_2.tStart = t  # local t and not account for scr refresh
            key_resp_normal_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_normal_instr_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_normal_instr_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_normal_instr_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_normal_instr_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_normal_instr_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_normal_instr_2.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_normal_instr_2_allKeys.extend(theseKeys)
            if len(_key_resp_normal_instr_2_allKeys):
                key_resp_normal_instr_2.keys = _key_resp_normal_instr_2_allKeys[-1].name  # just the last key pressed
                key_resp_normal_instr_2.rt = _key_resp_normal_instr_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_normal_instr_2* updates
        if text_normal_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_normal_instr_2.frameNStart = frameN  # exact frame index
            text_normal_instr_2.tStart = t  # local t and not account for scr refresh
            text_normal_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_normal_instr_2, 'tStartRefresh')  # time at next scr refresh
            text_normal_instr_2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Training_Normal_StartComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Training_Normal_Start"-------
    for thisComponent in Training_Normal_StartComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Training_Normal_Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    normal_repeat = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('chooseNormalTraining.xlsx'),
        seed=None, name='normal_repeat')
    thisExp.addLoop(normal_repeat)  # add the loop to the experiment
    thisNormal_repeat = normal_repeat.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisNormal_repeat.rgb)
    if thisNormal_repeat != None:
        for paramName in thisNormal_repeat:
            exec('{} = thisNormal_repeat[paramName]'.format(paramName))
    
    for thisNormal_repeat in normal_repeat:
        currentLoop = normal_repeat
        # abbreviate parameter names if possible (e.g. rgb = thisNormal_repeat.rgb)
        if thisNormal_repeat != None:
            for paramName in thisNormal_repeat:
                exec('{} = thisNormal_repeat[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        loop_redo2 = data.TrialHandler(nReps=prac, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='loop_redo2')
        thisExp.addLoop(loop_redo2)  # add the loop to the experiment
        thisLoop_redo2 = loop_redo2.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLoop_redo2.rgb)
        if thisLoop_redo2 != None:
            for paramName in thisLoop_redo2:
                exec('{} = thisLoop_redo2[paramName]'.format(paramName))
        
        for thisLoop_redo2 in loop_redo2:
            currentLoop = loop_redo2
            # abbreviate parameter names if possible (e.g. rgb = thisLoop_redo2.rgb)
            if thisLoop_redo2 != None:
                for paramName in thisLoop_redo2:
                    exec('{} = thisLoop_redo2[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "pracRedo"-------
            continueRoutine = True
            # update component parameters for each repeat
            key_resp_redo.keys = []
            key_resp_redo.rt = []
            _key_resp_redo_allKeys = []
            # keep track of which components have finished
            pracRedoComponents = [text_redo, key_resp_redo]
            for thisComponent in pracRedoComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            pracRedoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "pracRedo"-------
            while continueRoutine:
                # get current time
                t = pracRedoClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=pracRedoClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_redo* updates
                if text_redo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_redo.frameNStart = frameN  # exact frame index
                    text_redo.tStart = t  # local t and not account for scr refresh
                    text_redo.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_redo, 'tStartRefresh')  # time at next scr refresh
                    text_redo.setAutoDraw(True)
                
                # *key_resp_redo* updates
                waitOnFlip = False
                if key_resp_redo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_redo.frameNStart = frameN  # exact frame index
                    key_resp_redo.tStart = t  # local t and not account for scr refresh
                    key_resp_redo.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_redo, 'tStartRefresh')  # time at next scr refresh
                    key_resp_redo.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_redo.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_redo.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_redo.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_redo.getKeys(keyList=['space'], waitRelease=False)
                    _key_resp_redo_allKeys.extend(theseKeys)
                    if len(_key_resp_redo_allKeys):
                        key_resp_redo.keys = _key_resp_redo_allKeys[-1].name  # just the last key pressed
                        key_resp_redo.rt = _key_resp_redo_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in pracRedoComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "pracRedo"-------
            for thisComponent in pracRedoComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "pracRedo" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed prac repeats of 'loop_redo2'
        
        
        # set up handler to look after randomisation of conditions etc
        loop_normal = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(condsFile),
            seed=None, name='loop_normal')
        thisExp.addLoop(loop_normal)  # add the loop to the experiment
        thisLoop_normal = loop_normal.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLoop_normal.rgb)
        if thisLoop_normal != None:
            for paramName in thisLoop_normal:
                exec('{} = thisLoop_normal[paramName]'.format(paramName))
        
        for thisLoop_normal in loop_normal:
            currentLoop = loop_normal
            # abbreviate parameter names if possible (e.g. rgb = thisLoop_normal.rgb)
            if thisLoop_normal != None:
                for paramName in thisLoop_normal:
                    exec('{} = thisLoop_normal[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "Training_Normal"-------
            continueRoutine = True
            # update component parameters for each repeat
            image_normal.setImage(Stim)
            key_resp_normal.keys = []
            key_resp_normal.rt = []
            _key_resp_normal_allKeys = []
            # keep track of which components have finished
            Training_NormalComponents = [image_normal, key_resp_normal, Question_Mark_normal]
            for thisComponent in Training_NormalComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            Training_NormalClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "Training_Normal"-------
            while continueRoutine:
                # get current time
                t = Training_NormalClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=Training_NormalClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_normal* updates
                if image_normal.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_normal.frameNStart = frameN  # exact frame index
                    image_normal.tStart = t  # local t and not account for scr refresh
                    image_normal.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_normal, 'tStartRefresh')  # time at next scr refresh
                    image_normal.setAutoDraw(True)
                if image_normal.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_normal.tStartRefresh + StimulusDuration-frameTolerance:
                        # keep track of stop time/frame for later
                        image_normal.tStop = t  # not accounting for scr refresh
                        image_normal.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(image_normal, 'tStopRefresh')  # time at next scr refresh
                        image_normal.setAutoDraw(False)
                
                # *key_resp_normal* updates
                waitOnFlip = False
                if key_resp_normal.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_normal.frameNStart = frameN  # exact frame index
                    key_resp_normal.tStart = t  # local t and not account for scr refresh
                    key_resp_normal.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_normal, 'tStartRefresh')  # time at next scr refresh
                    key_resp_normal.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_normal.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_normal.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_normal.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_normal.tStartRefresh + ResponseDuration-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_normal.tStop = t  # not accounting for scr refresh
                        key_resp_normal.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(key_resp_normal, 'tStopRefresh')  # time at next scr refresh
                        key_resp_normal.status = FINISHED
                if key_resp_normal.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_normal.getKeys(keyList=None, waitRelease=False)
                    _key_resp_normal_allKeys.extend(theseKeys)
                    if len(_key_resp_normal_allKeys):
                        key_resp_normal.keys = [key.name for key in _key_resp_normal_allKeys]  # storing all keys
                        key_resp_normal.rt = [key.rt for key in _key_resp_normal_allKeys]
                        # was this correct?
                        if (key_resp_normal.keys == str(CorrAns)) or (key_resp_normal.keys == CorrAns):
                            key_resp_normal.corr = 1
                        else:
                            key_resp_normal.corr = 0
                
                # *Question_Mark_normal* updates
                if Question_Mark_normal.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                    # keep track of start time/frame for later
                    Question_Mark_normal.frameNStart = frameN  # exact frame index
                    Question_Mark_normal.tStart = t  # local t and not account for scr refresh
                    Question_Mark_normal.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(Question_Mark_normal, 'tStartRefresh')  # time at next scr refresh
                    Question_Mark_normal.setAutoDraw(True)
                if Question_Mark_normal.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > Question_Mark_normal.tStartRefresh + ResponseDuration-frameTolerance:
                        # keep track of stop time/frame for later
                        Question_Mark_normal.tStop = t  # not accounting for scr refresh
                        Question_Mark_normal.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(Question_Mark_normal, 'tStopRefresh')  # time at next scr refresh
                        Question_Mark_normal.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in Training_NormalComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "Training_Normal"-------
            for thisComponent in Training_NormalComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if key_resp_normal.keys in ['', [], None]:  # No response was made
                key_resp_normal.keys = None
                # was no response the correct answer?!
                if str(CorrAns).lower() == 'none':
                   key_resp_normal.corr = 1;  # correct non-response
                else:
                   key_resp_normal.corr = 0;  # failed to respond (incorrectly)
            # store data for loop_normal (TrialHandler)
            loop_normal.addData('key_resp_normal.keys',key_resp_normal.keys)
            loop_normal.addData('key_resp_normal.corr', key_resp_normal.corr)
            if key_resp_normal.keys != None:  # we had a response
                loop_normal.addData('key_resp_normal.rt', key_resp_normal.rt)
            if key_resp_normal.corr and CorrAns == "j":
                numcorr_normal += 1
                rightcall_normal +=1
            elif key_resp_normal.corr==0 and CorrAns == "f":
                numcorr_normal -=1
                falsealarm_normal +=1
            correctrate_normal = numcorr_normal/4
            rightcall_rate_normal = rightcall_normal/4
            correctrejection_rate_normal = 1-(falsealarm_normal/30)
            # the Routine "Training_Normal" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'loop_normal'
        
        # get names of stimulus parameters
        if loop_normal.trialList in ([], [None], None):
            params = []
        else:
            params = loop_normal.trialList[0].keys()
        # save data for this loop
        loop_normal.saveAsExcel(filename + '.xlsx', sheetName='loop_normal',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
        loop_normal.saveAsText(filename + 'loop_normal.csv', delim=',',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
        
        # ------Prepare to start Routine "Training_Normal_Feedback"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_easy_feedback_2.keys = []
        key_resp_easy_feedback_2.rt = []
        _key_resp_easy_feedback_2_allKeys = []
        text_normal_feedback.text = "You correctly identified " + str(rightcall_normal) + "/4 of the long-duration pictures, and " + str(30-falsealarm_normal) + "/30 of the short-duration pictures.\n\n"
        
        if correctrejection_rate_normal >= 0.75 and rightcall_rate_normal >=0.75:
            text_normal_feedback.text += "Well done! You can now move on to the next session, press <space> to continue"
        elif normal_repeat.thisN ==3:
            text_normal_feedback.text += "You did not reach the required 75% correct rate. Press <space> to continue"
            failed_normal = 1
        else: 
            text_normal_feedback.text += "You did not reach the required 75% correct rate. Press <space> to start the training again"
            prac=1
        # keep track of which components have finished
        Training_Normal_FeedbackComponents = [text_normal_feedback, key_resp_easy_feedback_2]
        for thisComponent in Training_Normal_FeedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Training_Normal_FeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Training_Normal_Feedback"-------
        while continueRoutine:
            # get current time
            t = Training_Normal_FeedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Training_Normal_FeedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_normal_feedback* updates
            if text_normal_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_normal_feedback.frameNStart = frameN  # exact frame index
                text_normal_feedback.tStart = t  # local t and not account for scr refresh
                text_normal_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_normal_feedback, 'tStartRefresh')  # time at next scr refresh
                text_normal_feedback.setAutoDraw(True)
            
            # *key_resp_easy_feedback_2* updates
            waitOnFlip = False
            if key_resp_easy_feedback_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_easy_feedback_2.frameNStart = frameN  # exact frame index
                key_resp_easy_feedback_2.tStart = t  # local t and not account for scr refresh
                key_resp_easy_feedback_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_easy_feedback_2, 'tStartRefresh')  # time at next scr refresh
                key_resp_easy_feedback_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_easy_feedback_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_easy_feedback_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_easy_feedback_2.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_easy_feedback_2.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_easy_feedback_2_allKeys.extend(theseKeys)
                if len(_key_resp_easy_feedback_2_allKeys):
                    key_resp_easy_feedback_2.keys = _key_resp_easy_feedback_2_allKeys[-1].name  # just the last key pressed
                    key_resp_easy_feedback_2.rt = _key_resp_easy_feedback_2_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Training_Normal_FeedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Training_Normal_Feedback"-------
        for thisComponent in Training_Normal_FeedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if correctrejection_rate_normal >= 0.75 and rightcall_rate_normal >=0.75:
            normal_repeat.finished = 1
            prac=0
        elif failed_normal==1:
            normal_repeat.finished = 1
            afternormal_loop_rep = 0
            prac=0
        numcorr_normal=0
        rightcall_normal=0
        falsealarm_normal=0
        correctrate_normal = 0
        correctrejection_rate_normal = 0
        rightcall_rate_normal = 0
        # the Routine "Training_Normal_Feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed 1.0 repeats of 'normal_repeat'
    
    
    # set up handler to look after randomisation of conditions etc
    afternormal_loop = data.TrialHandler(nReps=afternormal_loop_rep, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='afternormal_loop')
    thisExp.addLoop(afternormal_loop)  # add the loop to the experiment
    thisAfternormal_loop = afternormal_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisAfternormal_loop.rgb)
    if thisAfternormal_loop != None:
        for paramName in thisAfternormal_loop:
            exec('{} = thisAfternormal_loop[paramName]'.format(paramName))
    
    for thisAfternormal_loop in afternormal_loop:
        currentLoop = afternormal_loop
        # abbreviate parameter names if possible (e.g. rgb = thisAfternormal_loop.rgb)
        if thisAfternormal_loop != None:
            for paramName in thisAfternormal_loop:
                exec('{} = thisAfternormal_loop[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Instr5"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_instr5.keys = []
        key_resp_instr5.rt = []
        _key_resp_instr5_allKeys = []
        # keep track of which components have finished
        Instr5Components = [key_resp_instr5, text_instr5]
        for thisComponent in Instr5Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Instr5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Instr5"-------
        while continueRoutine:
            # get current time
            t = Instr5Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Instr5Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *key_resp_instr5* updates
            waitOnFlip = False
            if key_resp_instr5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_instr5.frameNStart = frameN  # exact frame index
                key_resp_instr5.tStart = t  # local t and not account for scr refresh
                key_resp_instr5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_instr5, 'tStartRefresh')  # time at next scr refresh
                key_resp_instr5.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_instr5.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_instr5.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_instr5.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_instr5.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_instr5_allKeys.extend(theseKeys)
                if len(_key_resp_instr5_allKeys):
                    key_resp_instr5.keys = _key_resp_instr5_allKeys[-1].name  # just the last key pressed
                    key_resp_instr5.rt = _key_resp_instr5_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_instr5* updates
            if text_instr5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_instr5.frameNStart = frameN  # exact frame index
                text_instr5.tStart = t  # local t and not account for scr refresh
                text_instr5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_instr5, 'tStartRefresh')  # time at next scr refresh
                text_instr5.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Instr5Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Instr5"-------
        for thisComponent in Instr5Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "Instr5" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "IncentiveInfo"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_incentive.keys = []
        key_resp_incentive.rt = []
        _key_resp_incentive_allKeys = []
        # keep track of which components have finished
        IncentiveInfoComponents = [key_resp_incentive, text_incentive]
        for thisComponent in IncentiveInfoComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        IncentiveInfoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "IncentiveInfo"-------
        while continueRoutine:
            # get current time
            t = IncentiveInfoClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=IncentiveInfoClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *key_resp_incentive* updates
            waitOnFlip = False
            if key_resp_incentive.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_incentive.frameNStart = frameN  # exact frame index
                key_resp_incentive.tStart = t  # local t and not account for scr refresh
                key_resp_incentive.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_incentive, 'tStartRefresh')  # time at next scr refresh
                key_resp_incentive.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_incentive.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_incentive.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_incentive.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_incentive.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_incentive_allKeys.extend(theseKeys)
                if len(_key_resp_incentive_allKeys):
                    key_resp_incentive.keys = _key_resp_incentive_allKeys[-1].name  # just the last key pressed
                    key_resp_incentive.rt = _key_resp_incentive_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_incentive* updates
            if text_incentive.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_incentive.frameNStart = frameN  # exact frame index
                text_incentive.tStart = t  # local t and not account for scr refresh
                text_incentive.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_incentive, 'tStartRefresh')  # time at next scr refresh
                text_incentive.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in IncentiveInfoComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "IncentiveInfo"-------
        for thisComponent in IncentiveInfoComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "IncentiveInfo" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "Instr6"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_instr6.keys = []
        key_resp_instr6.rt = []
        _key_resp_instr6_allKeys = []
        # keep track of which components have finished
        Instr6Components = [key_resp_instr6, text_instr6]
        for thisComponent in Instr6Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Instr6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Instr6"-------
        while continueRoutine:
            # get current time
            t = Instr6Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Instr6Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *key_resp_instr6* updates
            waitOnFlip = False
            if key_resp_instr6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_instr6.frameNStart = frameN  # exact frame index
                key_resp_instr6.tStart = t  # local t and not account for scr refresh
                key_resp_instr6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_instr6, 'tStartRefresh')  # time at next scr refresh
                key_resp_instr6.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_instr6.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_instr6.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_instr6.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_instr6.getKeys(keyList=['r', 'R'], waitRelease=False)
                _key_resp_instr6_allKeys.extend(theseKeys)
                if len(_key_resp_instr6_allKeys):
                    key_resp_instr6.keys = _key_resp_instr6_allKeys[-1].name  # just the last key pressed
                    key_resp_instr6.rt = _key_resp_instr6_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_instr6* updates
            if text_instr6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_instr6.frameNStart = frameN  # exact frame index
                text_instr6.tStart = t  # local t and not account for scr refresh
                text_instr6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_instr6, 'tStartRefresh')  # time at next scr refresh
                text_instr6.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Instr6Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Instr6"-------
        for thisComponent in Instr6Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "Instr6" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        outer = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('chooseBlock.xlsx'),
            seed=None, name='outer')
        thisExp.addLoop(outer)  # add the loop to the experiment
        thisOuter = outer.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisOuter.rgb)
        if thisOuter != None:
            for paramName in thisOuter:
                exec('{} = thisOuter[paramName]'.format(paramName))
        
        for thisOuter in outer:
            currentLoop = outer
            # abbreviate parameter names if possible (e.g. rgb = thisOuter.rgb)
            if thisOuter != None:
                for paramName in thisOuter:
                    exec('{} = thisOuter[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "Run"-------
            continueRoutine = True
            routineTimer.add(3.000000)
            # update component parameters for each repeat
            runNum += 1
            runtext.text = "Run " + str(runNum)
            # keep track of which components have finished
            RunComponents = [runtext]
            for thisComponent in RunComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            RunClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "Run"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = RunClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=RunClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *runtext* updates
                if runtext.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    runtext.frameNStart = frameN  # exact frame index
                    runtext.tStart = t  # local t and not account for scr refresh
                    runtext.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(runtext, 'tStartRefresh')  # time at next scr refresh
                    runtext.setAutoDraw(True)
                if runtext.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > runtext.tStartRefresh + 3-frameTolerance:
                        # keep track of stop time/frame for later
                        runtext.tStop = t  # not accounting for scr refresh
                        runtext.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(runtext, 'tStopRefresh')  # time at next scr refresh
                        runtext.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in RunComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "Run"-------
            for thisComponent in RunComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            
            # set up handler to look after randomisation of conditions etc
            inner = data.TrialHandler(nReps=1.0, method='sequential', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions(condsFile),
                seed=None, name='inner')
            thisExp.addLoop(inner)  # add the loop to the experiment
            thisInner = inner.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisInner.rgb)
            if thisInner != None:
                for paramName in thisInner:
                    exec('{} = thisInner[paramName]'.format(paramName))
            
            for thisInner in inner:
                currentLoop = inner
                # abbreviate parameter names if possible (e.g. rgb = thisInner.rgb)
                if thisInner != None:
                    for paramName in thisInner:
                        exec('{} = thisInner[paramName]'.format(paramName))
                
                # ------Prepare to start Routine "Trial"-------
                continueRoutine = True
                # update component parameters for each repeat
                image_trial.setImage(Stim)
                key_resp_trial.keys = []
                key_resp_trial.rt = []
                _key_resp_trial_allKeys = []
                # keep track of which components have finished
                TrialComponents = [image_trial, key_resp_trial, Question_Mark_trial]
                for thisComponent in TrialComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                TrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
                frameN = -1
                
                # -------Run Routine "Trial"-------
                while continueRoutine:
                    # get current time
                    t = TrialClock.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=TrialClock)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    # *image_trial* updates
                    if image_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        image_trial.frameNStart = frameN  # exact frame index
                        image_trial.tStart = t  # local t and not account for scr refresh
                        image_trial.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_trial, 'tStartRefresh')  # time at next scr refresh
                        image_trial.setAutoDraw(True)
                    if image_trial.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > image_trial.tStartRefresh + StimulusDuration-frameTolerance:
                            # keep track of stop time/frame for later
                            image_trial.tStop = t  # not accounting for scr refresh
                            image_trial.frameNStop = frameN  # exact frame index
                            win.timeOnFlip(image_trial, 'tStopRefresh')  # time at next scr refresh
                            image_trial.setAutoDraw(False)
                    
                    # *key_resp_trial* updates
                    waitOnFlip = False
                    if key_resp_trial.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                        # keep track of start time/frame for later
                        key_resp_trial.frameNStart = frameN  # exact frame index
                        key_resp_trial.tStart = t  # local t and not account for scr refresh
                        key_resp_trial.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(key_resp_trial, 'tStartRefresh')  # time at next scr refresh
                        key_resp_trial.status = STARTED
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(key_resp_trial.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(key_resp_trial.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if key_resp_trial.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > key_resp_trial.tStartRefresh + ResponseDuration-frameTolerance:
                            # keep track of stop time/frame for later
                            key_resp_trial.tStop = t  # not accounting for scr refresh
                            key_resp_trial.frameNStop = frameN  # exact frame index
                            win.timeOnFlip(key_resp_trial, 'tStopRefresh')  # time at next scr refresh
                            key_resp_trial.status = FINISHED
                    if key_resp_trial.status == STARTED and not waitOnFlip:
                        theseKeys = key_resp_trial.getKeys(keyList=None, waitRelease=False)
                        _key_resp_trial_allKeys.extend(theseKeys)
                        if len(_key_resp_trial_allKeys):
                            key_resp_trial.keys = [key.name for key in _key_resp_trial_allKeys]  # storing all keys
                            key_resp_trial.rt = [key.rt for key in _key_resp_trial_allKeys]
                            # was this correct?
                            if (key_resp_trial.keys == str(CorrAns)) or (key_resp_trial.keys == CorrAns):
                                key_resp_trial.corr = 1
                            else:
                                key_resp_trial.corr = 0
                    
                    # *Question_Mark_trial* updates
                    if Question_Mark_trial.status == NOT_STARTED and tThisFlip >= StimulusDuration-frameTolerance:
                        # keep track of start time/frame for later
                        Question_Mark_trial.frameNStart = frameN  # exact frame index
                        Question_Mark_trial.tStart = t  # local t and not account for scr refresh
                        Question_Mark_trial.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(Question_Mark_trial, 'tStartRefresh')  # time at next scr refresh
                        Question_Mark_trial.setAutoDraw(True)
                    if Question_Mark_trial.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > Question_Mark_trial.tStartRefresh + ResponseDuration-frameTolerance:
                            # keep track of stop time/frame for later
                            Question_Mark_trial.tStop = t  # not accounting for scr refresh
                            Question_Mark_trial.frameNStop = frameN  # exact frame index
                            win.timeOnFlip(Question_Mark_trial, 'tStopRefresh')  # time at next scr refresh
                            Question_Mark_trial.setAutoDraw(False)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in TrialComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # -------Ending Routine "Trial"-------
                for thisComponent in TrialComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # check responses
                if key_resp_trial.keys in ['', [], None]:  # No response was made
                    key_resp_trial.keys = None
                    # was no response the correct answer?!
                    if str(CorrAns).lower() == 'none':
                       key_resp_trial.corr = 1;  # correct non-response
                    else:
                       key_resp_trial.corr = 0;  # failed to respond (incorrectly)
                # store data for inner (TrialHandler)
                inner.addData('key_resp_trial.keys',key_resp_trial.keys)
                inner.addData('key_resp_trial.corr', key_resp_trial.corr)
                if key_resp_trial.keys != None:  # we had a response
                    inner.addData('key_resp_trial.rt', key_resp_trial.rt)
                if key_resp_trial.corr:
                    numcorr_trial += 1
                if key_resp_trial.corr and CorrAns == "j":
                    rightcall_trial +=1
                elif key_resp_trial.corr==0 and CorrAns == "f":
                    falsealarm_trial +=1
                correctrate_trial = numcorr_trial/134
                rightcall_rate_trial = rightcall_trial/16
                correctrejection_rate_trial = 1-(falsealarm_trial/118)
                # the Routine "Trial" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed 1.0 repeats of 'inner'
            
            # get names of stimulus parameters
            if inner.trialList in ([], [None], None):
                params = []
            else:
                params = inner.trialList[0].keys()
            # save data for this loop
            inner.saveAsExcel(filename + '.xlsx', sheetName='inner',
                stimOut=params,
                dataOut=['n','all_mean','all_std', 'all_raw'])
            inner.saveAsText(filename + 'inner.csv', delim=',',
                stimOut=params,
                dataOut=['n','all_mean','all_std', 'all_raw'])
            
            # ------Prepare to start Routine "Feedback"-------
            continueRoutine = True
            # update component parameters for each repeat
            targetgain = 0
            nontargetgain = 0
            totalgain = 0
            
            #calculate how much they win for target hits
            if rightcall_rate_trial <= 0.5:
                targetgain = 0
            else: 
                targetgain = round((rightcall_trial-8)/8*0.5,2)
            
            #calculate how much they win for non-target hits
            if correctrejection_rate_trial <= 0.5:
                nontargetgain = 0
            else:
                nontargetgain = round(((59-falsealarm_trial)/59)*0.5,2)
            
            #add the two amounts together
            totalgain = targetgain + nontargetgain
            key_resp_feedback.keys = []
            key_resp_feedback.rt = []
            _key_resp_feedback_allKeys = []
            text_feedback.text = "Congratulations! Because of the correct responses you made during this trial, you WON " + str(int(totalgain*100)) + " points."
            text_original.text = str(int(bonus*100)) + " points"
            text_current.text = str(int((bonus + totalgain)*100)) + " points"
            text_loss.text = str(int(totalgain*100))
            
            newtotal = (bonus+totalgain)*100
            
            thisExp.addData('oldtotal', bonus*100)
            thisExp.addData('totalgain', totalgain*100)
            thisExp.addData('newtotal', newtotal)
            # keep track of which components have finished
            FeedbackComponents = [text_feedback, text_original, arrow_rectangle, arrow_triangle, text_current, image, text_loss, key_resp_feedback, text_continue]
            for thisComponent in FeedbackComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            FeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "Feedback"-------
            while continueRoutine:
                # get current time
                t = FeedbackClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=FeedbackClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_feedback* updates
                if text_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_feedback.frameNStart = frameN  # exact frame index
                    text_feedback.tStart = t  # local t and not account for scr refresh
                    text_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_feedback, 'tStartRefresh')  # time at next scr refresh
                    text_feedback.setAutoDraw(True)
                
                # *text_original* updates
                if text_original.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_original.frameNStart = frameN  # exact frame index
                    text_original.tStart = t  # local t and not account for scr refresh
                    text_original.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_original, 'tStartRefresh')  # time at next scr refresh
                    text_original.setAutoDraw(True)
                
                # *arrow_rectangle* updates
                if arrow_rectangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    arrow_rectangle.frameNStart = frameN  # exact frame index
                    arrow_rectangle.tStart = t  # local t and not account for scr refresh
                    arrow_rectangle.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(arrow_rectangle, 'tStartRefresh')  # time at next scr refresh
                    arrow_rectangle.setAutoDraw(True)
                
                # *arrow_triangle* updates
                if arrow_triangle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    arrow_triangle.frameNStart = frameN  # exact frame index
                    arrow_triangle.tStart = t  # local t and not account for scr refresh
                    arrow_triangle.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(arrow_triangle, 'tStartRefresh')  # time at next scr refresh
                    arrow_triangle.setAutoDraw(True)
                
                # *text_current* updates
                if text_current.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_current.frameNStart = frameN  # exact frame index
                    text_current.tStart = t  # local t and not account for scr refresh
                    text_current.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_current, 'tStartRefresh')  # time at next scr refresh
                    text_current.setAutoDraw(True)
                
                # *image* updates
                if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image.frameNStart = frameN  # exact frame index
                    image.tStart = t  # local t and not account for scr refresh
                    image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                    image.setAutoDraw(True)
                
                # *text_loss* updates
                if text_loss.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_loss.frameNStart = frameN  # exact frame index
                    text_loss.tStart = t  # local t and not account for scr refresh
                    text_loss.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_loss, 'tStartRefresh')  # time at next scr refresh
                    text_loss.setAutoDraw(True)
                
                # *key_resp_feedback* updates
                waitOnFlip = False
                if key_resp_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_feedback.frameNStart = frameN  # exact frame index
                    key_resp_feedback.tStart = t  # local t and not account for scr refresh
                    key_resp_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_feedback, 'tStartRefresh')  # time at next scr refresh
                    key_resp_feedback.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_feedback.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_feedback.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_feedback.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_feedback.getKeys(keyList=['c'], waitRelease=False)
                    _key_resp_feedback_allKeys.extend(theseKeys)
                    if len(_key_resp_feedback_allKeys):
                        key_resp_feedback.keys = _key_resp_feedback_allKeys[-1].name  # just the last key pressed
                        key_resp_feedback.rt = _key_resp_feedback_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *text_continue* updates
                if text_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_continue.frameNStart = frameN  # exact frame index
                    text_continue.tStart = t  # local t and not account for scr refresh
                    text_continue.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_continue, 'tStartRefresh')  # time at next scr refresh
                    text_continue.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in FeedbackComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "Feedback"-------
            for thisComponent in FeedbackComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            numcorr_trial=0
            rightcall_trial=0
            falsealarm_trial=0
            correctrate_trial = 0
            rightcall_rate_trial = 0
            correctrejection_rate_trial = 0
            bonus = bonus +totalgain
            # the Routine "Feedback" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # ------Prepare to start Routine "NASA_inst"-------
            continueRoutine = True
            # update component parameters for each repeat
            NASA_inst_cont.keys = []
            NASA_inst_cont.rt = []
            _NASA_inst_cont_allKeys = []
            # keep track of which components have finished
            NASA_instComponents = [NASA_inst_text, NASA_inst_cont]
            for thisComponent in NASA_instComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            NASA_instClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "NASA_inst"-------
            while continueRoutine:
                # get current time
                t = NASA_instClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=NASA_instClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *NASA_inst_text* updates
                if NASA_inst_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    NASA_inst_text.frameNStart = frameN  # exact frame index
                    NASA_inst_text.tStart = t  # local t and not account for scr refresh
                    NASA_inst_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(NASA_inst_text, 'tStartRefresh')  # time at next scr refresh
                    NASA_inst_text.setAutoDraw(True)
                
                # *NASA_inst_cont* updates
                waitOnFlip = False
                if NASA_inst_cont.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    NASA_inst_cont.frameNStart = frameN  # exact frame index
                    NASA_inst_cont.tStart = t  # local t and not account for scr refresh
                    NASA_inst_cont.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(NASA_inst_cont, 'tStartRefresh')  # time at next scr refresh
                    NASA_inst_cont.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(NASA_inst_cont.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(NASA_inst_cont.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if NASA_inst_cont.status == STARTED and not waitOnFlip:
                    theseKeys = NASA_inst_cont.getKeys(keyList=['space'], waitRelease=False)
                    _NASA_inst_cont_allKeys.extend(theseKeys)
                    if len(_NASA_inst_cont_allKeys):
                        NASA_inst_cont.keys = _NASA_inst_cont_allKeys[-1].name  # just the last key pressed
                        NASA_inst_cont.rt = _NASA_inst_cont_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in NASA_instComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "NASA_inst"-------
            for thisComponent in NASA_instComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "NASA_inst" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            NASA_loop = data.TrialHandler(nReps=1.0, method='sequential', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions('NASA.xlsx'),
                seed=None, name='NASA_loop')
            thisExp.addLoop(NASA_loop)  # add the loop to the experiment
            thisNASA_loop = NASA_loop.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisNASA_loop.rgb)
            if thisNASA_loop != None:
                for paramName in thisNASA_loop:
                    exec('{} = thisNASA_loop[paramName]'.format(paramName))
            
            for thisNASA_loop in NASA_loop:
                currentLoop = NASA_loop
                # abbreviate parameter names if possible (e.g. rgb = thisNASA_loop.rgb)
                if thisNASA_loop != None:
                    for paramName in thisNASA_loop:
                        exec('{} = thisNASA_loop[paramName]'.format(paramName))
                
                # ------Prepare to start Routine "NASA"-------
                continueRoutine = True
                # update component parameters for each repeat
                NASA_text.setText(nasa_question)
                NASA_slider.reset()
                labels.setText('Very Low                                         Very High')
                if counter == 4:
                    labels.text = "Perfect                                                 Failure"
                
                
                if counter == 9:
                    counter = 0 #reset counter
                
                counter = counter + 1
                
                NASA_cont.keys = []
                NASA_cont.rt = []
                _NASA_cont_allKeys = []
                # keep track of which components have finished
                NASAComponents = [NASA_text, NASA_slider, labels, NASA_cont, NASA_cont_inst]
                for thisComponent in NASAComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                NASAClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
                frameN = -1
                
                # -------Run Routine "NASA"-------
                while continueRoutine:
                    # get current time
                    t = NASAClock.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=NASAClock)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    # *NASA_text* updates
                    if NASA_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        NASA_text.frameNStart = frameN  # exact frame index
                        NASA_text.tStart = t  # local t and not account for scr refresh
                        NASA_text.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(NASA_text, 'tStartRefresh')  # time at next scr refresh
                        NASA_text.setAutoDraw(True)
                    
                    # *NASA_slider* updates
                    if NASA_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        NASA_slider.frameNStart = frameN  # exact frame index
                        NASA_slider.tStart = t  # local t and not account for scr refresh
                        NASA_slider.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(NASA_slider, 'tStartRefresh')  # time at next scr refresh
                        NASA_slider.setAutoDraw(True)
                    
                    # *labels* updates
                    if labels.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        labels.frameNStart = frameN  # exact frame index
                        labels.tStart = t  # local t and not account for scr refresh
                        labels.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(labels, 'tStartRefresh')  # time at next scr refresh
                        labels.setAutoDraw(True)
                    
                    # *NASA_cont* updates
                    waitOnFlip = False
                    if NASA_cont.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                        # keep track of start time/frame for later
                        NASA_cont.frameNStart = frameN  # exact frame index
                        NASA_cont.tStart = t  # local t and not account for scr refresh
                        NASA_cont.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(NASA_cont, 'tStartRefresh')  # time at next scr refresh
                        NASA_cont.status = STARTED
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(NASA_cont.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(NASA_cont.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if NASA_cont.status == STARTED and not waitOnFlip:
                        theseKeys = NASA_cont.getKeys(keyList=['return'], waitRelease=False)
                        _NASA_cont_allKeys.extend(theseKeys)
                        if len(_NASA_cont_allKeys):
                            NASA_cont.keys = _NASA_cont_allKeys[-1].name  # just the last key pressed
                            NASA_cont.rt = _NASA_cont_allKeys[-1].rt
                            # a response ends the routine
                            continueRoutine = False
                    
                    # *NASA_cont_inst* updates
                    if NASA_cont_inst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        NASA_cont_inst.frameNStart = frameN  # exact frame index
                        NASA_cont_inst.tStart = t  # local t and not account for scr refresh
                        NASA_cont_inst.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(NASA_cont_inst, 'tStartRefresh')  # time at next scr refresh
                        NASA_cont_inst.setAutoDraw(True)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in NASAComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # -------Ending Routine "NASA"-------
                for thisComponent in NASAComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                NASA_loop.addData('NASA_slider.response', NASA_slider.getRating())
                NASA_loop.addData('NASA_slider.rt', NASA_slider.getRT())
                # the Routine "NASA" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed 1.0 repeats of 'NASA_loop'
            
            # get names of stimulus parameters
            if NASA_loop.trialList in ([], [None], None):
                params = []
            else:
                params = NASA_loop.trialList[0].keys()
            # save data for this loop
            NASA_loop.saveAsExcel(filename + '.xlsx', sheetName='NASA_loop',
                stimOut=params,
                dataOut=['n','all_mean','all_std', 'all_raw'])
            NASA_loop.saveAsText(filename + 'NASA_loop.csv', delim=',',
                stimOut=params,
                dataOut=['n','all_mean','all_std', 'all_raw'])
            
            # ------Prepare to start Routine "Break"-------
            continueRoutine = True
            # update component parameters for each repeat
            timeoutTimer.reset()
            timeoutTimer.add(300)
            key_resp_break.keys = []
            key_resp_break.rt = []
            _key_resp_break_allKeys = []
            # keep track of which components have finished
            BreakComponents = [text_timeout, key_resp_break, text_break]
            for thisComponent in BreakComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            BreakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "Break"-------
            while continueRoutine:
                # get current time
                t = BreakClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=BreakClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_timeout* updates
                if text_timeout.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_timeout.frameNStart = frameN  # exact frame index
                    text_timeout.tStart = t  # local t and not account for scr refresh
                    text_timeout.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_timeout, 'tStartRefresh')  # time at next scr refresh
                    text_timeout.setAutoDraw(True)
                if timeoutTimer.getTime() >= -300:
                    text_timeout.text = 'Timeout in ' + str(int(-timeoutTimer.getTime())) + ' secs'
                
                if timeoutTimer.getTime() >= 0:
                    core.quit()
                
                # *key_resp_break* updates
                waitOnFlip = False
                if key_resp_break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_break.frameNStart = frameN  # exact frame index
                    key_resp_break.tStart = t  # local t and not account for scr refresh
                    key_resp_break.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_break, 'tStartRefresh')  # time at next scr refresh
                    key_resp_break.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_break.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_break.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_break.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_break.getKeys(keyList=['space'], waitRelease=False)
                    _key_resp_break_allKeys.extend(theseKeys)
                    if len(_key_resp_break_allKeys):
                        key_resp_break.keys = _key_resp_break_allKeys[-1].name  # just the last key pressed
                        key_resp_break.rt = _key_resp_break_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *text_break* updates
                if text_break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_break.frameNStart = frameN  # exact frame index
                    text_break.tStart = t  # local t and not account for scr refresh
                    text_break.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_break, 'tStartRefresh')  # time at next scr refresh
                    text_break.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in BreakComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "Break"-------
            for thisComponent in BreakComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "Break" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed 1.0 repeats of 'outer'
        
        
        # ------Prepare to start Routine "Final1"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_end_2.keys = []
        key_resp_end_2.rt = []
        _key_resp_end_2_allKeys = []
        # keep track of which components have finished
        Final1Components = [key_resp_end_2, text_end_2]
        for thisComponent in Final1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Final1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Final1"-------
        while continueRoutine:
            # get current time
            t = Final1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Final1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *key_resp_end_2* updates
            waitOnFlip = False
            if key_resp_end_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_end_2.frameNStart = frameN  # exact frame index
                key_resp_end_2.tStart = t  # local t and not account for scr refresh
                key_resp_end_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_end_2, 'tStartRefresh')  # time at next scr refresh
                key_resp_end_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_end_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_end_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_end_2.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_end_2.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_end_2_allKeys.extend(theseKeys)
                if len(_key_resp_end_2_allKeys):
                    key_resp_end_2.keys = _key_resp_end_2_allKeys[-1].name  # just the last key pressed
                    key_resp_end_2.rt = _key_resp_end_2_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_end_2* updates
            if text_end_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_end_2.frameNStart = frameN  # exact frame index
                text_end_2.tStart = t  # local t and not account for scr refresh
                text_end_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_end_2, 'tStartRefresh')  # time at next scr refresh
                text_end_2.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Final1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Final1"-------
        for thisComponent in Final1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "Final1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "PAS_inst"-------
        continueRoutine = True
        # update component parameters for each repeat
        PAS_inst_cont.keys = []
        PAS_inst_cont.rt = []
        _PAS_inst_cont_allKeys = []
        # keep track of which components have finished
        PAS_instComponents = [PAS_inst_text, PAS_inst_cont]
        for thisComponent in PAS_instComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        PAS_instClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "PAS_inst"-------
        while continueRoutine:
            # get current time
            t = PAS_instClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=PAS_instClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *PAS_inst_text* updates
            if PAS_inst_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                PAS_inst_text.frameNStart = frameN  # exact frame index
                PAS_inst_text.tStart = t  # local t and not account for scr refresh
                PAS_inst_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(PAS_inst_text, 'tStartRefresh')  # time at next scr refresh
                PAS_inst_text.setAutoDraw(True)
            
            # *PAS_inst_cont* updates
            waitOnFlip = False
            if PAS_inst_cont.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                PAS_inst_cont.frameNStart = frameN  # exact frame index
                PAS_inst_cont.tStart = t  # local t and not account for scr refresh
                PAS_inst_cont.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(PAS_inst_cont, 'tStartRefresh')  # time at next scr refresh
                PAS_inst_cont.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(PAS_inst_cont.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(PAS_inst_cont.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if PAS_inst_cont.status == STARTED and not waitOnFlip:
                theseKeys = PAS_inst_cont.getKeys(keyList=['space'], waitRelease=False)
                _PAS_inst_cont_allKeys.extend(theseKeys)
                if len(_PAS_inst_cont_allKeys):
                    PAS_inst_cont.keys = _PAS_inst_cont_allKeys[-1].name  # just the last key pressed
                    PAS_inst_cont.rt = _PAS_inst_cont_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in PAS_instComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "PAS_inst"-------
        for thisComponent in PAS_instComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "PAS_inst" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        PAS_loop2 = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('PAS.xlsx'),
            seed=None, name='PAS_loop2')
        thisExp.addLoop(PAS_loop2)  # add the loop to the experiment
        thisPAS_loop2 = PAS_loop2.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisPAS_loop2.rgb)
        if thisPAS_loop2 != None:
            for paramName in thisPAS_loop2:
                exec('{} = thisPAS_loop2[paramName]'.format(paramName))
        
        for thisPAS_loop2 in PAS_loop2:
            currentLoop = PAS_loop2
            # abbreviate parameter names if possible (e.g. rgb = thisPAS_loop2.rgb)
            if thisPAS_loop2 != None:
                for paramName in thisPAS_loop2:
                    exec('{} = thisPAS_loop2[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "PAS"-------
            continueRoutine = True
            # update component parameters for each repeat
            PAS_question.setText(PAS_item)
            PAS_resp.keys = []
            PAS_resp.rt = []
            _PAS_resp_allKeys = []
            # keep track of which components have finished
            PASComponents = [PAS_question, PAS_scale, PAS_resp]
            for thisComponent in PASComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            PASClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "PAS"-------
            while continueRoutine:
                # get current time
                t = PASClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=PASClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *PAS_question* updates
                if PAS_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    PAS_question.frameNStart = frameN  # exact frame index
                    PAS_question.tStart = t  # local t and not account for scr refresh
                    PAS_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(PAS_question, 'tStartRefresh')  # time at next scr refresh
                    PAS_question.setAutoDraw(True)
                
                # *PAS_scale* updates
                if PAS_scale.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    PAS_scale.frameNStart = frameN  # exact frame index
                    PAS_scale.tStart = t  # local t and not account for scr refresh
                    PAS_scale.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(PAS_scale, 'tStartRefresh')  # time at next scr refresh
                    PAS_scale.setAutoDraw(True)
                
                # *PAS_resp* updates
                waitOnFlip = False
                if PAS_resp.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                    # keep track of start time/frame for later
                    PAS_resp.frameNStart = frameN  # exact frame index
                    PAS_resp.tStart = t  # local t and not account for scr refresh
                    PAS_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(PAS_resp, 'tStartRefresh')  # time at next scr refresh
                    PAS_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(PAS_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(PAS_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if PAS_resp.status == STARTED and not waitOnFlip:
                    theseKeys = PAS_resp.getKeys(keyList=['1', '2', '3', '4', '5', 'right'], waitRelease=False)
                    _PAS_resp_allKeys.extend(theseKeys)
                    if len(_PAS_resp_allKeys):
                        PAS_resp.keys = _PAS_resp_allKeys[-1].name  # just the last key pressed
                        PAS_resp.rt = _PAS_resp_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in PASComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "PAS"-------
            for thisComponent in PASComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if PAS_resp.keys in ['', [], None]:  # No response was made
                PAS_resp.keys = None
            PAS_loop2.addData('PAS_resp.keys',PAS_resp.keys)
            if PAS_resp.keys != None:  # we had a response
                PAS_loop2.addData('PAS_resp.rt', PAS_resp.rt)
            # the Routine "PAS" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'PAS_loop2'
        
        # get names of stimulus parameters
        if PAS_loop2.trialList in ([], [None], None):
            params = []
        else:
            params = PAS_loop2.trialList[0].keys()
        # save data for this loop
        PAS_loop2.saveAsExcel(filename + '.xlsx', sheetName='PAS_loop2',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
        PAS_loop2.saveAsText(filename + 'PAS_loop2.csv', delim=',',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
        
        # ------Prepare to start Routine "DSSQ_think_inst"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_DSSQ_think_inst.keys = []
        key_resp_DSSQ_think_inst.rt = []
        _key_resp_DSSQ_think_inst_allKeys = []
        # keep track of which components have finished
        DSSQ_think_instComponents = [text_DSSQ_think_inst, key_resp_DSSQ_think_inst]
        for thisComponent in DSSQ_think_instComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        DSSQ_think_instClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "DSSQ_think_inst"-------
        while continueRoutine:
            # get current time
            t = DSSQ_think_instClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=DSSQ_think_instClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_DSSQ_think_inst* updates
            if text_DSSQ_think_inst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_DSSQ_think_inst.frameNStart = frameN  # exact frame index
                text_DSSQ_think_inst.tStart = t  # local t and not account for scr refresh
                text_DSSQ_think_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_DSSQ_think_inst, 'tStartRefresh')  # time at next scr refresh
                text_DSSQ_think_inst.setAutoDraw(True)
            
            # *key_resp_DSSQ_think_inst* updates
            waitOnFlip = False
            if key_resp_DSSQ_think_inst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_DSSQ_think_inst.frameNStart = frameN  # exact frame index
                key_resp_DSSQ_think_inst.tStart = t  # local t and not account for scr refresh
                key_resp_DSSQ_think_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_DSSQ_think_inst, 'tStartRefresh')  # time at next scr refresh
                key_resp_DSSQ_think_inst.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_DSSQ_think_inst.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_DSSQ_think_inst.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_DSSQ_think_inst.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_DSSQ_think_inst.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_DSSQ_think_inst_allKeys.extend(theseKeys)
                if len(_key_resp_DSSQ_think_inst_allKeys):
                    key_resp_DSSQ_think_inst.keys = _key_resp_DSSQ_think_inst_allKeys[-1].name  # just the last key pressed
                    key_resp_DSSQ_think_inst.rt = _key_resp_DSSQ_think_inst_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in DSSQ_think_instComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "DSSQ_think_inst"-------
        for thisComponent in DSSQ_think_instComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "DSSQ_think_inst" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        DSSQ_think_loop = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('DSSQ_think.xlsx'),
            seed=None, name='DSSQ_think_loop')
        thisExp.addLoop(DSSQ_think_loop)  # add the loop to the experiment
        thisDSSQ_think_loop = DSSQ_think_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisDSSQ_think_loop.rgb)
        if thisDSSQ_think_loop != None:
            for paramName in thisDSSQ_think_loop:
                exec('{} = thisDSSQ_think_loop[paramName]'.format(paramName))
        
        for thisDSSQ_think_loop in DSSQ_think_loop:
            currentLoop = DSSQ_think_loop
            # abbreviate parameter names if possible (e.g. rgb = thisDSSQ_think_loop.rgb)
            if thisDSSQ_think_loop != None:
                for paramName in thisDSSQ_think_loop:
                    exec('{} = thisDSSQ_think_loop[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "DSSQ_think"-------
            continueRoutine = True
            # update component parameters for each repeat
            DSSQ_think_text.setText(DSSQ_think_item)
            DSSQ_think_resp.keys = []
            DSSQ_think_resp.rt = []
            _DSSQ_think_resp_allKeys = []
            # keep track of which components have finished
            DSSQ_thinkComponents = [DSSQ_think_text, DSSQ_think_scale, DSSQ_think_resp]
            for thisComponent in DSSQ_thinkComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            DSSQ_thinkClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "DSSQ_think"-------
            while continueRoutine:
                # get current time
                t = DSSQ_thinkClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=DSSQ_thinkClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *DSSQ_think_text* updates
                if DSSQ_think_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    DSSQ_think_text.frameNStart = frameN  # exact frame index
                    DSSQ_think_text.tStart = t  # local t and not account for scr refresh
                    DSSQ_think_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(DSSQ_think_text, 'tStartRefresh')  # time at next scr refresh
                    DSSQ_think_text.setAutoDraw(True)
                
                # *DSSQ_think_scale* updates
                if DSSQ_think_scale.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    DSSQ_think_scale.frameNStart = frameN  # exact frame index
                    DSSQ_think_scale.tStart = t  # local t and not account for scr refresh
                    DSSQ_think_scale.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(DSSQ_think_scale, 'tStartRefresh')  # time at next scr refresh
                    DSSQ_think_scale.setAutoDraw(True)
                
                # *DSSQ_think_resp* updates
                waitOnFlip = False
                if DSSQ_think_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    DSSQ_think_resp.frameNStart = frameN  # exact frame index
                    DSSQ_think_resp.tStart = t  # local t and not account for scr refresh
                    DSSQ_think_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(DSSQ_think_resp, 'tStartRefresh')  # time at next scr refresh
                    DSSQ_think_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(DSSQ_think_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(DSSQ_think_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if DSSQ_think_resp.status == STARTED and not waitOnFlip:
                    theseKeys = DSSQ_think_resp.getKeys(keyList=['1', '2', '3', '4', '5', 'right'], waitRelease=False)
                    _DSSQ_think_resp_allKeys.extend(theseKeys)
                    if len(_DSSQ_think_resp_allKeys):
                        DSSQ_think_resp.keys = _DSSQ_think_resp_allKeys[-1].name  # just the last key pressed
                        DSSQ_think_resp.rt = _DSSQ_think_resp_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in DSSQ_thinkComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "DSSQ_think"-------
            for thisComponent in DSSQ_thinkComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if DSSQ_think_resp.keys in ['', [], None]:  # No response was made
                DSSQ_think_resp.keys = None
            DSSQ_think_loop.addData('DSSQ_think_resp.keys',DSSQ_think_resp.keys)
            if DSSQ_think_resp.keys != None:  # we had a response
                DSSQ_think_loop.addData('DSSQ_think_resp.rt', DSSQ_think_resp.rt)
            # the Routine "DSSQ_think" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'DSSQ_think_loop'
        
        # get names of stimulus parameters
        if DSSQ_think_loop.trialList in ([], [None], None):
            params = []
        else:
            params = DSSQ_think_loop.trialList[0].keys()
        # save data for this loop
        DSSQ_think_loop.saveAsExcel(filename + '.xlsx', sheetName='DSSQ_think_loop',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
        DSSQ_think_loop.saveAsText(filename + 'DSSQ_think_loop.csv', delim=',',
            stimOut=params,
            dataOut=['n','all_mean','all_std', 'all_raw'])
    # completed afternormal_loop_rep repeats of 'afternormal_loop'
    
# completed aftereasy_loop_rep repeats of 'aftereasy_loop'


# ------Prepare to start Routine "Final2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_end.keys = []
key_resp_end.rt = []
_key_resp_end_allKeys = []
# keep track of which components have finished
Final2Components = [key_resp_end, text_end]
for thisComponent in Final2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Final2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Final2"-------
while continueRoutine:
    # get current time
    t = Final2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Final2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_end* updates
    waitOnFlip = False
    if key_resp_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_end.frameNStart = frameN  # exact frame index
        key_resp_end.tStart = t  # local t and not account for scr refresh
        key_resp_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_end, 'tStartRefresh')  # time at next scr refresh
        key_resp_end.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_end.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_end.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_end.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_end.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_end_allKeys.extend(theseKeys)
        if len(_key_resp_end_allKeys):
            key_resp_end.keys = _key_resp_end_allKeys[-1].name  # just the last key pressed
            key_resp_end.rt = _key_resp_end_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_end* updates
    if text_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_end.frameNStart = frameN  # exact frame index
        text_end.tStart = t  # local t and not account for scr refresh
        text_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_end, 'tStartRefresh')  # time at next scr refresh
        text_end.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Final2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Final2"-------
for thisComponent in Final2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Final2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
