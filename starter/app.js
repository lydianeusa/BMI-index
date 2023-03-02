const BMIData = [
  { description: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { description: "Bonne santé", color: "green", range: [18.5, 25] },
  { description: "Surpoids", color: "lightcoral", range: [25, 30] },
  { description: "Obésité modérée", color: "orange", range: [30, 35] },
  { description: "Obésité sévère", color: "crimson", range: [35, 40] },
  { description: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
const form = document.querySelector('form');
const displayBMI = document.querySelector('.bmi-value');
const result = document.querySelector('.result');

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  const inputs = document.querySelectorAll('input');
  const height = inputs[0].value;
  const weight = inputs[1].value;

  // validation du formulaire
  // falsy : 0 null undefined ''
  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError()
    return
  }

  const BMI = (weight / (height / 100) ** 2).toFixed(1);
  console.log(BMI);
  showResult(BMI)
}

function handleError() {
  displayBMI.textContent = 'Echec'
  result.textContent = 'Remplissez correctement le formulaire'
}

function showResult(BMI) {
  let rank;
  for (let i = 0; i < BMIData.length; i++) {
    const data = BMIData[i];
    if (BMI > data.range[0] && BMI <= data.range[1]) {
      rank = data;
      break;
    } else if (typeof data.range === 'number' && data.range >= 40) {
      rank = data;
      break;
    }
  }
  displayBMI.textContent = BMI;
  displayBMI.style.color = rank.color;
  result.textContent = rank.description
}
