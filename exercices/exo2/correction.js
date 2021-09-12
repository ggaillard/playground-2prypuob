// 1.
document.querySelectorAll('.red').forEach(function (el) {
  el.classList.remove('red');
});

// 2.
document.querySelectorAll('.refrain').forEach(function (el) {
  el.classList.add('italic');
});

// 3.
document.querySelector('#paroles').style.backgroundColor = '#6495ED';
