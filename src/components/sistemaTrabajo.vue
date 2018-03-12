<script>
export default {
  name:"trabajo"
}
</script>

<template>
    <div class="bg" id="jobs">
        <div class="rown">
            <div class="cell-100">
                <br>
                <h2 class="aling-center">SISTEMA DE TRABAJO</h2>
                <hr>
            </div>
        </div>
        <div class="rowm">
            <div class="cell-60">
                <div class="cell-100">
                    <div class="cell-10"><i class="material-icons">email</i></div>
                    <div class="cell-90">
                        <h4>01 PRESUPUESTO</h4>
                        <br>
                        <p>Ya que aprueba el presupuesto, realiza el anticipo y envía su información para desarrollar la propuesta a diseñar; imágenes, textos, referencias, etc.</p>
                        <br>
                    </div>
                </div>
                <div class="cell-100">
                    <div class="cell-10"><i class="material-icons">assignment</i></div>
                    <div class="cell-90">
                        <h4>02 ENVÍO DE INFORMACIÓN</h4>
                        <br>
                        <p>Solicite su presupuesto y nosotros le enviaremos la cotización con tiempos de entrega establecidos, formas de pago y acuerdo de trabajo.</p>
                        <br>
                    </div>
                </div>
                <div class="cell-100">
                    <div class="cell-10"><i class="material-icons">colorize</i></div>
                    <div class="cell-90">
                        <h4>03 PROPUESTA DE DISEÑO</h4>
                        <br>
                        <p>Creamos una propuesta de diseño acorde a su solicitud y le enviamos la muestra para revisión y/o aprobación.</p>
                        <br>
                    </div>
                </div>
                <div class="cell-100">
                    <div class="cell-10"><i class="material-icons">check_circle</i></div>
                    <div class="cell-90">
                        <h4>04 APROBACIÓN</h4>
                        <br>
                        <p>Ya aprobado el diseño, se realiza la preparación de archivos para entrega según el tipo proyecto.</p>
                        <br>
                    </div>
                </div>
                <div class="cell-100">
                    <div class="cell-10"><i class="material-icons">done_all</i></div>
                    <div class="cell-90">
                        <h4>05 ENTREGA FINAL</h4>
                        <br>
                        <p>Se realiza la etapa de entrega junto con el pago final del proyecto.</p>
                    </div>
                </div>
            </div>
            <div class="cell-40">
                <img src="http://elementalx.org/wp-content/uploads/2017/10/Pixel2.png" alt="">
            </div>
        </div>
    </div>
</template>


<style scoped>

    img{
        width: 100%;
    }
    .bg{
        background: linear-gradient(to right, rgba(0,0,255,.9) 0%, rgba(126,71,255,1) 100%);
        height: 800px;
        padding:20px;
        color: #fff;
    }

    @media(max-width:991px){
        .bg{
            height: 1500px;
        }
    }

    h2{
        color: #fff;
        font-size: 30px;
        margin-top:20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
    }
    hr{
        border:2px solid #fff;
        border-radius: 20px;
        max-width: 100px;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 60px;
    }

    .cell-10{
        text-align: center;
    }
</style>
