//book.js

import{ table } from './bookModule.js';


let xhtp = new XMLHttpRequest();
xhtp.open('get', '../..//BookListServlet');
xhtp.send();
xhtp.onload = loadJson;



