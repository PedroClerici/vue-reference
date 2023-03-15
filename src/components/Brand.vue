<template>
  <div class="car-brands">
    <h3>Car brands</h3>
    <slot name="brands"></slot>
    <slot></slot>
    <br>
    <slot name="other"></slot>
  </div>
</template>

<style scoped>
  .car-brands {
    border: 1px solid #2196f3;
    padding: 10px 20px;
  }

  /* This style does not apply */
  li {
    color: red;
  }
</style>