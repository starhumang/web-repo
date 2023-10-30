// ajax2. js
import { table } from './ajaxModule.js';
// on click 이벤트 등록. <button onclick ="addMember()"> 이렇게 직접적으로 버튼 넣는 창에 가서 넣어줘도 됨
// member = {name: "hong", age : 20} member.name
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = modMember;

function addMember(e){
    let mid = document.getElementById('mid').value;
    let pass = document.getElementById('pass').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;



    const xhtp = new XMLHttpRequest();
    xhtp.open('get','../../AddMemberServ.html?mid=' + mid + '&pass=' + pass + ' &name=' + name + '&phone=' + phone);
    xhtp.send();
    xhtp.onload = function() {
        console.log(xhtp.responseText);

        //[문제]
        // 사용자 입력값 : retCode = OK => {vo: mid, pass, name, phone}
        //tr 생성해서 td생성. 화면출력 id = "list"의 innerHTML 속성활용.
        // retCode = NG => alert('처리중 에러')
		let result = JSON.parse(xhtp.responseText);
//       	let info = '<tr><td>' + mid + '</td><td>' + pass + '</td><td>' + name + '</td><td>' + phone + '</td></tr>';      
        
        if(result.retCode == 'Ok'){
			document.getElementById('list').innerHTML += table.makeTr(result.vo);
		}else{
			alert('처리중 에러 (회원아이디 : ' + result.vo.mid +' )'); 
    	}
	}
}

//어렵다..
function modMember(e){
//	console.log('dfdf') 이벤트 정상 실행 확인용
	
    let mid = document.getElementById('mid').value;
    let pass = document.getElementById('pass').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    
    const xhtp = new XMLHttpRequest();
    xhtp.open('GET', '../../ModMemberServ.html?mid=' + mid + '&pass=' + pass + ' &name=' + name + '&phone=' + phone);
    xhtp.send();
    xhtp.onload = function(){
		let result = JSON.parse(xhtp.responseText);
		console.log(result);
		// 리턴코드 : Ok or NG/ vo : mid, pass, name, phone
		// 데이터 영역의 tr 
		document.querySelectorAll('#list tr').forEach( tr => {
			console.log(tr.children);
			if(tr.children[0].innerHTML == result.vo.mid){
			tr.children[1].innerHTML = result.vo.pass;
			tr.children[2].innerHTML = result.vo.name;
			tr.children[3].innerHTML = result.vo.phone;				
			}
		})
	}
    
    }