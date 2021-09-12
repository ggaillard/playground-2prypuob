d3.select('#masquer-paroles')
  .datum(d3.select('#paroles').node())
  .on('click', function (d) {
    d.classList.toggle('hidden');
  });

const $refrains = d3.selectAll('.refrain').filter(function (_d, i) {
  return i > 0;
});

d3.select('#masquer-refrains').on('click', function () {
  $refrains.call(function ($el) {
    if (d3.event.target.checked) {
      $el.select('.definition').classed('hidden', false);
      $el.select('.contenu').classed('hidden', true);
    } else {
      $el.select('.definition').classed('hidden', true);
      $el.select('.contenu').classed('hidden', false);
    }
  });
});

$refrains.call(function (el) {
  el.on('mouseenter', function () {
    el.select('.contenu').classed('hidden', false);
  });
  el.on('mouseleave', function () {
    if (!el.select('.definition').classed('hidden')) {
      el.select('.contenu').classed('hidden', true);
    }
  });
});
