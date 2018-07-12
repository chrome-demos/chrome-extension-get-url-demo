function getCurrentTabUrl(callback) {
  var queryInfo = { active: true, currentWindow: true };
  chrome.tabs.query(queryInfo, function(tabs) {
    var url = tabs[0].url;
    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    alert("Current url: " + url);
  });
});
