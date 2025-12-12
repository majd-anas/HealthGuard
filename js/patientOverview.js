document.addEventListener("DOMContentLoaded", function () {
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
});
