function a() {
    console.log('a');
    b()
    console.log('aa');
}
function b() {
    console.log('b');
    c()
    console.log('bb');
}
function c() {
    console.log('d');
    
    console.log('dd');
}
a()
