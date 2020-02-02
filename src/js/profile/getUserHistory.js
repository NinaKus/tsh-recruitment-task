import request from '../common/request';

const getUserHistory = (userName, eventTypes) =>
  request( `https://api.github.com/users/${userName}/events/public`)
    .then(userHistory => {
      return userHistory.filter(item => {
        if (eventTypes.join(' ').indexOf(item.type) !== -1) {
          return item;
        }
      });
    });

export default getUserHistory;