const table = {
    
    makeHead(titles = ['도서코드','도서명', '저자', '출판사', '가격'],){
        let headTag = "<thead><tr>";
        titles.forEach(title => {
            headTag += "<th>" + title + "</th>";
        })
        headTag += "</tr></thead>";
        return headTag;
    },

    makeBody(dataAry = [{code, title, author, press, price}]){
        let bodyTag = "<tbody id= 'list'>";
        dataAry.forEach(item => {
            bodyTag += this.makeTr(item);//아래에서 만든 함수
        })
        bodyTag += "</tbody>";
        return bodyTag;
    },
    

    makeTable(titleAry, dataAry){
        let tableTag = "<table border = 1>";
        tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
        tableTag += "</table>";
        return tableTag;
    },
    
    makeTr(book = {}){
		let trTag = "<tr onclick = 'showInfo(event, this)'>";
		for(let prop in book) {
			trTag += "<td>" + book[prop] + "</td>";
		}
		trTag += "</tr>";
		return trTag;
	}
}

export{ table }