<template>
  <footer class="footer">SpringBoot + Vue.js + MySQL</footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  @include flexbox;
  @include justify-content(center);
  margin-top: 8rem;
  margin-bottom: 3px;
  font-size: 1.2rem;
  color: #bdbdbd;
  &__link {
    margin-left: 0.42rem;
    &:hover {
      color: #a7a7a7;
      text-decoration: underline;
    }
  }
}
</style>