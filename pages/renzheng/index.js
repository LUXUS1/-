// pages/renzheng/index.js

// 1. 获取数据库引用
const db = wx.cloud.database().collection("list")
Page({

  /**
   * 页面的初始数据
   */
  data () {
    return {
      errors: [],
      username: "",
      password: ""
    }
  },
  methods: {
    onClickRight() {
      this.$toast('请填写登录信息');
      this.$router.push({ path:'/register'});
    },
    // 表单提交
    onClickButtonSubmit: function (e,username,password) {
      if(this.username == ''){
        this.$toast("用户名不能为空");
        return false;
      }
      if(this.password == ''){
        this.$toast("密码不能为空");
        return false;
      }
      else{
            // this.$toast('token='+token);
          var that=this // 放置指针，便于then操作的获取

        axios.get('接口地址', {
            params: {
                userName: this.username
            }
        }).then(function (response) {
            console.log(response);
            var reslutData=response;  
            console.log(reslutData.data.status )
            if(reslutData.data.status == 1002){
                this.$toast(reslutData.data.desc);
            }
            if(reslutData.data.status == 1000){
                this.$toast(reslutData.data.desc);
                this.$router.push({
                path: '/receData',
                query: {
                  reslutData
                }
              });
            }              
        }.bind(this))
        .catch(function (error) {
            console.log("请求失败"+error);
        });        
        e.preventDefault();
      }
    },
    validEmail: function (password) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(password);
    }
  },
})