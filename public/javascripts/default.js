function navList(){
	//alert('dd');
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
	//shaddow();
}

var MouseActive = {
	shaddowIcon:document.getElementsByClassName('shaddow_icon'),
	shaddowImg:document.getElementsByClassName('shaddow_img'),
	onMouseOver:function(i){
			shaddowIcon[i].style.display = 'block';
			shaddowImg[i].style.display = 'block';
	},
	onMouseOut:function(i){
			shaddowIcon[i].style.display = 'null';
			shaddowImg[i].style.display = 'null';
	},
};


function shaddow(){
	var box = document.getElementsByClassName('live_img');
	//var image = box.getElementsByTagName('img');
	//var mouse = new MouseActive();
	var shaddowIcon = document.getElementsByClassName('shaddow_icon');
	var shaddowImg = document.getElementsByClassName('shaddow_img');
	for(var i = 0; i<shaddowImg.length; i++){
		
        /*
		image[i].onmouseover = function(){
			return mouse.onMouseOver(i);
			console.log(i);
		};
		image[i].onmouseout = function(){
			return mouse.onMouseOut(i);
			console.log(i);
		};
		*/		
		box[i].onmouseover = function(i){
			return function(){
				shaddowIcon[i].style.display = 'block';
				shaddowImg[i].style.display = 'block';
			}
		}(i);
		box[i].onmouseout = function(i){
			return function(){
				shaddowIcon[i].style.display = 'none';
				shaddowImg[i].style.display = 'none';
			}
		}(i);
	}
	console.log(i);
	/*
	for (var i = 0;i<pannel.length;i++){
		var imgs = pannel[i].getElementsByTagName('img');
		imgs[0].onmouseover = function(){
			for(var j = 0,j<shaddowImg.length;j++){
				shaddowIcon[j].style.display = 'block';
				shaddowImg[j].style.display = 'block';
			}
		}
	}
	*/
}
function elePositon(){
	var pannels = document.getElementsByClassName('pannel');
	pannels[0].style.left = '0';
	pannels[1].style.left = '-1170px';
	pannels[2].style.left = '-1170px';

}
/*
function moveElement(elementClass,finnal_x,interval){
	var pannel = document.getElementsByClassName(elementClass);
	for(var i =0; i<pannel.length;i++){
		var xpos = parseInt(pannel[i].style.left);
		if (xpos < finnal_x) {
			xpos++;
		}
		if (xpos > finnal_x) {
			xpos--;
		}
		pannel[i].style.left = xpos + 'px';
	}

}
*/

addLoadEvent(navList)
addLoadEvent(shaddow)
//addLoadEvent(elePositon)