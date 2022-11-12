var rule = {
    title:'天天视频',
    host:'http://www.ttsp.tv',
    // homeUrl:'/',
//    url:'/vodshow/fyclass--------fypage---{{fl.year}}.html',
    url:'/vodshow/fyclass-fyfilter-----fypage---{{fl.year}}.html',
//      /vodshow/fyclass--{by}-{area}-----fypage---{year}.html",
filter_url:'{{fl.c}}-{{fl.by}}-{{fl.area}}',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    filter:{
        '1':[{'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'大陆'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'美国','v':'美国'},{'n':'英国','v':'英国'},{'n':'日本','v':'日本'},{'n':'韩国','v':'韩国'},{'n':'泰国','v':'泰国'},{'n':'印度','v':'印度'},{'n':'其他','v':'其他'}]},{'key':'year','name':'年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2010','v':'2010'},{'n':'2009','v':'2009'},{'n':'2008','v':'2008'},{'n':'2007','v':'2007'},{'n':'2006','v':'2006'},{'n':'2005','v':'2005'},{'n':'2004','v':'2004'}]},{'name':'排序','key':'by','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
        '2':[{'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'内地'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'美国','v':'美国'},{'n':'英国','v':'英国'},{'n':'日本','v':'日本'},{'n':'韩国','v':'韩国'},{'n':'泰国','v':'泰国'},{'n':'新加坡','v':'新加坡'},{'n':'其他','v':'其他'}]},{'key':'year','name':'年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'}]},{'name':'排序','key':'by','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
        '3':[{'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'内地'},{'n':'港台','v':'港台'},{'n':'日韩','v':'日韩'},{'n':'欧美','v':'欧美'}]},{'key':'year','name':'年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'}]},{'name':'排序','key':'by','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
        '4':[{'key':'area','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'国产'},{'n':'日本','v':'日本'},{'n':'欧美','v':'欧美'},{'n':'其他','v':'其他'}]},{'key':'year','name':'年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'}]},{'name':'排序','key':'by','value':[{'n':'全部','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}]

        },
        
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.vodlist.vodlist_wi;li;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    二级:{"title":"h1&&Text;.text-muted:eq(-1)&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".text-muted:eq(-1)&&Text;.text-muted:eq(-1)&&Text;.text-muted:eq(-1)&&Text;.content_detail.content_min.fl&&ul&&li:eq(3)&&Text;.content_detail.content_min.fl&&ul&&li:eq(4)&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".play_list_box:eq(#id) .playlist_notfull&&ul li"},
    搜索:'body .searchlist_item;a&&title;.vodlist_thumb.lazyload&&data-original;.pic_text.text_right&&Text;a&&href',
}
