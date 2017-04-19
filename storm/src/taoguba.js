var BASE_URL = {
    IP:'192.168.1.15:8080',
    HTTP:'http://',
    API_URL:'http://api.taoguba.sp/',
    M_TAOGUBA:'https://m.taoguba.com.cn/mViewTopic?',
    token:'web_4132&61F1DC8D8AB747B3B348C7967FE5C1FF'
};




var API = {
    apiGetForums:'free/topic/apiGetForums?',
    apiGetAnalysisNews:'comp/live/analysisNews?',//每日分析
};


exports.getDefaultUrl = function (name) {
    var url;
    url = getBaseUrl(name,true)+name+".js";
    console.log('getDefaultUrl=='+url);
    return url;
};

exports.getDefaultPathUrl = function (path) {
    var url;
    url = getBaseUrl(path,true)+path;
    console.log('getPathUrl=='+url);
    return url;
};

exports.getPathUrl = function (path,isnative) {
    var url;
    url = getBaseUrl(path,isnative)+path;
    console.log('getPathUrl=='+url);
    return url;
};


exports.getToken = function () {
    var token;
    token = BASE_URL.token;
    console.log('getToken=='+token);
    return token;
};


exports.apiGetForums = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetForums;
    }else{
        url =  API.apiGetForums;
    }
    console.log('apiGetForums=='+url);
    return url;
};

exports.apiGetAnalysisNews = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetAnalysisNews;
    }else{
        url =  API.apiGetAnalysisNews;
    }
    console.log('apiGetAnalysisNews=='+url);
    return url;
};


function getBaseUrl(bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/build/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        //'localhost:8080';
        var host = BASE_URL.IP;
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? 'http://' + host + '/index.html?page=./storm/build/src/' : 'http://' + host +'/storm/build/src/';
        } else {
            nativeBase = 'http://' + host + '/storm/build/src/';
        }
    }

    return nativeBase;
};
function getApiUrl(apiurl){
    var url;
    //apiurl = new String(apiurl);
    if (typeof window === 'object') {
        //http://api.taoguba.cu/free/topic/getFocusList
        ///free/topic/apiGetForums?
        url =  BASE_URL.API_URL+apiurl;
    } else {
        url = apiurl;
    }
    // console.log('getApiUrl=='+url);
    return url;
};

exports.getUrlParam =  function getUrlParam (key) {
    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
    var match = location.search.match(reg)
    return match && match[1]
}
exports.getMTaoguba = function getMTaoguba(murl){
    var url;
    ////http://m.taoguba.com.cn/mViewTopic?topicID=1293091&replyID=890&pageNo=1
    //https://m.taoguba.com.cn/Article/1657029/1
    // murl = new String(murl);
    url =  BASE_URL.M_TAOGUBA+murl;
    // console.log('getMTaoguba=='+url);
    return url;
};