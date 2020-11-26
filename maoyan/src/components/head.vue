<template>
    <div id="head">
        <div class="head">
            <div class="h">
                <div class="logo" align="center"><img src="@/assets/img/head/mytb.png"/></div>
                <div class="selected">
                    <div class="select">长沙</div>
                </div>
                <ul class="nav">
                    <li v-for="(item,index) in head" :key="index" :class="{activity:link==item.link}" class="li" @click="btn(index)">
                       {{item.name}}</li>
                </ul> 
                <div class="code">
                    <p>App下载</p>
                    <div class="img"><img src="@/assets/img/head/code.png" align="middle"/></div>
                    <p>扫码下载App</p>
                </div>
                <div class="search">
                    <input type="text" placeholder="找影视剧、影人、影院"/><button>搜索</button>
                </div>
                <div class="hd">
                        <img src="@/assets/img/head/tx.png"/>
                        <div><a href="#">请登录</a></div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num:0,
            link:'/',
            head:[{'name':'首页','link':'/home'},
            {'name':'电影','link':'/movies'},
            {'name':'影院','link':'/cinma'},
            {'name':'演出','link':'/show'},
            {'name':'榜单','link':'/example'},
            {'name':'热点','link':'/hotspot'},
            {'name':'商城','link':'/mall'}]
        }
    },
    props:['msg'],
    created(){
       this.link = this.msg
    },
    methods:{
        btn(index){
            this.num=index
            location.href = this.head[index].link
        }
    }
}
</script>

<style scoped>
*{
    text-decoration: none;
    margin: 0px;
    padding: 0px;
}
#head{
    width: 100%;
    z-index: 100;
}
.head{
    width: 100%;
    height: 80px;
}
.h{
    position: fixed;
    background-color: rgb(236, 227, 227);
    box-shadow: 0 0 5px gray;
    width: 100%;
    height: 80px;
    z-index: 100;
}
.logo{
    float: left;
    width: 200px;
    height: 80px;
    line-height: 80px;
    margin-left: 120px;
}
.logo img{
    vertical-align: middle;
}
.selected{
    float: left;
}
.select{
    width: 90px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 18px;
    color: gray;
}
.nav{
    float: left;
    width: 490px;
    height: 80px;
    margin-left: 10px;
}
.li{
    list-style: none;
    float: left;
    width: 70px;
    height: 80px;
    line-height: 80px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: rgb(66, 64, 64);
    cursor: pointer;
}
.li:hover{
    color: red;
}
.activity{
    background-color: rgb(238, 76, 76);
    color: white;
}
.activity:hover{
    color: white;
}
.code{
    float: left;
    margin-left: 50px;
    width: 120px;
    height: 80px;
    line-height: 80px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    transition: 0.3s height;
    overflow: hidden;
    z-index: 100px;
    cursor: pointer;
}
.code:hover{
    height: 230px;
    box-shadow: 0 0 1px gray;
    background-color: white;
}
.search{
    float: left;
    width: 230px;
    height: 80px;
    line-height: 80px;
}
.search input{
    width: 200px;
    height: 35px;
    padding-left: 20px;
    border: 1px solid grey;
    background-color: rgb(236, 236, 236);
    border-radius: 20px;
    outline: none;
}   
.search button{
    width: 50px;
    height: 35px;
    border-radius: 20px;
    margin-left: -50px;
    border: 0px;
    background-color: rgb(226, 19, 19);
    color: white;
    outline: none;
}
.hd{
    float: left;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    transition: 0.3s height;
    overflow: hidden;
    z-index: 100;
}
.hd:hover{
    height: 130px;
    background-color: rgb(240, 235, 235);
    box-shadow: 0 0 1px;
}
.hd img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.hd div{
    width: 80px;
    height: 50px;
    line-height: 50px;
}
.hd div a{
    color: rgb(128, 123, 123);
}
.hd div a:hover{
    color: red;
}
</style>