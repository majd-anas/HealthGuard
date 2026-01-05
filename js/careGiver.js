document.addEventListener("DOMContentLoaded", function () {
  const bookButtons = document.querySelectorAll(".book");
  bookButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("your caregiver has been informed. They will contact you shortly");
    });
  });

  // Filter functionality
  const filterSelect = document.getElementById("filter");
  const doctorsContainer = document.querySelector(".doctors");

  filterSelect.addEventListener("change", function () {
    const filterValue = this.value;
    const doctors = Array.from(document.querySelectorAll(".doctor"));

    doctors.sort((a, b) => {
      let aValue, bValue;
      if (filterValue === "name") {
        aValue = a
          .querySelector(".name")
          .childNodes[0].textContent.trim()
          .toLowerCase();
        bValue = b
          .querySelector(".name")
          .childNodes[0].textContent.trim()
          .toLowerCase();
      } else if (filterValue === "speciality") {
        aValue = a.querySelector(".name span").textContent.trim().toLowerCase();
        bValue = b.querySelector(".name span").textContent.trim().toLowerCase();
      }
      return aValue.localeCompare(bValue);
    });

    // Reappend sorted doctors
    doctors.forEach((doctor) => doctorsContainer.appendChild(doctor));
  });
});
