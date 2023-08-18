/*------------------------------------------------------------------------------------------Forward Scroll------------------------------------------------------------------------------*/

function handleScroll(){
      const scrollY= window.scrollY;
			const windowWidth = window.outerWidth;
			const emptyWidth = document.querySelector('.empty').clientWidth;

			Layer1(windowWidth, scrollY);
			Layer2(windowWidth, scrollY);
			Layer3(windowWidth, scrollY);
			Layer4(windowWidth, scrollY);
			Layer5(windowWidth, scrollY);
			Layer6(windowWidth, scrollY);
		}

		function Layer1(windowWidth, scrollY){

      const minScroll = 0;
      const maxScroll = 1400;
      const minScale = 1;
      const maxScale = 2;
      const minTranslateY = 0;
      const maxTranslateY = 2000;

      if(scrollY >= minScroll && scrollY <= maxScroll){
      	const scrollProgress = (scrollY - minScroll) / (maxScroll - minScroll);
      	const scale = minScale + scrollProgress * (maxScale - minScale);
      	const translateY = minTranslateY + scrollProgress * (maxTranslateY - minTranslateY);
      	const layer1 = document.querySelector('.layer1'); 

        let opacity = 1;
        
        if(scrollY>=1000){
          opacity = 1 - (scrollY - 1000) / 500;
        }
        else{
          opacity = 1;
        }
        layer1.style.transform = `scale(${scale}) translateY(${-translateY}%)`;
        layer1.style.opacity = opacity;
      }
      
      if(scrollY>=1400){
        document.querySelector('.layer1').style.display = 'none';
      }
      else{
        document.querySelector('.layer1').style.display = 'block';
      }
		}
		
		function Layer2(windowWidth, scrollY){

			if (scrollY>=1000 && scrollY<=3350){
				document.querySelector('.layer2').style.display = 'block';
			}
			else{
				document.querySelector('.layer2').style.display = 'none';
			}

      const minScroll = 1000;
      const maxScroll = 3350;
      const minScale = 0.5;
      const maxScale = 2;
      const minTranslateY = 0;
      const maxTranslateY = 100;

      if(scrollY >= minScroll && scrollY <= maxScroll){
      	const scrollProgress = (scrollY - minScroll) / (maxScroll - minScroll);
      	const scale = minScale + scrollProgress * (maxScale - minScale);
      	const translateY = minTranslateY + scrollProgress * (maxTranslateY - minTranslateY);
      	const layer2 = document.querySelector('.layer2'); 

        let opacity = 1;
        
        if(scrollY>=3000){
          opacity = 1 - (scrollY - 3000) / 300;
        }
        else{
          opacity = 1;
        }
        layer2.style.transform = `scale(${scale}) translateY(${-translateY}%)`;
        layer2.style.opacity = opacity;
      }
		}
		
		function Layer3(windowWidth, scrollY){

			if (scrollY>=3000 && scrollY<=5400){
				document.querySelector('.layer3').style.display = 'block';
			}
			else{
				document.querySelector('.layer3').style.display = 'none';
			}

      const minScroll = 3000;
      const maxScroll = 5400;
      const minScale = 0.5;
      const maxScale = 2;
      const minTranslateY = 0;
      const maxTranslateY = 100;

      if(scrollY >= minScroll && scrollY <= maxScroll){
      	const scrollProgress = (scrollY - minScroll) / (maxScroll - minScroll);
      	const scale = minScale + scrollProgress * (maxScale - minScale);
      	const translateY = minTranslateY + scrollProgress * (maxTranslateY - minTranslateY);
      	const layer3 = document.querySelector('.layer3'); 

        let opacity = 1;
        
        if(scrollY>=5000){
          opacity = 1 - (scrollY - 5000) / 500;
        }
        else{
          opacity = 1;
        }
        layer3.style.transform = `scale(${scale}) translateY(${-translateY}%)`;
        layer3.style.opacity = opacity;
      }
		}

		function Layer4(windowWidth, scrollY){

			if (scrollY>=5000 && scrollY<=7400){
				document.querySelector('.layer4').style.display = 'block';
			}
			else{
				document.querySelector('.layer4').style.display = 'none';
			}

      const minScroll = 5000;
      const maxScroll = 7400;
      const minScale = 0.5;
      const maxScale = 2;
      const minTranslateY = 0;
      const maxTranslateY = 100;

      if(scrollY >= minScroll && scrollY <= maxScroll){
      	const scrollProgress = (scrollY - minScroll) / (maxScroll - minScroll);
      	const scale = minScale + scrollProgress * (maxScale - minScale);
      	const translateY = minTranslateY + scrollProgress * (maxTranslateY - minTranslateY);
      	const layer4 = document.querySelector('.layer4'); 

        let opacity = 1;
        
        if(scrollY>=7000){
          opacity = 1 - (scrollY - 7000) / 700;
        }
        else{
          opacity = 1;
        }
        layer4.style.transform = `scale(${scale}) translateY(${-translateY}%)`;
        layer4.style.opacity = opacity;
      }
		}
		
		function Layer5(windowWidth, scrollY){

			if (scrollY>=7000 && scrollY<=9400){
				document.querySelector('.layer5').style.display = 'block';
			}
			else{
				document.querySelector('.layer5').style.display = 'none';
			}

      const minScroll = 7000;
      const maxScroll = 9400;
      const minScale = 0.5;
      const maxScale = 2;
      const minTranslateY = 0;
      const maxTranslateY = 100;

      if(scrollY >= minScroll && scrollY <= maxScroll){
      	const scrollProgress = (scrollY - minScroll) / (maxScroll - minScroll);
      	const scale = minScale + scrollProgress * (maxScale - minScale);
      	const translateY = minTranslateY + scrollProgress * (maxTranslateY - minTranslateY);
      	const layer5 = document.querySelector('.layer5'); 

        let opacity = 1;
        
        if(scrollY>=9000){
          opacity = 1 - (scrollY - 9000) / 700;
        }
        else{
          opacity = 1;
        }
        layer5.style.transform = `scale(${scale}) translateY(${-translateY}%)`;
        layer5.style.opacity = opacity;
      }
		}
		
		function Layer6(windowWidth, scrollY){

			if (scrollY>=9000 && scrollY<=11350){
				document.querySelector('.layer6').style.display = 'block';
			}
			else{
				document.querySelector('.layer6').style.display = 'none';
			}

      const minScroll = 9000;
      const maxScroll = 11350;
      const minScale = 0.5;
      const maxScale = 2;
      const minTranslateY = 0;
      const maxTranslateY = 100;

      if(scrollY >= minScroll && scrollY <= maxScroll){
      	const scrollProgress = (scrollY - minScroll) / (maxScroll - minScroll);
      	const scale = minScale + scrollProgress * (maxScale - minScale);
      	const translateY = minTranslateY + scrollProgress * (maxTranslateY - minTranslateY);
      	const layer6 = document.querySelector('.layer6'); 

        let opacity = 1;
        
        if(scrollY>=11000){
          opacity = 1 - (scrollY - 11000) / 1100;
        }
        else{
          opacity = 1;
        }
        layer6.style.transform = `scale(${scale}) translateY(${-translateY}%)`;
        layer6.style.opacity = opacity;
      }
		}
      
window.onload = function(){
    window.addEventListener('scroll', handleScroll);
    };

/*--------------------------------------------------------------------------------------------CounterUp----------------------------------------------------------------------------------*/

const counters = document.querySelectorAll('.counter');
let interval = 1000;

const startCounterOnIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counterElement = entry.target;
      let startValue = 0;
      let endValue = parseInt(counterElement.getAttribute('data-target'));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 2;
        counterElement.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
      observer.unobserve(counterElement);
    }
  });
};

const observer = new IntersectionObserver(startCounterOnIntersection, { threshold: 0.2 });

counters.forEach((counterElement) => {
  observer.observe(counterElement);
});

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

/*---------------------------------------------------------------------------------------------Slider For Reviews-------------------------------------------------------------------------*/

const wrapper = document.querySelector(".review");
const carousel = document.querySelector(".carousel");
console.log("carousel:", carousel);
const arrowBtns = document.querySelectorAll(".review span");
const firstCardWidth = carousel.querySelector(".rev").offsetWidth;
console.log("First Card Width:", firstCardWidth);
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens.slice(0, cardPerView).forEach(card =>{
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns.forEach(btn =>{
  btn.addEventListener("click", () =>{
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
});

const dragStart = (e) =>{
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
  isDragging = false;
  carousel.classList.remove("dragging");
}

const autoPlay = () =>{
  if(window.innerWidth < 800)return;
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth , 2500);
}
autoPlay();

const infiniteScroll = () =>{
  if(carousel.scrollLeft === 0){
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  }

  else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () =>clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

/*-----------------------------------------------------------------------------------------------Tabs for phone-----------------------------------------------------------------------------------*/

var meditationElem1 = document.getElementById("meditation1");
var sleepElem1 = document.getElementById("sleep1");
var stressElem1 = document.getElementById("stress1");
var mindfulnessElem1 = document.getElementById("mindfulness1");

function showMeditation1() {
  meditationElem1.style.display = 'block';
  sleepElem1.style.display = 'none';
  stressElem1.style.display = 'none';
  mindfulnessElem1.style.display = 'none';
}

function showSleep1() {
  sleepElem1.style.display = 'block';
  meditationElem1.style.display = 'none';
  stressElem1.style.display = 'none';
  mindfulnessElem1.style.display = 'none';
}

function showStress1() {
  stressElem1.style.display = 'block';
  meditationElem1.style.display = 'none';
  sleepElem1.style.display = 'none';
  mindfulnessElem1.style.display = 'none';
}

function showMindfulness1() {
  mindfulnessElem1.style.display = 'block';
  meditationElem1.style.display = 'none';
  sleepElem1.style.display = 'none';
  stressElem1.style.display = 'none';
}