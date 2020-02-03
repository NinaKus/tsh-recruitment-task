import parseDate from '../common/parseDate';

const updateUserHistory = userHistory => {
  const userTimeline = document.querySelector('.js-user-timeline');

  const timelineElements = userHistory.map(element => {
    let historyItem;

    if (element.payload.comment) {
      historyItem = `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">${parseDate(element.created_at)}</p>
          <div class="content">
            <span class="media gh-username">
              <img class="media-left image" src="${element.actor.avatar_url}" alt=""/>
              <a href="https://github.com/${element.actor.login}">${element.actor.login}</a>
            </span>
            ${element.payload.action}
            <a href="${element.payload.comment.html_url}">comment</a> to
            <a href="${element.payload.pull_request.html_url}">pull request</a>
            <p class="repo-name">
              <a href="https://github.com/${element.repo.name}">${element.repo.name}</a>
            </p>
          </div>
        </div>
      </div>`;
    } else {
      historyItem = `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">${parseDate(element.created_at)}</p>
          <div class="content">
            <span class="media gh-username">
              <img class="media-left image" src="${element.actor.avatar_url}" alt=""/>
              <a href="https://github.com/${element.actor.login}">${element.actor.login}</a>
            </span>
            ${element.payload.action}
            <a href="${element.payload.pull_request.html_url}">pull request</a>
            <p class="repo-name">
              <a href="https://github.com/${element.repo.name}">${element.repo.name}</a>
            </p>
          </div>
        </div>
      </div>`;
    }

    return historyItem;
  });

  userTimeline.innerHTML = timelineElements.join(' ');
};

export default updateUserHistory;