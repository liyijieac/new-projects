const cityOptions = ['投保示列首页', '电子收款凭证', '收款凭证', '其他生效规则','投保示列首页1', '电子收款凭证2', '收款凭证3', '其他生效规则4'];
var vm = new Vue({
    el:"#app",
    data:{
        //点击修改下划线变蓝
        flag:false,
        //鼠标移上菜单变色标识
        flag2:"2000",
        //显示按钮标识
        flag3:true,
        index:0,
        //新增模块
        checkedCities1: [],
        cities: cityOptions,
        searchContent:"",
        //附加险列表
        contrastInsuranceList:[
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },{
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            },
            {
                'elementid':'要素id',
                'elementname':'附加险要素名称',
                'insurancechengbaorule':'主险承保规则',
                'appendInsurancechengbaorule':'附加险承保规则'
            }
            

        ],
        
    },
    methods:{
        //鼠标移上菜单变色
        choose(index){
            if(this.flag2 == index){
                this.flag2 = "10000"
            }else{
                this.flag2 = index
            }
            
        },
        //修改按钮触发的函数
        edit(){
            if(this.flag3 == true){
                this.flag3 = false
            }else{
                this.flag3 = true
            }
            if(this.flag == true){
                this.flag = false
            }else{
                this.flag = true
            }
        },
        //搜索
        search(e){
            if(e.keyCode == 13){
                  alert('发送搜索内容是'+this.searchContent+'！')
            }
        },
        //新增模块
        showAddM(){

        }
    
    }
})