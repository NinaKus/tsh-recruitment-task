const request = (url, options) =>
  fetch(url, options)
    .then(response => {
      try {
        return response.json();
      } catch (e) {
        console.error(e);
        return Promise.reject(response);
      }
    })
    .catch(e => {
      console.error(e);
    });

export default request;