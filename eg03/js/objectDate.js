var today = new Date();

var weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

console.log(weekFromToday.getDate());


// var stringTimeToday = today.toTimeString();

// console.log(stringTimeToday);

// getDate() setDate() Returns / sets the day of the month (1-31)

// toDateString () Returns "date" as a human-readable string
// toTimeString () Returns "time" as a human-readable string
// to String() Returns a string representing the specified date 

// To specify a date and time, you
// can use this format:
// YYYY, MM, OD, HH, MM, SS
// 1996, 04, 16, 15, 45 , 55 
// Another way to format the date
// and time is like this:
// MMM 00, YYYY HH:MM:SS
// Apr 16, 1996 15 :45:55 