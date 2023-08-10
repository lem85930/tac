//./jshttp(改).js
{
//"spider":"./top98_1.jar",
"sites" : [
{"key":"ikanbotsq","name":"🈵爱看机器人sq","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ikanbotsq.js"},
{"key":"drpy","name":"豆瓣🍭🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/豆瓣.js"},
{"key":"drpy2","name":"豆瓣2🍭🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/drpy.js"},
{"key":"drpy__豆瓣","name":"豆瓣🏛[DRPY]🔎","type":3,"api":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/libs/drpy2.min.js","ext":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/js/drpy.js"},
{"key":"独播库","name":"🛩独播库🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/独播库[飞].js","playerType":"1"},
{"key":"泥巴","name":"🏆泥巴🔎","type":3,"api":"csp_Nbys","searchable":1,"filterable":1,"jar":"./top98_1.jar"},
{"key":"ikanbot","name":"量,优<,快,暴,ik,飞,卧💡","type":3,"api":"./js/lf_ikanbot3_1_min.js"},
{"key":"映迷影院","name":"🇹🇼映迷(繁體)🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/映迷影院.js"}
],
"lives": [
    {
      "name": "直播源",
      "type": 0,
      "url": "./直播源(1).txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },    
    {
      "name": "FongMi",
      "type": 1,
      "url": "https://raw.githubusercontent.com/FongMi/CatVodSpider/main/json/live.json",
      "epg": "http://epg.51zmt.top:8000/api/diyp/?ch={epg}&date={date}",
      "logo": "http://epg.51zmt.top:8000/{logo}"
    },
    {
      "name": "台灣",
      "type": 0,
      "url": "./live.txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },
        {
      "name": "直播1",
      "type": 0,
      "url": "http://home.jundie.top:81/Cat/tv/live.txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },
    {
      "name": "直播2",
      "type": 0,
      "url": "https://dashu0754.com/api/v3/file/get/111/%E6%82%9F%E7%A9%BA.txt?sign=Vh_6WlBWzq1GeV88r1QjRQE9DCNcz5rBZpmSMo_q_y8%3D%3A0",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    }
  ],
//"doh":[{"name":"Google","url":"https://dns.google/dns-query","ips":["8.8.4.4","8.8.8.8"]},{"name":"Cloudflare","url":"https://cloudflare-dns.com/dns-query","ips":["1.1.1.1","1.0.0.1","2606:4700:4700::1111","2606:4700:4700::1001"]},{"name":"AdGuard","url":"https://dns.adguard.com/dns-query","ips":["94.140.14.140","94.140.14.141"]},{"name":"DNSWatch","url":"https://resolver2.dns.watch/dns-query","ips":["84.200.69.80","84.200.70.40"]},{"name":"Quad9","url":"https://dns.quad9.net/dns-quer","ips":["9.9.9.9","149.112.112.112"]}],
"rules":[{"name":"星星","hosts":["aws.ulivetv.net"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:8,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},{"name":"量子廣告","hosts":["vip.lz","hd.lz"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.433333,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},{"name":"非凡廣告","hosts":["vip.ffzy","hd.ffzy"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},{"name":"火山嗅探","hosts":["huoshan.com"],"regex":["item_id="]},{"name":"抖音嗅探","hosts":["douyin.com"],"regex":["is_play_url="]}],
"parses":[
//{"name":"超解","type":4,"url":"12"},
//{"name":"聚合1","type":3,"url":"Demo"},
//{"name":"聚合0","type":3,"url":"Web"},
{"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
{"name":"杰森","type":0,"url":"https://jx.jsonplayer.com/player/?url="}, 
{"name":"战狼","type":0,"url":"https://jx.zhanlangbu.com/?url="},
{"name":"ok","type":0,"url":"https://okjx.cc/?url="},
{"name":"bozrc","type":0,"url":"https://jx.bozrc.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","leshi","LS","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":""}}},
{"name":"不累","type":0,"url":"https://blbfq.f3322.net/player/analysis.php?v=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"cod","type":0,"url":"https://ksksl.codjx.com/?url="},
{"name":"byg解析","type":0,"url":"https://byg.ziqj5.shop/?url="},
{"name":"xmflv","type":0,"url":"https://jx.xmflv.com/?url="},
{"name":"365","type":0,"url":"https://chaxun.truechat365.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"26db","type":0,"url":"http://vip.26db.cn/g/?url="},
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url="},
{"name":"FreeOK","type":0,"url":"https://play.86516.tk/OKPlayer/?url="},
{"name":"free","type":0,"url":"https://h5.freejson.xyz/player/?url="},
{"name":"優酷","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url="},
{"name":"騰訊","type":1,"url":"http://xn--wnup5g.xn--z7x900a.love:63/Art1/analysis.php?v=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"]}},
{"name":"6号线","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"7号线","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"9号线","url":"https://www.8090g.cn/?url="},
{"name":"10号线","type":1,"url":"http://json.youguo520.top/fufeng/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"11号线","type":1,"url":"https://jx.4kdv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"12号线","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"13号线","type":0,"url":"https://www.ckmov.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"14号线","type":1,"url":"https://api.jiexi.la/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"15号线","type":0,"url":"https://www.nxflv.com/?url="},
{"name":"17号线","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"18号线","type":0,"url":"https://jx.ccabc.cc/byg/?url="},
{"name":"19号线","type":0,"url":"https://jx.zhanlangbu.com/?url=","ext":{"header":{"User-Agent":"okhttp/4.1.0"},"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"20号线","type":1,"url":"http://lanlan.ckflv.cn/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"22号线","type":0,"url":"http://jx.ivito.cn/?url="},
{"name":"23号线","type":0,"url":"https://dm.xbqgx.com/?url="},
{"name":"24号线","type":0,"url":"https://vip.bljiex.com/?v="},
{"name":"A01","type":0,"url":"http://api.apii.top/?v="},
{"name":"A02","type":0,"url":"https://jx.aidouer.net/?url="},
{"name":"A03","type":0,"url":"http://vip.xxphp.cn/player.html?url="},
{"name":"A04","type":0,"url":"https://55o.co/?url="},
{"name":"A05","type":0,"url":"http://www.wpsseo.cn/line.php?n=7&url="},
{"name":"A06","type":0,"url":"https://player.nineqing.net/jx/?url="},
{"name":"A07","type":0,"url":"https://player.nineqing.com/?url="},
{"name":"A08","type":0,"url":"https://jx.videojx.cn:5656/?url="},
{"name":"A09","type":0,"url":"https://www.1717yun.com/1717yun/?url="},
{"name":"A10","type":0,"url":"https://freejx.rx88.top:1234/?url="},
{"name":"A11","type":0,"url":"https://player.maqq.cn/?url="},
{"name":"A12","type":0,"url":"https://jx.quankan.app/?url="},
{"name":"A13","type":0,"url":"https://lziplayer.com/?url="},
{"name":"A14","type":0,"url":"https://www.pangujiexi.com/pangu/?url="},
{"name":"25号线","type":0,"url":"http://pandown.pro/app/ysmjx.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}}],

"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg"

}