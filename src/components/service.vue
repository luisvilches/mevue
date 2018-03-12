<script>
export default {
  name:"service"
}
</script>

<template>
    <section id="service" class="box conatiner-lg">
        <div class="rown-15">
            <div class="cell-100">
                <h2 class="aling-center"> SERVICIOS DESTACADOS </h2>
                <hr>
            </div>
        </div>
        <div class="rown-15">
            <div class="cell-25 cell-tablet-50 aling-center pdc">
                <div class="card">
                    <i class="material-icons">phone_android</i>
                    <h3>Desarrollo de Apps</h3>
                    <br>
                    <p>Desarrollo de aplicaciones nativas e híbridas, nos ajustamos a los requerimientos de tu idea de negocio.</p>
                </div>
            </div>
            <div class="cell-25 cell-tablet-50 aling-center pdc">
                <div class="card">
                    <i class="material-icons">desktop_mac</i>
                    <h3>Desarrollo Web</h3>
                    <br>
                    <p>Desarrollo de sistemas y portales web de fácil administración y que además cuentan con las más diversas herramientas.</p>
                </div>
            </div>
            <div class="cell-25 cell-tablet-50 aling-center pdc">
                <div class="card">
                    <i class="material-icons">shopping_cart</i>
                    <h3>E-commerce</h3>
                    <br>
                    <p>Abre tu tienda en línea, y comienza a vender por internet hoy</p>
                </div>
            </div>
            <div class="cell-25 cell-tablet-50 aling-center pdc">
                <div class="card">
                    <i class="material-icons">lightbulb_outline</i>
                    <h3>Fabrica de ideas</h3>
                    <br>
                    <p>Juntos crearemos una gran propuesta, que se adapte a tu negocio y tus necesidades.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

  .box{
    height: 600px;
    padding-top: 40px;
    background: #fafafa;
  }

  .box h2{
      font-size: 30px;
      color: #30336b;
      margin-top:20px;
      font-weight: 200;
      font-family: 'Montserrat', sans-serif;
   }

  hr{
      border:2px solid #4834d4;
      border-radius: 20px;
      max-width: 100px;
      margin: 0 auto;
      margin-top: 20px;
  }

  .material-icons{
      color: #4834d4;
      font-size: 50px;
      margin-top: 60px;
  }

  .pdc{
      padding: 20px;
  }

  .card{
      min-height: 300px;
      padding: 10px;
      border: 1px solid #fff;
      background: #fff;
      border-radius: 15px;
      box-shadow: 1px 1px 5px #ccc;
  }

  .cards:hover{
      box-shadow: 0px 3px 5px #ccc;
  }

  .box h3{
      color: #30336b;
  }

  .box p{
      text-align: center;
  }

  @media(max-width:991px){
      .card{
          padding:20px;
      }

      .box{
          height: 1200px;
      }
  }
</style>

