window.addEventListener('scroll', function() {
	var rotatingImage = document.getElementById('rotatingImage');
	var scrollTop = window.scrollY;
  
	// Adjust the rotation angle based on the scroll position or any other criteria
	var rotationAngle = scrollTop;
  
	// Apply rotation to the image
	rotatingImage.style.transform = 'rotate(' + rotationAngle + 'deg)';
  });

  window.addEventListener(("scroll"),()=>{
   
    document.querySelector("#leftBee").style.marginLeft = `-${window.scrollY}px`
	document.querySelector("#rightBee").style.marginLeft = `-${window.scrollY}px`
	document.querySelector("#leftBee1").style.marginLeft = `-${window.scrollY}px`
	document.querySelector("#rightBee1").style.marginLeft = `-${window.scrollY}px`


    // document.querySelector("#rightBee").style.marginRight = `-${window.scrollY}px`
})