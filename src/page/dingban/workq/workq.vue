<template>
  <div style="margin-top:0px;overflow:hidden;">
    <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
      <form action="/" style="width:77%;margin-left:13px;">
        <van-search placeholder="请输入群名称" @search="onSearch" v-model="seach_value" />
      </form>
      <div
        style="
    background: #3098FB;
    color: #ffffff;
    height: 30px;
    padding: 2px 13px;
    line-height: 30px;
    margin-top: 9px;
    border-radius: 5px;
"   
 @click="onSearch"
      >查询</div>
    </div>
    <div style="background:#ffffff;">
      <div
        v-for="(item,index) in list"
        :key="index"
        class="groupList"
        @click="goDetile(item)"
      >
        <div style="display: flex;position: relative;">
          <img src="../../../assets/img/group.png" class="groupLeftImg"/>
          <div style="line-height:33px;margin-left:12px;">{{item.name}}</div>
          <img v-if="item.state==0" class="stateClass" src="../../../assets/img/zt1.png"  />
          <img v-if="item.state==1" class="stateClass" src="../../../assets/img/zt2.png"  />
          <img v-if="item.state==2" class="stateClass" src="../../../assets/img/zt3.png" />
        </div>
      </div>
       <img v-show="isshow" style="width:100%;" src="../../../assets/img/no-data.jpg" />
    </div>
  </div>
</template>

<script>
import { Search } from "vant";
import $ from "jquery";
import { httpMethod } from "../../../api/getData.js";
import global_variable from "../../../api/global_variable.js";
export default {
  name: "workqVue",
  data() {
    return {
      seach_value: "",
      list: [],
      isshow:false
    };
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  mounted() {
    this.getGroupInfo(1);
  },
  methods: {
    onSearch: function() {
       this.getGroupInfo(1);
    },
    //获取群列表
    getGroupInfo: function(flag) {
      var typeM = "";
      if (flag == 1) {
        typeM = "myGroupList";
      } else {
        typeM = "groupDetail";
      }
      var params = {
        method: typeM,
        dingUserId: "086404192126244705",
        groupId: "3",
        groupName: this.seach_value
      };
      httpMethod
        .getGroupInfo(params)
        .then(res => {
          console.log(res);
          if (res.code == "success") {
             this.list=[];
            var datalist=res.data;
            if(datalist!=null&&datalist.length>0){
                 this.list =this.list.concat(res.data);
                  // this.list =this.list.concat(res.data);
                 this.isshow=false;
            }else{
              this.list=[];
              this.isshow=true;
            }
          
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    goDetile: function(item) {
      this.$router.push({
        path: "/dingban/workq/workqDeali/workqDeali",
        name: "workqDeali",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>

<style scoped>
@import "../../../page/dingban/workq/workq.css";
</style>