const defaultToString=require("../utils/defaultToString.js");
const assert = require("assert");
describe("defaultToString",function(){
    it("test successfully",function(){
        assert.equal(defaultToString(null),"null");
        assert.equal(defaultToString(undefined),"undefined");
        assert.equal(defaultToString(0),"0");
        assert.equal(defaultToString(NaN),"NaN");
    })
});