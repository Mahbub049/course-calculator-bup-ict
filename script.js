function calculateMarks() {
    // Get class test marks
    const classTest1 = calculateClassTestMark('classTestMarks1');
    const classTest2 = calculateClassTestMark('classTestMarks2');
    const classTest3 = calculateClassTestMark('classTestMarks3');
    const classTest4 = calculateClassTestMark('classTestMarks4');
  
    // Pick the highest three class test marks
    const pickedClassTestMarks = [classTest1, classTest2, classTest3, classTest4]
      .sort((a, b) => b - a)
      .slice(0, 3);
  
    // Calculate average class test marks with fractional points
    const averageClassTestMarks = (pickedClassTestMarks.reduce((sum, mark) => sum + mark, 0) / 3);
  
    // Get mid term marks
    let midTermMarks = parseFloat(document.getElementById('midTermMarks').value);
  
    // If mid term marks exceed 20, consider fractional part
    if (midTermMarks > 20) {
      midTermMarks = midTermMarks / 2;
    }
  
    // Get assignment marks
    const assignmentMarks = parseFloat(document.getElementById('assignmentMarks').value);
  
    // Get attendance marks based on percentage
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);
    const attendancePercentage = (attendedClasses / totalClasses) * 100;
    let attendanceMarks = 0;
  
    if (attendancePercentage >= 95) {
      attendanceMarks = 10;
    } else if (attendancePercentage >= 90) {
      attendanceMarks = 9.0;
    } else if (attendancePercentage >= 85) {
      attendanceMarks = 8.0;
    } else if (attendancePercentage >= 75) {
      attendanceMarks = 7.0;
    }
  
    // Calculate total marks
    const totalMarks = averageClassTestMarks + midTermMarks + assignmentMarks + attendanceMarks;
  
    // Calculate required marks to get A+
    const requiredMarks = Math.max(0, 80 - totalMarks);
  
    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p><strong>Average Class Test Marks:</strong> ${averageClassTestMarks.toFixed(2)}</p>
      <p><strong>Mid Term Marks:</strong> ${midTermMarks.toFixed(2)}</p>
      <p><strong>Assignment Marks:</strong> ${assignmentMarks}</p>
      <p><strong>Attendance Marks:</strong> ${attendanceMarks}</p>
      <hr>
      <p><strong>Total Marks:</strong> ${totalMarks.toFixed(2)}</p>
      <p><strong>Required Marks to get A+:</strong> ${requiredMarks.toFixed(2)}</p>
    `;
  }
  
  function calculateClassTestMark(elementId) {
    const examMark = parseFloat(document.getElementById(`${elementId}Exam`).value);
    const obtainedMark = parseFloat(document.getElementById(`${elementId}Obtained`).value);
    const convertedMark = (obtainedMark / examMark) * 10;
    return Math.min(convertedMark, 10);
  }
  
  function convertTo10Marks(marks) {
    return Math.min(marks, 10);
  }
  