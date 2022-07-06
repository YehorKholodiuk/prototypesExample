Number.prototype.plus = function (n){
    return this + n
}

Number.prototype.minus = function(n){
    return this - n
}
console.log((3).plus(4).minus(1))

String.prototype.translate = function(){
    return {
        'hello':'привет',
        'green':'зеленый'
    } [this]
}
console.log('hello'.translate())
console.log('green'.translate())
