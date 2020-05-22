const updateProfile = ({ login, avatar_url, html_url, bio }) => {

  const profileName =  document.querySelector('.js-profile-name');
  const profileImg =  document.querySelector('.js-profile-img');
  const profileUrl =  document.querySelector('.js-profile-url');
  const profileBio =  document.querySelector('.js-profile-bio');

  profileName.innerText = login;
  profileImg.src = avatar_url;
  profileUrl.href = html_url;
  profileUrl.innerText = `@${login}`;
  profileBio.innerText = bio || '(no information)';

};

export default updateProfile;