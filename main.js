function Checkgrade() {

	// If-else statement
	let Grade = document.getElementById('inputGrade').value;
	if (Grade>99){window.alert("You have a perfect grade!")}
	else if (Grade>84){window.alert("You have an above average grade")}
	else if (Grade>79){window.alert("You have an average grade")}
	else if (Grade>74){window.alert("You have a below average grade")}
	else {window.alert("You have a failing grade")}
		}	
 

						
