// BMI formula
// Metric system: BMI = weight in kilograms (kg) / height in meters (m) squared

const wt= prompt(`{Enter your weight (in kg) }`);
const ht= prompt(`{Enter your height (in m)}`);

const BMI=wt/(ht * ht);
alert( `Your BMI is : ` + BMI);

// Under 18.5	Underweight
// 18.5 - 24.9	Normal
// 25 - 29.9	Overweight
// 30 and over	Obese

if (BMI < 18.5) {
    alert ( `You are under weight`)
} else if (BMI > 18.5 && BMI < 24.9) {
    alert ( `You are Normal`)

} else if (BMI > 25 && BMI < 29.9) {
    alert ( `You are Overweight`)
}
else if (BMI > 30) {
    alert ( `You are Obese`)
}