window.onload = function () {

    var vm = new Vue({
        el: '#app',
        data: {
            inputText:'',
            searchList:[],
            list:[],
            item:{
                id:null,
                content:null,
                isFinish:false,
            }
        },
        created() {
            localStorage.setItem('data',{name:'lqj'})
            this.list = [
                {
                    id:21,
                    content:'测试flase',
                    isFinish:false
                },
                {
                    id:53,
                    content:'测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长测试flase长',
                    isFinish:false
                },
                {
                    id:22,
                    content:'测试true',
                    isFinish:true
                },
                {
                    id:23,
                    content:'测试flase',
                    isFinish:false
                },
                {
                    id:24,
                    content:'测试true',
                    isFinish:true
                },
            ]
            console.log('初始list:'+this.list)

        },
        mounted() {

        },
        computed: {

        },
        methods: {
            //搜索事件绑定
            //搜索
            search(){

            },
            //添加一条待办
            addItem(){
                if(this.inputText == ''){
                    alert('请输入待办内容')
                    return
                }
                this.list.push({
                    id:( new Date()).valueOf(),
                    content:this.inputText,
                    isFinish:false,
                }),
                this.inputText = '',
                console.log(this.list)
                alert('添加成功')
            },
            //删除一条待办
            delItem(item){
                console.log('del item:',item)
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i].id == item.id) {
                        break;
                    }
                }
                if(i != this.length){
                    this.list.splice(i, 1);
                }
            },
            //更改待办状态
            updateItem(item){
                console.log(item)
            },
            //编辑content
            editItemContent(item){
                
            },
            //更新localStorage
            updateLocalStorage(){

            }
            
        },
    })

    
}
