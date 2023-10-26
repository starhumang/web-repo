//Map이랑  Set 

const map = new Map();
map.set("홍길동", 80); // set(키, 값)
map.set("김길동", 85);
map.set("김길동", 90); // 동일한 키가 들어가게 된다면, 같은 키값의 이전 점수가 새 점수로 덮어진다.
// map.delete("김길동");


// 키값을 배열로도 넣을 수 있다
const refval = [12];
map.set(refval, 88); 
console.log(map.get(refval));
console.log("--------------------------------")



console.log(map.get("홍길동")); // 키를 가져오면 값이 출력됨 // 출력화면 : 80
for (let ent of map.entries()){ // entries : 키와 값을 배열값으로 반환해주는 함수 ★★★
    console.log(ent);
    console.log('이름 : ' + ent[0] + ', 점수 : ' + ent[1]);
}
console.log("--------------------------------")



//맵을 포이치로 열어보기(값, 키(인덱스), 배열 )
map.forEach(function(val, key, map){
    if(val > 80){
        console.log(val, key, map);
    }
})
console.log("--------------------------------")



//맵 <-> 배열(상호타입 변환 가능)
const ary = [['프로도', 3], ['라이언', 5], ['어피치', 4]]; //[키, 값]
const fmap = new Map(ary); // Map(생성자 : 배열);

for(let ent of fmap.entries()){
    console. log(' 키 : ' + ent[0] + ', 값 : ' + ent[1]);
}

const entries = fmap.entries();
console.log(entries); //entries : MapIterator 타입.
console.log(Array.from(fmap)); // 맵 -> 배열로 변환
console.log("--------------------------------")



//Set : 중복된 값은 허용하지 않음
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add("어피치");
set1.add("어피치");// 동일한 키가 들어가게 된다면, 뒤에 들어가는 키가 중복으로 없어져서 먼저 적은 키만 출력된다.
set1.add(["어피치" , 4]);
set1.add(["어피치" , 4]);// 배열은 동일한 키가 아니라서 중복으로 처리 안됨 둘 다 출력 됨

console.log(set1.size);

set1.forEach(function(val, item ,set) { // set에서는 다 값으로 나온다.. 키 없음(값, 값, 셋 그 자체)
console.log(val, item ,set);
})
console.log("--------------------------------")



//셋 <-> 배열.
const setAry = ['라이언', '프로도', '무지', '무지']
const set2 = new Set(setAry);
console.log(set2.size); //중복값 삭제되어서 개수 3 출력 됨

console.log(Array.from(set2)); // 셋 -> 배열로 변환
