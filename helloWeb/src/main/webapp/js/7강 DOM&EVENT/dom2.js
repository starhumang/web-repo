// dom2.js

const fruits =[
    {name: "사과", price : 1000, farmer : '홍길동'},
    {name: "복숭아", price : 1500, farmer : '김민서'},
    {name: "포도", price : 2000, farmer : '최말숙'},
    {name: "수박", price : 3000, farmer : '김선중'},
]

//[문제2]아래의 것을 이용해 리스트 만들기
//구조 : #show>table>tbody>(tr>td:사과+td:1000+tr) + (tr>td:복숭아+td:1500+tr) ...
//createElement, appendChild, innerHTML 속성.
let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.setAttribute('border', '1');// 테이블에 스타일 추가

fruits.forEach((fruit) =>{//td들 tr붙여주는 작업
    // console.log(fruit);//확인용
    // console.log(fruit[0], fruit[1])//확인용
    let tr = document.createElement('tr');

    for(let prop in fruit){//객체 안에 있는 3가지 요소 td붙여주는 작업
        let td = document.createElement('td');
        td.innerHTML = fruit[prop];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
})
table.appendChild(tbody);
document.getElementById('show').appendChild(table);

