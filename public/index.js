/* eslint-disable no-restricted-globals */
let intervalId;

function addButtons() {
  const menuElement = document.getElementsByClassName("css-11sh1n2")[0];

  if (menuElement) {
    clearInterval(intervalId);
  } else {
    return;
  }

  let div = document.createElement("div");
  div.innerHTML = `<button id='btn-docs'>DHX Diagram documentation</button><button id='btn-trial'><span>Free trial</span></button>`;
  menuElement.after(div);

  const btnDocs = document.getElementById("btn-docs");
  btnDocs.addEventListener("click", function () {
    window.open("https://docs.dhtmlx.com/diagram/", "_blank");
  });

  const btnTrial = document.getElementById("btn-trial");
  btnTrial.addEventListener("click", function () {
    window.open("https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml", "_blank");
  });

  history.pushState = (f =>
    function pushState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(history.pushState);

  history.replaceState = (f =>
    function replaceState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(history.replaceState);

  window.addEventListener("popstate", () => {
    window.dispatchEvent(new Event("locationchange"));
  });
}

window.addEventListener("load", function () {
  intervalId = setInterval(addButtons, 100);
});
