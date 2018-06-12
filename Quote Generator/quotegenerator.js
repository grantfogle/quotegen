var quotes = [
	"Do today as you would unto others as you would do to yourself - Jesus",
	"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. - Marcus Aurelius",
	"It is not death that a man should fear, but he should fear never beginning to live. - Marcus Aurelius",	
	"Didn't get that new job? Good. Didn't get that promotion? Good. Got rejected by your date? Good. It means you're still alive. - Jocko Willink",
	"Get after it. You are going to run out of the time before you know it. - Jocko Willink"
]


function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

