document.querySelectorAll(".update-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const item = this.closest(".threshold-item");
    const valueDiv = item.querySelector(".threshold-value");
    const input = valueDiv.querySelector("input");
    const currentText = valueDiv.textContent;
    const unit = currentText.replace(input.value, "");
    const newValue = input.value;
    valueDiv.innerHTML = newValue + unit;
    this.style.display = "none";
  });
});

// JavaScript for homepage.html

document.addEventListener("DOMContentLoaded", function () {
  const reportPainBtn = document.querySelector("#reportPain");
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
});
