var whatcards = document.getElementsByClassName("whatcards");
var whatbgimgs = document.getElementsByClassName("whatbgimgs");
var whatbg = ["tab4.jpg","tab2.jpg","tab3.jpg","tab1.jpg"];
function whatFunction(num){
	for(x in whatcards){
		console.log(x);
		if(x == 'length')
			break;
		whatcards[x].classList.remove("active");
	}
	console.log(this);
	whatcards[num].classList.add("active");
	whatbgimgs[0].style.background= "url('images/"+whatbg[num]+"')";
}