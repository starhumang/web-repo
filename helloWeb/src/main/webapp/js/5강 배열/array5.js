// arrays.js


// [sort] = 기본 가나다순으로 정렬 아니면 지정해줘야함, 새로 정렬된 값은 배열의 순서를 변경해서 배열이 만들어짐
const arr1 = ['펭수', '라이언', '어피치', '콘', '무지']
arr1.sort();//배열 속성 자체를 변경
console.log(arr1);

const arr2 = [4,8,1,12,23,9]
arr2.sort(function(a,b) {
    if (a < b){//오름차순 정렬(a < b), 내림차순 정렬(a > b)
        return -1;
    } else {
        return 1;
    }
});// 가나다순으로 정렬하여 배열 속성 자체를 변경
console.log(arr2);


const json = `
[{"id":1,"first_name":"Selle","email":"sginn0@gnu.org"},
{"id":2,"first_name":"Ann","email":"arotlauf1@google.cn"},
{"id":3,"first_name":"Nonna","email":"ngreen2@foxnews.com"},
{"id":4,"first_name":"Norby","email":"nstraun8@spotify.com"},
{"id":5,"first_name":"Yasmeen","email":"ylapley9@uiuc.edu"}]
`; //object로 바꾸는 방법/  JSON.parse()사용. // 문자열을 자바스크립트의 객체타입으로 바꾸겠습니다.(타입에 대문자)
let members = JSON.parse(json);
members.sort(function(a,b){
    if(a.firtst_name > b.first_name){
        return -1
    }else
        return 1
}).reverse();//방금 정렬한 것의 역순으로 정렬
console.log(members);

