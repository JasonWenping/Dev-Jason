function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}else{
		return window.onload =function() {
			oldonload();
			func();
		}
	}

}