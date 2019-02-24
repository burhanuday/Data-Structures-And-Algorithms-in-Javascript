const stack = [];

const push = (object) => {
    stack.push(object);
}

const pop = () => {
    if(!isEmpty()){
        return stack.pop();
    }else{
        return "stack underflow";
    }
}

const peek = () => {
    if(!isEmpty()){
        return stack[stack.length - 1];
    }else{
        return "stack underflow";
    }
}

const display = () => {
    if(!isEmpty()){
        return stack;
    }else{
        return "stack underflow";
    }
}

const isEmpty = () => {
    if(stack.length == 0){
        return true;
    }else {
        return false;
    }
}