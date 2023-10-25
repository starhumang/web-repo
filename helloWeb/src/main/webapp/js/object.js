// object.js
console.log("object start...");


//정보 
let obj1 = {
    name : 'Hong',
    age : 20
}


//1.[주소값 참조]
let obj2 = obj1; //실제 값을 가지고 오는게 아니라 obj1이 가지고 있는 주소값을 가지게 됨
console.log(obj1); // 확인
obj2.age = 22; // 2에서 나이값을 바꿈
console.log(obj1); // 나이가 바뀜 : 22



//2. [값을 복사]
let obj3 = {...obj1} // obj1이 가지고 있는 값을 복사함
obj3.age = 24;
console.log(obj1); // 나이가 바뀌지 않음 : 22
console.log(obj3); // 나이가 바뀌어 있음 : 24


//3/ [클래스]
class Member{
    constructor(name, age, height){//생성자 자바랑 다르게 클래스 이름을 따서 쓰지 않는다
        this.name = name;
        this.age = age;
        this. height = height;
    }
    showInfo(){
        return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
    }

    //생성자 이용 안하고 함수에서 바로 몸무게 넣어주기
    setWeight(weight){
        this.weight = weight;
    }
    getWeight(){
        return this.weight;
    }
    
} //end class

// 밖에서 클래스(객체) 선언하고 안에 정보 넣음
const mem1 = new Member('홍길동', 20, 156.7); 
console.log(mem1.showInfo()); 

// 생성자 안에 정보 안 넣고, 객체선언 한 함수에서 바로 정보(몸무게) 넣음
mem1.setWeight(62.5);
console.log('홍길동의 몸무게는 ' + mem1.getWeight() + '입니다.');