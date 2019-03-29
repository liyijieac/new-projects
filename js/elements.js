const cityOptions = ['投保示列首页', '电子收款凭证', '收款凭证', '其他生效规则','投保示列首页1', '电子收款凭证2', '收款凭证3', '其他生效规则4'];
var vm = new Vue({
    el:"#app",
    data:{
        //标签初始高度
        heightFlag:false,
        //标签标记
        flag:"10000",
        flag2:"20000",
        flag3:true,
        flag4:false,
        index:0,
        //新增模块
        checked:true,
        checkedCities1: [],
        cities: cityOptions,
        searchContent:"",
        followElements:[
            {
                 'element':{
                     'id':'1',
                     'date':'时间',
                     'area':'区域',
                     'insuranceid':'险种id',
                     'moduleid':'模块id',
                     'elementid':'要素id',
                     'elementdetail':'要素释义',
                     'printshow':'打印显示',
                     'commonrule':'通用规则',
                     'appendinsuranceids':'附加险id',
                     'chengbaorule':'承保规则',
                     'hebaorule':'核保规则',
                     'insurancerule':'保险条款',
                     'otherrule':'其他规则',
                     'sysrecord':'系统记录',
                     'sysproduce':'系统生成',
                     'existcheck':'存在性审核',
                     'okcheck':'正确性审核',
                     'FFcheck':'FF系统校验',
                     'yingxiangcheck':'投保单影像校验',
                     'checkstandard':'校验标准',
                     'remarks':'备注',
                     'versionid':'版本号',
                     'elementnum':'要素序号',
                     'elementname':'要素名称1'   
                 },
                 'moduleList':[
                     {
                         'moduleid':'m_001',
                         'modulename':'xxxxx1'
                     },
                     {
                        'moduleid':'m_001',
                        'modulename':'xxxxx2'
                    },
                    {
                        'moduleid':'m_001',
                        'modulename':'xxxxx3'
                    },
                    {
                        'moduleid':'m_001',
                        'modulename':'xxxxx4'
                    },
                    {
                        'moduleid':'m_001',
                        'modulename':'xxxxx5'
                    },
                    {
                        'moduleid':'m_001',
                        'modulename':'xxxxx6'
                    }
                 ]
            },
            {
                'element':{
                    'id':'2',
                    'date':'时间',
                    'area':'区域',
                    'insuranceid':'险种id',
                    'moduleid':'模块id',
                    'elementid':'要素id',
                    'elementdetail':'要素释义',
                    'printshow':'打印显示',
                    'commonrule':'通用规则',
                    'appendinsuranceids':'附加险id',
                    'chengbaorule':'承保规则',
                    'hebaorule':'核保规则',
                    'insurancerule':'保险条款',
                    'otherrule':'其他规则',
                    'sysrecord':'系统记录',
                    'sysproduce':'系统生成',
                    'existcheck':'存在性审核',
                    'okcheck':'正确性审核',
                    'FFcheck':'FF系统校验',
                    'yingxiangcheck':'投保单影像校验',
                    'checkstandard':'校验标准',
                    'remarks':'备注',
                    'versionid':'版本号',
                    'elementnum':'要素序号',
                    'elementname':'要素名称2'   
                },
                'moduleList':[
                    {
                        'moduleid':'m_002',
                        'modulename':'xxxxx'
                    }
                ]
           },
           {
            'element':{
                'id':'3',
                'date':'时间',
                'area':'区域',
                'insuranceid':'险种id',
                'moduleid':'模块id',
                'elementid':'要素id',
                'elementdetail':'要素释义',
                'printshow':'打印显示',
                'commonrule':'通用规则',
                'appendinsuranceids':'附加险id',
                'chengbaorule':'承保规则',
                'hebaorule':'核保规则',
                'insurancerule':'保险条款',
                'otherrule':'其他规则',
                'sysrecord':'系统记录',
                'sysproduce':'系统生成',
                'existcheck':'存在性审核',
                'okcheck':'正确性审核',
                'FFcheck':'FF系统校验',
                'yingxiangcheck':'投保单影像校验',
                'checkstandard':'校验标准',
                'remarks':'备注',
                'versionid':'版本号',
                'elementnum':'要素序号',
                'elementname':'要素名称3'   
            },
            'moduleList':[
                {
                    'moduleid':'m_003',
                    'modulename':'xxxxx'
                }
            ]
       },
       {
        'element':{
            'id':'1',
            'date':'时间',
            'area':'区域',
            'insuranceid':'险种id',
            'moduleid':'模块id',
            'elementid':'要素id',
            'elementdetail':'要素释义',
            'printshow':'打印显示',
            'commonrule':'通用规则',
            'appendinsuranceids':'附加险id',
            'chengbaorule':'承保规则',
            'hebaorule':'核保规则',
            'insurancerule':'保险条款',
            'otherrule':'其他规则',
            'sysrecord':'系统记录',
            'sysproduce':'系统生成',
            'existcheck':'存在性审核',
            'okcheck':'正确性审核',
            'FFcheck':'FF系统校验',
            'yingxiangcheck':'投保单影像校验',
            'checkstandard':'校验标准',
            'remarks':'备注',
            'versionid':'版本号',
            'elementnum':'要素序号',
            'elementname':'要素名称1'   
        },
        'moduleList':[
            {
                'moduleid':'m_001',
                'modulename':'xxxxx'
            }
        ]
   },
   {
       'element':{
           'id':'2',
           'date':'时间',
           'area':'区域',
           'insuranceid':'险种id',
           'moduleid':'模块id',
           'elementid':'要素id',
           'elementdetail':'要素释义',
           'printshow':'打印显示',
           'commonrule':'通用规则',
           'appendinsuranceids':'附加险id',
           'chengbaorule':'承保规则',
           'hebaorule':'核保规则',
           'insurancerule':'保险条款',
           'otherrule':'其他规则',
           'sysrecord':'系统记录',
           'sysproduce':'系统生成',
           'existcheck':'存在性审核',
           'okcheck':'正确性审核',
           'FFcheck':'FF系统校验',
           'yingxiangcheck':'投保单影像校验',
           'checkstandard':'校验标准',
           'remarks':'备注',
           'versionid':'版本号',
           'elementnum':'要素序号',
           'elementname':'要素名称2'   
       },
       'moduleList':[
           {
               'moduleid':'m_002',
               'modulename':'xxxxx'
           }
       ]
  },
  {
   'element':{
       'id':'3',
       'date':'时间',
       'area':'区域',
       'insuranceid':'险种id',
       'moduleid':'模块id',
       'elementid':'要素id',
       'elementdetail':'要素释义',
       'printshow':'打印显示',
       'commonrule':'通用规则',
       'appendinsuranceids':'附加险id',
       'chengbaorule':'承保规则',
       'hebaorule':'核保规则',
       'insurancerule':'保险条款',
       'otherrule':'其他规则',
       'sysrecord':'系统记录',
       'sysproduce':'系统生成',
       'existcheck':'存在性审核',
       'okcheck':'正确性审核',
       'FFcheck':'FF系统校验',
       'yingxiangcheck':'投保单影像校验',
       'checkstandard':'校验标准',
       'remarks':'备注',
       'versionid':'版本号',
       'elementnum':'要素序号',
       'elementname':'要素名称3'   
   },
   'moduleList':[
       {
           'moduleid':'m_003',
           'modulename':'xxxxx'
       }
   ]
},
{
    'element':{
        'id':'1',
        'date':'时间',
        'area':'区域',
        'insuranceid':'险种id',
        'moduleid':'模块id',
        'elementid':'要素id',
        'elementdetail':'要素释义',
        'printshow':'打印显示',
        'commonrule':'通用规则',
        'appendinsuranceids':'附加险id',
        'chengbaorule':'承保规则',
        'hebaorule':'核保规则',
        'insurancerule':'保险条款',
        'otherrule':'其他规则',
        'sysrecord':'系统记录',
        'sysproduce':'系统生成',
        'existcheck':'存在性审核',
        'okcheck':'正确性审核',
        'FFcheck':'FF系统校验',
        'yingxiangcheck':'投保单影像校验',
        'checkstandard':'校验标准',
        'remarks':'备注',
        'versionid':'版本号',
        'elementnum':'要素序号',
        'elementname':'要素名称1'   
    },
    'moduleList':[
        {
            'moduleid':'m_001',
            'modulename':'xxxxx1'
        },
        {
           'moduleid':'m_001',
           'modulename':'xxxxx2'
       },
       {
           'moduleid':'m_001',
           'modulename':'xxxxx3'
       },
       {
           'moduleid':'m_001',
           'modulename':'xxxxx4'
       },
       {
           'moduleid':'m_001',
           'modulename':'xxxxx5'
       },
       {
           'moduleid':'m_001',
           'modulename':'xxxxx6'
       }
    ]
},
{
   'element':{
       'id':'2',
       'date':'时间',
       'area':'区域',
       'insuranceid':'险种id',
       'moduleid':'模块id',
       'elementid':'要素id',
       'elementdetail':'要素释义',
       'printshow':'打印显示',
       'commonrule':'通用规则',
       'appendinsuranceids':'附加险id',
       'chengbaorule':'承保规则',
       'hebaorule':'核保规则',
       'insurancerule':'保险条款',
       'otherrule':'其他规则',
       'sysrecord':'系统记录',
       'sysproduce':'系统生成',
       'existcheck':'存在性审核',
       'okcheck':'正确性审核',
       'FFcheck':'FF系统校验',
       'yingxiangcheck':'投保单影像校验',
       'checkstandard':'校验标准',
       'remarks':'备注',
       'versionid':'版本号',
       'elementnum':'要素序号',
       'elementname':'要素名称2'   
   },
   'moduleList':[
       {
           'moduleid':'m_002',
           'modulename':'xxxxx'
       }
   ]
},
{
'element':{
   'id':'3',
   'date':'时间',
   'area':'区域',
   'insuranceid':'险种id',
   'moduleid':'模块id',
   'elementid':'要素id',
   'elementdetail':'要素释义',
   'printshow':'打印显示',
   'commonrule':'通用规则',
   'appendinsuranceids':'附加险id',
   'chengbaorule':'承保规则',
   'hebaorule':'核保规则',
   'insurancerule':'保险条款',
   'otherrule':'其他规则',
   'sysrecord':'系统记录',
   'sysproduce':'系统生成',
   'existcheck':'存在性审核',
   'okcheck':'正确性审核',
   'FFcheck':'FF系统校验',
   'yingxiangcheck':'投保单影像校验',
   'checkstandard':'校验标准',
   'remarks':'备注',
   'versionid':'版本号',
   'elementnum':'要素序号',
   'elementname':'要素名称3'   
},
'moduleList':[
   {
       'moduleid':'m_003',
       'modulename':'xxxxx'
   }
]
},
{
'element':{
'id':'1',
'date':'时间',
'area':'区域',
'insuranceid':'险种id',
'moduleid':'模块id',
'elementid':'要素id',
'elementdetail':'要素释义',
'printshow':'打印显示',
'commonrule':'通用规则',
'appendinsuranceids':'附加险id',
'chengbaorule':'承保规则',
'hebaorule':'核保规则',
'insurancerule':'保险条款',
'otherrule':'其他规则',
'sysrecord':'系统记录',
'sysproduce':'系统生成',
'existcheck':'存在性审核',
'okcheck':'正确性审核',
'FFcheck':'FF系统校验',
'yingxiangcheck':'投保单影像校验',
'checkstandard':'校验标准',
'remarks':'备注',
'versionid':'版本号',
'elementnum':'要素序号',
'elementname':'要素名称1'   
},
'moduleList':[
{
   'moduleid':'m_001',
   'modulename':'xxxxx'
}
]
},
{
'element':{
'id':'2',
'date':'时间',
'area':'区域',
'insuranceid':'险种id',
'moduleid':'模块id',
'elementid':'要素id',
'elementdetail':'要素释义',
'printshow':'打印显示',
'commonrule':'通用规则',
'appendinsuranceids':'附加险id',
'chengbaorule':'承保规则',
'hebaorule':'核保规则',
'insurancerule':'保险条款',
'otherrule':'其他规则',
'sysrecord':'系统记录',
'sysproduce':'系统生成',
'existcheck':'存在性审核',
'okcheck':'正确性审核',
'FFcheck':'FF系统校验',
'yingxiangcheck':'投保单影像校验',
'checkstandard':'校验标准',
'remarks':'备注',
'versionid':'版本号',
'elementnum':'要素序号',
'elementname':'要素名称2'   
},
'moduleList':[
{
  'moduleid':'m_002',
  'modulename':'xxxxx'
}
]
},
{
'element':{
'id':'3',
'date':'时间',
'area':'区域',
'insuranceid':'险种id',
'moduleid':'模块id',
'elementid':'要素id',
'elementdetail':'要素释义',
'printshow':'打印显示',
'commonrule':'通用规则',
'appendinsuranceids':'附加险id',
'chengbaorule':'承保规则',
'hebaorule':'核保规则',
'insurancerule':'保险条款',
'otherrule':'其他规则',
'sysrecord':'系统记录',
'sysproduce':'系统生成',
'existcheck':'存在性审核',
'okcheck':'正确性审核',
'FFcheck':'FF系统校验',
'yingxiangcheck':'投保单影像校验',
'checkstandard':'校验标准',
'remarks':'备注',
'versionid':'版本号',
'elementnum':'要素序号',
'elementname':'要素名称3'   
},
'moduleList':[
{
'moduleid':'m_003',
'modulename':'xxxxx'
}
]}
        
     ]
        
    },
    methods:{
        //标签展示
        listTag(){
            if(this.heightFlag == false ){
                this.heightFlag = true
            }else{
                this.heightFlag = false
            }
            
        },
        //标签选择
        chooseTag(index){
            if(this.flag == index){
                this.flag = "10000"
            }else{
                this.flag = index
            }
            
        },
        //选中菜单变色
        choose(index){
            this.index = index
            if(this.flag2 == index){
                this.flag2 = "10000"
            }else{
                this.flag2 = index
            }
            
        },
        showButtons(){
            if(this.flag3 == true){
                this.flag3 = false
            }else{
                this.flag3 = true
            }
        },
        //修改按钮触发的函数
        edit(){
            if(this.flag4 == true){
                this.flag4 = false
            }else{
                this.flag4 = true
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