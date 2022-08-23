(function () {
    'use strict';
    
	const positionSelect = document.getElementById("positionSelect");
	const levelSelect = document.getElementById("levelSelect");
	const generateButton = document.getElementById("generateButton");
	const generatedContentNode = document.getElementById("generatedContentText");
	const loadingIndicator = document.getElementById("loadingIndicator");
	const juniorFrontend = [
		'prototyping and development of a new functionality in compliance with business requirements',
		'increasing unit- and auto-tests coverage',
		'bug fixing, code refactoring',
		'creating commons CSS guidelines, CSS refactoring',
		'laying out the foundation for the company design system',
		'implementing mobile version of the application',
		'mentoring newcomers'
	];
	
	const setLoadingState = () => {
		loadingIndicator.classList.add('isLoading');
	}
	
	const removeLoadingState = () => {
		loadingIndicator.classList.remove('isLoading');
	}
	
	const getRandomValueFromArray = (array) => {
		return array[Math.floor(Math.random() * array.length)];
	}
	
	const onGenerateClick = () => {
		setLoadingState();
		
		let generatedText = "";
		const isJuniorFrontedSelected = 
			  positionSelect.value === "frontEnd" && 
			  levelSelect.value === "junior";
		
		if (isJuniorFrontedSelected) {
			generatedText = getRandomValueFromArray(juniorFrontend);
		} else {
			generatedText = 'This option is not supported yet';
		}
		generatedContentNode.innerHTML = generatedText;
		removeLoadingState();
	}
	
	generateButton.addEventListener('click', onGenerateClick);
    
}());