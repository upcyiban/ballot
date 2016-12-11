<template>
  <div class="index">
    <router-link class="button" id="create-btn" to="/create">+</router-link>
    <div class="ticket" v-for="ticket in tickets">
    <h1>我的抽签{{ticket.id}}</h1>
    <img :src="ticket.picsrc"><br>
    <dd>创建人:{{ticket.yibanName}}</dd>
    <button class="button" @click="DeleteTicket(ticket.id)">删除</button>
    </div>
    {{tickets}}
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
        this.$http.delete(APIURL+'/ballot?id='+id).then(response=>{
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
  padding:18px;
  box-shadow: gainsboro 1px 10px 40px;
  border-radius: 50%;
  font-size: 20px;
  color: white;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: yellow;
  font-size: 40px;
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

</style>
