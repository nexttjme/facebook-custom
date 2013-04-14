// ==UserScript==
// @name       Facebook Custom Script
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Allows custom CSS on Facebook
// @match      https://facebook.com/*
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @copyright  2013+, GPL 2
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

jQuery(document).ready(function ($)
{
	var rowClass = "row",
		columnClass = "col",
		colIdentifierPrepended = false,
		$container = $("#globalContainer"),
		containerClass = "container";
	var $rows = $("#mainContainer, .slim, .blueBarHolder, #pageFooter"),
		$columnsArray = {"threecol": $("#leftCol, #rightCol"), "sixcol": $("._4_g4 .lfloat"),"ninecol": $("#contentCol, #contentArea")},
		$columns = null,
		$rowLastColumn = null;
	var $boxes = $("#pagelet_welcome_box"),
		boxClass = $("box");
	var $contentArea = $("#content");
	var $leftSidebar = $contentArea.find("#leftCol"),
		$rightSideBar = $contentArea.find("#rightCol"),
		$contentRowArea = $contentArea.find("#contentArea");
	reAssembleContent();
	setGrid();
	setContainer();
	setBoxes();

	function setRows() {
		$rows.addClass(rowClass);
	}
	function setColumns() {
		$columns = $.map($columnsArray, function(value, key) {
			console.log("Value for " + value + "\tKey is " + key);
			value.addClass(key);
		})
	}
	function setLastColumn() {
		$rowLastColumn = $(".row .onecol:last-child, .row .twocol:last-child, .row .threecol:last-child, .row .fourcol:last-child, .row .fivecol:last-child, .row .sixcol:last-child, .row .sevencol:last-child, .row .eightcol:last-child, .row .ninecol:last-child, .row .tencol:last-child, .row .elevencol:last-child, .row .twelvecol").addClass("last");
	}
	function setGrid() {
		setRows();
		setColumns();
		setLastColumn();
	}
	function setContainer() {
		$container.addClass(containerClass);
	}
	function reAssembleContent() {
		$contentRowArea.addClass(rowClass).after($rightSideBar);
		//$contentRowArea.after($rightSideBar).find("*").wrap("<div class = 'row'></div>");
	}
	function setBoxes() {
		$boxes.addClass(boxClass);
	}
});
