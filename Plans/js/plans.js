/*-----------------------------------------------------------------------------------------------Tabs-----------------------------------------------------------------------------------*/

var meditationElem = document.getElementById("meditation");
var sleepElem = document.getElementById("sleep");
var stressElem = document.getElementById("stress");
var mindfulnessElem = document.getElementById("mindfulness");

function showMeditation() {
  meditationElem.style.display = 'block';
  sleepElem.style.display = 'none';
  stressElem.style.display = 'none';
  mindfulnessElem.style.display = 'none';
}

function showSleep() {
  sleepElem.style.display = 'block';
  meditationElem.style.display = 'none';
  stressElem.style.display = 'none';
  mindfulnessElem.style.display = 'none';
}

function showStress() {
  stressElem.style.display = 'block';
  meditationElem.style.display = 'none';
  sleepElem.style.display = 'none';
  mindfulnessElem.style.display = 'none';
}

function showMindfulness() {
  mindfulnessElem.style.display = 'block';
  meditationElem.style.display = 'none';
  sleepElem.style.display = 'none';
  stressElem.style.display = 'none';
}