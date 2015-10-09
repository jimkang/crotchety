var director = require('director');

document.querySelector('#submit').addEventListener('click', submitForm);

var routes = {
  '/:product/:harm/:victim': render
};

var router = director.Router(routes).init();

function render(product, harm, victim) {
  if (!product || !harm || !victim) {
    return;
  }
  
  product = decodeURIComponent(product);
  harm = decodeURIComponent(harm);
  victim = decodeURIComponent(victim);

  var capitalizedProduct = product.slice(0, 1).toUpperCase() + product.slice(1);

  var genericDismissal = `
  <p>The complaint about ${product} is a Voight-Kampff test for <strong>common sense</strong>.</p>

  <p>You think they're driving society into the ditch? ${capitalizedProduct} predated this company by decades and decades. Society already had the demand, and they're filling it. <strong>Society was already in the ditch.</strong></p>

  <p>You think the ${product} cause ${harm} to ${victim}? <strong>Who the hell do you think is buying them?</strong> You think ${victim} are stupid??</p>

  <p>You think it's all just fuel for douche frat bros? You think douche frat bros need ${product} to be douche frat bros?</p>

  <p><strong>What about the children and the things they currently do?</strong> Why aren't you worried about them instead?</p>`;

  document.querySelector('#dismissal').innerHTML = genericDismissal;  
}

function submitForm() {
  var product = getValue(document.querySelector('#product'));
  var harm = getValue(document.querySelector('#harm'));
  var victim = getValue(document.querySelector('#victim'));
  router.setRoute(`${product}/${harm}/${victim}`);
  render(product, harm, victim);
  document.body.scrollTop = 0;
}

function getValue(el) {
  var value = el.value;
  if (!value) {
    value = el.placeholder;
  }
  return encodeURIComponent(value);
}
