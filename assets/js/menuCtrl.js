/*
* menuCtrl.js
*
* Written by Nate Beatty 
* June 2013
*
* Changes what links are displayed in the menu
* based on the window path location.
*/

$(document).ready(function() {

	$ABOUT_PATH = '/about.html';
	$HOME_PATH = '/';
	$INDEX_PATH = '/index.html';

	$MENU = $('#tnb_menu');

	var pathname = window.location.pathname.split('#')[0];

	$MENU_GOHOME = '<a href="/">&larr; View All Posts</a>';
	$MENU_FILTERS = [
	'<ul class="inline-list" id="tnb_menulist">',
	'<li><a href="#" data-filter="*">show all</a></li>',
	'<li><a href="#" data-filter=".postlist-category-physics">physics</a></li>',
	'<li><a href="#" data-filter=".postlist-category-code">code</a></li>',
	'<li><a href="#" data-filter=".postlist-category-life">life</a></li>',
	'</ul>'].join('\n');

	if (pathname == $HOME_PATH || pathname == $INDEX_PATH) {
		console.log(pathname);
		$MENU.html($MENU_FILTERS);
	} else {
		console.log(pathname);
		$MENU.html($MENU_GOHOME);
	}
});