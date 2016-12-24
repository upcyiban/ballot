<template>
  <div class="index">
    <router-link class="button" id="create-btn" to="/create">+</router-link>
    <h1 v-show="!tickets.length"><br>点击右下角按钮新建</h1>
    <div class="ticket" v-for="ticket in tickets">
    <h1>{{ticket.detail}}</h1>
    <img :src="ticket.picsrc"><br>
    <div class="detail">人数:{{ticket.num}}</div>
    <div class="detail" style="font-size:20px">截至日期:<br>{{ticket.deadline}}</div>
    <router-link class="button" id="toDetail" :to="'/'+ticket.id+'/status'">查看抽取情况</router-link>
    </div>
    <router-link class="button" id="create-btn" to="/create">+</router-link>
    
  </div>
</template>

<script>
import {APIURL,APPURL} from '../config'
export default {
    name: 'index',
    data () {
      return {
        tickets : [],
        id : ''
      }
    },
    mounted () {
        this.Redirect();
        this.Fetch();
    },
    methods : {
      Fetch : function () {
        this.$http.get(APIURL+'/ballot/getallballot').then(response=>{
        this.tickets = response.data.reverse();
        this.FormatDate();
        console.log(this.tickets);
      })
      },
      Redirect : function (){
        if(sessionStorage.getItem('get_id')){
          if(!isNaN(sessionStorage.getItem('get_id'))){
            let id = sessionStorage.getItem('get_id');
            window.location = APPURL+'get?id='+id;
          }
        }
      },
      FormatDate : function () {
        for(let i=0;i<this.tickets.length;i++){
          let date = new Date(this.tickets[i].deadline);
          date = date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"+date.getUTCHours()+"时"+date.getMinutes()+"分";
          this.tickets[i].deadline = date;
        }
      }
    }
}
</script>

<style>
#toDetail{
  padding-top: 8px;
}
#create-btn{
  text-decoration: none;
  display: block;
  width: 50px;
  background: white;
  margin: 0 auto;
  padding:12px;
  box-shadow: gainsboro 1px 10px 40px;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: yellow;
  font-size: 40px;
}
#delete-btn{
  background: white;
  border: 2px solid red;
  color: red;
}
#delete-btn:hover{
  background: red;
  color: white;
}
@media screen and (max-width: 768px) {
  .ticket{
  width: 95%;
}
.alert{
  width: 80%;
}
}
@media screen and (min-width: 768px){
  .ticket{
    width: 500px;
  }
  .alert{
    width: 300px;
  }
}
.ticket{
  padding-top: 10px;
  padding-bottom: 30px;
  height: auto;
  margin: 20px auto;
  background: white;
  border-radius: 10px;
  box-shadow: gainsboro 1px 1px 40px;
}
.ticket>.detail{
  overflow: visible;
  word-break:keep-all;           
  white-space:nowrap;          
  width: 250px;
  margin: 10px auto;
  text-align: left;
  font-size: 30px
}

</style>
