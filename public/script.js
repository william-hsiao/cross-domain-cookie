window.cdc = {};

cdc.initSender = () => {
  const frame = document.createElement('iframe');
  frame.setAttribute("src", "http://localhost:3001");
  frame.id = 'cross-domain-iframe';
  frame.style.width = "640px";
  frame.style.height = "480px";
  document.body.appendChild(frame);
}

cdc.send = payload => {
  const frame = document.getElementById('cross-domain-iframe');
  frame.contentWindow.postMessage(payload, "*");
}

window.addEventListener('message', event => {
  console.log(event);

  console.log('Recieved Message');
  const url = "http://localhost:3001";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(event.data);
}, false);
