/* // KR Solver background.js

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.initializeID)
		{
			console.log("initializeID: " + request.initializeID);
			setStorage("KRTabID", sender.tab.id);
		}
	}
);

chrome.runtime.onMessageExternal.addListener(
	function(request, sender, sendResponse) {
		var krTabID = parseInt(getStorage("KRTabID"));		
		chrome.tabs.query({}, function(tabs) {		  							
			console.log(krTabID);
			for (var i = 0; i < tabs.length; ++i)
			{					
				if (tabs[i].id == krTabID)
				{											
					console.log("krTabID sendMessage");
					chrome.tabs.sendMessage(tabs[i].id, {close: true}, function(response) {});
					break;
				}					
			}		  				
		});					
	}
);


function setStorage(name, value) {
    // check if the web browser support HTML5 storage
    if ('localStorage' in window && window['localStorage'] !== null) {
        window.localStorage.setItem(name, value);
    }

    name = undefined;
    value = undefined;
}

function getStorage(name) {
    // check if the web browser support HTML5 storage
    if ('localStorage' in window && window['localStorage'] !== null) {
        return (window.localStorage.getItem(name));
    }
    name = undefined;
} */