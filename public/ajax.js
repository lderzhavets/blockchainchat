function ajaxPost(url, data, callback) {
	var xhr = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP")
									 : (XMLHttpRequest && new XMLHttpRequest()) || null;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			
			try {
				 callback(xhr.responseText);
			}
			catch(error) {
					//if server doesnt repsonse
				if(xhr.status == 0 || xhr.status == 403){
					location.reload(); 
				}else{
					alertWarningDialog("Sorry. Something is wrong, don't worry, we are trying to fix it.");	
				}
			}
		}
	}

	xhr.open('POST', url, false);
	// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader("Content-length", data.length);
	xhr.send(data);
}

function ajaxGet(url, callback) {
	
	var xhr = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP")
									 : (XMLHttpRequest && new XMLHttpRequest()) || null;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			try {
				callback(xhr.responseText);
			}
			catch (error) {
				//if server doesnt repsonse
				if(xhr.status == 0 || xhr.status == 403){
					location.reload(); 
				}else{
					alertWarningDialog("Sorry. Something is wrong, don't worry, we are trying to fix it.");	
				}
				
			}
		}
	}

	xhr.open('GET', url, false);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send();
}



