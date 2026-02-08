function mulExponents(x1, x2,n1,n2){
    return  (Math.pow(x1,n1) * Math.pow(x2,n2));
};

function addLogs(x1, x2){
    if(x1 < 0|| x2 < 0) return;
    return Math.log(x1) + Math.log(x2) ;
};

export {mulExponents , addLogs};