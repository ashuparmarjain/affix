function Affix(obj) {
	this.element = obj.element;
	var node = document.querySelector(element);
	let nodeTopPosition = node.offsetTop;
	window.addEventListener('scroll',function(){
		if(window.pageYOffset >= nodeTopPosition){
			node.classList.add('affix');
		} else{
			node.classList.remove('affix');
		}
	});
}