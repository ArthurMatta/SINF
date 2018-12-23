<template>
  <div>
    <tr v-for="entry in data">{{entry.ID}}</tr>
  </div>
</template>

<script>
  export default {
    name :'table1',
    data (){
      return {

      }
    },
    props : {
      data : {
        type : Array
      }
    }
  }
</script>
