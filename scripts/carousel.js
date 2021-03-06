var itemList = document.getElementsByClassName("item-carousel");
var index = 0;

function showSlide(n){
	for(var i =0; i < itemList.length; i++){ //for loop, esconde a imagem atual e exibe a proxima
		itemList[i].style.display = "none";
	}
	itemList[n].style.display = "block";
}

function next(){
	index++;
	if(index >= itemList.length){
		index = 0;
	}
	showSlide(index);
}

setInterval(next, 5000); //espera 5sec, repete