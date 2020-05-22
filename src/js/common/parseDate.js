const parseDate = date => {
  return new Date(Date.parse(date)).toDateString();
};

export default parseDate;