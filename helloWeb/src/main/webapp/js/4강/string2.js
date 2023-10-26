// string2.js
const words = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequatur corporis vel labore id cum impedit? Aut sed cumque quisquam repudiandae quam pariatur ipsam obcaecati facilis ullam! Architecto, deleniti aperiam"
// 1. [문제] 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔출력.
    let lorem = words.split(' ');
    // console.log(lorem); 

    // for(let i = 0; i <= lorem.length; i++){
    //     let spell = lorem[i].split('');
    //     if(spell.length > 5){
    //         console.log(lorem[i]);
    //     }
    // }




// 2. [문제] 주민번호 - 생년월일 = > 남자/여자(숫자를 읽어서 남자면 남자를 return /여자면 여자를 return)
//950305 3678532, 9503053678532, 950305-3678532 등 다양한 형태로 값이 들어올건데 이것도 고려해서 만들기




function checkGender(ssn){ // lastindexof

    let me = ssn;
    let m2= me.toString().split('-');
    let m3= me.toString().split(' ');
    console.log(m2[1].charAt(0));
    console.log(m3[1].charAt(0));


    if((m2[1].charAt(0)) == '1' || (m2[1].charAt(0)) == '3' || m3[1].charAt(0) == '1' || m3[1].charAt(0) == '3'){
        return console.log("남자");

    }else if((m2[1].charAt(0)) == '2' || (m2[1].charAt(0)) == '4' || m3[1].charAt(0) == '2' || m3[1].charAt(0) == '4'){
        return console.log("여자");
    }else{
        console.log("문자 위치 지정 실패...")
    }
} 
checkGender('000302-3000000');

//3. [문제] 파일명과 파일의 확장자. 파일명과 파일 확장자를 구분해서 뽑아내라
let file = "d:/temp/sample/book.xls"; // 위와 마찬가지로 /치고 다양한 형태로 나타낼 수 있는데 고려해서 뽑아내기
let fileName, fileExt;