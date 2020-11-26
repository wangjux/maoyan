<template>
  <div class="movie">
      <div class="head">
        <ul>
          <li v-for="(item,index) in headdata" :key="index" @click="btn(index)" class="li" :class="{activity:index==num}">
            {{item}}</li> 
        </ul>
      </div>
      <div class="lb">
        <div class="lx">
          <div class="lef">类型&nbsp;:</div>
        </div>
        <div class="jt">
          <ul>
            <li v-for="(item,index) in lxdata" :key="index" :class="{lxactive:index==lxnum}" class="lxs" @click="lxbtn(index)">
              {{item}}</li>
          </ul>
        </div>
        <div class="qy">
          <div class="lef">区域&nbsp;:</div>
        </div>
        <div class="jt">
          <ul>
            <li v-for="(item,index) in qydata" :key="index" :class="{lxactive:index==qynum}" class="qys" @click="qybtn(index)">
              {{item}}</li>
          </ul>
        </div>
        <div class="nd">
          <div class="lef">年代&nbsp;:</div>
        </div>
        <div class="jt">
          <ul>
            <li v-for="(item,index) in nddata" :key="index" :class="{lxactive:index==ndnum}" class="nds" @click="ndbtn(index)">
              {{item}}</li>
          </ul>
        </div>
      </div>
      <div class="px">
        <form action="">
          <input type="radio" name="px">按热门排序
          <input type="radio" name="px">按时间排序
          <input type="radio" name="px">按评价排序
        </form>
      </div>
      <div class="movies">
        <ul>
          <li v-for="(item,index) in 13" :key="index" @mouseover="change(index)" @mouseout="out(index)"><img src="@/assets/img/movies/dy.jpg" alt="">
          <div class="hd" v-show="index==shownum">
            <p style="font-size:20px;">电影名</p>
            <p>类型:&nbsp;<span>爱情/青春/奇幻</span></p>
            <p>主演:&nbsp;<span>章若楠/孙陈俊</span></p>
            <p>上映时间:&nbsp;<span>2000-12-04</span></p>
          </div>
          <div class="name">电影名</div>
          <div class="pf"><i>评分</i></div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:0,
      lxnum:0,
      qynum:0,
      ndnum:0,
      shownum:null,
      headdata:['正在热映','即将上映','经典影片'],
      lxdata:['全部','爱情','喜剧','全部','爱情','喜剧','全部','爱情','喜剧','全部','爱情','喜剧','全部','爱情','喜剧','全部','爱情','喜剧','全部','爱情','喜剧','全部','爱情','喜剧'],
      qydata:['全部','大陆','美国','喜剧','动画','剧情','大陆','美国','喜剧','动画','剧情','大陆','美国','喜剧','动画','剧情','大陆','美国','喜剧','动画','剧情','大陆','美国','喜剧','动画','剧情'],
      nddata:['全部','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010']
    }
  },
  methods:{
    btn(index){
      this.num = index
    },
    lxbtn(index){
      this.lxnum = index
    },
    qybtn(index){
      this.qynum = index
    },
    ndbtn(index){
      this.ndnum = index
    },
    change(index){
      this.shownum = index
    },
    out(){
      this.shownum = null
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
.movie{
  width: 100%;
  height: 2000px;
}
.head{
  width: 100%;
  height: 60px;
  background-color: rgb(52, 53, 52);
}
.head ul{
  width: 300px;
  height: 60px;
  margin: 0 auto;
}
.li{
  float: left;
  width: 100px;
  height: 60px;
  line-height: 60px;
  color: gray;
  text-align: center;
  cursor: pointer;
}
.li:hover{
  color: rgb(223, 215, 215);
}
.lb{
  margin: auto;
  margin-top: 50px;
  width: 1200px;
  height: 300px;
  border: 1px solid rgb(211, 209, 209);
}
.lx,.qy,.nd{
  float: left;
  width: 100px;
  height: 100px;
}
.lef{
  color: gray;
  line-height: 100px;
  text-align: center;
}
.jt{
  float: left;
  width: 1100px;
  height: 100px;
}
.jt ul{
  margin-top: 10px;
}
.lxs,.qys,.nds{
  float: left;
  width: 50px;
  height: 25px;
  border-radius: 10px;
  color: black;
  margin: 5px;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
}
.lxs:hover{
  color: red;
}
.px{
  width: 400px;
  height: 50px;
  line-height: 50px;
  margin-left: 170px;
}
.px input{
  margin-left: 20px;
}
.movies{
  width: 1200px;
  margin: auto;
}
.movies ul{
  width: 1200px;
}
.movies ul li{
  float: left;
  width: 160px;
  height: 290px;
  margin-left: 50px;
  margin-top: 10px;
  cursor: pointer;
}
.movies ul li img{
    width: 160px;
    height: 220px;
    transition: 0.8s all;
}
.movies ul li img:hover{
    width: 180px;
    height: 230px;
    box-shadow: 0 10px 10px gray;
}
.hd{
  position: relative;
  margin-top: -120px;
  width: 160px;
  height: 120px;
  background-color: white;
}
.hd p span{
  color: grey;
}
.name{
  width: 160px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.pf{
  width: 160px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  color: orange;
  text-align: center;
  line-height: 30px;
}
.activity{
  color: red;
}
.activity:hover{
  color: red;
}
.lxactive{
  color: white;
  background-color: red;
}
.lxactive:hover{
  color: white;
}
</style>