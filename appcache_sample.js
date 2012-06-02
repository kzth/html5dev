window.addEventListener('load', function() {
  if (navigator.onLine) {
    document.getElementById('result').innerHTML = 'オンラインです';
  } else {
    document.getElementById('result').innerHTML = 'オフラインです';
  }
}, true);
