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
    <progress :value="value" max="100" class="progress">
      {{ value }}%
    </progress>
  </div>
</template>
