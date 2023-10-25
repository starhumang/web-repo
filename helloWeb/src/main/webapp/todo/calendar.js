//calendar.js

//calendar만들기 (table / thead에 요일 , tbody에 날짜)
		//makeHead()
		//makeBody()
		//makeCalendar();얘를 호출하면 화면에 달력이 떠야함
		
		const day = ['일', '월', '화', '수', '목', '금','토','일'];

        makeBody(){// 날짜 만드는 함수
            table += '<tr>';
            count = 0;
            for(let i = 1; i <= 31; i++){
                table += '<td>' + i + '</td>'
                count += 1
            }
            table += '</tr>';
            return if( count%7 ==0 ){
                return table
            } table;
		}

		makeHead(day = []){//요일 만드는 것
			let table = '<table border = "1" >'; //테이블 열기
				table += '<thead> <tr>';

            let dayArr = []; //요일배열 
            for(let i = 0; i <= day.length; i++ ){
                dayArr += day[i];
            }
            console.log(dayArr);// 요일 잘 나오는지 확인

            day.forEach(function(value){ // 7번 th 반복해서 넣어줌
                table += '<th>'+ dayArr +'</th>';
            })

            table += makeBody(); //날짜만드는 함수 넣음

            table += '</tr> </thead>';
            table = '</table>'; //테이블 닫기
			return table;
		}

        table

        makeCalendar(){
            makeHead()
        }