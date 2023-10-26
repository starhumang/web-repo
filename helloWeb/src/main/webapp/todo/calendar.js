//calendar.js
//내 원본
//함수형식으로 만듦

//calendar만들기 (table / thead에 요일 , tbody에 날짜)
		//makeHead()
		//makeBody()
		//makeCalendar();얘를 호출하면 화면에 달력이 떠야함
		
		const day = ['일', '월', '화', '수', '목', '금','토'];

	//머리 
        function makeHead(){
            let head = '<thead>';
            head += '<tr>';
            day.forEach(function(value){
                // console.log(value);
                head += '<th style = "background-color: yellowgreen;">'+ value + '</th>';
            })
            head += '</tr>';
            head += '</thead>';
            return head;
        }
        
       //  ★★★교수님 reduce 쓰신거★★★  //days.reduce((acc, day)=>{return acc + '<th>' + day + '</th>'; }, '<thead><tr>')
       // '<thead><tr>'를 초기값(acc)로 넣어두고 ('<th>' + day + '</th>';) 이 부분을 7번 반복후 acc에 누적시켜 사용함. 그리고 리턴시켜 함수 호출 시 리턴값이 나오도록 함.
        

        //오늘날짜면 색이 빨간색이 되도록 하기
       const today = new Date();//오늘 날짜를 생성
       today.setDate(26);
       console.log('오늘날짜 : ' + today.getDate());//오늘날짜 가져옴
      


	//바디
        function makeBody(){
            let body = '<tbody>';
            
            let a = '';
            for(let i = 1; i <= 31; i++ ){
              
               if(i%7 == 1 || i%7 == 0){//주말
                    if(i == today.getDate()){//오늘의 날짜와 주말이 겹치면 주말의 배경색에 글자 굵기는 진하게
                        a +=  '<td style = "color : blue; background-color : aquamarine; font-weight: bolder;" align = "center" >' + i + '</td>';
                    }else{//주말 배경색 넣기 
                        a +=  '<td style = "color : blue; background-color : aquamarine;" align = "center" >' + i + '</td>';
                    }
                    
                }else if(i == today.getDate()){//오늘의 날짜            
                    a +=  '<td style = "color : red; background-color : yellow; font-weight: bolder;" align = "center"; >' + i + '</td>';

                }else{//일반날짜
                    a += '<td align = "center">' + i + '</td>';
                }

                if(i%7 == 0 || i == 31){
                    body += '<tr>';
                    body += a;
                    body += '</tr>';
                    a = '';
                }
            }            
            body += '</tbody>';
            return body;
        }


        function makeCalendar(){
           let str = '<table border = 1>'
           str += makeHead();
           str += makeBody();
           str += '</table>'
           document.getElementById("show").innerHTML = str;
        }

        makeCalendar();//실행
       

		
