// string2.js
const words = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequatur corporis vel labore id cum impedit? Aut sed cumque quisquam repudiandae quam pariatur ipsam obcaecati facilis ullam! Architecto, deleniti aperiam"
// 1. [문제] 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔출력.
    let lorem = words.split(' ');
    // console.log(lorem); 

    for(let i = 0; i < lorem.length; i++){
        let spell = lorem[i].split('');
        if(spell.length > 5){
            console.log(lorem[i]);
        }
    }




// 2. [문제] 주민번호 - 생년월일 = > 남자/여자(숫자를 읽어서 남자면 남자를 return /여자면 여자를 return)
//(ex. 950305 3678532, 9503053678532, 950305-3678532 ) 등 다양한 형태로 값이 들어올건데 이것도 고려해서 만들기

// let a = '000302-3000000';
// console.log(a.lastIndexOf('3'));


function checkGender(ssn){ // lastindexof

    if(ssn.slice(-7,-6) == '1' || ssn.slice(-7,-6) == '3'){
        return console.log(ssn.slice(-7,-6) + " : 남자");
    }else if(ssn.slice(-7,-6) == '2' || ssn.slice(-7,-6) == '4'){
        return console.log(ssn.slice(-7,-6) + " : 여자");
    }else {
        return console.log(ssn.slice(-7,-6) + " : 외국인");
    }
}
checkGender('000302-4928217');





//3. [문제] 파일명과 파일의 확장자. 파일명과 파일 확장자를 구분해서 뽑아내라
let file = "d:/temp/sample/book.xls"; // 위와 마찬가지로 /치고 다양한 형태로 나타낼 수 있는데 고려해서 뽑아내기

let cutFile = file.split('/'); //전체 파일 주소를 배열로 조각내기
console.log('cutFile :' + cutFile);

let cutArr = cutFile[cutFile.length -1].split('.'); // 배열의 마지막 값을 다시 배열로 조각내기 (length 길이는 1부터 시작하기 때문에 index랑 맞추려면 -1)
console.log('cutArr :' + cutArr);

let fileName = cutArr[0];
let fileExt = cutArr[1];
console.log('파일이름 : ' + fileName + '  파일 확장자 : ' + fileExt);  
