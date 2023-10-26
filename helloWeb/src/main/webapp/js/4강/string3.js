//string3.js

let today = new Date(); // date내장객체.
today.getFullYear(); // 2023
today.getMonth(); //9
today.getDate(); //26


//날짜 변경
today.setFullYear(2022);
today.setMonth(9);
today.setDate(1);
today.setHours(10);

console.log(today.toISOString()) // 17:34 - 9 = 08:34
console.log(today.toLocaleDateString()); //2022. 1. 1.
console.log(today.toString()); //Sat Jan 01 2022 17:36:36 GMT+0900 (한국 표준시)

function dateFormat(today) {
    // yyyy-MM-dd hh24:mm:ss
    return today.getFullYear() + "-" +("0" + (today.getMonth() + 1)).slice(-2) + "-" +("0" + today.getDate()).slice(-2)  + "  " + today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
}

console.log(dateFormat(today));