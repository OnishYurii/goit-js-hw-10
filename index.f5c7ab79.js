!function(){var n={headers:{"x-api-key":"live_7krsDhJaLjVXQehyeACWzGu7EMwB1gQU6ebhoTFOXaWC3zqUcFWCaSzto65jBMk3"}};function e(e){var t="?breed_ids=".concat(e);return fetch("https://api.thecatapi.com/v1/images/search"+t,n).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}var t=document.querySelector(".breed-select"),c=document.querySelector(".cat-info");fetch("https://api.thecatapi.com/v1/breeds",n).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return function(n){var e=n.map((function(n){return'<option value="'.concat(n.id,'">').concat(n.name,"</option>")})).join("");t.insertAdjacentHTML("beforeend",e)}(n)})).catch((function(n){return console.log(n)})),t.addEventListener("input",(function(n){n.preventDefault(),e(t.options[t.selectedIndex].value).then((function(n){!function(n){var e=function(n){var e=n[0].url,t=n[0].breeds[0].temperament,c=n[0].breeds[0].name,a=n[0].breeds[0].description;return'\n<div class="image-container">\n  <img src="'.concat(e,'" alt="').concat(c,'" class="cat-image" />\n</div>\n<div class="cat-body">\n  <h4 class="cat-name">').concat(c,"</h4>\n  <p>").concat(a,'</p>\n  <p class="cat-temperament"><span class="cat-temp-span">Temperament:</span> ').concat(t,"</p>\n</div>")}(n);c.innerHTML=e}(n)})).catch((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.f5c7ab79.js.map