const shortenToDate = (longDate) => longDate.replace(/,.*/g, '');

console.log(shortenToDate('Friday May 2, 9am'));
