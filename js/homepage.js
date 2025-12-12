// JavaScript for homepage.html

document.addEventListener("DOMContentLoaded", function () {
  const reportPainBtn = document.getElementById("reportPainBtn");
  const painForm = document.getElementById("painForm");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close");
  const painButton = document.getElementById("painButton");

  // Show the form and overlay when REPORT PAIN is clicked
  reportPainBtn.addEventListener("click", function () {
    painForm.style.display = "block";
    overlay.style.display = "block";
  });

  // Hide the form and overlay when close button is clicked
  closeBtn.addEventListener("click", function () {
    painForm.style.display = "none";
    overlay.style.display = "none";
  });

  // Handle form submission
  painButton.addEventListener("click", function () {
    const painType = document.getElementById("painType").value;
    const notes = document.getElementById("notes").value;

    // For now, just alert the data (since it's a static site)
    alert(`Pain Report Submitted:\nType: ${painType}\nNotes: ${notes}`);

    // Hide the form and overlay after submission
    painForm.style.display = "none";
    overlay.style.display = "none";

    // Clear the form
    document.getElementById("notes").value = "";
    document.getElementById("painType").selectedIndex = 0;
  });

  // Close modal when clicking on overlay
  overlay.addEventListener("click", function () {
    painForm.style.display = "none";
    overlay.style.display = "none";
  });

  // Vitals buttons
  const heartRateBtn = document.getElementById("heartRateBtn");
  const heartRateReading = document.getElementById("heartRateReading");
  const bloodPressureBtn = document.getElementById("bloodPressureBtn");
  const bloodPressureReading = document.getElementById("bloodPressureReading");
  const bloodSugarBtn = document.getElementById("bloodSugarBtn");
  const bloodSugarReading = document.getElementById("bloodSugarReading");
  const cholesterolBtn = document.getElementById("cholesterolBtn");
  const cholesterolReading = document.getElementById("cholesterolReading");

  heartRateBtn.addEventListener("click", function () {
    const value = prompt("Enter heart rate (bpm):");
    if (value && !isNaN(value)) {
      heartRateReading.textContent = value + " bpm";
      if (value < 60) {
        alert("doctor has been informed of too low 'Heart Rate'");
      } else if (value > 100) {
        alert("doctor has been informed of too high 'Heart Rate'");
      }
      heartRateBtn.disabled = true;
      heartRateBtn.style.display = "none";
    }
  });

  bloodPressureBtn.addEventListener("click", function () {
    const value = prompt("Enter blood pressure (mm/hg):");
    if (value && !isNaN(value)) {
      bloodPressureReading.innerHTML = value + " <small>mm/hg</small>";
      if (value < 90) {
        alert("doctor has been informed of too low 'Blood Pressure'");
      } else if (value > 140) {
        alert("doctor has been informed of too high 'Blood Pressure'");
      }
      bloodPressureBtn.disabled = true;
      bloodPressureBtn.style.display = "none";
    }
  });

  bloodSugarBtn.addEventListener("click", function () {
    const value = prompt("Enter blood sugar (mm/dl):");
    if (value && !isNaN(value)) {
      bloodSugarReading.innerHTML = value + " <small>mm/dl</small>";
      if (value < 70) {
        alert("doctor has been informed of too low 'Blood Sugar'");
      } else if (value > 140) {
        alert("doctor has been informed of too high 'Blood Sugar'");
      }
      bloodSugarBtn.disabled = true;
      bloodSugarBtn.style.display = "none";
    }
  });

  cholesterolBtn.addEventListener("click", function () {
    const value = prompt("Enter cholesterol (mg/dl):");
    if (value && !isNaN(value)) {
      cholesterolReading.innerHTML = value + " <small>mg/dl</small>";
      if (value > 200) {
        alert("doctor has been informed of too high 'Cholesterol'");
      }
      cholesterolBtn.disabled = true;
      cholesterolBtn.style.display = "none";
    }
  });

  // Emergency button
  const emergencyBtn = document.getElementById("emergencyBtn");
  emergencyBtn.addEventListener("click", function () {
    alert("medical emergency has been requested");
  });
  // Medication toggles
  const checkboxes = document.querySelectorAll(
    '.switch input[type="checkbox"]'
  );
  const takenDivs = document.querySelectorAll(".taken");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", function () {
      takenDivs[index].textContent = this.checked ? "taken" : "not taken";
    });
  });
});
