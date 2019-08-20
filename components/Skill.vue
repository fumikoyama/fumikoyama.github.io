<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <strong>{{ name }}</strong>
    <progress class="progress" :value="value" max="100">
      {{ value }}%
    </progress>
  </div>
</template>
