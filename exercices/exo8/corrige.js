d3.select('body').call((body) => {
  body
    .append('h1')
    .call((h1) => h1.append('small').text(chanson.auteur + '- '))
    .node()
    .appendChild(document.createTextNode(chanson.titre));
  body
    .append('div')
    .attr('id', 'paroles')
    .classed('paroles', true)
    .call((div) =>
      div
        .selectAll('p')
        .data(chanson.paroles)
        .join((enter) =>
          enter
            .append('p')
            .attr('id', (d) => d.id)
            .attr('class', (d) => d.type)
            .html((c) => c.contenu.map((l) => l + '<br>').join(''))
        )
    );
  body.append('footer').text('© Copyright 2020 - IUT');
});
