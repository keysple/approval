<template>
  <div>
    <mu-raised-button label="unselect" @click="unselect"/>
    <mu-table multiSelectable enableSelectAll ref="table" @cellClick="getllll">
      <mu-thead>
        <mu-tr>
          <mu-th>ID</mu-th>
          <mu-th>Name</mu-th>
          <mu-th>Status</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr>
          <mu-td>1</mu-td>
          <mu-td>John Smith</mu-td>
          <mu-td>Employed</mu-td>
        </mu-tr>
        <mu-tr>
          <mu-td>2</mu-td>
          <mu-td>Randal White</mu-td>
          <mu-td>Unemployed</mu-td>
        </mu-tr>
        <mu-tr>
          <mu-td>3</mu-td>
          <mu-td>Stephanie Sanders</mu-td>
          <mu-td>Employed</mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>
  </div>
</template>
<script>
  export default {
    name: 'test',
    methods: {
      unselect () {
        this.$refs.table.unSelectAll()
      },
      getllll(val){
          console.log(val)
      }
    }
  }
</script>
