

//함수표현식1
		// function myFunc(student, score = 60){ // 자바스크립트는 매개변수에 딱히 타입이 없다
		// //	if(score == undefined){
		// //		socre = 0;
		// //	}

		// 	console.log(`${student}의 점수는 ${score}`);
		// //	return score; //undefined
		// }

		// let myFunc = myFunc('홍길동')//매개값
		// // console.log(myFunc('홍길동'))
		// // myFunc('홍길동'); 

		// //---------------------------------------------------- 위와 아래는 같다

		//함수표현식2
		var myFunc = function myFunc(student, score = 60) { // 자바스크립트는 매개변수에 딱히 타입이 없다
			//	if(score == undefined){
			//		socre = 0;
			//	}

			console.log(`${student}의 점수는 ${score}`);
			return score; //undefined
		}

		// let myFunc = myFunc('홍길동')//매개값
		console.log(myFunc('홍길동'))