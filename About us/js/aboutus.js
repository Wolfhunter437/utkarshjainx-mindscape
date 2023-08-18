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