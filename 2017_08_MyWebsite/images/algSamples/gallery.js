function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function load()
{

var allPicsWithLink = [];

for(var i=0; i<alg.length; i++){
	allPicsWithLink[i] = [
	"images/" + alg[i],
	"images/" + alg[i]];
}

shuffle(allPicsWithLink);

var masonaryDiv = document.getElementById('masonary');

for(var i=0; i<alg.length; i++){
	var div = document.createElement('div');
	var html = "<span class='item'> <img src='" +
		allPicsWithLink[i][0] +
		"'></span>";
	div.innerHTML = html;
	masonaryDiv.appendChild(div);
} 

}
