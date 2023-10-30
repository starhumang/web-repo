//ajax.js
//2. 인터넷과 연결하고 import해온 자료를 정리하는 곳

import{ table } from './ajaxModule.js';
// 구현을 한 아작스모듈을 불러옴



//데이터 연결하는 근본
let xhtp = new XMLHttpRequest(); // 비동기의 대표적인 방식
xhtp.open('get','../../MemberListServ2');
xhtp.send();
xhtp.onload = loadJson; //데이터를 서버에서 요청하고 오면


//오늘의 과제 : 아래 json파일을 연결하면 html에 그대로 표가 만들어져서 나와야 한다.
//JSON
function loadJson(){//MemberListServ2
	console.log(xhtp.responseText); // 문자열
	let result = JSON.parse(xhtp.responseText); //문자열 타입을 객체로 타입변환함
	console.log(result); //배열
	console.log(result[0])
	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = [];
	
	// 교수님 작업
//	result.forEach(member => {
//		dataAry.push({
//			mid: member.mid, pass: member.pass,
//			name : member.name, phone: member.phone
//		})
//	})

	//내 작업
	for(let ele of result){
//		let obj = { 
//			
//			mid : ele.mid,
//			pass : ele.pass,
//			name : ele.name,
//			phone : ele.phone,	
//		}
//		console.log(obj);
//		dataAry.push(obj);
		dataAry.push(ele);
	}
	
	
	let result2 = table.makeTable(titles, dataAry)// 위에서 만든 것들을 테이블 만들기 형식에 넣어주겠다.
	console.log(result2);
	document.getElementById("show").innerHTML = result2;
}// end of onload





//XML
function loadXML(){//MemberListServ1
console.log(xhtp.responseXML);
let doc = xhtp.responseXML;
let records = doc.getElementsByTagName('record')//레코드라고 하는 결과값을 가져오겠다
console.log(records);
console.log(records[0].children[0].innerHTML);// 레코드 0번째안에 있는 children의 0번째 안에 있는 innerHtml을 출력한다.
let titles = ["회원번호", "비번", "이름", "연락처"];
let dataAry = [];
for(let record of records){
let obj = {
		mid : record.children[0].textContent,// textContent가 실질적으로 아이디를 가지고 있음
		pass : record.children[1].textContent,
		name : record.children[2].textContent,
		phone : record.children[3].textContent,
	} 
	dataAry.push(obj);
 }
let result = table.makeTable(titles, dataAry);//아작스모듈 불러와서 사용한 곳
	console.log(result);//미리 콘솔창에 잘 뜨는지 출력
	document.getElementById("show").innerHTML = result;//실제 화면에 출력


//[문제] newMember 값을 이용해서 tbody = 'list' 추가.
let newMember = [{mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999"}]

function makeAddBody(newMember){
let bodyTag ='';
newMember.forEach(ele => {
	bodyTag += "<tr>"
	for(let prop in ele){
		bodyTag += "<td>" + ele[prop] + "</td>";
	}
	bodyTag += "</tr>";
})
return bodyTag;
}
console.log(makeAddBody(newMember));
document.getElementById("list").innerHTML += makeAddBody(newMember);
}//end onload /무엇을 추가하든 onload 안에 있어야 실행이 된다.!!!!!!!

// --------------------------------------------------------------------------------------------------------------------------



// Asynchronous Javascript And XML:
// 비동기 vs 동기

// [동기방식] = 코드의 순서대로 실행되는 것
let friends = []; //[ '홍길동', '김길동','최길동']
friends.push('홍길동');
friends.push('김길동');
friends.push('최길동');
console.log(friends);

// [비동기방식] = 코드의 순서가 아닌 작업이 처리되는 순서대로 실행
let friends1 = []; // ['김길동', '홍길동', '최길동']


//setTimeout = 시간 지연시키는 메소드
setTimeout(function(){
	friends1.push('홍길동');
}, 1000); //1초 후에 실행(1000밀리세컨드)

setTimeout(function(){
	friends1.push('김길동');
}, 500); //0.5초 후에 실행

setTimeout(function(){
	friends1.push('최길동');
}, 2000); //1.5초 후에 실행

console.log(friends1);

