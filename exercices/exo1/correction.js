// 1
document.body.firstElementChild.innerHTML =
  'Rick Astley - Never Gonna Give You Up';

// 2
for (const couplet of document.getElementsByClassName('couplet')) {
  const ligne = couplet.childNodes[0];
  const sautLigne = couplet.childNodes[1];
  couplet.removeChild(ligne);
  couplet.removeChild(sautLigne);
}

// 3
for (const refrain of document.querySelectorAll('.refrain')) {
  for (let i = refrain.childNodes.length; i >= 0; i--) {
    if (Math.floor(i / 2) % 2 === 0) {
      refrain.removeChild(refrain.childNodes[i]);
    }
  }
}

// 4
document.getElementById('erreur').remove();

//5
document.body
  .appendChild(document.createElement('footer'))
  .appendChild(document.createTextNode('© Copyright 2020 - IUT'));
