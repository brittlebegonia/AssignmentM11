//STEP 1
// let daysInMonth = new Date(2025, 2, 0).getDate()

// console.log(daysInMonth)

//STEP 2
// let date = new Date("12-5-2351")

// let monthNames = [
//     "January", "February", "March",
//     "April", "May", "June",
//     "July", "August", "September",
//     "October", "November", "December"
// ]

// console.log(monthNames[date.getMonth()])

//STEP 3
// let date = new Date("5-9-2026")

// if (date.getDay() === 0 || date.getDay() === 6) {
//     console.log("It is a weekend")
// } else {
//     console.log("It is not a weekend")
// }

//STEP 4
// let today4 = new Date()

// let dayNames = [
//     "Sunday", "Monday", "Tuesday",
//     "Wednesday", "Thursday",
//     "Friday", "Saturday"
// ]

// let yesterday = today4.getDay() - 1

// if (yesterday < 0) {
//     yesterday = 6
// }

// console.log(dayNames[yesterday])

//STEP 5
// let today = new Date()

// let dayNames = [
//     "Sunday", "Monday", "Tuesday",
//     "Wednesday", "Thursday",
//     "Friday", "Saturday"
// ]

// let day = dayNames[today.getDay()]

// console.log(day.charAt(0))