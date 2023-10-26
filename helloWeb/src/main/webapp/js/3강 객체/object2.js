//object2.js

const students = [
    {sno :'001', sname : "최해주", engScore : 80, mathScore : 85},
    {sno :'002', sname : "김채민", engScore : 82, mathScore : 83},
    {sno :'003', sname : "최다예", engScore : 84, mathScore : 88},
]

const member = new Member('홍길동', 22, 123.4); // 자바스크립트는 한 파일에 클래스 2개 생성이 안돼서 구색맞추기용으로 둠( member.이거 끌어서 안에있는 함수 쓰려고)

member.makeHtml(students);
member.showPage(document.getElementById('show')); //보여줄 위치
 //makeTr활용.