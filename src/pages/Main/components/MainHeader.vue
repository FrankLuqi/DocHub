<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" ref="header"
           background-color="rgb(50, 64, 120)"
           text-color="#3366FF"
           active-text-color="#fff"
           style="box-shadow: 1px 1px 5px #888888; position: fixed; width: 100%"
           @select="handleSelect">
    <el-row>
      <el-col :xs="4" :sm="8" :md="6" :lg="6" :xl="6">
        <div class="grid-content logo">
          <div><img src="@/assets/img/logo.png"><span class="title">DocHub</span></div>
        </div></el-col>
      <el-col :xs="16" :sm="8" :md="12" :lg="12" :xl="12" class="item">
        <el-menu-item index="1">文 件</el-menu-item>
        <el-menu-item index="2">上 传</el-menu-item>
        <el-menu-item index="3">消 息</el-menu-item>
        <el-menu-item index="4">管 理</el-menu-item>
      </el-col>
      <el-col :xs="4" :sm="8" :md="6" :lg="6" :xl="6">
        <div class="grid-content user-region">
          <div>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <span class="user-photo">
                <img v-bind:src="UserPhoto" alt="">
                </span>
                <span class="username">{{UserName}}</span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>
                  <div class="user-info" style="background-color:#eff4f8; width: 4rem; height: 4rem; display: flex; flex-direction: column; justify-content: center; text-align: center; margin-bottom: .2rem">
                    <span class="user-photo">
                      <img v-bind:src="UserPhoto" style="border-radius: 50%; border: 2px solid #999">
                    </span>
                    <span class="username" style="color: black">{{UserName}}</span>
                    <span class="user-role" style="color: black">{{UserDepartment}}{{UserRole}}</span>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item command="getUserInfo"><div>个人资料</div></el-dropdown-item>
                <el-dropdown-item command="changePassword"><div>修改密码</div></el-dropdown-item>
                <el-dropdown-item command="logout"><div>退出登录</div></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-menu>
</template>
<script>
import userFace from '@/assets/img/user-face.jpg'
export default {
  name: 'MainHeader',
  data () {
    return {
      activeIndex: '1',
      UserPhoto: userFace,
      UserName: '鹿琦',
      UserDepartment: '生产部',
      UserRole: '经理'
    }
  },
  methods: {
    handleSelect (key, keypath) {
      var changeto = ''
      if (key === '1') {
        changeto = 'doc'
      } else if (key === '2') {
        changeto = 'upload'
      } else if (key === '3') {
        changeto = 'message'
      } else if (key === '4') {
        changeto = 'manage'
      }
      this.$emit('handleSelect', changeto)
    },
    handleCommand (command) {

    }
  }
}
</script>
<style lang="stylus" scoped>
  .grid-content
    height 1.5rem
    padding 0.3rem  0.5rem
    box-sizing border-box
    @media screen and (max-width: 800px)
      padding 0.3rem  0
  .logo
    font-size .7rem
    color white
    font-weight bold
    display flex
    flex-direction column
    justify-content center
    text-align center
    img
      width 1rem
      @media screen and (max-width: 800px)
        width 0.6rem
    .title
      @media screen and (max-width: 800px)
        display none
  .item
    display flex
    flex-direction left
    .el-menu-item
      width 2rem
      height 1.5rem
      display flex
      flex-direction column
      justify-content center
      text-align center
      font-size .35rem
      font-weight bold
      @media screen and (max-width: 800px)
        padding 0 0
  .user-region
    display flex
    flex-direction column
    justify-content center
    width 3rem
    .user-photo
      width .7rem
      height .7rem
      img
        width .7rem
        height .7rem
        border-radius 50%
        border 1px solid #999
    .username
      width .5rem
      font-size .25rem
      margin-left .3rem
      color white
      @media screen and (max-width: 800px)
        display none
    .user-info
      background black
      width 3rem
      height 1.5rem
      img
        width .5rem
        height rem
</style>
