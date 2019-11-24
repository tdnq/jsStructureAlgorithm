const Dictionary=require("../dictionary/dictionary.js");
const dictionary=new Dictionary();
const assert=require("assert");
describe("dictionary",function(){
    it("",function(){
        assert.equal(dictionary.set(0,null),true);
        assert.equal(dictionary.set(null,"hfa"),true);
    })
})