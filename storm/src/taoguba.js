var BASE_URL = {
    //js.taoguba.com.cn/weex/storm (传线上环境注意下一行换成https) 192.168.1.10:8080   192.168.1.15:8080  192.168.1.18:8080   192.168.1.19:8080
    IP: '192.168.1.15:8080',
    HTTP: 'http://',
    API_URL: 'http://api.taoguba.sp/',
    appzhiboWebSocet: "wss://ws.taoguba.sp/appzhibo",//app 直播websocket地址
    M_TAOGUBA: 'https://m.taoguba.com.cn/mViewTopic?',
    token: 'web_4132&3751ED8EE6534A18B979035E66C53123',
    COM_IMAGE_URL: 'https://image.taoguba.com.cn',
    SHUOSHUO: "https://shuo.taoguba.sp/mWeiboSingle?",//说说
    Article: "https://m.taoguba.sp/Article/",//帖子
    //加入发布需要清除dns缓存的所有js路径
    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/slider-pager.js
    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/stocknews/stocknews.js
    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/stocknews/stockdetail.js
    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/shuoshuo/shuoshuo.js
    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/dayanalysis/dayanalysis.js
    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/meeting/meeting-pager.js
    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/meeting/meetingtime.js
    //     https://js.taoguba.com.cn/weex/storm/storm/build/src/meeting/meetingdetail.js
};


var API = {
    apiGetForums: 'free/topic/apiGetForums',
    apiGetAnalysisNews: 'comp/live/analysisNews',//每日分析
    apiGetNews: 'comp/live/getNews',//新闻直播(getNews)
    apiGetComplainMessage: 'comp/live/getComplainMessage',//获得吐槽内容
    apiGetTucaoList: 'comp/live/getTucaoList',//吐槽列表
    apiGetTzrlData: 'comp/live/getTzrlData',//投资日历列表
    apiGetRedPoint: 'comp/live/getRedPoint',//新消息小红点(getRedPoint),
    apiGetIsOpenSpan: 'comp/live/getIsOpenSpan',//查询滚动条是否开启
    apiInsertOpenFlag: 'comp/live/insertOpenFlag',//关闭打开滚动条 post
    apiUsefulShuo: "comp/shuo/apiUsefulShuo",// 将说说赞
};

exports.getArticle = function () {
    var article;
    article = BASE_URL.Article;
    return article;
};

exports.getShuoShuo = function () {
    var shuo;
    shuo = BASE_URL.SHUOSHUO;
    return shuo;
};
exports.apiInsertOpenFlag = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiInsertOpenFlag + '?';
    } else {
        url = API.apiInsertOpenFlag;
    }
    console.log('apiInsertOpenFlag==' + url);
    return url;
};
exports.apiGetIsOpenSpan = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetIsOpenSpan + '?';
    } else {
        url = API.apiGetIsOpenSpan;
    }
    console.log('apiGetIsOpenSpan==' + url);
    return url;
};
exports.apiGetRedPoint = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetRedPoint + '?';
    } else {
        url = API.apiGetRedPoint;
    }
    console.log('apiGetRedPoint==' + url);
    return url;
};

exports.apiGetTzrlData = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetTzrlData + '?';
    } else {
        url = API.apiGetTzrlData;
    }
    console.log('apiGetTzrlData==' + url);
    return url;
};

exports.apiGetTucaoList = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetTucaoList + '?';
    } else {
        url = API.apiGetTucaoList;
    }
    console.log('apiGetTucaoList==' + url);
    return url;
};

exports.apiGetComplainMessage = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetComplainMessage + '?';
    } else {
        url = API.apiGetComplainMessage;
    }
    console.log('apiGetComplainMessage==' + url);
    return url;
};

exports.getDefaultUrl = function (name) {
    var url;
    url = getBaseUrl(name, true) + name + ".js";
    console.log('getDefaultUrl==' + url);
    return url;
};

exports.getDefaultPathUrl = function (path) {
    var url;
    url = getBaseUrl(path, true) + path;
    console.log('getPathUrl==' + url);
    return url;
};

exports.getPathUrl = function (path, isnative) {
    var url;
    url = getBaseUrl(path, isnative) + path;
    console.log('getPathUrl==' + url);
    return url;
};

//获取线上资源文件地址
exports.getImageUrl = function (path) {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.HTTP + BASE_URL.IP + '/storm' + path.substring(1, path.length);
    } else {
        url = BASE_URL.HTTP + BASE_URL.IP + '/storm' + path.substring(1, path.length);
        ;
    }
    return url;
};

//接口资源的图片地址
exports.getComImageUrl = function getComImageUrl(oimgurl) {
    ///img/2016/06/28/5idxarp0p8zi.jpg
    //./img/2016/06/28/5idxarp0p8zi.jpg
    //../img/2016/06/28/5idxarp0p8zi.jpg
    //2016/06/28/5idxarp0p8zi.jpg
    if (oimgurl == null || oimgurl == 'null') {
        oimgurl = '';
    }
    console.log(oimgurl);
    oimgurl = oimgurl.replace('../', './').replace('./', '');
    if (oimgurl.indexOf('http') >= 0 || oimgurl.indexOf('www') >= 0) {
    } else {
        oimgurl = BASE_URL.COM_IMAGE_URL + '/' + oimgurl;
    }
    return oimgurl;
},
    exports.getLogoImageUrl = function getLogoImageUrl(oimgurl) {
        //2016/06/28/5idxarp0p8zi.jpg
        if (oimgurl == null || oimgurl == 'null') {
            oimgurl = 'user_icon_60.png';
        }
        oimgurl = oimgurl.replace('../', './').replace('./', '');
        if (oimgurl.indexOf('http') >= 0 || oimgurl.indexOf('www') >= 0) {
        } else {
            oimgurl = BASE_URL.COM_IMAGE_URL + '/img/' + oimgurl;
        }
        return oimgurl;
    },


    exports.getToken = function () {
        var token;
        token = BASE_URL.token;
        console.log('getToken==' + token);
        return token;
    };


exports.apiGetForums = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetForums + '?';
    } else {
        url = API.apiGetForums;
    }
    console.log('apiGetForums==' + url);
    return url;
};

exports.apiGetAnalysisNews = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetAnalysisNews + '?';
    } else {
        url = API.apiGetAnalysisNews;
    }
    console.log('apiGetAnalysisNews==' + url);
    return url;
};

exports.apiGetNews = function () {
    var url;
    if (typeof window === 'object') {
        url = BASE_URL.API_URL + API.apiGetNews + '?';
    } else {
        url = API.apiGetNews;
    }
    console.log('apiGetNews==' + url);
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
        // var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        // if (matches && matches.length >= 2) {
        //     host = matches[1];
        // }

        if (typeof window === 'object') {
            if (host.endsWith(':8080/storm') || host.endsWith(':12580/storm')) {
                host = host.replace('/storm', '');
                // console.log('replace local test storm name');
            }
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        //网页 http://localhost:8080/index.html?page=./dist/weexbar/stocknews.js
        //android 原生 http://192.168.1.15:12580/dist/mainlist.js
        if (typeof window === 'object') {
            nativeBase = isnav ? BASE_URL.HTTP + host + '/index.html?page=./storm/build/src/' : BASE_URL.HTTP + host + '/storm/build/src/';
        } else {
            nativeBase = BASE_URL.HTTP + host + '/storm/build/src/';
            //放在官方仓库 'incubator-weex/examples/TGB_WEEX' 文件夹下编译的话，路径用这个
            // nativeBase = 'http://' + host.replace("8080","12580") + '/examples/build/TGB_WEEX/storm/src/';
        }
    }

    return nativeBase;
};
function getApiUrl(apiurl) {
    var url;
    //apiurl = new String(apiurl);
    if (typeof window === 'object') {
        //http://api.taoguba.cu/free/topic/getFocusList
        ///free/topic/apiGetForums?
        url = BASE_URL.API_URL + apiurl;
    } else {
        url = apiurl;
    }
    // console.log('getApiUrl=='+url);
    return url;
};

exports.getUrlParam = function getUrlParam(key) {
    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
    var match = location.search.match(reg)
    return match && match[1]
}
exports.getMTaoguba = function getMTaoguba(murl) {
    var url;
    ////http://m.taoguba.com.cn/mViewTopic?topicID=1293091&replyID=890&pageNo=1
    //https://m.taoguba.com.cn/Article/1657029/1
    // murl = new String(murl);
    url = BASE_URL.M_TAOGUBA + murl;
    // console.log('getMTaoguba=='+url);
    return url;
};
exports.getaZhiboWebSocet = function getaZhiboWebSocet() {
    return BASE_URL.appzhiboWebSocet;
};
exports.getApiUsefulShuo = function getApiUsefulShuo() {
    return API.apiUsefulShuo;
};
