var rule = {
    title:'爱看机器人',
    host:'https://www.ikanbot.com',
    url:'/hot/index-fyclass-fyfilter-p-fypage.html[/hot/index-fyclass-fyfilter.html]',
    //https://www.ikanbot.com/search?q=%E6%96%97%E7%BD%97%E5%A4%A7&p=2
    // searchUrl:'/search?q=**&p=fypage',
	searchUrl:'/search?q=**&p=fypage[/search?q=**]',
    searchable:2,
    quickSearch:0,
    filterable:1,
    filter_url:'{{fl.tag}}',
    // 图片来源:'@Referer=https://api.douban.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36',
	图片来源:'@Referer=https://www.ikanbot.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36',
    filter:{
        "movie":[{"key":"tag","name":"标签","value":[{"n":"热门","v":"热门"},{"n":"最新","v":"最新"},{"n":"经典","v":"经典"},{"n":"豆瓣高分","v":"豆瓣高分"},{"n":"冷门佳片","v":"冷门佳片"},{"n":"华语","v":"华语"},{"n":"欧美","v":"欧美"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"动作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"悬疑","v":"悬疑"},{"n":"恐怖","v":"恐怖"},{"n":"治愈","v":"治愈"},{"n":"豆瓣top250","v":"豆瓣top250"}]}]
        ,"tv":[{"key":"tag","name":"标签","value":[{"n":"热门","v":"热门"},{"n":"美剧","v":"美剧"},{"n":"英剧","v":"英剧"},{"n":"韩剧","v":"韩剧"},{"n":"日剧","v":"日剧"},{"n":"国产剧","v":"国产剧"},{"n":"港剧","v":"港剧"},{"n":"日本动画","v":"日本动画"},{"n":"综艺","v":"综艺"},{"n":"纪录片","v":"纪录片"}]}]
    },
    filter_def:{
		movie:{tag:'热门'},
		tv:{tag:'国产剧'},
	},
    filter获取方法:`
    let value = [];
    $('ul').eq(2).find('li').each(function() {
      // console.log($(this).text());
      let n = $(this).text().trim();
      value.push({
      'n': n, 'v': n
      });
    });
    // 电影执行:
    let data = {'movie': [{'key': 'tag', 'name': '标签', 'value': value}]};
    console.log(JSON.stringify(data));
    
    //剧集执行:
    let data = {'tv': [{'key': 'tag', 'name': '标签', 'value': value}]};
    console.log(JSON.stringify(data));
    `,
    headers:{'User-Agent':'PC_UA',},
    class_name:'电影&剧集',
    class_url:'movie&tv',
	play_parse:true,
	double:true,
	//tab_remove:['wjm3u8','ikm3u8','sdm3u8','M3U8','jinyingm3u8','fsm3u8','ukm3u8'],
//移除某个线路及相关的选集
	tab_order:['kuaikan','1080zyk','tpm3u8','lzm3u8','bfzym3u8','ikm3u8','fsm3u8','kcm3u8','bjm3u8','ffm3u8','fem3u8','kbm3u8','wolong','xlm3u8','yhm3u8','tkm3u8','zuidam3u8','jsm3u8','ukm3u8','dbm3u8','hnm3u8','jyzm3u8','lem3u8','foxm3u8','gsm3u8','kdm3u8','sdm3u8','wjm3u8','ptyunm','jinyingm3u8','68zy_m3u8'],
//线路顺序,按里面的顺序优先，没写的依次排后面
	tab_rename:{'kuaikan':'🌟快看','1080zyk':'🌟優質','tpm3u8':'🌟淘片','lzm3u8':'🌟量子','bfzym3u8':'🌟暴风','ikm3u8':'🌟ikun','fsm3u8':'🌟飞速','kcm3u8':'🌟快车','bjm3u8':'🌟八戒','ffm3u8':'🌟非凡','fem3u8':'🌟飛速','kbm3u8':'🌟快播','wolong':'🌟卧龙','xlm3u8':'🌟新浪','yhm3u8':'🌟樱花','tkm3u8':'🌕天空','zuidam3u8':'🌕最大','jsm3u8':'🌕极数','ukm3u8':'🌕U酷','dbm3u8':'🌕百度','hnm3u8':'🌕红牛','jyzm3u8':'🌕金鷹','lem3u8':'🌕鱼乐','foxm3u8':'😰FOX','gsm3u8':'😰光速','kdm3u8':'😰酷点','sdm3u8':'😰闪电','wjm3u8':'😰无尽','ptyunm':'😰阳光','jinyingm3u8':'😰金鹰','68zy_m3u8':'😰68'},
//线路名替换如:lzm3u8替换为量子资源
    推荐:'.v-list;div.item;*;*;*;*', //这里可以为空，这样点播不会有内容
    // 一级:'.v-list&&div.item;p&&Text;img&&src;;a&&href', //一级的内容是推荐或者点播时候的一级匹配
	一级:'.v-list&&div.item;p&&Text;img&&data-src;;a&&href', //一级的内容是推荐或者点播时候的一级匹配
    // 二级:二级,
    二级:'js:eval(unescape(base64Decode("anM6CnBkZmggPSBqc3AucGRmaDsKZnVuY3Rpb24gZ2V0VG9rZW4oaHRtbDEpIHsKICAgIGxldCBjdXJyZW50SWQgPSBwZGZoKGh0bWwxLCAnI2N1cnJlbnRfaWQmJnZhbHVlJyk7CiAgICBsZXQgZVRva2VuID0gcGRmaChodG1sMSwgJyNlX3Rva2VuJiZ2YWx1ZScpOwogICAgaWYgKCFjdXJyZW50SWQgfHwgIWVUb2tlbikgcmV0dXJuICcnOwogICAgbGV0IGlkTGVuZ3RoID0gY3VycmVudElkLmxlbmd0aDsKICAgIGxldCBzdWJJZCA9IGN1cnJlbnRJZC5zdWJzdHJpbmcoaWRMZW5ndGggLSA0LCBpZExlbmd0aCk7CiAgICBsZXQga2V5cyA9IFtdOwogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJJZC5sZW5ndGg7IGkrKykgewogICAgICAgIGxldCBjdXJJbnQgPSBwYXJzZUludChzdWJJZFtpXSk7CiAgICAgICAgbGV0IHNwbGl0UG9zID0gY3VySW50ICUgMyArIDE7CiAgICAgICAga2V5c1tpXSA9IGVUb2tlbi5zdWJzdHJpbmcoc3BsaXRQb3MsIHNwbGl0UG9zICsgOCk7CiAgICAgICAgZVRva2VuID0gZVRva2VuLnN1YnN0cmluZyhzcGxpdFBvcyArIDgsIGVUb2tlbi5sZW5ndGgpOwogICAgfQogICAgcmV0dXJuIGtleXMuam9pbignJyk7Cn0KdHJ5IHsKICAgIFZPRD17fTsKCWxldCBodG1sMSA9IHJlcXVlc3QoaW5wdXQpOwoJVk9ELnZvZF9pZCA9IGlucHV0OwoJVk9ELnZvZF9uYW1lID0gcGRmaChodG1sMSwgJ2gyJiZUZXh0Jyk7CglWT0Qudm9kX3BpYyA9IHBkZmgoaHRtbDEsICcuaXRlbS1yb290JiZpbWcmJmRhdGEtc3JjJyk7CglWT0Qudm9kX2FjdG9yID0gcGRmaChodG1sMSwgJy5tZXRhOmVxKDQpJiZUZXh0Jyk7CglWT0Qudm9kX2FyZWEgPSBwZGZoKGh0bWwxLCAnLm1ldGE6ZXEoMykmJlRleHQnKTsKCVZPRC52b2RfeWVhciA9IHBkZmgoaHRtbDEsICcubWV0YTplcSgyKSYmVGV4dCcpOwoJVk9ELnZvZF9yZW1hcmtzID0gJyc7CglWT0Qudm9kX2RpcmVjdG9yID0gJyc7CglWT0Qudm9kX2NvbnRlbnQgPSAnJzsKCWxvZyhWT0QpOwoJdmFyIHZfdGtzID0gZ2V0VG9rZW4oaHRtbDEpOwoJaW5wdXQgPSAnaHR0cHM6Ly93d3cuaWthbmJvdC5jb20vYXBpL2dldFJlc04/dmlkZW9JZD0nICsgaW5wdXQuc3BsaXQoJy8nKS5wb3AoKSArICcmbXR5cGU9MicrJyZ0b2tlbj0nK3ZfdGtzOwoJbGV0IGh0bWwgPSByZXF1ZXN0KGlucHV0LCB7CiAgICAgICAgaGVhZGVyczogewogICAgICAgICAgICAnVXNlci1BZ2VudCc6J01vemlsbGEvNS4wIChpUGhvbmU7IENQVSBpUGhvbmUgT1MgMTNfMl8zIGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwNS4xLjE1IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xMy4wLjMgTW9iaWxlLzE1RTE0OCBTYWZhcmkvNjA0LjEnLAogICAgICAgICAgICAnUmVmZXJlcic6IGlucHV0LAogICAgICAgIH0KICAgIH0pOwoJcHJpbnQoaHRtbCk7CglodG1sID0gSlNPTi5wYXJzZShodG1sKTsKCWxldCBlcGlzb2RlcyA9IGh0bWwuZGF0YS5saXN0OwoJbGV0IHBsYXlNYXAgPSB7fTsKCWlmICh0eXBlb2YgcGxheV91cmwgPT09ICd1bmRlZmluZWQnKSB7CgkJdmFyIHBsYXlfdXJsID0gJycKCX0KCWVwaXNvZGVzLmZvckVhY2goZnVuY3Rpb24oZXApIHsKCQlsZXQgcGxheXVybHMgPSBKU09OLnBhcnNlKGVwWydyZXNEYXRhJ10pOwoJCXBsYXl1cmxzLmZvckVhY2goZnVuY3Rpb24ocGxheXVybCkgewoJCQlsZXQgc291cmNlID0gcGxheXVybFsnZmxhZyddOwoJCQlpZiAoIXBsYXlNYXAuaGFzT3duUHJvcGVydHkoc291cmNlKSkgewoJCQkJcGxheU1hcFtzb3VyY2VdID0gW10KCQkJfQoJCQlwbGF5TWFwW3NvdXJjZV0ucHVzaChwbGF5dXJsWyd1cmwnXS5yZXBsYWNlQWxsKCcjIycsJyMnKSkKCQl9KQoJfSk7CglsZXQgcGxheUZyb20gPSBbXTsKCWxldCBwbGF5TGlzdCA9IFtdOwoJT2JqZWN0LmtleXMocGxheU1hcCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHsKCQlwbGF5RnJvbS5hcHBlbmQoa2V5KTsKCQlwbGF5TGlzdC5hcHBlbmQocGxheU1hcFtrZXldKQoJfSk7CglsZXQgdm9kX3BsYXlfZnJvbSA9IHBsYXlGcm9tLmpvaW4oJyQkJCcpOwoJbGV0IHZvZF9wbGF5X3VybCA9IHBsYXlMaXN0LmpvaW4oJyQkJCcpOwoJVk9EWyd2b2RfcGxheV9mcm9tJ10gPSB2b2RfcGxheV9mcm9tOwoJVk9EWyd2b2RfcGxheV91cmwnXSA9IHZvZF9wbGF5X3VybDsKCWxvZyhWT0QpOwp9IGNhdGNoIChlKSB7Cglsb2coJ+iOt+WPluS6jOe6p+ivpuaDhemhteWPkeeUn+mUmeivrzonICsgZS5tZXNzYWdlKQp9")))',
    // 搜索:'#search-result&&.media;h5&&a&&Text;a&&img&&data-src;.label&&Text;a&&href',//第三个是描述，一般显示更新或者完结
	搜索:'.col-md-8&&.media;h5&&a&&Text;a&&img&&data-src;.label&&Text;a&&href',//第三个是描述，一般显示更新或者完结
}