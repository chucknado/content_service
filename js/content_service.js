function insert_content() {
  const content_root = 'https://cdn.jsdelivr.net/gh/chucknado/content_service@latest/content/';
  const placeholders = document.getElementsByClassName('content_ph');
  for (var i = 0; i < placeholders.length; i++) {
    let ph = placeholders[i];
    let conref = ph.getAttribute('data-conref');
    let locale = ph.getAttribute('data-locale');
    let content_url = content_root + locale + '/' + conref + '.html';

    let promise = new Promise(function(resolve, reject) {
      function reqListener() {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject(Error(this.status));
        }
      }
      let request = new XMLHttpRequest();
      request.addEventListener("load", reqListener);
      request.open("GET", content_url);
      request.send();
    });

    promise.then(function(content) {
      ph.innerHTML = content;
    }).catch(function(error) {
      ph.innerHTML = 'This content is currently not available.';
      console.log(error);
    });

  }
}

window.addEventListener('load', insert_content, false);
