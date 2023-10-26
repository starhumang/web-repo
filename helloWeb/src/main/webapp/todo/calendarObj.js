//calendarObj.js(현아)
//객체형식으로 만듦

const today = new Date();
	console.log('오늘 날짜 : ', today.getDate());
	// today.setDate(22);
	
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
					

					if(i % 7 == 1 || i == 1){//일요일
						styles = '"background: red; color : yellow;"'
                        bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>';
                        styles = '';
                        //}
						// else if( (i % 7 == 1)== today.getDate()){
                        //     styles = '"background: red; color : yellow;'
                        //     styles += 'font-weight = bolder;"';
						//     bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>'

                        
                        }else if(i == today.getDate()){ //오늘날짜  
                            styles = '';                  
                            styles = 'font-weight: bolder; background: yellow';
                            bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>';
                            styles = '';  
                            }else {//일반 날짜 
                                styles = '';  
                                bd += '<td style = ' + styles + 'align = "right;">' + i + '</td>';
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
