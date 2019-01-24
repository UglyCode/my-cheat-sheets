function telephoneCheck(str) {

    let strClear = str.replace(/[^0-9() \-]/g, '');
    if (strClear.length !== str.length || str[0]==='-') return false;
    let br = strClear.indexOf(')') - strClear.indexOf('(') ;
    if (!(strClear.indexOf('(') >= 0 && br === 4 || br===0)) return false;

    strClear = strClear.replace(/[^0-9]/g,'');

    switch (strClear.length) {
        case 11:
            if (strClear[0] !== '1') return false;
        case 10:
            return true;
        default :
            return false;
    }
}
