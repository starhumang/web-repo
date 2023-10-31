//dom2.js
//예방접종센터 위치정보 가져와서 테이블 만들기
// table > thead(tr>th*n) + tbody(tr+td*n) 건수

import table from './domtable.js'; //테이블 양식

let url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=iwO0GyTI6iNlEo5u6srMQWl6hO05L2%2Fg0d7y%2BpRVhEAgq9HIo6PXR%2F5C01FBQvdiUzMVKbpqhLjHU97D9Ei1BQ%3D%3D"
let titles = ['센터ID', '센터명', '의료원', '연락처', '위도', '경도'];


fetch(url)
    .then(resolve => resolve.json()) // 배열화 시킴 // 원래는 function(resolve) {return resolve.json()}
    .then(fetchCallback)//함수명이 매개값으로 들어감
    .catch(err => console.log('error => ', err));


// fetch 호출되는 함수. callback함수.
function fetchCallback(result) {
	
    let rawData = result.data; //원래데이터
	console.log('raw[0]', rawData[0]);
    
    // sidoAry에 sido 정보를 넣는 데 중복된 값이 안 들어가도록 넣기.
    let sidoAry = []; 
    rawData.forEach(val => { // 전체데이터(rawData)의 한 객체(val)의 sido
        if (sidoAry.indexOf(val.sido) == -1) { // 만약 val.sido의 값이 이 인덱스 내에서 없다면(indexOf는 찾는 값의 인덱스 번호를 가르키는데, 없으면 -1을 리턴함);
            sidoAry.push(val.sido);
        }
    })
    console.log(sidoAry);


    // 값마다 <option>칸 안에 넣어줌
    sidoAry.forEach(val => { 
        let option = document.createElement('option');
        option.innerHTML = val;
        document.getElementById("sidoList").append(option);
    })


    //select 태그에 change 이벤트발생
    let sidoSel = document.querySelector('#sidoList');
    sidoSel.addEventListener('change', changeCallback)//changeCallback함수를 열어버리면 안됨. 이벤트가 전달 된 후에 열려야 함

    function changeCallback (e) {
        console.log(e.target.value);
        let searchSido = e.target.value;
        //선택된 시도 값에 맞는 센터명만 출력
        genTable(rawData);
        let filterAry = rawData.filter(center => center.sido == searchSido);
        genTable(filterAry);
    }

    // genTable(rawData); 초기데이터로 인덱스 값이 10 이하인 것들 화면출력     
    let filterAry = rawData.filter((center, idx) => idx < 10);
    genTable(filterAry);
}


// 테이블 만드는 함수
function genTable(rawData = []) {
    //초기화.
    //document.getElementById("show")와 같음
    document.querySelector('#show').innerHTML = '';

    // 전체 rawData로 출력
    let thead = table.makeHead(titles); //헤더정보
    
    
//    let mapData = rawData.map(center => { //전체자료가 아닌 ['센터ID', '센터명', '의료원', '연락처'] 자료만 넣으려고 매핑중
//        let newCenter = {
//            id: center.id,
//            centerName: center.centerName.replace('코로나19 ', ''),
//            org: center.org,
//            phoneNumber: center.phoneNumber,
//            lat: center.lat,
//            lng: center.lng
//        }
//        console.log(newCenter);
//        return newCenter;
//    });
    // [문제] 위의 mapData를 reduce로 만들기
    	let mapData = rawData.reduce((acc, data, idx) =>{
			
			acc.push({id : data.id, centerName : data.centerName.replace('코로나19',''), org : data.org, phoneNumber : data.phoneNumber, lat: data.lat, lng: data.lng} )
			console.log(acc);
			return acc;
		},[] );
    
    
    
    let tbody = table.makeBody(mapData); //[{},{},{},{}...{}]
    let table1 = document.createElement('table');
    table1.append(thead, tbody);
    table1.setAttribute('border', '1')
    tbody.setAttribute('align', 'center');

    document.querySelector('#show').append(table1)
    
    
    //tr 클릭이벤트 등록.
    let targetTr = document.querySelectorAll('tbody tr'); //tbody에 있는 tr만 가져오겠습니다.
    targetTr.forEach(tr => {
		tr.addEventListener('click', function(e){//클릭할때 해당 메소드를 실행하겠다.
			console.log(tr);
			console.log(tr.children[4].innerHTML, tr.children[5].innerHTML)//innerHTML안 붙이면 앞에tr도 같이 붙어나옴
			let lat = tr.children[4].innerHTML;//위도
			let lng = tr.children[5].innerHTML;//경도
//			location.href = 'daumapi.html?x=' + lat + '&y='+ lng;
			window.open('daumapi.html?x=' + lat + '&y=' + lng);
		})		
	})  
}



