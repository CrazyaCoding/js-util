function BrowserType() {
	var userAgent = navigator.userAgent;

	var isOpera = userAgent.indexOf('Opera') > -1,
		isIE = window.ActiveXObject || 'ActiveXObject' in window,
		isEdge = userAgent.indexOf('Edge') > -1,
		isFF = userAgent.indexOf('Firefox') > -1,
		isSafari =
			userAgent.indexOf('Safari') > -1 &&
			userAgent.indexOf('Chrome') === -1,
		isChrome =
			userAgent.indexOf('Chrome') &&
			userAgent.indexOf('Safari') > -1 &&
			!isEdge;

	if (isIE) {
		var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
		reIE.test(userAgent);
		var IEVersion = parseFloat(RegExp['$1']);
		if (IEVersion === 6) {
			return 'IE6';
		} else if (IEVersion === 7) {
			return 'IE7';
		} else if (IEVersion === 8) {
			return 'IE8';
		} else if (IEVersion === 9) {
			return 'IE9';
		} else if (IEVersion === 10) {
			return 'IE10';
		} else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) {
			return 'IE11';
		} else {
			return 0;
		}
	}

	if (isOpera) {
		return 'Opera';
	}
	if (isEdge) {
		return 'Edge';
	}
	if (isFF) {
		return 'Firefox';
	}
	if (isSafari) {
		return 'Safari';
	}
	if (isChrome) {
		return 'Chrome';
	}
}
export default BrowserType;
