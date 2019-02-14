function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function getCookie(key) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim().split('=');
    if (cookie[0] === key) {
      return cookie[1];
    }
  }
  return null;
}

if (!document.cookie.includes('cdcID')) document.cookie = `cdcID=${makeid()}`;

window.addEventListener('message', event => {
  if (!!event.data.cdcMessage) { // event.origin === 'http://localhost:3001' &&
    delete event.data.cdcMessage;
    event.data.userId = getCookie('cdcID');
    event.data.origin = event.origin;
    const url = "http://localhost:3001";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(event.data));
  }
}, false);
