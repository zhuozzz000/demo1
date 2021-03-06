new Vue({
    el:'#herderLabel',
    data:{
        curAvator:curAvator,
    },
    methods:{
        label1Click:function (e) {
            alert(e.target.innerText);
        },
    },
});

new Vue({
    el:'#search',
    mounted:function() {
        this.searchArr = getSearchArr();
    },
    data:{
        inputText:'',
        searchArr: '',
    },
    methods:{
        fun:function (index) {
            self.location = '../item/index.html?itemID='+index;
        },
        clickForSearch:function () {
            if(this.inputText!==null)
            {
                var that = this;
                var teInfo = this.searchArr.filter(function (item) {
                    return item.name.toLowerCase().indexOf(that.inputText.toLowerCase()) > -1;
                })
                if(teInfo.length === 1)
                {
                    if(teInfo[0].id === 0){
                        self.location = './index.html';
                    }
                    else
                        this.fun(teInfo[0].id);
                    }
            }
        }
    },
    computed:{
        sArr:function () {
            var ss = this.inputText;
            if (ss) {
                return this.searchArr.filter(function(product) {
                    return Object.keys(product).some(function(key) {
                        return String(product[key]).toLowerCase().indexOf(ss) > -1
                    })
                })
            }
            else {
                if(searchArr.length > 10) return searchArr.slice(0,10);
                return this.searchArr;
            }
        }
    }
});


new Vue({
    el:'#mySlider',
    data:{
        silder_total:5,
        silder:[
            {
                id:4,
                url:'./img/liushu.jpg',
                description:'柳树'
            },
            {
                id:5,
                url:'./img/mei.jpg',
                description:'梅'
            },
            {
                id:7,
                url:'./img/songshu.jpg',
                description:'松树'
            },
            {
                id:6,
                url:'./img/rongshu.jpg',
                description:'榕树'
            },
            {
                id:3,
                url:'./img/zhuzi.jpg',
                description:'竹子'
            }
        ]
    },
    methods:{
        clickSilder:function (id) {
            self.location = "../item/index.html?itemID="+id;
        }
    }
});

new Vue({
    el:'#forth',
    data:{
        but1Style:'white',
        but2Style:'',
        isSettle:true,
        hotestItem:'',
        newestItem:'',
        showItem: '',
    },
    mounted:function()
    {
        var sss = getHotestItem();
        var yyy = getNewestItem();
        console.log(sss);
        console.log(yyy);
        this.hotestItem = yyy;
        this.newestItem = sss;
        this.showItem = this.hotestItem;
    },
    methods:{
        forthButClick:function (cur) {
            if(cur == 1)
            {
                this.but1Style = 'white';
                this.but2Style = '';
                this.showItem = this.hotestItem;
            }else{
                this.showItem = this.newestItem;
                this.but2Style = 'white';
                this.but1Style = '';
            }
        },
        clickForItem:function (id) {
            self.location = "../item/index.html?itemID="+id;
        }
    }
})

$('#mySlider').flexslider({
    playAfterPaused: 4000,
    before: function(slider) {
        if (slider._pausedTimer) {
            window.clearTimeout(slider._pausedTimer);
            slider._pausedTimer = null;
        }
    },
    after: function(slider) {
        var pauseTime = slider.vars.playAfterPaused;
        if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                slider._pausedTimer = window.setTimeout(function() {
                    slider.play();
                }, pauseTime);
            }
        }
    }
    // 设置其他参数
});