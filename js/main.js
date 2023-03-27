//---------FAHRENHEIT--TO---CELSIUS---------//

let f = Number(prompt ('შეიყვანეთ ტემფერატურა ფარენჰეიტში'));
const fahrToCel=(f-32)/1.8;
console.log(`Fahrenheit = ${f} - Celsius = ${fahrToCel}`);

//---------CELSIUS--TO---FAHRENHEIT---------//

let c = Number(prompt ('შეიყვანეთ ტემფერატურა ცელსიუსში'));
const celToFahr = c * 1.8 + 32;
console.log(`Celsius = ${c} - Fahrenheit = ${celToFahr}`)
