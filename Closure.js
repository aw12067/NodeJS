function closure(a,b){
    var x = 1;
    function add(){
        console.log(a+b+x);
    }
    x = 5;
    return add();
}
closure(2,3);