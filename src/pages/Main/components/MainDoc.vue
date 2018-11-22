<template>
  <div style="position: relative">
    <el-row class="tool-bar" ref="theToolBar">
      <el-col :xs="0" :sm="0" :md="6" :lg="8" :xl="6"></el-col>
      <el-col :xs="0" :sm="0" :md="6" :lg="8" :xl="12" class="item"></el-col>
      <el-col :xs="22" :sm="22" :md="12" :lg="8" :xl="6">
        <div class="tool-search">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input><el-button icon="el-icon-search" circle style="margin-left: .1rem"></el-button>
        </div>
      </el-col>
    </el-row>
    <div class="doc-items">
      <el-table
        :data="docItem"
        width="100%"
        align="center"
        style="width: 100%">
        <el-table-column
          label="文件名称"
          width="400">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.docName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="上传者"
          width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.uploadUser }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="文件类型"
          width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.docType }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="上传时间"
          sortable
          prop="scope.row.uploadTime"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.uploadTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="下载次数"
          prop="scope.row.downloads"
          sortable
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.downloads }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="300">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleCheck(scope.$index, scope.row)">查看</el-button>
            <el-button
              size="mini"
              @click="handleDownload(scope.$index, scope.row)">下载</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainDoc',
  data () {
    return {
      search: '',
      docItem: [{
        docName: '某高校科研管理系统摘要.pdf',
        uploadUser: '鹿琦',
        docType: '文档',
        uploadTime: '2018-11-22',
        downloads: '37',
        docId: 'thisisid1'
      },
      {
        docName: '数据库原理、编程与性能[中文版].pdf',
        uploadUser: '鹿琦',
        docType: '文档',
        uploadTime: '2018-11-23',
        downloads: '10',
        docId: 'thisisid2'
      }
      ]
    }
  },
  methods: {
    beforeMount () {

    },
    handleCheck (index, row) {
      alert(row.docName)
    }
  },
  mounted () {
  },
  computed: {
    tableHeight: function () {
      var h = document.documentElement.clientHeight || document.body.clientHeight
      return h
    }
  }
}
</script>
<style lang="stylus" scoped>
  .tool-bar
    box-shadow: 1px 1px 5px #888888
    position fixed
    width 100%
    top 1.5rem
    .el-col
      min-height: 1rem
      display flex
      flex-direction column
      justify-content center
      .tool-search
        min-width 10rem
        text-align center
        .el-input
          width 50%
  .doc-items
    top: 2.55rem
    position fixed
    width 100%
</style>
