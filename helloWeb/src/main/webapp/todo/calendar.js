//calendar.js

//calendar만들기 (table / thead에 요일 , tbody에 날짜)
		//makeHead()
		//makeBody()
		//makeCalendar();얘를 호출하면 화면에 달력이 떠야함
		
		const day = ['일', '월', '화', '수', '목', '금','토'];

        function makeHead(){
            let head = '<thead>';
            head += '<tr>';
            day.forEach(function(value){
                // console.log(value);
                head += '<th>'+ value + '</th>';
            })
            head += '</tr>';
            head += '</thead>';
            return head;
        }


        function makeBody(){
            let body = '<tbody>';
            
            let a = '';
            for(let i = 1; i <= 31; i++ ){
                a += '<td>' + i + '</td>';
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
       

