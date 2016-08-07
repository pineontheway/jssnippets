
function testing() {
    this.a =[];
}

testing.prototype.add = function(value) {
    this.a.push(value);
    console.log(this.a);
}


module.exports = {
    create : function() {
        return new testing();
    }
};
