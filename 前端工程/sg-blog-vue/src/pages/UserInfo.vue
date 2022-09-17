<!-- 用户中心 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <div v-show="isEdit" class="tcommonBox">
                <header>
                    <h1>
                            编辑个人资料
                    </h1>
                </header>
                <section>
                    <ul class="userInfoBox">
                        <li class="avatarlist">
                            <span class="leftTitle">头像</span>
                            <el-upload
                              class="avatar-uploader"
                              name="img"
                              :action="uploadURL"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload">
                              <img   v-if="userInfoObj.avatar" :src="userInfoObj.avatar?userInfoObj.avatar:'static/img/tou.jpg'"  :onerror="$store.state.errorImg" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              <div slot="tip" class="el-upload__tip">点击上传头像，只能上传jpg/png文件，且不超过1mb</div>
                            </el-upload>
                        </li>
                        <li class="username">
                            <span class="leftTitle">昵称</span>
                            <el-input v-model="userInfoObj.nickName" placeholder="昵称"></el-input> <i  class="fa fa-wa fa-asterisk"></i>
                        </li>
                        <li>
                            <span class="leftTitle">电子邮件</span>
                            <span>{{userInfoObj.email}}</span>
                        </li>
                        <li>
                            <span class="leftTitle">性别</span>
                            <template>
                              <el-radio class="radio" v-model="userInfoObj.sex" label="0">男</el-radio>
                              <el-radio class="radio" v-model="userInfoObj.sex" label="1">女</el-radio>
                            </template>
                        </li>


                    </ul>
                    <div class=" saveInfobtn">
                        <a class="tcolors-bg"  href="javascript:void(0);" @click="isEdit=!isEdit">返 回</a>
                        <a class="tcolors-bg" href="javascript:void(0);" @click="saveInfoFun">保 存</a>
                    </div>
                </section>
            </div>
            <div v-show="!isEdit" class="tcommonBox">
                <header>
                    <h1>
                            个人中心
                        <span class="gotoEdit" @click="isEdit=!isEdit"><i class="fa fa-wa fa-edit"></i>编辑</span>
                    </h1>

                </header>
                <section>
                    <ul class="userInfoBox">
                        <li class="avatarlist">
                            <span class="leftTitle">头像</span>
                            <div class="avatar-uploader">
                                <img  :src="userInfoObj.avatar?userInfoObj.avatar:'static/img/tou.jpg'"   :onerror="$store.state.errorImg" class="avatar">
                            </div>
                        </li>
                        <li class="username">
                            <span class="leftTitle">昵称</span>
                            <span>{{userInfoObj.nickName?userInfoObj.nickName:"无"}}</span>

                        </li>
                        <li>
                            <span class="leftTitle">电子邮件</span>
                            <span>{{userInfoObj.email?userInfoObj.email:"无"}}</span>
                        </li>
                        <li>
                            <span class="leftTitle">性别</span>
                            <span>{{userInfoObj.sex==0?'男':'女'}}</span>
                        </li>

                     
                    </ul>

                </section>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../components/header.vue'
import {getUserInfo,savaUserInfo} from '../api/user.js'//获取用户信息，保存用户信息
import store from '../store'
    export default {
        name: 'UserInfo',
        data() { //选项 / 数据
            return {
                uploadURL:'',
                isEdit: false,
                userInfo:{},//本地存储的用户信
                userInfoObj:'',//用户的信息
            }
        },
        methods: { //事件处理器
            handleAvatarSuccess(res, file) {//上传头像
                if(res.code == 200){
                    this.userInfoObj.avatar = res.data;
                    this.userInfoObj.head_start = 1;
                }else{
                    this.$message.error('上传图片失败');
                }

            },
            beforeAvatarUpload(file) {//判断头像大小
                const isJPG = file.type == 'image/png'||file.type=='image/jpg'||file.type=='image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 1;
                // console.log(file);
                if (!isJPG) {
                  this.$message.error('上传头像图片只能是 JPG/JPEG/PNG 格式!');
                }
                if (!isLt2M) {
                  this.$message.error('上传头像图片大小不能超过 1MB!');
                }
                return isJPG && isLt2M;
            },

            saveInfoFun: function(){//保存编辑的用户信息
                var that = this;

                if(!that.userInfoObj.nickName){ //昵称为必填
                     that.$message.error('昵称为必填项，请填写昵称');
                     return;
                }


                savaUserInfo(that.userInfoObj).then((response)=>{//保存信息接口，返回展示页
                    that.$message.success( '保存成功！');
                    that.isEdit = false;
                    that.routeChange() ;
                })
            },
            routeChange: function(){//展示页面信息
                var that = this;
                // console.log(this.$router,this.$route);
                if(localStorage.getItem('userInfo')){
                    that.haslogin = true;
                    that.userInfo = JSON.parse(localStorage.getItem('userInfo'));
                    that.userId = that.userInfo.id;
                    getUserInfo(that.userId).then((response)=>{
                        that.userInfoObj = response;
                        that.userInfoObj.head_start = 0;
                    })
                }else{
                    that.haslogin = false;
                }

            }
        },
        components: { //定义组件
            'wbc-nav':header,
        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           '$route':'routeChange'
         },
        created() { //生命周期函数
            this.routeChange();
            this.uploadURL = store.state.baseURL+'upload'
        }
    }
</script>

<style>
.userInfoBox .avatarlist{
    position: relative;
}

.avatar-uploader {
    display: inline-block;
    vertical-align: top;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 120px;
    height: 120px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    position: absolute;
    top:0;
    left:0;
  }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
    object-fit: cover;
  }
.gotoEdit{
    font-size: 15px;
    float:right;
    cursor: pointer;
    color:#999;
}
.gotoEdit:hover {
    color:#333;
}
/*个人设置*/
.userInfoBox .leftTitle{
    display: inline-block;
    width:100px;
    padding: 10px 0;
}
.userInfoBox .rightInner{
    display: inline-block;
    max-width: calc(100% - 140px);
    vertical-align: top;
}
.userInfoBox li{
    padding:20px;
    border-bottom: 1px solid #ddd;
}
.userInfoBox li:last-child{
    border-bottom: 1px solid transparent;
}
.userInfoBox  .el-input,.userInfoBox  .el-textarea{
    max-width:300px;
    min-width: 100px;
}

.userInfoBox .el-input__inner{
    border-radius: 4px;
}
.userInfoBox  .el-textarea{
    vertical-align: top;
}
.saveInfobtn{
    margin: 20px 0;
    text-align: center;
}
.saveInfobtn a{
    color:#fff;
    padding:6px 20px;
    margin:5px 10px;
    border-radius: 5px;
    font-size: 14px;
}
.userInfoBox .fa-asterisk{
    color: #DF2050;
}
</style>
