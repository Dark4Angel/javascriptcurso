function Rocket (name) {
    this.name = name
    this.launchMessage = function() {
        console.log('🔥')

    }
}
const falcon9Rocket = new Rocket('Falcon 9')
const falconHeavyRocket = new Rocket('Falcon Heavy')
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())