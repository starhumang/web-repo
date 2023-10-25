// object3.js
// 오브젝트랑 오브젝트 3 합쳐놨음,


const member = {
	name: "홍길동",
	age: 20,
	height: 123.4,
	showInfo: function() { 
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	},
	html: '',

	makeTr: function(student = { sno, sname, engScore, mathScore }) {
		let tr = '';
		tr += '<tr>';
        for(let prop in student){
            tr += '<td>' + student[prop] + '</td>';
        }
		tr += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		tr += '</tr>';
		return tr;
	},

	makeHtml(studAry) {
		// html생성. => this.makeTr(std);
		let table = '<table border="1"><tbody>';
		// let obj = this;
		table += studAry.reduce((acc, stud) => {
			return acc + this.makeTr(stud)
		}, '');
		table += '</tbody></table>';
		this.html = table;
	},

	showPage(dom) {
		dom.innerHTML = this.html;
	}
}

//4. [객체의 속성을 볼 때]for ..in
//멤버가 가지고 있는 객체를 봄
for (let prop in member){
    // member.name/ member['age'] //가져오는 방식 2가지
    // console.log(typeof member[prop]);
    if((typeof member[prop]) != 'function'){//안에 있는 객체 중 함수 빼고 보기
        console.log(member[prop]);
    }
    
}


const students = [
	{ sno: '001', sname: "최해주", engScore: 80, mathScore: 85 },
	{ sno: '002', sname: "김채민", engScore: 82, mathScore: 83 },
	{ sno: '003', sname: "최다예", engScore: 84, mathScore: 88 },
]

member.makeHtml(students);
member.showPage(document.getElementById('show'));

