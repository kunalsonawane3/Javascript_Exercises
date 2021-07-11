function wordCount(str){
    console.log(str);
    let str1 = str.toLowerCase().replace(/[~`!@#\[\];:\'\".,\/\\\?-_]/g, '');
    console.log(str1);
    var lst = str1.split(' ');
    var uniLst = lst.filter((curr,i,arr) => {return (i == arr.indexOf(curr))});
    for(let _ustr of uniLst){
        var count = 0;
        for(let _str of lst){
            if (_str.toLowerCase() == _ustr){count++;}
        }
        console.log("Occurence of ", _ustr, ":", count, "times");
    }
    //console.log(str1);
}

wordCount("That that exists exists in that that that that exists exists in.");