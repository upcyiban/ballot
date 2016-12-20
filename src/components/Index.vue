<template>
  <div class="index">
    <router-link class="button" id="create-btn" to="/create">+</router-link>
    <h1 v-show="!tickets.length"><br>点击右下角按钮新建</h1>
    <div class="ticket" v-for="ticket in tickets">
    <h1>{{ticket.detail}}</h1>
    <img :src="ticket.picsrc"><br>
    <div class="detail">人数:{{ticket.num}}</div>
    <div class="detail">截至日期:{{ticket.deadline}}</div>
    <button class="button" id="delete-btn" @click="DeleteTicket(ticket.id)">删除</button>
    </div>
    <router-link class="button" id="create-btn" to="/create">+</router-link>
    
  </div>
</template>

<script>
import {APIURL} from '../config'
export default {
    name: 'index',
    data () {
      return {
        tickets : [],
        id : ''
      }
    },
    created () {
      this.Fetch();
    },
    methods : {
      Fetch : function () {
        this.$http.get(APIURL+'/ballot/getallballot').then(response=>{
        this.tickets = response.data;
        console.log(this.tickets);
      })
      },
      DeleteTicket : function (id) {
        this.$http.get(APIURL+'/ballot/delete?id='+id).then(response=>{
          console.log(response.data);
          this.Fetch();
        })
      }
    }
}
</script>

<style>
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
.ticket{
  padding-top: 10px;
  height: 600px;
  width: 95%;
  margin: 20px auto;
  background: white;
  border-radius: 10px;
  box-shadow: gainsboro 1px 1px 40px;
}
.ticket>.detail{
  width: 250px;
  margin: 10px auto;
  text-align: left;
  font-size: 30px
}

</style>
