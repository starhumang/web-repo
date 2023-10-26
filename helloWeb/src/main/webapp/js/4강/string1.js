//string1.js

let str1 = "Hello"; //기본데이터타입 / 출력시 string
let str2 = new String("Hello"); // 객체 /출력시 object

console.log(typeof str1, typeof str2);
console.log(str1 == str2); // 값만비교.
console.log(str1 === str2); //값과 타입비교.
console.log(str1.toUpperCase()); //대문자


// ★★★[ trim(), trimStart(), trimEnd() ]

// trim = 공백제거
        let result = "        공백 제거 합니다.        ".trim();
        console.log(result,"문자 갯수 :" + result.length);

// trimStart = 문자열 앞쪽의 공백 제거
// trimEnd = 문자열 뒷쪽의 공백 제거




// ★★★[  replace(), split(), slice(), substring(), substr()  ]

// replace = 한 문장 안에서 어떤 문자를 내가 정한 새로운 문자로 바꾸는 것.
        result = "Hello, world, Nice, World".replace(',', '.'); //맨앞의 딱 하나만 바꿈
        console.log(result);
        result = "Hello, world, Nice, World".replace(/,/g, '.');//전체를 바꿈
        console.log(result);


// split = 문자열을 구분자로 잘라 배열에 담는 것 // 아래의 예제는 ','을 기준으로 잘랐음
        result = 'HTML,CSS,JavaScript'.split(',');
        console.log(result);
        // 결과 : ['HTML', 'CSS', 'JavaScript']


// slice = 문자열의 시작과 끝 인덱스(0부터 시작) 사이에 있는 문자열을 반환(음수값을 넣어주면 뒤에서부터 잘라옴)
        result = "What a happy day".slice(7,12); // 7 ~ 11까지의 위치에 있는 인덱스 반환
        console.log(result);
// substring = slice와 동일함 하지만 음수로 입력 시 0으로 대체됨

// substr = slice, substring과 동일함. 하지만 두번째 입력칸에는 위치가 아닌 문자열 길이를 입력함
        result = "What a happy day".substr(7,5); // 7번째에서 5개
        console.log(result);






// ★★★[  toString(), indexOf(), lastIndexOf(), charAt(), includes()  ]

// toString = 숫자를 문자열로 바꾸는 메소드
        let num = 123; //숫자 
        let arr = [1,2,3] //배열
        let obj = {key : 'num', value : 123} //객체
        console.log(num.toString(), arr.toString(), obj.toString());
        //결과 : 123 1,2,3 [object Object]
        //객체만 반환값을 객체로 반환한다


// indexOf  = 찾는 문자열의 시작 위치의 인덱스를 알려줌. 만약 찾는값이 없을 경우 -1을 반환해준다. (앞에서부터 검색)
// lastIndexOf  = 위와 동일함(뒤에서부터 검색)
        result = "What a happy day".indexOf('happy', 3); // 3번째 인덱스부터 내가 원하는 값을 찾아라라는 뜻(뒤에 숫자 안 넣어주면 그냥 맨 처음부터 찾는다.)
        console.log(result);
        //결과 : 7


// charAt = 특정 위치의 문자열 1개를 반환하는 메소드, 만약 위치를 잘 못 지정하면 빈 문자열이 반환된다.
        result = "What a happy day".charAt(1);
        console.log(result);
        //결과 : h


// includes = 찾는 문자열이 있으면 true를, 없으면 false를 반환해준다.
        result = "What a happy day".includes('happy');        
        console.log(result);
        //결과 : true


//concat() = 문자열 두개를 합치는 메소드
        let string1 = 'st';
        let string2 = 'ar';
        console.log(string1 + string2);
        console.log(string1.concat(string2));
        console.log(''.concat(string1, string2));
        //결과 다 똑같음 : star

