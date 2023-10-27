// array3.js
let pos = "Hello, World".indexOf(","); // 그냥 문자열에서 찾기
console.log(pos);

let names = ["콘", "무지", "라이언", "어피치"] // 배열안에서 찾기
pos = names.indexOf("무시");
if (pos == -1) {
    console.log("찾는 이름이 없습니다.");
} else {
    console.log("무지는 " + (pos + 1) + "번째 위치에 있습니다.");
}



//[문제] 민식이라는 사람이 몇명있는지 찾느 메소드
let members = [
    {name : "김민식", age: 22},
    {name : "최민식", age: 23},
    {name : "김우현", age: 26}
]
let search = "민식";

let count = 0;
members.forEach(function(ele, idx){
    let human = ele.name.indexOf(search);
    if(human != -1){
        count += 1;
    }
});
console.log(search + "라는 이름을 가진 사람의 수는 " +count + "명 입니다.")



