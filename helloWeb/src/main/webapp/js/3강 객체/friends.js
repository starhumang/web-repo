// friends.js

const friend = { //외부로는 사용하지 않음
    name : "Hong",
    phone : "010-1111-2222",
    address : "대구 중구 100",
    showInfo : function(){
        return `이름은 ${this.name}이고 연락처는 ${this.phone}입니다.`;
    }
}

function friendInfo(friend){
    return `${friend.name}, ${friend.phone}, ${friend.address}`;
}

export{ friend, friendInfo } //객체타입으로 export해야함