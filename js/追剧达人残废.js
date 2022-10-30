var rule = {
    title:'追剧达人',//规则标题,没有实际作用,但是可以作为cms类名称依据
    编码:'',
    host:'http://zjdr.tv',
    url:'/vodshow/id/fyclass/page/fypage.html',
    //detailUrl:'http://zjdr.tv/vodshow/id/1/page/fyid.html',//非必填,二级详情拼接链接,感觉没啥卵用
    searchUrl:'/vod/search/page/fypage/wd/**.html',//搜索链接 可以是完整路径或者相对路径,用于分类获取和推荐获取 **代表搜索词 fypage代表页数
    searchable:1,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        "Cookie": "searchneed=ok"
    },
    class_parse:'.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?).html',
    // 除开全局过滤之外还需要过滤哪些标题不视为分类
    cate_exclude:'今日更新',
    // 除开全局动态线路名过滤之外还需要过滤哪些线路名标题不视为线路
    tab_exclude:'',
    // 服务器解析播放
    play_parse:true,
    // 自定义免嗅
    lazy:'',
    // 首页推荐显示数量
    limit:6,
    double:true,//是否双层列表定位,默认false
    // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    // 如果是双层定位的话,推荐的第2段分号代码也是第2层定位列表代码
    推荐:'.swiper-small&&div;.title&&Text;img&&src;.ins&&Text;a&&href',
    // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:'.module-items;.module-poster-item-title&&Text;img&&data-original;.module-item-douban&&Text;a&&href',
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
    // 二级 title: 片名;类型
    // 二级 desc: 主要信息;年代;地区;演员;导演
    // 或者 {title:'',img:'',desc:'',content:'',tabs:'',lists:'',tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'} 同海阔dr二级
    二级:'*',
    // 搜索可以是*,集成一级，或者跟一级一样的写法 列表;标题;图片;描述;链接;详情
    搜索:'*',
}
