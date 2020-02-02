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
    const spinner = document.querySelector('.js-spinner');

    if (validateProfile(userName)) {
      userNameInput.classList.remove('has-error');
      spinner.classList.remove('is-hidden');
      request(`https://api.github.com/users/${userName}`)
        .then(userDetails => {
          updateProfile(userDetails);
          document.querySelector('.js-profile').classList.remove('is-hidden');
        });

      getUserHistory(userName, ['PullRequestEvent', 'PullRequestReviewCommentEvent'])
        .then(userHistory => {
          updateUserHistory(userHistory);
          spinner.classList.add('is-hidden');
          document.querySelector('.js-user-timeline').classList.remove('is-hidden');
        });
    } else {
      userNameInput.classList.add('has-error');
    }
  });
};

export default searchUserProfile;