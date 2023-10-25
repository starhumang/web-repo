//function5. js




//1.
function sum(a = 0,b = 0,c = 0){ // 매개변수 이름 = parameters
 console.log(arguments);
return a + b + c + arguments[3] + arguments[4];// a,b,c와 3번째의 값 + 4번째의 값
}
console.log('---------------------------------')




//2. 
let sum1 = 0;
[10,20,30].forEach(function(num){
    sum1 += num;//consumer : 매개값을 받아서 소진하고 반환값은 없는 타입을 컨슈머 타입 함수라고 한다.★★★
})
console.log('forEach : ', sum1);
sum1 = 0;
sum1 = [10,20,30].reduce(function(acc, item, idx, ary){ //forEach와 다르게 누적값(초기값)인 acc가 추가로 들어가는 항목이 있다./ 초기값, 값, 방번호, 배열전체
    console.log(acc, item, idx);
    return acc + item;
}, 0); // 초기값 0, 첫번째 값인 10이 들어가고 가면 초기값이 10이 됨 그 다음은 30
console.log('reduce : ', sum1);//function : 매개값을 소진하고, 반환값도 생성한다는 타입을 펑션타입 함수라고 한다.★★★
console.log('---------------------------------')




//3.
function sum(a = 0, b = 0,...args){ //들어올 매개값이 정해져 있지 않을 때
    console.log(args);
    // return a + b + args.reduce(function(acc, item){ return acc + item}); = acc(150) + item(60)
    return a + b + args.reduce((acc, item) => acc + item);//위와 같은 표현
    //args.forEach(funciton(num){ result += num })
    // let result = 0;
    // result = a + b;
    // args.forEach(num => result += num);
    //return result;
}
console.log(sum(10, 20 ,30, 40, 50, 60));//들어갈 값은 3개인데 5개 적으면 앞의 3개만 들어감 // 값으로 들어오는 애들 이름 = arguments.
console.log('---------------------------------')



//4. [문제] reduce 연습
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;

max = numAry.reduce(function(acc, item){
        if(acc > item ){
            return acc;
        }else{
            return item;
        }       
    })
    // max = numAry.reduce((acc, item) => acc > item ? acc : item)화살표 연산자 맞으면 acc 틀리면 item 표시
console.log('최대값 : '+ max);
console.log('---------------------------------')







