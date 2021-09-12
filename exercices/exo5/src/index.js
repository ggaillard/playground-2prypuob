// 1
// on selectionne un element, on ajoute text
// d3.select('element').text('text');

// 2

// on selectionne tous les objets de la classe "une-classe"
d3.selectAll('.une-classe').each(function () {
  // on applique cette operation pour chacun d'entre eux
  // "this" correspond à l'élement selectionné. par exemple: <p>
  console.log(this);
  // le but est de supprimer les deux premiers noeuds
  // indice : "this.firstChild" ou "this.childNodes[0]"
  // ps, n'oubliez pas le <br> en trop
  // pour supprimer un objet:
  //d3.select(objet).remove();
});

// 3
// on selectionne tous elements de une-classe
d3.selectAll('.une-classe').each(function () {
  // pour chacun d'entre eux on sélectionne leur noeuds enfant
  d3.selectAll(A_COMPLETER)
    // on filtre les noeuds sélectionnés pour ne garder que les doublons
    .filter((_d, i) => Math.floor(i / 2) % 2 === 0)
    // on les supprime
    .remove();
});

// 4

// astuce : d3.select et .remove()
// n'oubliez pas de # pour selectionner par id

//5

//  astuce : on utilise append pour ajouter un element <footer> dans notre cas
//  d3.select('body').append('footer');
