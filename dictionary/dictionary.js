
function Dictionary() {
    this.items = {};
}

Dictionary.prototype = {
    constuctor: Dictionary,
    set: function (key, value) {
        this.items[this.defaultToString(key)] = value;
        return true;
    },
    get: function (key) {
        return this.items[this.defaultToString(key)];
    },
    has:function(key){
        return Boolean(this.items[this.defaultToString(key)]);
    },
    defaultToString: function (key) {
        if (key === null || key === undefined) {
            return `${key}`;
        }
        return key.toString();
    }
}
module.exports=Dictionary;