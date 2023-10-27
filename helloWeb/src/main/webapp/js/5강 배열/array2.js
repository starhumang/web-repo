// array2.js : MOCK_DATA.json 파일의 활용.

const json = `
[{"id":1,"first_name":"Selle","email":"sginn0@gnu.org"},
{"id":2,"first_name":"Ann","email":"arotlauf1@google.cn"},
{"id":3,"first_name":"Nonna","email":"ngreen2@foxnews.com"},
{"id":4,"first_name":"Harbert","email":"hlaying3@umn.edu"},
{"id":5,"first_name":"Rufus","email":"rcrannis4@livejournal.com"},
{"id":6,"first_name":"Sherline","email":"sdanilovitch5@cnet.com"},
{"id":7,"first_name":"Kirsteni","email":"karnfield6@cbc.ca"},
{"id":8,"first_name":"Abram","email":"aspenceley7@cbslocal.com"},
{"id":9,"first_name":"Norby","email":"nstraun8@spotify.com"},
{"id":10,"first_name":"Yasmeen","email":"ylapley9@uiuc.edu"}]
`; 

console.log(json);//바꾸기 전
let members = JSON.parse(json); //json - > object로 바꾸는 방법/  JSON.parse()사용. // 문자열을 자바스크립트의 객체타입으로 바꾸겠습니다.
console.log(members); //바꾼 후


//밖에서 입력한 정보 받아서 추가하기
let inpVal = window.prompt("이름과 이메일을 입력하세요 (ex. 홍길동, hong@email.com"); // prompt : 직접 입력한 정보를 받아오는 윈도우의 메소드
let cutInpVal = inpVal.split(',');
let nid = members[members.length -1].id +1;
console.log(inpVal);
members.splice(10, 1, {id : nid, first_name : cutInpVal[0], email: cutInpVal[1].trim()});
console.log(members);
console.log('----------------------------');


//1. 선택한 이름의 줄을 없애기 2.그 후, 새로운 정보를 넣어서 수정하기
let delMember = "Rufus";
let yourinfo = {name : "Hong", email : "hong@email.com"}

members.forEach((ele, idx) => {
    if(ele.first_name == delMember){
        members.splice(idx,1 ,{id :ele.id, first_name : yourinfo.name, email: yourinfo.email});
    }
});
console.log(members);


// 이중배열
const dupAry = [["라이언", 5], ["어피치", 3], ["콘", 2], ["무지", 4]];
console.log(dupAry);
console.table(dupAry);


// arrNum = members.indexOf(delMember);
// members.splice(arrNum,1,);

// console.log(members);

