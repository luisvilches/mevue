<script>
export default {
  name: 'casos',
  methods:{
      send: function(){
          if(this.validName() && this.validMail() && this.validMessage()){
              var formData =  new FormData();
              formData.append("name",document.autent.name.value);
              formData.append("mail",document.autent.email.value);
              formData.append("msg",document.autent.message.value);
            fetch("http://api.semplicejs.com/lva",{
                method:"post",
                body: formData
            }).then(res => res.json()).then(response => {
                var Msg = document.createElement("h2");
                
                Msg.style.position = "relative";
                Msg.style.top = "120px";
                Msg.style.textAlign = "center";

                if(response.state === "success"){
                    Msg.style.color = "#4834d4";
                    Msg.innerText = "Mensaje enviado, gracias por contactarnos";
                    var father = document.autent.parentNode;
                    father.removeChild(document.autent);
                    father.appendChild(Msg);
                } else {
                    Msg.style.color = "#ff4521";
                    Msg.innerText = "Error al enviar el Mensaje, intente mas tarde, Gracias.";
                }
            })
          };
      },
      validName:function(){
        if(document.autent.name.value === ""){
            document.autent.name.classList.add("borderErr");
            var padre = document.autent.name.parentNode;
            var alert = padre.querySelector("p");
            alert.style.display = "block"
            return false;
        } else {
            document.autent.name.classList.remove("borderErr");
            var padre = document.autent.name.parentNode;
            var alert = padre.querySelector("p");
            alert.style.display = "none";
            return true;
        }
      },
      validMail:function(){
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(document.autent.email.value)) {
            document.autent.email.classList.remove("borderErr");
            var padre = document.autent.email.parentNode;
            var alert = padre.querySelector("p");
            alert.style.display = "none";
            return true;
        } else {
            document.autent.email.classList.add("borderErr");
            var padre = document.autent.email.parentNode;
            var alert = padre.querySelector("p");
            alert.style.display = "block";
            return false;
        }
      },
      validMessage:function(){
        if(document.autent.message.value === ""){
            document.autent.message.classList.add("borderErr");
            var padre = document.autent.message.parentNode;
            var alert = padre.querySelector("p");
            alert.style.display = "block";
            return false;
        } else {
            document.autent.message.classList.remove("borderErr");
            var padre = document.autent.message.parentNode;
            var alert = padre.querySelector("p");
            alert.style.display = "none";
            return true;
        }
      },
  }
}
</script>

<template>

   <div class="exito" id="contact">
        <div class="rown">
            <div class="cell-100">
                <div class="rown">
                    <div class="cell-100 aling-center">
                        <h2>Contacto</h2>
                        <hr>
                        <p>Cualquier idea que tengas en mente, nos encantaría leerte.</p>
                        <br>
                        <i class="material-icons">keyboard_arrow_down</i>
                    </div>
                </div>
                <div class="rown contained">
                    <div class="contained" >
                        <form name="autent" class="form" action="#">
                            <div class="cell-100">
                                <fieldset class="">
                                    <label for="name">
                                        <span data-text="Nombre">Nombre</span>
                                    </label>
                                    <input type="text" name="name" tabindex="0"  placeholder="Nombre" required @keyup="validName()"/>
                                    <p class="alertMessage">Debes introducir tu nombre</p>
                                </fieldset>
                            </div>
                            <div class="cell-100">
                                <fieldset class="">
                                    <label for="email">
                                        <span data-text="Correo Eléctronico">Correo Eléctronico</span>
                                    </label>
                                    <input type="email" name="email" tabindex="0" placeholder="Correo Eléctronico" required/>
                                    <p class="alertMessage">Debes introducir un correo eléctronico valido</p>
                                </fieldset>
                            </div>
                            
                            <div class="cell-100">
                                <fieldset>
                                    <label for="message">
                                        <span data-text="Mensaje">Mensaje</span>
                                    </label>
                                    <textarea cols="10" name="message" rows="5" placeholder="Mensaje" required    ></textarea>
                                    <p class="alertMessage">Debes introducir el mensaje</p>
                                </fieldset>
                            </div>
                        
                            <div class="cell-100">
                                <br>
                                <button type="button" class="btn-send"  @click="send()">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed">
            <ul>
                <li><a class="aling-center btn-messenger" href="https://m.me/lvilches21" target="_blank"> <i class="fab fa-facebook-messenger"></i></a></li>
                <li><a class="aling-center btn-whatsapp" href="https://api.whatsapp.com/send?phone=56984923552" target="_blank"> <i class="fab fa-whatsapp"></i></a></li>
            </ul>
        </div>
   </div>
</template>

<style scoped>

    .alertMessage{
        display: none;
        color: #4834d4;
        margin-top: 5px;
        margin-left:20px;
        font-size: 12px;
    }

    .borderErr{
        border-bottom: 1px solid #ff4521 !important;
    }

    .h{
        margin-top: 20px;
    }

    .contained {
        max-width:1024px;
        margin: 0 auto;
        padding: 20px 16px 40px 16px;
        transform: translateZ(0);
        text-align: left;
    }

    .btn-send{
        background: #fff;
        border: 1px solid #4834d4;
        color: #4834d4;
        width: 100%;
        display: block;
        padding:10px;
        border-radius:50px;
        text-decoration: none;
        font-size: 20px;
    }

    .btn-send:hover{
        background: #4834d4;
        border: 1px solid #4834d4;
        color: #fff;
    }

    label{
        display: none;
    }

    .fixed{
        position: fixed;
        bottom:5px;
        right: 5px;
    }

    .fixed ul li {
        /*display: inline-block;*/
        list-style: none;
        margin:5px;
    }
    .btn-messenger{
        background: #0084ff;
        color: #fff;
        width: 100%;
        display: block;
        padding:10px 12px;
        border-radius:50px;
        text-decoration: none;
    }

    .btn-whatsapp{
        background: #1ebea5;
        color: #fff;
        display: block;
        width: 100%;
        padding:10px 12px;
        border-radius:50px;
        text-decoration: none;
    }

    fieldset{
        border: none;
    }

    input,textarea{
        width: 100%;
        border:none;
        border-bottom: 1px solid #ccc;
        padding: 20px;
        font-size: 14px;
    }

    .pd{
        padding: 20px;
    }

    .fab{
        font-size: 25px;
    }

    .c{
        padding: 40px;
    }

    .exito {
        background: #fff;
        height: 700px;
        padding: 40px;
    }
    @media(max-width:991px){
        .exito{
            height: 800px;
            padding: 0px;
        }
    }
    h2{
        font-size: 30px;
        margin-top:20px;
        font-family: 'Montserrat', sans-serif;
        color: #4834d4;
        font-weight: 200;
    }
    hr{
        border:4px solid #4834d4;
        border-radius: 20px;
        max-width: 100px;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 60px;
    }

    img{
        width: 100%;
    }

    input:focus,input:active,textarea:active,textarea:focus{
        border-bottom: 1px solid #4834d4;
        outline:0px;
    }

    a:focus,button:focus{outline:0px;}


</style>

  