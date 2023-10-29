// array1.js

const arr1 = []
arr1.push(10); //배열에는 어떤것이든 넣을 수 있음
arr1.push('ten');
arr1.push( {name : "Hong", age : 20})
arr1.unshift(20); // 배열의 맨 앞에 내용 추가

console.log('크기 : ' + arr1.length); // 배열의 길이 (인덱스보다 +1 많음)
//arr1.length = 5; //배열의 크기도 지정할 수 있음. 위에서 배열의 값을 4개 추가했더라하더라도 배열의 크기를 2로 지정하면 맨 앞의 2개만 뜸


// arr1.shift()// 배열의 맨 앞에서부터 제거(뽑아냄)
arr1.pop();// 배열의 맨 뒤에서부터 제거(뽑아냄)

// ★★★arr1.splice(); // 추가, 수정, 삭제★
arr1.splice(1, 0, 30)// 추가 (1번자리에 0개의 개수만큼 30으로 대체하겠습니다.)
arr1.splice(3, 0, 50, 60 ) // 2개도 추가 가능
arr1.splice(0,1,15) // 수정 (0번 자리에 1개의 개수만큼 15로 대체하겠습니다.)
arr1.splice(2, 1 ) // 삭제 (2번 자리에 1개의 개수만큼 삭제하겠습니다.)


for (let ary of arr1){//arr1에 들어있는 개수만큼 출력하겠습니다.
    console.log(ary);
}

