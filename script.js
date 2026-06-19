
function generateMarkFields() {
    const countInput = document.getElementById('subjectCount');
    const count = parseInt(countInput.value);
    
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number of subjects greater than 0.");
        return;
    }

    const fieldsContainer = document.getElementById('dynamicFields');
    fieldsContainer.innerHTML = ''; 
    for (let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.className = 'subject-input';
        
        div.innerHTML = `
            <label for="subject${i}">Marks for Subject ${i} (Out of 100):</label>
            <input type="number" id="subject${i}" class="mark-input" min="0" max="100" required placeholder="Enter marks">
        `;
        fieldsContainer.appendChild(div);
    }
    document.getElementById('marksFormContainer').classList.remove('hidden');
    document.getElementById('resultArea').classList.add('hidden');
}
function calculateResults() {
    const markInputs = document.querySelectorAll('.mark-input');
    let total = 0;
    let subjectCount = markInputs.length;
    let failedASubject = false;
    for (let i = 0; i < subjectCount; i++) {
        const markValue = parseFloat(markInputs[i].value);

        if (isNaN(markValue) || markValue < 0 || markValue > 100) {
            alert(`Please enter a valid mark between 0 and 100 for Subject ${i + 1}.`);
            return;
        }

        total += markValue;
        if (markValue < 35) {
            failedASubject = true;
        }
    }

    const average = total / subjectCount;
    let grade = '';
    let statusClass = 'pass';
    let statusText = 'PASSED';

    if (average >= 90) {
        grade = 'A+';
    } else if (average >= 80) {
        grade = 'A';
    } else if (average >= 70) {
        grade = 'B';
    } else if (average >= 60) {
        grade = 'C';
    } else if (average >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    if (average < 40 || failedASubject) {
        statusText = 'FAILED';
        statusClass = 'fail';
        if (grade !== 'F') grade = 'F'; 
    }
    const resultArea = document.getElementById('resultArea');
    resultArea.className = ''; 
    resultArea.innerHTML = `
        <h3>Results Summary</h3>
        <p><strong>Total Marks:</strong> ${total} / ${subjectCount * 100}</p>
        <p><strong>Average Percentage:</strong> ${average.toFixed(2)}%</p>
        <p><strong>Assigned Grade:</strong> ${grade}</p>
        <p><strong>Final Status:</strong> <span class="${statusClass}">${statusText}</span></p>
    `;
}
