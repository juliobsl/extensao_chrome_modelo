document.addEventListener('DOMContentLoaded', function () {

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        if (tabs[0].url) {
            const testURL = 'https://github.com/juliobsl/extensao_chrome_modelo'
            const urlV = tabs[0].url.includes(testURL)
            if (!urlV) {
              window.open('https://github.com/juliobsl/extensao_chrome_modelo','_blank');
            }
        }
    });
      
});

