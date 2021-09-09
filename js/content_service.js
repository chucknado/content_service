/* Inserts service content in the page */


function insert_service_content() {
  const catalog_url = 'https://cdn.jsdelivr.net/gh/chucknado/content_service@main/content/catalog.json';
  const catalog = get_file(catalog_url);
  console.log(catalog);
  // read all the elements with class "content_ph"
  // read the "data-conref" attribute of each element to get the id of the content
  // use the id to look up the content url in the catalog
  // get the content
  // insert the content at the placeholder
}


function get_file(url) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = handleResponse;
  request.open('GET', url);
  request.send();

  function handleResponse() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        return request.response;
      } else {
        console.log('There was a problem with the request - ' + request.status);
      }
    }
  }
}


window.addEventListener('load', insert_service_content, false);
