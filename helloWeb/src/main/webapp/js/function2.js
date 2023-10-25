//function2.js
//연결 확인용
console.log('function2.js');
//Memeber member = new Member()
const member1 = {
    name : "홍길동",
    age : 18,
    height : 178.9,
    showInfo : function(){
        return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);        
    }
}
member1.showInfo();

const member2 = {
    name : "김길동",
    age : 19,
    height : 180,
    showInfo : function(){
        return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);        
    }
}


const member3 = {
    name : "박길동",
    age : 20,
    height : 180.9,
    showInfo : function(){
        return (`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);        
    }
}

// DOM :Document Object Model 

// show.innerHTML = "<ul><li>Apple</li><li>Banana</li></ul>";

const members = [member1, member2, member3]

// member1.showInfo();
let show = document.getElementById('show'); // table >(thead > tr > th)+(tbody > tr > td)
let str = '';
str += '<table border = 1>';
str += '<tbody>';

members.forEach(function(item){ //얘로 안에 있는 배열의 개수만큼 반복하기 때문에 member1의 정보만 적어도 2와 3도 나온다..??
    str += makeTr(item);
})
str += '</tbody>';
str += '</table>';
console.log(str);
show.innerHTML = str;


function makeTr(member = {name, age, height, showInfo}){ // {}를 적어서 안에 들어오는 매개변수가 오브젝트 타입으로 오는구나를 알려줌 안에 내용은 굳이 안 적어도 되나 뭘 넣었는지 알아보기 쉽도록 넣었음
    let html = '';
    html += '<tr>';
    html += '<td>'+ member.name + '</td>';
    html += '<td>'+ member.age + '</td>';
    html += '<td>'+ member.height + '</td>';
    html += '<td>'+ member.showInfo() + '</td>';
    html += '</tr>';
    return html;
}
// show.innerHTML = (makeTr(member1));




// //코드 작성...
// function a(members ={}){
//     let str = '';
//     str += '<table border = 1>';
//     str += '<tbody>';
    
//     str += '<tr>';
//     str += '<td>' +member1.name; + '</td>';
//     str += '<td>' +member1.age; + '</td>';
//     str += '<td>' +member1.height; + '</td>';
//     str += '<td>' +member1.showInfo(); + '</td>';
//     str += '</tr>';
    
//     str += '<tr>';
//     str += '<td>' +member2.name; + '</td>';
//     str += '<td>' +member2.age; + '</td>';
//     str += '<td>' +member2.height; + '</td>';
//     str += '<td>' +member2.showInfo(); + '</td>';
//     str += '</tr>';
    
    
//     str += '<tr>';
//     str += '<td>' +member3.name; + '</td>';
//     str += '<td>' +member3.age; + '</td>';
//     str += '<td>' +member3.height; + '</td>';
//     str += '<td>' +member3.showInfo(); + '</td>';
//     str += '</tr>';
    
//     str += '</table>';
//     str += '</tbody>';
    
//     return str;
// }
// show.innerHTML = (a(members));


// // show.innerHTML = str;//table >tbody > (tr > td*4)*3


