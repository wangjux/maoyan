<template>
    <div id="newhot">
        <div class="dy">
            <div class="nhot">
                <div class="lef">
                    <div class="nhead">
                    <span class="hot">正在热映&emsp;(38部)</span>
                    <span class="qb"><a href="#">全部&nbsp;></a></span>
                    </div>
                    <ul>
                        <li v-for="(item,index) in 8" :key="index">
                            <img src="@/assets/img/newhot/movies.jpg">
                            <div class="name"><span>电影名</span><span class="pf"><i>评分</i></span></div>
                            <div class="buy">购票</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="coming">
                <div class="coming01">
                    <div class="coming01_01">
                        <span class="hot">正在热映&emsp;(38部)</span>
                        <span class="qb">全部&nbsp;></span>
                        <ul>
                            <li v-for="(item,index) in 8" :key="index">
                                <img src="@/assets/img/newhot/movies.jpg">
                                <div class="names"><span>电影名</span></div>
                                <div class="want"><span>99999人想看</span></div>
                                <div class="y"><span class="yg">预告片</span><span class="ys">预售</span></div>
                                <div class="sy">1月1日上映</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="hb">
                <div class="hb01">
                    <div class="hhead">
                        <span class="rb">热播电影</span>
                        <span class="lx"><a href="#">爱情</a></span>
                        <span class="lx"><a href="#">喜剧</a></span>
                        <span class="lx"><a href="#">动作</a></span>
                        <span class="lx"><a href="#">恐怖</a></span>
                        <span class="lx"><a href="#">动画</a></span>
                        <span class="qb"><a href="#">全部></a></span>
                    </div>
                    <ul>
                        <li v-for="(item,index) in 7" :key="index" class="hotm" :class="{hotm2:index==0}">
                            <img src="@/assets/img/newhot/movies.jpg">
                            <div class="name"><span>电影名</span><span class="pf"><i>评分</i></span></div>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="ph">
            <div class="newmoney">
                <div class="head">
                    <span>今日票房</span>
                </div>
                <ul>
                    <li style="height:100px;" class="numone">
                        <img src="@/assets/img/head/code.png" alt="" style="width:120px;height:100px">
                        <img src="@/assets/img/newhot/gj.png" alt="" style="position: relative;left:-120px;top:-74px">
                        <div style="float:right;">
                            <span>除暴</span><br>
                            <span style="margin-left:220px;">票房</span>
                        </div>
                    </li>
                    <li v-for="(item,index) in 5" :key="index" v-show="index!=0">
                        <i>{{index}}</i>&emsp;电影名<span class="pf">票房</span>
                    </li>
                </ul>
                <div class="grail">
                    <div class="grail_h">今日大盘</div>
                    <div class="pfsj">
                        <br>
                        <span style="color:red;font-size:25px;font-weight: 600;margin-left:10px;">2017.9万</span><span class="le" style="color:red;cursor: pointer;margin-right:10px;">查看更多></span><br>
                        <span style="color:gray;margin-left:10px;">北京时间00:00:00</span><span class="le" style="color:gray;margin-right:10px;">猫眼实时票房数据</span>
                    </div>
                </div>
            </div>
            <div class="qd">
                <div class="head">
                    <span>最受期待</span><span style="float:right;font-size:15px;cursor: pointer;">查看完整榜单></span>
                </div>
                <div class="qdone">
                    <img src="@/assets/img/newhot/gj.png" style="position: absolute;float:left;z-index:0;">
                    <img src="@/assets/img/head/code.png" alt="" style="z-index:-1;width:150px;height:200px;">
                    <div class="wz">
                        <span style="font-size:20px">如果声音不记得</span><br>
                        <span style="color:gray;">上映时间：2020-12-04</span><br>
                        <span style="color:orange;font-size:13px">999999人想看</span>
                    </div>
                </div>
                <div class="qdtwo">
                    <img src="@/assets/img/newhot/gj.png" style="position: absolute;float:left;z-index:0;">
                    <img src="@/assets/img/head/code.png" alt="" style="z-index:-1;width:180px;height:130px;">
                    <p style="margin-left:10px;font-size:20px;">电影名</p>
                    <p style="margin-left:10px;color:orange;font-size:15px;">99999人想看</p>
                </div>
                <div class="qdtwo" style="margin-left:40px">
                    <img src="@/assets/img/newhot/gj.png" style="position: absolute;float:left;z-index:0;">
                    <img src="@/assets/img/head/code.png" alt="" style="z-index:-1;width:180px;height:130px;">
                    <p style="margin-left:10px;font-size:20px;">电影名</p>
                    <p style="margin-left:10px;color:orange;font-size:15px;">99999人想看</p>
                </div>
                <div style="margin-top:250px">
                    <ul>
                        <li v-for="(item,index) in 7" :key="index" v-show="index!=0">
                            <i style="color:gray;font-size:22px;">{{index}}</i>&emsp;电影名<span class="pf" style="color:orange">99999人想看</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="top"> 
                <div class="head">
                    <span style="color:orange">Top10</span>
                    <span style="float:right;font-size:15px;cursor: pointer;color:orange">查看完整榜单></span>
                </div>
                <div class="topone">
                    <img src="@/assets/img/newhot/gj.png" style="position: absolute;float:left;z-index:0;">
                    <img src="@/assets/img/head/code.png" alt="" style="z-index:-1;width:120px;height:100px;">
                    <div class="bt">
                        <span style="font-size:20px">如果声音不记得</span><br>
                        <span style="color:orange;font-size:13px">9.9分</span>
                    </div>
                </div>
                <ul>
                    <li v-for="(item,index) in 9" :key="index" v-show="index!=0">
                        <i style="color:gray;font-size:22px;">{{index}}</i>&emsp;电影名<span class="pf" style="color:orange">99999人想看</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
*{
    
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
}
#newhot{
    width: 100%;
    height: 2500px;
}
.dy{
    float: left;
    width: 900px;
    height: 2500px;
}
.nhot{
    width: 900px;
    height: 650px;
}
.nhead{
    width: 750px;
    height: 50px;
    line-height: 50px;
}
.lef{
    float: right;
    width: 750px;
    height: 600px;
}
.hot{
    font-size: 25px;
    color: red;
    font-weight: 500;
}
.qb{
    float: right;
    font-size: 15px;
    color: red;
    font-weight: 500;
    margin-right: 50px;
    cursor: pointer;
}
.lef ul{
    width: 750px;
    height: 550px;
}   
.lef ul li{
    float: left;
    list-style: none;
    width: 160px;
    background-color: rgb(150, 56, 153);
    margin: 10px;
}
.lef ul li img{
    width: 160px;
    height: 200px;
}
.buy{
    margin-top: -19px;
    width: 160px;
    height: 40px;
    line-height: 40px;
    color: red;
    text-align: center;
    box-shadow: 0 0 1px gray;
    background-color: white;
    cursor: pointer;
}
.buy:hover{
    background-color: red;
    color: white;
}
.name{
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    margin-top: -43px;
    background-color: grey;
    opacity: 0.6;
}
.name span{
    padding-left: 5px;
    color: white;
    font-size: 17px;
}
.pf{
    float: right;
    color: black;
}
.pf i{
    padding-right: 5px;
}
.coming{
    width: 900px;
    height: 800px;
}
.coming01{
    float: right;
    width: 750px;
    height: 750px;
}
.coming01_01{
    width: 750px;
    height: 50px;
    line-height: 50px;
}
.coming01_01 ul{
    width: 750px;
    height: 550px;
}   
.coming01_01 ul li{
    float: left;
    list-style: none;
    width: 160px;
    margin: 10px;
    transition: 0.8s all;
    cursor: pointer;
}
.coming01_01 ul li:hover{
    box-shadow: 0 1px 5px gray;
}
.coming01_01 ul li img{
    width: 160px;
    height: 200px;
}
.want{
    margin-top: -35px;
    width: 160px;
    height: 40px;
    line-height: 40px;
    color: rgb(241, 104, 40);
    text-align: center;
    box-shadow: 0 0 1px gray;
    background-color: rgb(231, 229, 229);
}
.names{
    width: 160px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 35px;
    margin-top: -60px;
    color: rgb(66, 61, 61);
    font-weight: 500;
    background-color: rgb(180, 175, 175);
    opacity: 0.6;
}
.y{
    width: 160px;
    height: 40px;
    margin-top: -12px;
}
.yg{
    display: inline-block;
    width: 79px;
    height: 40px;
    line-height: 40px;
    color: gray;
    background-color: white;
    text-align: center;
    border-right: 1px solid rgb(236, 232, 232);
}
.ys{
    display: inline-block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    color: blue;
    background-color: white;
    text-align: center;
    cursor: pointer;
}
.ys:hover{
    background-color: rgb(160, 160, 243);
    color: white;
}
.sy{
    width: 160px;
    height: 40px;
    margin-top: 5px;
    text-align: center;
    line-height: 40px;
    background-color: white;   
    color: rgb(155, 148, 148); 
}
.hb{
    width: 900px;
    height: 600px;
}
.hb01{
    float: right;
    width: 750px;
    height: 600px;
}
.hb01 li{
    cursor: pointer;
}
.hhead{
    width: 750px;
    height: 50px;
    line-height: 50px;
}
.rb{
    font-size: 25px;
    font-weight: 500;
    color: red;
}
.lx{
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
}
.hotm{
    float: left;
    list-style: none;
    width: 160px;
    margin: 10px;
}
.hotm2{
    width: 340px;
    height: 222px;
}
.hotm2 img{
    width: 340px;
    height: 222px;
}
.ph{
    float: left;
    width: 600px;
    height: 2500px;
}
.newmoney{
    width: 600px;
    height: 500px;
}
.head{
    width: 100%;
    height: 60px;
    line-height: 60px;
}
.head span{
    color: red;
    font-size: 25px;

}
.newmoney ul li{
    width: 400px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    background-color: white;
    cursor: pointer;
}
.newmoney ul li:hover{
    background-color: rgb(191, 194, 197);
}
.pf{
    float: right;
}
.grail{
    width: 400px;
    height: 100px;
    background-color: white;
    margin-top: 30px;
}
.grail_h{
    float: left;
    width: 30px;
    height: 100px;
    text-align: center;
    background-color: rgb(228, 31, 31);
    color: white;
}
.pfsj{
    float: left;
    width: 370px;
    height: 100px;
    box-shadow: 0 0 1px gray;
}
.le{
    float: right;
}
.qd{
    width: 400px;
    height: 800px;
}
.qdone{
    position: relative;
    width: 400px;
    height: 200px;
    background-color: white;
    border: 1px solid rgb(214, 211, 211);
    cursor: pointer;
}
.qdone:hover{
    background-color: rgb(212, 207, 207);
}
.wz{
    float: right;
    position: relative;
    right: 80px;
    top: 50px;
    line-height: 25px;
}
.qdtwo{
    float: left;
    margin-top: 20px;
    width: 180px;
    height: 200px;
    line-height: 30px;
    background-color: white;
    cursor: pointer;
}
.qdtwo:hover{
    background-color: rgb(185, 180, 180);
}
.qd ul li{
    display: inline-block;
    width: 400px;
    height: 50px;
    line-height: 50px;
    background-color: white;
}
.qd ul li:hover{
    background-color: rgb(221, 218, 218);
}
.top{
    margin-top: 150px;
    width: 400px;
    height: 800px;
}
.topone{
    width: 400px;
    height: 80px;
    background-color: aquamarine;
}
.topone span{
    float: right;
}
.topone{
    position: relative;
    width: 400px;
    height: 100px;
    background-color: white;
    border: 1px solid rgb(214, 211, 211);
    cursor: pointer;
}
.topone:hover{
    background-color: rgb(199, 193, 193);
}
.bt{
    float: right;
    position: relative;
    right: 130px;
    top: 30px;
    line-height: 25px;
}
.top ul{
    margin-top: 10px;
}
.top ul li{
    display: inline-block;
    width: 400px;
    height: 50px;
    line-height: 50px;
    background-color: white;
    cursor: pointer;
}
.top ul li:hover{
    background-color: rgb(221, 218, 218);
}
</style>