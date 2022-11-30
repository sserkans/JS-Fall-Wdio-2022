class StrToNum {

    stringToNum(str){
        return $(str.substring(0, (str.length-1))*1);
    }
}
module.exports = StrToNum;