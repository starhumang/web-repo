import { table } from "./bookModule.js";
	
			
let xhtp = new XMLHttpRequest();
xhtp.open('get', '../BookListServlet');
xhtp.send();//여기까지가 연결
xhtp.onload = loadJson;

function loadJson(){
	let result = JSON.parse(xhtp.responseText);
	let tableTag = table.makeTable(result);
	document.getElementById("book").innerHTML = tableTag;
}