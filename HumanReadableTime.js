// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(time) {
    let seconds = time
    let minutes = 0
    let hours = 0
    while (seconds >= 60) {
        if(minutes >= 60) {
            minutes = minutes - 60
            hours ++
        }
        if(seconds >= 60) {
            seconds = seconds - 60
            minutes ++
        }
    }
    if(minutes >= 60) {
        minutes = minutes - 60
        hours ++
    }
    if(seconds >= 60) {
        seconds = seconds - 60
        minutes ++
    }
    if (hours <= 9) hours = `0${hours}`
    if (minutes <= 9) minutes = `0${minutes}`
    if (seconds <= 9) seconds = `0${seconds}`
    return `${hours}:${minutes}:${seconds}`
}

console.log(humanReadable(35115))
