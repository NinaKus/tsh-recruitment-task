import request from '../common/request';
import updateProfile from './updateUserProfile';

const searchUserProfile = () => {
  const loadButton = document.querySelector('.js-load-username');
  loadButton.addEventListener('click', () => {
    const userName = document.querySelector('.js-username-input').value;

    request(`https://api.github.com/users/${userName}`)
      .then(userDetails => {
        updateProfile(userDetails);
      });
  });
};

export default searchUserProfile;