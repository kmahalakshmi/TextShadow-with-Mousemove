var hero = document.querySelector('.hero');
var text = hero.querySelector('h1');
var walk = 500;


function shadow(e)
{
	var width = hero.offsetWidth;
	var height = hero.offsetHeight;
	var x = e.offsetX;
	var y = e.offsetY;

	if(this !== e.target)
	{
		x = x+e.target.offsetLeft;
		y = y+e.target.offsetTop;

	}
	
	var xwalk = Math.round( (x / width * walk) - (walk / 2));
	var ywalk = Math.round((y / height * walk) - (walk / 2));

	

	text.style.textShadow = `${xwalk}px ${ywalk}px 0 red , 
	${xwalk * -1}px ${ywalk}px 0 blue,
	${ywalk}px ${xwalk * -1}px 0 green,
	${ywalk * -1}px ${xwalk}px 0 orange `;

}


hero.addEventListener('mousemove',shadow);