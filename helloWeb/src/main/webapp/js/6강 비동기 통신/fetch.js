//fetch.js
import { table } from './ajaxModule.js'

// send, openload 등 대신 새로 만들어진 방법

fetch('../../MemberListServ2') // 패치의 역할은 이 주소를 프로미스로 가져오는 것 아래에 있는 then의 resolve에 들어가게 됨.
.then((resolve) => {
	console.log(resolve);//문자열
	return resolve.json(); // json -> object.
})
.then( (result) => {
	console.log(result);//객체화 완료시킨 문자열
	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = result;
	
	result = table.makeTable(titles, dataAry);
	document.getElementById("show").innerHTML = result;
})
.catch((err) => {
	console.log('error => ', err);
})