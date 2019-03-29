var app = new Vue({
    el: '#app',
    data: {
        user:{
          username:'Siri',
          faceUrl:'./img/363.jpg'
        },
        isPickUp:false,
        ActiveIndex:0,
        menuItem: [
            {
                isActive:true,
                name:'主页',
                url:"home.html",
                iconUrl:"./img/home.svg"
            },
            {
                isActive:false,
                name:'信息采集',
                url:"message.html",
                iconUrl:"./img/analysis.svg"
            },
            {
                isActive:false,
                name:'基表审核',
                url:"shenhe.html",
                iconUrl:"./img/check.svg",
            },
            {
                isActive:false,
                name:'审核记录',
                url:"xzjilu.html",
                iconUrl:"./img/record.svg"
            },
            {
                isActive:false,
                name:'险种管理',
                url:"e.html",
                iconUrl:"./img/manage.svg"
            },
            {
                isActive:false,
                name:'模板样张',
                url:"f.html",
                iconUrl:"./img/specimen.svg"
            }
        ]

    },
    methods:{
        active:function (index) {
            if(!this.menuItem[index].isActive){
                this.menuItem[this.ActiveIndex].isActive=false;
                this.menuItem[index].isActive = true;
                this.ActiveIndex = index;
            }
        },
        flexible:function () {
            this.isPickUp = !this.isPickUp
        }
    }
});

