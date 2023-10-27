// array4.js


const json = `
[{"id":1,"first_name":"Selle","email":"sginn0@gnu.org"},
{"id":2,"first_name":"Ann","email":"arotlauf1@google.cn"},
{"id":3,"first_name":"Nonna","email":"ngreen2@foxnews.com"},
{"id":4,"first_name":"Norby","email":"nstraun8@spotify.com"},
{"id":5,"first_name":"Yasmeen","email":"ylapley9@uiuc.edu"}]
`; //object로 바꾸는 방법/  JSON.parse()사용. // 문자열을 자바스크립트의 객체타입으로 바꾸겠습니다.(타입에 대문자)

let members = JSON.parse(json);

//1.  [find] =리턴값이 true가 되는 애들을 반환한다(객체상태 그대로)
let result = members.find(function(ele,idx,arr){
    if(ele.id > 3){
        return true;
    }
    return false;
    
});
console.log(result);


//2. [filter] = 리턴값이 true가 되는 애들을 새로운 배열 담아 반환한다.
result = members.filter(function(ele){
    return  ele.id > 3;
})
console.log(result);

result = members.filter(function(ele,idx){
    return  idx >= 1 && idx < 3;
})
console.log(result);


//3. reduce를 사용해서 같은 작업 하기
result = members.reduce((acc, ele, idx) => {
    if(idx >= 1 && idx < 3){
        acc.push(ele);
    }
    return acc;
}, [])//[]는 초기값
console.log(result);


//4. [some] = 배열중에서 어떤조건에 하나라도 만족하는 값이 있으면 true를 반환
result = members.some((member) =>{
    console.log(member);
    return member.first_name.length > 5;
})
console.log(result);


//5. [every] = 배열중에서 어떤조건에 모두 만족하는 값이 있으면 true를 반환
result = members.every((ele) =>{
    console.log(ele);
    return ele.first_name.length > 5;
})
console.log(result);

//6. [map] = 새로운 형태의 객체를 담을 수 있다.(내가 아는 맵이라면 중복값 x, 같은 값이 있다면 후자의 값으로 덮어짐)
result = members.map(member => {
    let obj = {id: member.id, name: member.first_name, email: member.email, grade: 'C'}
    return obj;
})
console.log(result);

