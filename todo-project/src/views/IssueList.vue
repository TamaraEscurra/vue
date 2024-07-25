<template>
  <div>
    <h1>Lista de Problemas</h1>
    <el-button type="success" @click="getIssues()">Obtener problema</el-button>
    <el-row :gutter="12">
      <el-col :span="12"  v-for="( issue, index ) in issues" :key="issue.id">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0">
          <div class="clearfix">
            <el-button style="float: right; margin-top: -5px" @click="closeIssue(index)" type="success" icon="el-icon-check" circle></el-button>
          </div>
          <div>{{ issue.title }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.github.com/repos/diveintocode-corp/vue_seriese_api', //--2
  headers: { //--3
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json',
  },
})

export default {
  name: 'IssueList',
  data () {
    return {
      issues: []
    }
  },
  methods: {
    closeIssue(index){
      this.issues.splice(index, 1);
    },
    getIssues() {
      client.get('/issues')
        .then((res) => {
          this.issues = res.data;
      })
    }
  }
}
</script>