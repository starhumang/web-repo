// object.js
console.log("object start...");


// //정보 
// let obj1 = {
//     name : 'Hong',
//     age : 20
// }


// //1.[주소값 참조]
// let obj2 = obj1; //실제 값을 가지고 오는게 아니라 obj1이 가지고 있는 주소값을 가지게 됨
// console.log(obj1); // 확인
// obj2.age = 22; // 2에서 나이값을 바꿈
// console.log(obj1); // 나이가 바뀜 : 22



// //2. [값을 복사]
// let obj3 = {...obj1} // obj1이 가지고 있는 값을 복사함
// obj3.age = 24;
// console.log(obj1); // 나이가 바뀌지 않음 : 22
// console.log(obj3); // 나이가 바뀌어 있음 : 24

let str = '';
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


     
    //3-0. [어제의 복습] (object.html / object.js / object2.js 사용)
    //학생의 정보 : 학생번호, 이름, 영어, 수학
    makeTr(student={sno, sname, engScore, mathScore}){ // 값이 들어올 폼(tr>td*4)
        let str = '<tr>';
        str += `<td> ${student.sno} </td>`;
        str += `<td> ${student.sname} </td>`;
        str += `<td> ${student.engScore} </td>`;
        str += `<td> ${student.mathScore} </td>`;
        str += '</tr>';
        return str;
    }
    

    makeHtml(studAry=[]){
        //html생성 => ex) this.makeTr(std) 클래스 안에 있는거기 때문에 이렇게 불러야함
        str += '<table border = 1>';
        str += '<tbody>';
        let obj = this;// 객체 안에서의 함수는 Member 클래스를 뜻함 // 만약 밑에서 화살표 함수를 쓰면 this를 굳이 안 써도 됨
        console.log('this 1 : ' , this);
        studAry.forEach(function (value){
            console.log('this 2 : ' , this); // 함수 안에서의 this는 undefind값
            str += obj.makeTr(value);// 이 함수가 static이 없는 이상 바로 클래스 이름 Member.makeTr로 부르지 못한다. 위에서 this를 어디 담아놓고 가져와야 함...  
        });    

        //교수님꺼 str+= studAry.reduce((acc,stud) => acc + this.makeTr(stud),''); 위와 동일함
        //혹은 str += studAry.reduce(function(acc, stud){return acc + obj.makeTr(stud)}, '' })

        str += '</tbody>';
        str += '</table>';
        // return str;
        this.html = str//교수님꺼 


    }

    showPage(dom){
        //innerHTML 속성에 html을 저장.
        dom.innerHTML = this.html; //교수님꺼 

        // result = this.makeHtml(students); // 여기에 object2.js 에 있는 내용students가 없기 때문에 못 씀..아마도
        // dom.innerHTML = result;
        

    }
    
} //end class



// // 밖에서 클래스(객체) 선언하고 안에 정보 넣음
// const mem1 = new Member('홍길동', 20, 156.7); 
// console.log(mem1.showInfo()); 

// // 생성자 안에 정보 안 넣고, 객체선언 한 함수에서 바로 정보(몸무게) 넣음
// mem1.setWeight(62.5);
// console.log('홍길동의 몸무게는 ' + mem1.getWeigh() + '입니다.')