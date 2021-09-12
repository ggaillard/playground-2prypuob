// 1
d3.select('h1').text('Rick Astley - Never Gonna Give You Up');

// 2
d3.selectAll('.couplet').each(function () {
  d3.selectAll([this.childNodes[0], this.childNodes[1]]).remove();
});

// 3
d3.selectAll('.refrain').each(function () {
  d3.selectAll(this.childNodes)
    .filter((_d, i) => Math.floor(i / 2) % 2 === 0)
    .remove();
});

// 4
d3.select('#erreur').remove();

//5
d3.select('body').append('footer').text('© Copyright 2020 - IUT');
