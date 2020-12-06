<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no - pointer - events" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.complete }">{{
        task.name
      }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <div class="row">
        <div class="col justify-center">
          <q-icon name="event" size="15px" class="q-mr-xs" />
        </div>
        <div class="col">
          <q-item-label class="row justify-end" caption>{{
            task.due_date
          }}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ task.due_time }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],

  methods: {
    ...mapActions("tasks", ["updateTask"])
  }
};
</script>
<style lang="stylus"></style>
