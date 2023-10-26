// module.js
import{ friend, friendInfo} from './friends.js';
import{ calendarObj } from '../todo/calendarObj.js';

const friend2 = { 
    name : "Hwang",
    phone : "010-3333-4444",
    address : "대구 중구 200",
    showInfo : function(){
        return `이름은 ${this.name}이고 연락처는 ${this.phone}입니다.`;
    }
}


console.log(friend.showInfo());
console.log(friendInfo(friend));


calendarObj.showCalendar();