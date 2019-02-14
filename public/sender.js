window.cdc = {};

cdc.initSender = () => {
  const frame = document.createElement('iframe');
  frame.setAttribute("src", "http://localhost:3001");
  frame.id = 'cross-domain-iframe';
  frame.style.display = "none";
  document.body.appendChild(frame);
}

cdc.send = payload => {
  payload.cdcMessage = true;
  const frame = document.getElementById('cross-domain-iframe');
  frame.contentWindow.postMessage(payload, "http://localhost:3001");
}
