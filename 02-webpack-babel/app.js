/**
 * @returns {void}
 */
function initApp() {
  const ranNum = Math.round(Math.random() * 10) + 1;
  const msg = `랜덤값: ${ranNum}`;

  const mainElement = document.querySelector(".main");
  mainElement.innerHTML = msg;
}

initApp();