function navList(){
	var list = document.getElementById('top');
	var link = list.getElementsByTagName('a');
	link[0].style.color = '#00B7FF';
	for (var i = 0; i < link.length; i++) {
		link[i].onclick = function(i){
			return function(){
					link[i].style.color = '#00B7FF';
					for (var j = 0; j<link.length;j++){
						if (j != i){
							link[j].style.color = '#FFF';
							}
						}

				}
			}(i);

}
	console.log(i);

}

addLoadEvent(navList)