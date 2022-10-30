var rule={
    title:'爱看影视',
    host:'https://ikan6.vip/',
    // homeUrl:'/',
    url:'/vodtype/fyclass-fypage/',
    searchUrl:'/vodsearch/-------------/?wd=**&submit=',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&连续剧&综艺&动漫&日韩剧&欧美剧',
    class_url:'1&2&3&4&15&16',
    lazy:'',
    limit:6,
    推荐:'.myui-vodlist__box;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist__box;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":"h1&&Text;.left&&Text","img":".lazyload&&data-original","desc":".data:eq(0)&&Text;.data:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text","content":".data.hidden-xs&&Text","tabs":".nav.nav-tabs.active:eq(0)","lists":".col-lg-10:eq(#id) a"},
    搜索:'.myui-vodlist__media.clearfix;a&&title;.lazyload&&data-original;.pic-text&&Text',
}