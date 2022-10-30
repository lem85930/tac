var rule = Object.assign(muban.mxpro,{
title:'电影大师',
host:'https://dyds8.cyou',
url:'/index.php/vod/type/id/fyclass/page/fypage.html',
searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
class_parse:'.stui-header__menu&&li;a&&Text;a&&href;.*/(.*?).html',
推荐:'.stui-vodlist;li;h4.title&&Text;.lazyload&&data-original;.pic-text&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'.stui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
二级:{"title":"h1&&Text;.stui-content__detail p;eq(0)&&Text","img":".lazyload&&data-original","desc":".stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text;.stui-content__detail p:eq(3)&&Text","content":".detail-content&&Text","tabs":"ul.nav-tabs&&li","lists":".stui-content__playlist:eq(#id) li"},
搜索:'.stui-vodlist&&li;h4.title&&Text;.lazyload&&data-original;.pic-text&&Text;a&&href',

});