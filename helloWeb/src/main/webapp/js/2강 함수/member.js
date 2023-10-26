
//생성자 함수 만들 위치
function Member(name, age, height) { // 정보가 들어갈 양식
    console.log(this);
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function () {
        return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
    }
}

//makeTr 함수 만들기
function makeTr(a) { //tr, td를 만드는 기능
    let str = '';
    str += '<tr>';
    str += '<td>' + a.name + '</td>';
    str += '<td>' + a.age + '</td>';
    str += '<td>' + a.height + '</td>';
    str += '<td>' + a.showInfo() + '</td>';
    str += '<td><button onclick = "this.parentElement.parentElement.remove()">삭제</button></td>'; // td삭제 및 td의 상위요소 tr삭제 
    str += '</tr>';
    return str;
}

