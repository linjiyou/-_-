// components/login/login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModal:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGotUserInfo(event){
     const userInfo=event.detail.userInfo
      console.log(userInfo)
      if(userInfo){
        this.setData({
          showModal:false
        })
        this.triggerEvent("loginSuccess",userInfo)
      }else{
        this.triggerEvent("loginFail",userInfo)
      }
    }
  }
})
