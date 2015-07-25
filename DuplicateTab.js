chrome.commands.onCommand.addListener(function(command) {
	if(command == "duplicate_tab") {
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
			var tab = tabs[0];
			if(tab) {
				chrome.tabs.duplicate(tab.id);
			}
		});
	}
});
