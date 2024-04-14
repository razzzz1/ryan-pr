
        const calculateAverageButton = document.getElementById('calculate');
        const clearButton = document.getElementById('clear');
        const message = document.getElementById('message');
        const gradeButton = document.getElementById('grade');

        calculateAverageButton.addEventListener('click', calculateAverage);
        clearButton.addEventListener('click', clearScores);
        gradeButton.addEventListener('click', getLetterGrade);

        function calculateAverage() {
            let mathScore = parseInt(document.getElementById('math').value);
            let chemistryScore = parseInt(document.getElementById('chemistry').value);
            let englishScore = parseInt(document.getElementById('english').value);
            let biologyScore = parseInt(document.getElementById('biology').value);
            let historyScore = parseInt(document.getElementById('history').value);
            let physicsScore = parseInt(document.getElementById('physics').value);
            let kiswahiliScore = parseInt(document.getElementById('kiswahili').value);
            let computerScore = parseInt(document.getElementById('computer').value);

            // Check for invalid scores (not numbers)
            if (isNaN(mathScore) || isNaN(chemistryScore) || isNaN(englishScore) || isNaN(biologyScore) || isNaN(historyScore) || isNaN(physicsScore) || isNaN(kiswahiliScore) || isNaN(computerScore)) {
                message.textContent = "Please enter valid numbers for scores.";
                return;
            }

            const totalScore = mathScore + chemistryScore + englishScore + biologyScore + historyScore + physicsScore + kiswahiliScore + computerScore;
            const average = totalScore / 8;

            document.getElementById('average').textContent = `Average: ${average.toFixed(2)}`;
            message.textContent = "";
        }

        function clearScores() {
            document.getElementById('math').value = 0;
            document.getElementById('chemistry').value = 0;
            document.getElementById('english').value = 0;
            document.getElementById('biology').value = 0;
            document.getElementById('history').value = 0;
            document.getElementById('physics').value = 0;
            document.getElementById('kiswahili').value = 0;
            document.getElementById('computer').value = 0;
            document.getElementById('average').textContent = "";
            message.textContent = "";
        }
        for (mase = 1; mase <=4; mase++) {
            let value = parseInt(subjectInput.value);
        
        function getLetterGrade() {
            if (average >=81) {
                return "A"
            }
            else if (average >=74 && average < 81) {
                return "A-"
            }
            else if (average >=67 && average < 74) {
                return "B+"
            }
            else if (average >=60 && average < 67) {
                return "B"
            }
            else if (average >=57 && average < 60) {
                return "B-"
            } 
             else if (average >=50 && average <57) {
                 return "C+"
            }
             else if (average >=47 && average <50) {
                 return "C"
            }
             else if (average >=44 && average <47) {
                 return "D+"
            }
             else if (average >=41 && average <44) {
                 return "D-"
            }
             else {
                return "E"
            }
            message.textContent = "";
            document.getElementById("grade").innerHTML = `grade: ${average}`;
        }
    }