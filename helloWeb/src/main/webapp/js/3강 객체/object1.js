// object1.js

// 3.1
//html문에서 object1.js와 object.js을 불렀고 object.js 안에 Member 클래스가 있으니 여기서도 Member 클래스 사용 가능
Member.prototype.setBloodType = function(bloodType){ //prototype으로 해당 클래스 내에서가 아니라 밖에서 만들었음
    this.bloodType = bloodType;
}
Member.prototype.getBloodType = function(){
    return this.bloodType;
}
const mem2 = new Member('홍길동', 22, 123.4);
mem2.setBloodType('AB');
console.log(mem2.getBloodType());



// 4.
//javaScript 클래스 추가 가능.
String.prototype.truncate = function(){
    console.log(this);
    return this.substring(0,5) // 0번 인덱스에서 5번째 전 까지의 값만 가져옴
}
let result = "HelloWorld".truncate();
console.log(result);