<!-- 赞赏模块 -->
<template>
  <div class="tRewardBox tcommonBox">
    <header>
      <h1>
        <a href="#/DetailShare" target="_blank"> 赞赏 </a>
      </h1>
    </header>
    <section>
      <div>
        <img
          src="static/img/coffee.jpg"
          alt=""
          style="max-width: 20%"
          class="coffee"
        />
      </div>
      <h1>赞赏说明：</h1>
      <p>
        如果我的课程对你有所帮助，你可以请作者喝杯咖啡表示鼓励
        ☕️)请备注留下你的姓名/昵称方便我公布赞赏记录。
      </p>
      <hr />
      <h1>赞赏方式：</h1>
      <el-row :gutter="30">
        <el-col :span="12" class="donate-item">
          <div class="donate-tip">
            <img
              :src="
                rewardData.wechat_image
                  ? rewardData.wechat_image
                  : 'static/img/wx_pay.png'
              "
              :onerror="$store.state.errorImg"
            />
            <span>微信扫一扫，请我喝杯咖啡</span>
          </div>
        </el-col>
        <el-col :span="12" class="donate-item">
          <div class="donate-tip">
            <img
              :src="
                rewardData.alipay_image
                  ? rewardData.alipay_image
                  : 'static/img/ali_pay.jpg'
              "
              :onerror="$store.state.errorImg"
            />
            <span style="padding-top: 14px">支付宝扫一扫，请我喝杯咖啡</span>
          </div>
        </el-col>
      </el-row>
      <h1>@赞赏记录：</h1>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="payTime"
          label="日期"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="赞赏人"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="金额"
          align="center"
        ></el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    //选项 / 数据
    return {
      rewardData: "", //赞赏二维码
      tableData: [
        {
          //赞赏数据
          "payTime":"2021-10-23",
          "name":"智障少女欢乐多",
          "money":"188"
        },
        {
          "payTime":"2021-10-28",
          "name":"刺猬",
          "money":"50"
        },
        {
          "payTime":"2021-11-03",
          "name":"迅捷小鹿",
          "money":"30"
        },
      ],
    };
  },
  methods: {
    //事件处理器
    showInitDate: function (date, full) {
      //时间处理
      return initDate(date, full);
    },
  },
  components: {
    //定义组件
  },
  created() {
    //生命周期函数
    var that = this;
  },
};
</script>

<style>
.tRewardBox section {
  padding-bottom: 20px;
}
.tRewardBox section h1 {
  margin: 10px 0;
  font-size: 25px;
  font-weight: 700;
  /*text-align: center;*/
  line-height: 30px;
}
.tRewardBox section p {
  margin: 10px 0;
  line-height: 24px;
}
.tRewardBox section hr {
  background: #ccc;
  margin-bottom: 30px;
}

.tRewardBox .donate-item {
  text-align: right;
  color: #44b549;
}
.tRewardBox .donate-item:last-child {
  text-align: left;
  color: #00a0e9;
}
.tRewardBox .donate-item img {
  width: 100%;
  display: block;
  height: auto;
}
.tRewardBox .donate-item div {
  display: inline-block;
  width: 150px;
  padding: 0 6px;
  text-align: center;
  box-sizing: border-box;
}
.tRewardBox .donate-item div span {
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  text-align: center;
}
.tRewardBox .el-table__body-wrapper {
  overflow: hidden;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background: transparent;
}
</style>
