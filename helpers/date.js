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

module.exports =  {
  thisDateExits,
};
