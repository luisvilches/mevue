<script>
export default {
  name: 'head'
}

</script>


<template>
    <section>
        <video id="mivideo" autoplay loop>
            <source src=".././assets/627965480.mp4" type="video/mp4" />
        </video>

        <div class="vertical-centered-text ha2">
            <h1 class="aling-center log">Soluciones digitales que  
                <br> transforman empresas 
                <br>
                <br><a href="">Contactanos</a>
                <br>
                <br>
                <i class="material-icons">keyboard_arrow_down</i>
            </h1>
        </div>
      </section>
</template>

<style scoped>
    section{
        width: 100%;
        height: 695px;
        background: linear-gradient(to right, rgba(0,0,255,0.76) 0%, rgba(126,71,255,0.76) 100%);
        margin-top: -40px;
    }

    video { 
 
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        
        position: fixed;    
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%); 
        
        z-index: -100;
        
        background-size: cover;
        
    }

    .ha2{
        position: absolute;
        top:0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .log{
        font-size: 50px;
        font-family: 'Comfortaa', cursive;
        color: #fff;
        font-weight: 200;
    }

    @media (max-width:991px){
        .log{
            font-size: 40px;
        }
    }

    .log span{
        font-size: 30px;
    }

    .log a{
        font-size: 20px;
        border-radius: 50px;
        padding: 20px 40px;
        border: 1px solid #fff;
        color: #fff;
        text-decoration: none;
    }

    .log a:hover{
        color: #4834d4;
        background: #fff;
    }
</style>
