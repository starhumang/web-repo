// object5.js : 객체복사.
const obj1 ={
    name : "Hong",
    age : 20,
    weight : 66.8
}

//[객체의 속성을 밖에서 정의하는 방법]
// obj1.bloodTrpe = "AB"; //방법 1
Object.defineProperty(obj1, 'bloodType',{  // 방법2 defineProperty(바꾸고 싶은 객체, 타입, {바꿀 내용})
    set : function(bt){ // setter
        if (bt == "A" || bt =="B" || bt =="AB" || bt == "O"){ // _bloodType정의할때 오직 이 4가지만 가능
            this._bloodType = bt;
        }else{
            console.log('잘못된 유형입니다.');
            this._bloodType = "A"; // 만약 정의할때 C라던가 다른 알파벳을 적으면 기본값 A로 나옴
        }
    },
    get : function(){ //getter
        return this._bloodType;
    }
})

//혹은
obj1._bloodType = "AB"; // setter
console.log(obj1.bloodType); //getter

//속성 정의 시 속성값과 this객체의 속성을 달리하는 이유?
//객체의 속성 정의 시 get/set을 어디서 확인하는지?





// [참조변수]
const obj3 = obj1; // obj3을 고치면 obj1도 바뀐다



// [새로운 객체 만들기]
const obj2 = Object.assign({name : "Hwang", age: 22, height : 123.4}, obj1); //새로운 객체를 만든 것 그래서 새로운 값을 넣거나 내용을 고치더라도 obj1의 값이 안변함
console.log(obj2);
//출력결과 
// name : "Hong"
// age : 20
// height : 123.4 신규값은 obj1의 값에 안 덮어지고 유지
// bloodType : AB


// [상속]- 얘도 새로 만들어지는거
const obj4 = Object.create(obj1);
obj4.name = "Kim"; // 자식의 값이 변경되면 부모와 다른 값이 나옴
// obj4.age = 23;
obj1.name = "Hwang"; //부모의 값이 변경되더라도 자식이 본인의 값을 변경 했기 때문에 부모의 값을 따르지 않음. 심지어 굳이 변경하지 않은 값도 나오지 않음 ㄹㅈㄷ
console.log(obj4); // (출력 : name : Kim)나이는 나오지 않음...
console.log(obj4.name);



