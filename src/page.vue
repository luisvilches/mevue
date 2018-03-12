<template>
  <section class="container-full">
      <Navbar/>
      <Head/>
      <Service />
      <Sistema/>
      <Contacto/>
      <Foo/>
  </section>
</template>

<script>
import Head from './components/head.vue'
import Service from './components/service.vue'
import Navbar from './components/navbar.vue'
import Sistema from './components/sistemaTrabajo.vue'
import Contacto from './components/contacto.vue'
import Foo from './components/footer.vue'
export default {
  name:"main",
  components: {
    Head,
    Service,
    Navbar,
    Sistema,
    Contacto,
    Foo
  }
}
</script>

<style scoped>

</style>
