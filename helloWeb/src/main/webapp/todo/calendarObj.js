//calendarObj.js(현아)
//객체형식으로 만듦

const today = new Date();
today.setDate(28);
	console.log('오늘 날짜 : ', today.getDate());
	
	
		const cal = { //1 객체로 함수가 3개

			//요일
			makeHead() {
				let day = ['일', '월', '화', '수', '목', '금', '토'];
				let hd = '';
				hd += '<thead>';
				hd += '<tr>';

				day.forEach(function (day) {
					hd += '<th style = "background:pink">' + day + '</th>'
				});
				hd += '</tr>';
				hd += '</thead>';
				
				return hd;

				
			},

			//일
			makeBody() {
				let styles = '';
				let bd = '';
				bd += '<tbody><tr>'

				for (let i = 1; i <= 31; i++) {
					//오늘 날짜는 백그라운드 : 노란색, 폰트 : bold;					

					if(i % 7 == 1 || i == 1){
                        if(i == today.getDate()){ // 일요일 + 오늘
                                styles = '"background-color : pink; font-weight = bolder;"'; // (배경 핑크, 글 진하게)
                                bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>' 
                                styles = ''; 
                        }else{//일요일
						styles = '"background-color : red; color : yellow;"' // 그냥 일요일이면(배경 빨강, 글자 노랑)
                        bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>';  
                        styles = '';                       
                        }

                    }else if(i % 7 == 0){
                        if(i == today.getDate()){ // 토요일 + 오늘
                                styles = '"background-color : pink; font-weight = bolder;"'; // (배경 핑크, 글 진하게)
                                bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>' 
                                styles = ''; 
                        }else{//토요일
                        styles = '"background-color : blue; color : yellow;"' // 그냥 일요일이면(배경 빨강, 글자 노랑)
                        bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>';  
                        styles = '';                       
                        }

                    }else if(i == today.getDate()){ //오늘                
                        styles = '"background: yellow; font-weight: bolder;"';// (배경 노랑, 글 진하게)
                        bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>';
                        styles = '';  

                    }else {//일반 날짜  
                        bd += '<td align = "right;">' + i + '</td>';
                    }
                        
                    
                        
                                           

                    

                    

                	if (i % 7 == 0) { // 줄바꿈
                    	bd += '</tr><tr>'
                    }       			
				}//end for
				

				bd += '</tr></tbody>'				
				return bd;

				},//end makebody


			//넣어주고
			makeCalendar() {
				let tb = '<table border="1">'
				tb += [1].reduce((acc, day) => acc + this.makeHead() + this.makeBody(), '')

				tb += '</table>'
				this.table = tb;
			},

			//화면에 보이게! 
			showCal(dom) {
				dom.innerHTML = this.table;
			}

		}

		cal.makeCalendar();
		cal.showCal(document.getElementById('show'));
