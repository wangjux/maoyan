<template>
  <div id="ratation">
      <div class="ratation">
      <div class="lunbo">
          <ul>
              <li v-for="(item,index) in imgdata" :key="index" v-show="index==num"><img :src=item :mouseover="over()"></li>
          </ul>
            <ul class="dit">
                <li v-for="(item,index) in imgdata" :key="index" :style="{'backgroundColor':num==index?'red':'white'}" @click="onb(index)">
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
            num:0,
            imgdata:[
                require('@/assets/img/head/lb1.png'),
                require('@/assets/img/head/lb2.png')
            ]
        }
    },
    created(){
        this.ds()
    },
    methods:{
        play(){
            setTimeout(()=>{
                if(this.num >= this.imgdata.length-1){
                    return this.num = 0
                }
                return this.num++
            })
        },
        ds(){
            setInterval(()=>{
                this.play()
            }, 3000)
        },
        onb(index){
            this.num = index
        },
        over(){
            clearInterval(this.play)
        }
    }
}
</script>

<style scoped>
*{
    list-style: none;
}
#ratation{
    width: 100%;
    height: 500px;
}
.lunbo{
    width: 1420px;
    height: 440px;
    margin: 0 auto;
}
.lunbo ul li img{
    display: block;
    position: absolute;
    z-index: -1;
}
.dit{
    width: 80px;
    height: 15px;
    position: absolute;
    top: 480px;
    left: 720px;
}
.dit li{
    float: left;
    margin-left: 10px;
    width: 10px;
    height: 10px;
    border: 1px solid red;
    border-radius: 10px;
}
</style>