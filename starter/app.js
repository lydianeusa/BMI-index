const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
// const weight=document.querySelector('#weight');
// const height = document.querySelector('#height');



const form = document.querySelector('form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e){
e.preventDefault();
const inputs = document.querySelectorAll('input');
const weight = inputs [1]
const height = inputs [0]

console.log(height.value, weight.value)
}



console.log(height.value, weight.value)


