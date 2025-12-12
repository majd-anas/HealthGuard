// Get the value of the checked radio button in the group named "gender"
const selectedValue = document.querySelector(
  'input[name="selector"]:checked'
)?.value;
// const loginButtonLink = document.getElementById("loglink");
// if (selectedValue) {
//   if (selectedValue.value === "patient") {
//     loginButtonLink.href = "html/patient/homepage.html";
//   } else if (selectedValue.value === "doctor") {
//     loginButtonLink.href = "html/doctor/doctorLanding.html";
//   }
// } else if (selectedValue.value === "caregiver") {
//   loginButtonLink.href = "html/caregiver/patientOverview.html";
// }
console.log("heifheifh");
// Select all radio buttons in the group
const radios = document.querySelectorAll('input[name="selector"]');

// Loop through the NodeList and add a 'change' listener to each
radios.forEach((radio) => {
  radio.addEventListener("change", function (event) {
    // Access the value of the selected radio button using event.target.value
    const selectedValue = event.target.value;
    const loginButtonLink = document.getElementById("loglink");
    if (selectedValue === "patient") {
      loginButtonLink.href = "html/patient/homepage.html";
    } else if (selectedValue === "doctor") {
      loginButtonLink.href = "html/doctor/doctorLanding.html";
    } else if (selectedValue === "caregiver") {
      loginButtonLink.href = "html/caregiver/patientOverview.html";
    }

    console.log("Selected value:", selectedValue);
  });
});
