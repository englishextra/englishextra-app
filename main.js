/*!
 * @see {@link http://docs.nwjs.io/en/latest/For%20Users/Getting%20Started/}
 * @see {@link http://docs.nwjs.io/en/latest/References/Window/#windowopenurl-options-callback}
 * icon must be PNG, not ICO
 */
nw.Window.open("www/index.html", {
	width: 844,
	height: 640,
	icon: "www/icon.png",
	title: "Английский без регистрации"
}, function (win) {});
