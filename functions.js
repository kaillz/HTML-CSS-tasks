function isPalindrome(TextSentence){
    var ValidText = TextSentence.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    start = 0;
    end = ValidText.length - 1;
    while(start < end)
    {
        if (ValidText[start] != ValidText[end])
            return false;
        start++;
        end--;
    }
    return true;
}

function isDigit(digitString)
{
    try{
        var validDigit = digitString.match(/\d/g).join('').replace(/[,.]/g, '');
        return validDigit;
    }
    catch{
        return ("NaN");
    }
}

function checkStringLength(textString, n){
    if(textString.length<=n)
        return true;
    return false;
}

function stringToLength(textString,n,addString){
    var textLength = textString.length;
    if(textLength >= n)
        return textString;
    addN = n - textLength;
    addStr = addString.substring(0,addN);
    if(addN<n){
        while(addStr.length<n){
            addStr += addStr;
        }
        addStr = addStr.substring(0,addN);
        return (addStr+textString)
    }
    return (addStr+textString);
}