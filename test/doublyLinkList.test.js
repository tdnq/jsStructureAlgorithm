const assert = require("assert");
const  {DoublyLinkList,Node} = require("../linkList/doublyLinkList");
const doublyLinkList = new DoublyLinkList();
doublyLinkList.insert(4,0);
doublyLinkList.insert(3,1);
doublyLinkList.insert(1,0);
doublyLinkList.insert(34,3);
doublyLinkList.insert(36,2);

describe("doublyLinkList",function(){
    it("getElementAt",function(){
        assert.equal(doublyLinkList.getNodeAt(0).element,1);
        assert.equal(doublyLinkList.getNodeAt(1).element,4);
        assert.equal(doublyLinkList.getNodeAt(2).element,36);
        assert.equal(doublyLinkList.getNodeAt(3).element,3);
        assert.equal(doublyLinkList.getNodeAt(4).element,34);
        assert.equal(doublyLinkList.getNodeAt(3).prev.element,36);
        assert.equal(doublyLinkList.getNodeAt(3).next.element,34);
        assert.equal(doublyLinkList.getNodeAt(0).prev,null);
        assert.equal(doublyLinkList.getNodeAt(0).next.element,4);
        assert.equal(doublyLinkList.getNodeAt(2).prev.element,4);
        assert.equal(doublyLinkList.getNodeAt(2).next.element,3);
    })
})


