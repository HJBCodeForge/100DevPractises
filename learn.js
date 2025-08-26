function checkWeather (callback) {
    const weather = () => Math.random() < 0.5 ? "sunny" : "rainy"

    let error = weather()
    console.log(error)

    if(error === "sunny") {
        callback(null, "Go for a walk")
    } else {
        callback("Stay inside")
    }
}

checkWeather(function(err, message) {
    if(err) {
        console.log("Error: " + err)
    } else {
        console.log(message)
    }
})
