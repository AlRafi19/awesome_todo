<!-- Started to like programming -->
<!-- I believe i can be a programmer -->
<!-- Firebase doesnot utilize arrays only object data -->

<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <taskabbas
        v-for="(task, key) in tasksblah"
        :key="key"
        :task="task"
        :id="key"
      >
      </taskabbas>
    </q-list>
  </q-page>
</template>
<script>

export default {

    computed: {
      tasksblah(){
        return this.$store.getters.['tasks/todos']
      }
    },
    components:{
        'taskabbas' : require('components/Task/Task.vue').default
    }
}
</script>

<style lang="stylus"></style>
