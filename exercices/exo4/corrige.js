// console.log(chanson);
// Structure de Chanson:
// - auteur: string
// - titre: string
// - paroles : [Couplet, Couplet, ...]

// Structure de Couplet:
// id : string
// type : string
// chanteur : string
// contenu: tableau contenant les lignes du couplet

const el = (e, ...children) => {
  let $el = e;

  if (typeof e === 'string') {
    $el = document.createElement(e);
  } else if (Array.isArray(e)) {
    $el = el(e[0]);

    if (Array.isArray(e[1])) {
      $el.classList.add(e[1]);
    } else {
      $el.id = e[1];
      if (e[2]) {
        $el.classList.add(e[2]);
      }
    }
  }

  if (!children) return $el;

  children.forEach(
    (c) =>
      c &&
      $el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c)
  );

  return $el;
};

document.body.appendChild(
  el('h1', el('small', chanson.auteur + ' -'), chanson.titre)
);

// 2.
const couplet = (c) =>
  el(['p', c.id, [c.type]], ...c.contenu.flatMap((l) => [l, el('br')]));

const $paroles = document.body.appendChild(
  el(['div', ['paroles']], ...chanson.paroles.map(couplet))
);
// $paroles.classList.add('paroles');

// 3.
const $footer = document.body.appendChild(
  el('footer', '© Copyright 2020 - IUT')
);

// 4. [optionnel]
