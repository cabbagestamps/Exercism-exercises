/*
Given an age in seconds, calculate how old someone would be on:
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
*/
document.getElementById('form').addEventListener('submit', calcSpaceAge)
let ans = document.getElementById('ans')

function calcSpaceAge(event) {
  event.preventDefault()
  
  const age = event.target.age.value
  const planet = event.target.planets.value
  
  const planetDeltas = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }

  const newPlanetAge = (age / planetDeltas[planet]).toFixed(2)
  const upperCasePlanet = planet.slice(0, 1).toUpperCase() + planet.slice(1)

  return ans.textContent = `You would be ${newPlanetAge} years old on ${upperCasePlanet}.`

}

