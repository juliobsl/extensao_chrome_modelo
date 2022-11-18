let interval

async function changeStatus () {
  window.addEventListener('load', function () {
    let executed = false
    interval = setInterval(() => {
      const readme = document.querySelector('#readme')
      chrome.storage.sync.get('sending', data => {
        if (readme && !executed && data.sending) {
          readme.style.border='solid green 3px';
          clearInterval(interval)        
          executed= true
          chrome.storage.sync.clear();
        }
      });
    }, 1000)
  })
}
const addChecking = function (tabId, changeInfo, tab) {
  chrome.storage.sync.get('sending', data => {
    if (tab.url) {
      const wppURL = 'https://github.com/juliobsl/extensao_chrome_modelo'
      const wppSite = tab.url.includes(wppURL)
      if (wppSite && data.sending) {
        chrome.scripting.executeScript(
          { target: { tabId }, func: changeStatus }
        )
      }
    }
  }); 
}

chrome.tabs.onUpdated.addListener(addChecking)
