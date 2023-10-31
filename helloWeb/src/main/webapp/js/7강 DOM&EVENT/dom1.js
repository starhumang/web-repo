//dom1.js

const fruits = ['수박', '사과', '복숭아', '포도']


//[문제1]아래의 것을 이용해 리스트 만들기
//구조 : #show>ul>li:수박+li:사과+li:복숭아+li:포도
//createElement, appendChild, innerHTML 속성.

//ul 생성
let ul = document.createElement('ul');
//li 생성
let li1 = document.createElement('li');
li1.innerHTML = '수박';
let li2 = document.createElement('li');
li2.innerHTML = '사과';
let li3 = document.createElement('li');
li3.innerHTML = '복숭아';
let li4 = document.createElement('li');
li4.innerHTML = '포도';

console.log(ul , li1, li2, li3, li4 );//확인용

ul.appendChild(li1); 
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
console.log(ul);


//교수님 방식
//fruits.forEach(fruit => {
//	const li = document.createElement('li');
//	li.innerHTML = fruit;
//	ul.appendChild(li);
//})


document.getElementById("show").appendChild(ul);
//div의 하위요소로 ul을 넣겠다.



