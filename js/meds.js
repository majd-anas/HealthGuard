document.addEventListener("DOMContentLoaded", function () {
  const emergencyBtn = document.getElementById("emergencyBtn");
  if (emergencyBtn) {
    emergencyBtn.addEventListener("click", function () {
      alert("medical emergency has been requested!");
    });
  }
});
