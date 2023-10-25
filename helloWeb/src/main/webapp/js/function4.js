//function4.js
//[ 문제 ]입력한 값으로 표를 만들기


// //생성자 함수 만들 위치
// function Member(name, age, height) { // 정보가 들어갈 양식
//     console.log(this);
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.showInfo = function () {
//         return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
//     }
// }


document.getElementById('saveBtn').onclick = function (e) {//생성자 함수
    //id가 세이브 버튼인곳에서 클릭했을때 값을 리턴해주겠다.
    //이벤트 핸들러e : 매개값으로 이벤트를 받음
    console.log(e.target); //이벤트를 받을 대상
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
	if(!name || !age || !height){
		alert('값을 입력하세요');
		return; //함수종료됨
	}

    const mem = new Member(name, age, height); //생성자 입력 후 받아서 변하지 않는 변수로 모아서 mem을 만들었음.(생성자 함수에서 적어놓았기에 가능)
   
    
    // //makeTr 함수 만들기
    // function makeTr(member) { //tr, td를 만드는 기능
    //     let str = '';
    //     str += '<tr>';
    //     str += '<td>' + member.name + '</td>';
    //     str += '<td>' + member.age + '</td>';
    //     str += '<td>' + member.height + '</td>';
    //     str += '<td>' + member.showInfo() + '</td>';
    //     str += '</tr>';
    //     return str;
    // }

    let str = makeTr(mem); 
        

        //id가 list인 곳으로 값을 전달하겠다.
        document.getElementById('list').innerHTML += str;

        //입력 초기화
        document.getElementById('name').value = "";
        document.getElementById('age').value = "";
        document.getElementById('height').value = "";
        document.getElementById('name').focus();
}

