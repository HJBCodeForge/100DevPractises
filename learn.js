// function checkWeather (callback) {
//     const weather = () => Math.random() < 0.5 ? "sunny" : "rainy"

//     let error = weather()
//     console.log(error)

//     if(error === "sunny") {
//         callback(null, "Go for a walk")
//     } else {
//         callback("Stay inside")
//     }
// }

// checkWeather(function(err, message) {
//     if(err) {
//         console.log("Error: " + err)
//     } else {
//         console.log(message)
//     }
// })

// function flipCoin() { 
//     return new Promise(function(resolve, reject){
//         let randomNum = Math.random()
//         if(randomNum < 0.5){
//             resolve("Heads")
//         } else {
//             reject("Tails")
//         }
// })
// }

// flipCoin()
//     .then(result => console.log("Succes: " + result))
//     .catch(error => console.log("Error: " + error))

// function getTemperature(city) {
//     return new Promise((resolve) => {
//         setTimeout(() => {resolve("25°C in " + city)}, 1000)
//     })
// }

// async function showTemperature(city) {
//     try {
//         let cityTemp = await getTemperature(city)
//         console.log(cityTemp)  
//     } catch(error) {
//         console.log("Error: " + error)
//     }
    
// }
// showTemperature("Montreal")

        function getTemperature(city) {
            return new Promise((resolve) => {
                setTimeout(() => {resolve("25°C in " + city)}, 1000)
            })
        }
        async function showAllTemperatures(cities){
            try {
                for(i=0; i < cities.length; i++) {
                let temp = await getTemperature(cities[i])
                console.log(temp)
                }
            } catch(error) {
                console.log("Error: " + error)
            }
        }

showAllTemperatures(["Montreal", "Toronto", "Vancouver"])
