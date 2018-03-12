<script>
export default {
    name:"navbar",
    created(){
        window.addEventListener('scroll', function(){

            if(document.body && document.body.scrollTop){
                if(document.body.scrollTop > 500){
                    document.querySelector('.menux').classList.add('bgMenux');
                } else {
                    document.querySelector('.menux').classList.remove('bgMenux');
                    
                }
            } else {
                document.querySelector('.menux').classList.add('bgMenux');
            }
            
        });
    },
    methods:{
        openMenu: function(){
            document.getElementById('menuList').classList.add('active');
        },

        closeMenu: function(){
            document.getElementById('menuList').classList.remove('active');
        },
        ir: function(el){
            document.getElementById(el).scrollIntoView({behavior: "smooth"});
            document.getElementById('menuList').classList.remove('active');
        }
    }
}
</script>

<template>
    <div class="menux" id="inicio">
        <div class="rown">
            <div class="logo" @click="ir('inicio')">
                <h2>{ lva }</h2>
            </div>
            <div class="menu" id="menu" @click="openMenu()">
                <i class="material-icons">menu</i>
            </div>
        </div>


        <div id="menuList" class="align-center">
            <a id="close" @click="closeMenu()"><i class="material-icons">close</i></a>
            <ul>
                <li @click="ir('inicio')">| Inicio</li>
                <li @click="ir('service')">| Servicios Destacados</li>
                <li @click="ir('jobs')">| Sistema de Trabajo</li>
                <li @click="ir('contact')">| Contacto</li>
            </ul>
        </div>
    </div>
</template>


<style scoped>
    .logo,.menu{
        color: #fff;
    }

    .logo{
        font-family: 'Comfortaa', cursive;
        position: absolute;
        top: 20px;
        left:20px;
        cursor: pointer;
    }

    .logo h2{
        text-align: left;
    }

    .menu{
        position: absolute;
        top: 20px;
        right:20px;
        cursor: pointer;
    }

    .menux{
        position: fixed;
        width: 100% !important;
        z-index: 9000;
        padding: 33px;
    }

    .bgMenux{
        background: linear-gradient(to right, rgba(0,0,255,0.76) 0%, rgba(126,71,255,0.76) 100%);
    }


    #menuList{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom:0;
        z-index: 90000;
        background: linear-gradient(to right, rgba(0,0,255,0.95) 0%, rgba(126,71,255,0.95) 100%);
    }

    #menuList ul li{
        list-style: none;
        font-size: 30px;
        cursor: pointer;
        margin: 60px;
        color: #fff;
        font-family: 'Comfortaa'
    }

    #menuList a{
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
    }

    .active{
        display: block !important;
    }

    #close{
        cursor: pointer;
    }
</style>
