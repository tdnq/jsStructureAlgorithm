const LoopLinkList = require("../linkList/loopLinkList");
const loopLinkList = new LoopLinkList();
const assert = require("assert");
describe("loopLinkList",function(){
    it("getElementAt",function(){
        assert.equal(loopLinkList.insert(12,0).element,12);
        assert.equal(loopLinkList.insert(22,0).element,22);
        assert.equal(loopLinkList.insert(32,2).element,32);
        assert.equal(loopLinkList.insert(42,1).element,42);
        assert.equal(loopLinkList.getElementAt(0).element,22);
        assert.equal(loopLinkList.getElementAt(1).element,42);
        assert.equal(loopLinkList.getElementAt(2).element,12);
        assert.equal(loopLinkList.getElementAt(3).element,32);
    });
    it("removeAt test",function(){
        assert.equal(loopLinkList.removeAt(0).element,22);
        assert.equal(loopLinkList.removeAt(1).element,12);
        assert.equal(loopLinkList.getElementAt(0).element,42);
        assert.equal(loopLinkList.getElementAt(1).element,32);
    })
});
