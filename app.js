const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

let resultContainer = document.getElementById("result");

const calculateBmi = () => {
  const height = heightInput.value;
  const weight = weightInput.value;
  const bmi = weight / (height * height);

  // Check inputs
  if (
    isNaN(bmi) ||
    isNaN(height) ||
    isNaN(weight || height === "" || weight === "")
  ) {
    resultContainer.innerHTML = "Please add a valid number";
  } else {
    const resultCard = document.createElement("ion-card");
    resultCard.innerHTML = `
        <ion-card-content>
            <h2>Your BMI is: ${parseFloat(bmi)}</h2>
        </ion-card-content>
      `;
    resultContainer.innerHTML = "";
    resultContainer.appendChild(resultCard);
  }
};

const clearFields = () => {
  heightInput.value = "";
  weightInput.value = "";
  const resultCard = document.createElement("ion-card");
  resultCard.innerHTML = `
        <ion-card-content>
            <h2>Your BMI is: 0</h2>
        </ion-card-content>
      `;
  resultContainer.innerHTML = "";
  resultContainer.appendChild(resultCard);
};

calculateBtn.addEventListener("click", calculateBmi);
resetBtn.addEventListener("click", clearFields);

document.addEventListener("DOMContentLoaded", clearFields);
