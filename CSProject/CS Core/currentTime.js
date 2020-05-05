//const element = document.getElementById('testTimer');


let remainingSeconds = localStorage.getItem('endTime');




const countdownElement = document.getElementById("countdown");




function updateCountdown()
{
	const minutes = Math.floor(remainingSeconds / 60);
	let seconds = remainingSeconds % 60;
	
	seconds = seconds < 10 ? '0' + seconds : seconds;
	
	countdownElement.innerHTML = `${minutes}:${seconds}`;
	remainingSeconds--;
	
	remainingSeconds = remainingSeconds < 0 ? 0 : remainingSeconds; 
	
	localStorage.setItem('endTime', remainingSeconds);
	
	/*if (remainingSeconds === 0)
	{
		window.location.href = "loser.html";
	}*/
	
}


setInterval(updateCountdown, 1000);


function reduceTime() {
	let store7 = localStorage.getItem('endTime');
	//let store8 = parseInt('store7');
	remainingSeconds = store7 - 60;
	//setInterval(updateCountdown, 1000);
}

