var app = new Vue({
    el: '#app',
    data: {
        user:{
          username:'金偌人生重大疾病保险 (2018版)',
        },
        isPickUp:false,
        ActiveIndex:0,
        menuItem: [
            {
                isActive:true,
                name:'关注要素',
                url:"elements.html",
                iconUrl:"./img/img-shenhe/heart.svg",
                alive:true
            },
            {
                isActive:false,
                name:'全量基表',
                url:"modules.html",
                iconUrl:"./img/img-shenhe/table.svg",
                alive:false
            },
            {
                isActive:false,
                name:'险种对比',
                url:"",
                iconUrl:"./img/img-shenhe/compare.svg",
                alive:false
            },
            {
                isActive:false,
                name:'附加险',
                url:"additional.html",
                iconUrl:"./img/img-shenhe/additional.svg",
                alive:false
            },
            {

                isActive:false,
                name:'审核记录',
                url:"i-jilu.html",
                iconUrl:"./img/img-shenhe/record.svg",
                alive:false
            },
            {

                isActive:false,
                name:'统计分析',
                url:"",
                iconUrl:"./img/img-shenhe/analysis.svg",
                alive:false

            }


        ],

    },
    methods:{
        active:function (index) {
            console.log(index)
            if(!this.menuItem[index].isActive){
                this.menuItem[this.ActiveIndex].isActive=false;
                this.menuItem[index].isActive = true;
                this.ActiveIndex = index;
            }
        },
        // active2(index) {
        //     console.log(index)
        //     if(!this.menuItem[index].isActive){
        //         this.menuItem[this.ActiveIndex].isActive=false;
        //         this.menuItem[index].isActive = true;
        //         this.ActiveIndex = index;
        //     }
        // },
    }
});

