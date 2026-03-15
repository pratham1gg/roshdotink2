(function () {
  var target = '12042026';
  var buffer = '';
  document.addEventListener('keypress', function (e) {
    buffer += e.key;
    if (buffer.length > target.length) buffer = buffer.slice(-target.length);
    if (buffer === target) {
      buffer = '';
      window.location.href = '/roshkaysh/';
    }
  });
})();
