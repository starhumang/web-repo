/**
 *  domtable.js
 */

export default{
    makeHead: function(titles=['아이디', '센터명']){
        //thead>tr>th*n
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        titles.forEach(title => { //th가 몇개 들어올 지 몰라서 임의의 값으로 만듦
            let th = document.createElement('th');
            th.innerHTML = title;//내용값을 넣어줌
            tr.append(th);// appendChild랑 비슷한데 append 뒤에는 여러개 작성 가능
        })
        thead.append(tr);
        return thead;
    },


    makeBody: function(dataAry=[]){
        let tbody = document.createElement('tbody');
        dataAry.forEach(item => {
            tbody.append(this.makeTr(item));
        })
        return tbody;
    },


    makeTr: function(center = {}){ //배열아니고 한 객체가 들어감
        let tr = document.createElement('tr');
        for(let prop in center){
            let td = document.createElement('td');
            td.innerHTML = center[prop];
            tr.append(td);
        }
        return tr;
    }
}