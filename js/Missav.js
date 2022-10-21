var rule = {
    title:'Missav',
    host:'https://missav.com',
	searchUrl:'/search/**',
    url:'/fyclass?page=fypage',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'最近更新&新作上市&无码流出&SIRO&LUXU&GANA&PRESTIGE&S-CUTE&ARA&FC2&麻豆传媒&本月热门',//静态分类名称拼接
    class_url:'new&release&uncensored-leak&siro&luxu&gana&maan&scute&ara&fc2&madou&monthly-hot',//静态分类标识拼接
    limit:5,
    play_parse:true,
   lazy:'',
       一级:'.lg:w-0 lg:flex-1&&fixed z-max w-full bg-gradient-to-b from-darkest&&sm:container flex justify-between items-center mx-auto px-4&&relative&&Text;a&&href',
    二级:'*',
	搜索:'.lg:w-0 lg:flex-1&&a;.lozad.w-full&&alt;.lozad.w-full&&data-src;.absolute.bottom-1&&Text;a&&href',
	searchable:0,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
}

/*class="relative">
            <div class="fixed z-max w-full bg-gradient-to-b from-darkest">
                <div class="sm:container flex justify-between items-center mx-auto px-4">
                    <div class="lg:w-0 lg:flex-1">
                        <a class="text-4xl leading-normal" href="https://missav.com">
                            <span style="visibility: hidden;" class="font-serif"><span class="text-zinc-50">MISS</span><span class="text-primary">AV</span></span>
                        </a>
                    </div>
                    <div class="relative xl:hidden flex items-center space-x-4">
                        <a @click.prevent="toggleSearch" href="#" class="rounded-md text-nord6 hover:text-primary focus:outline-none">
                            <span class="sr-only">搜尋</span>
                            <svg xmlns="http://www.w3.org/2000  */