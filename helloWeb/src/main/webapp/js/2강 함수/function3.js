// function3.js

// function Member(name, age, height){// 생성자 함수라고 함
// 	console.log(this); //함수 안에서의 this는 윈도우 객체이며 윈도우 객체는 제일 상위 객체이다.
//     this.name = name; //아래처럼 새로운 객체 선언 후 this를 적으면 그건 새로 만든 선언 안에 있는 값을 뜻한다.
//     this.age = age;
//     this.height = height;
//     this.showInfo = function (){
//         return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
//     }
// }
// const member = new Member('홍길동', 20, 123.4);
// console.log(member.showInfo());
// // var myName = 'Hong';
	
	
	
//[ 문제 ]함수 : table 생성.
const members = [ // 중괄호 안 사용하고 이렇게도 객체 만들 수 있음
	new Member('홍길동', 18, 123.3),
	new Member('김길동', 19, 124.3),
	new Member('박길동', 20, 125.3),
	]
	
	function Member(name, age, height){// 정보가 들어갈 양식
 	console.log(this); 
     this.name = name; 
     this.age = age;
     this.height = height;
     this.showInfo = function (){
         return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	}
	}


	function makeTr(member){ //tr, td를 만드는 기능
        let html = '';
        html += '<tr>';
        html += '<td>'+ member.name + '</td>';
        html += '<td>'+ member.age + '</td>';
        html += '<td>'+ member.height + '</td>';
        html += '<td>'+ member.showInfo() + '</td>';
        html += '</tr>';
        return html;
    }



function makeTable(memberAry = []){ // 테이블을 만들어 makeTr과 합치는 기능
	let str = '';
	str +='<table border = 1>';
	str +='<tbody>';
	
	members.forEach(function(value){ // 3번 반복
		str += makeTr(value);
	})
	
	str +='</tbody>';
	str +='</table>';
	// return str;
	show.innerHTML = str;
	document.getElementById('show').innerHTML = str;
	



}
makeTable(members);

