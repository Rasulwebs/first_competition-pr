// ================ selector  ==================
const $ = function (selectorName) {
  return document.querySelector(selectorName);
};
// ================ selector all ==================
const $a = function (selectorName) {
  return document.querySelectorAll(selectorName);
};

const crElement = function (tagName, className, contentt) {
  const newElement = document.createElement(tagName);
  if (className) {
    newElement.setAttribute("class", className);
  }
  if (contentt) {
    newElement.innerHTML = contentt;
  }
  return newElement;
};
