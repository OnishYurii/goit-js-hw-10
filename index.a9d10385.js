!function(){var e={"x-api-key":"live_7krsDhJaLjVXQehyeACWzGu7EMwB1gQU6ebhoTFOXaWC3zqUcFWCaSzto65jBMk3"};function n(){return fetch("https://api.thecatapi.com/v1/breeds",e).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function t(n){var t="?breed_ids=".concat(n);return fetch("https://api.thecatapi.com/v1/images/search"+t,e).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var o=document.querySelector(".breed-select");console.log(n()),n().then((function(e){return function(e){var n=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("");o.insertAdjacentHTML("beforeend",n)}(e)})).catch((function(e){return console.log(e)})),o.addEventListener("input",(function(e){e.preventDefault(),t(o.options[o.selectedIndex].value).then((function(e){console.log(e)}))}))}();
//# sourceMappingURL=index.a9d10385.js.map
