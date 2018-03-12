<script>
export default {
  name:"foo"
}
</script>

<template>
    <section>
        <ul>
            <li> | © 2018 Luis Vilches Abarca </li>
            <li> | Desarrollo Webs, Apps y Sistemas a medida </li>
            <li> | Desarrollado con amor <i class="material-icons">favorite</i> </li>
        </ul>
    </section>
</template>

<style scoped>
    section{
        width: 100%;
        background: linear-gradient(to right, rgba(0,0,255,0.76) 0%, rgba(126,71,255,0.76) 100%);
        padding: 40px;
    }

    section ul li{
        display: inline-block;
        list-style: none;
        color: #fff;
        margin: 10px;
    }

    .logo{
        font-family: 'Comfortaa', cursive;
    }

    .material-icons{
        position: relative;
        top: 5px;
    }
</style>
