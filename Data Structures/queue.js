const que = [];

const insert = (object) => {
    que.push(object);
}

const remove = () => {
    if(!isEmpty()){
        return que.shift();
    }else {
        return "queue is empty";
    }
}

const front = () => {
    if(!isEmpty()){
        return que[0];
    }else {
        return "queue is empty";
    }
}

const isEmpty = () => {
    return que.length == 0;
}

const display = () => {
    console.log(que);
}