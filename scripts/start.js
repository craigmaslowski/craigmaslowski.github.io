(function () {
  document.addEventListener('DOMContentLoaded', function () {
    enableTransitions();
  });

  function enableTransitions () {
    document.getElementsByTagName('body')[0].className = 
      document.getElementsByTagName('body')[0].className.replace(/(?:^|\s)disable-transitions(?!\S)/g , '');
  }
})();
