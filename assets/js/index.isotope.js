/*
* index.isotope.js
*
* Written by Nate Beatty 
* June 2013
*
* This file contains the javascript and jquery necessary to handle
* the Isotope elements on the index page of the website. It includes
* some custom code to center the container class, thus centering
* all of the masonry. Based on Isotope's custommasonry custom behavior.
*/

var postlistItemWidth = 250;

$.Isotope.prototype._getCenteredMasonryColumns = function() {
	this.width = this.element.width();
	var parentWidth = this.element.parent().width();
	// i.e. options.masonry && options.masonry.columnWidth
	var colW = this.options.masonry && this.options.masonry.columnWidth ||
		// or use the size of the first item
		this.$filteredAtoms.outerWidth(true) ||
		// if there's no items, use size of container
		parentWidth;

	var cols = Math.floor( parentWidth / colW );
	cols = Math.max( cols, 1 );
	// i.e. this.masonry.cols = ....
	this.masonry.cols = cols;
	// i.e. this.masonry.columnWidth = ...
	this.masonry.columnWidth = colW;
};

$.Isotope.prototype._masonryReset = function() {
	// layout-specific props
	this.masonry = {};
	// FIXME shouldn't have to call this again
	this._getCenteredMasonryColumns();
	var i = this.masonry.cols;
	this.masonry.colYs = [];
	while (i--) {
		this.masonry.colYs.push( 0 );
	}
};

$.Isotope.prototype._masonryResizeChanged = function() {
	var prevColCount = this.masonry.cols;
	// get updated colCount
	this._getCenteredMasonryColumns();
	return ( this.masonry.cols !== prevColCount );
};

$.Isotope.prototype._masonryGetContainerSize = function() {
	var unusedCols = 0,
	i = this.masonry.cols;
	// count unused columns
	while ( --i ) {
		if ( this.masonry.colYs[i] !== 0 ) {
			break;
		}
		unusedCols++;
	}
	return {
		height : Math.max.apply( Math, this.masonry.colYs ),
		// fit container to columns that have been used;
		width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
	};
};

$(function(){
	var $container = $('#container');
	$container.isotope({
		itemSelector : '.postlist-item',
		masonry : {
			columnWidth : postlistItemWidth
		},
		getSortData : {
			date : function ( $elem ) {
				var array = $elem.find('.date').text().split('-');
				array.unshift(array.pop());
				// console.log(array.join().replace(/,/g,''));
				return parseInt( array.join().replace(/,/g,'') );
			}
		},
		sortBy : 'date',
		sortAscending : false
	});
});

// Replace headers with appropriate symbols
//$(".code.symbol").html("&Gamma;");
//$(".life.symbol").html("&Tau;");
$(".physics.symbol").html("&Psi;");