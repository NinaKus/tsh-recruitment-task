import request from '../common/request';
import updateProfile from './updateUserProfile';
import { validateProfile } from "../common/validation";
import getUserHistory from './getUserHistory';
import updateUserHistory from './updateUserHistory';

const searchUserProfile = () => {
  const loadButton = document.querySelector('.js-load-username');
  loadButton.addEventListener('click', () => {
    const userNameInput = document.querySelector('.js-username-input');
    const userName = userNameInput.value;

    if (validateProfile(userName)) {
      userNameInput.classList.remove('has-error');
      request(`https://api.github.com/users/${userName}`)
        .then(userDetails => {
          updateProfile(userDetails);
        });

      getUserHistory(userName, ['PullRequestEvent', 'PullRequestReviewCommentEvent'])
        .then(userHistory => {
          updateUserHistory(userHistory);
        });
    } else {
      userNameInput.classList.add('has-error');
    }
  });
};

export default searchUserProfile;