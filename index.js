//get hold of the HTML elements
const button = document.querySelector("#convertButton")
const length = document.getElementById("metFeet")
const volume = document.getElementById("litGal")
const mass = document.getElementById("kiloPound")
let convertNum = document.querySelector("#convertNum").innerText



//computes the conversions
const metersToFeet = (convertNum * 3.28084).toFixed(3)
const feetToMeters = (convertNum * 0.3048).toFixed(3)
const litersToGallons = (convertNum * 0.264172).toFixed(3)
const gallonsToLiters = (convertNum * 3.78541).toFixed(3)
const kiloToPounds = (convertNum * 2.20462).toFixed(3)
const poundsToKilo = (convertNum * 0.453592).toFixed(3)


//renders the result on the screen
length.innerText = `${convertNum} meters = ${metersToFeet} feet |` +
                   ` ${convertNum} feet = ${feetToMeters} meters`
                    
volume.innerText = `${convertNum} liters = ${litersToGallons} gallons |` +
                   ` ${convertNum} gallons = ${gallonsToLiters} liters`

mass.innerText = `${convertNum} kilos = ${kiloToPounds} pounds |` +
                 `${convertNum} pounds = ${poundsToKilo} kilos`