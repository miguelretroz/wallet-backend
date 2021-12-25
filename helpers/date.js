const dateFormatRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/((19|20)\d{2})$/;

const thisDateExits = (date) => {
  try {
    const dateISO = new Date(date)
    .toISOString()
    .match(/^((19|20)\d{2})\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])/)
    [0].split('-');

    const [month, day, year] = date.split(/\//);

    if (day !== dateISO[2] || month !== dateISO[1] || year !== dateISO[0]) return false;

    return true;  
  } catch (err) {
    return false;
  }
};

const hasTheCorrectFormat =  (date) => {
  return dateFormatRegex.test(date);
};

// Solution inspired by -> https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-between-two-dates
const getYearsOld = (date) => {
  const receivedDate = new Date(date);

  const ageInMs = Date.now() - receivedDate;

  const ageDate = new Date(ageInMs);

  // Why 1970 -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#:~:text=Date.prototype.setTime,for%20times%20prior.
  const yearsOld = ageDate.getUTCFullYear() - 1970;

  return yearsOld;
};

module.exports =  {
  thisDateExits,
  hasTheCorrectFormat,
  getYearsOld,
};
