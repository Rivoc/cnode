<template>
  <div class="pagination">
    <ul class="button-wrap clearfix">
      <li class="disabled"
          @click="handleaBtnClick">首页</li>
      <li class="disabled"
          v-show="isShow">...</li>
      <li class="disabled"
          @click="handleaBtnClick">«</li>
      <li v-for="(page,index) in buttonPages"
          :key="index"
          :class="[{active:(page==currentPage)},'disabled','pageBtn']"
          @click="handleaBtnClick(page)">
        {{page}}
      </li>
      <li class="disabled">...</li>
      <li class="disabled"
          @click="handleaBtnClick">»</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  data () {
    return {
      buttonPages: [1, 2, 3, 4, 5],
      currentPage: 1,
      isShow: false
    }
  },
  methods: {
    handleaBtnClick (page) {
      // 如果点击的是上一页，下一页，首页
      if (typeof page !== 'number') {
        // 获取当前被激活的页码
        let currentNumber = Number(document.getElementsByClassName('active')[0].innerText)
        // 获取当前被激活的页码在页码数组里的下标,index的范围是0-4
        let index = this.buttonPages.indexOf(currentNumber)
        this.currentPage = this.buttonPages[index + 1]
        switch (page.target.innerText) {
          case '»':
            // 先改变按钮的样式再进行数组的操作
            // index的范围是0-3，因为样式改变后，索引前移
            this.currentPage = this.buttonPages[index + 1]// ！一定要先将页码样式改变，否则会跳过最后一个页码  因为点击事件触发原本的“最后一个页码”的索引前移
            document.getElementsByClassName('pageBtn')[index + 1].click()
            break
          case '«':
            // 防止 index-1取到负值
            if (index - 1 < 0) {
              index = 1
            }
            this.currentPage = this.buttonPages[index - 1]
            document.getElementsByClassName('pageBtn')[index - 1].click()
            break
          case '首页':
            // 将页码数组初始化
            this.buttonPages = [1, 2, 3, 4, 5]
            this.currentPage = this.buttonPages[0]
            this.isShow = false
            this.$emit('pageChange', 1)
            break
        }
      } else {
        this.isShow = (page > 5 ? 'true' : false)
        if (page === this.buttonPages[4]) {
          this.buttonPages.shift()
          this.buttonPages.splice(4, 0, this.buttonPages[3] + 1)
        } else if (page === this.buttonPages[0] && page !== 1) {
          this.buttonPages.splice(4, 1)
          this.buttonPages.unshift(this.buttonPages[0] - 1)
        }
        this.currentPage = page
        this.$emit('pageChange', this.currentPage)
      }
      // 点击的是页码
      // 如果点击到当前数组里的最后一个页码，去掉数组里的第一个页码，并插入页码作为最后一个页码，如果点击的是第一个页码，去掉最后一个页码，并插入页码作为第一个页码
      // 把点击的页码变成当前页
    }
  }

}
</script>
<style lang="stylus" scoped>
.pagination {
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;

  .button-wrap {
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #ddd;
    font-family: 'Tahoma';
    font-size: 14px;

    .disabled {
      float: left;
      width: 30px;
      padding: 4px;
      border-right: 1px solid #ddd;
      cursor: pointer;
    }

    .disabled:hover {
      background: #f5f5f5;
    }

    .disabled:nth-last-of-type(1) {
      border: none;
    }

    .active {
      color: #80bd01;
    }
  }
}
</style>
