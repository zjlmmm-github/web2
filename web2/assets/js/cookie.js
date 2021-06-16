function GetRequest() {
    var url = document.cookie;
    var theRequest = {};
    var strs = url.split(";");
    for (var i = 0; i < strs.length; i++) {
        strs[i] = strs[i].replace(" ", "")
        theRequest[strs[i].split("=")[0].substring(0, 5)] = strs[i].split("=")[1];
    }

    return theRequest;
}

var cookie = GetRequest()
var name = cookie.name
var useId = cookie.useId
var ut=cookie.ut
