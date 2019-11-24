module.exports=function toString(key){
    console.log(key);
    if(key===null||key===undefined){
        return `${key}`;
    }
    return key.toString();
}
 