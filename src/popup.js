document.addEventListener('DOMContentLoaded', function() {
    var disableBtn = document.getElementById('disableBtn');
  
    disableBtn.addEventListener('click', function() {
      chrome.runtime.sendMessage({ type: 'disableAdBlocker' }, function(response) {
        console.log('Ad blocker disabled:', response.disabled);
      });
    });
  });
  