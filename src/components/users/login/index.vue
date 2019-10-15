<template>
    <div class="login">
        <div class="login-inner">
            <img :src="state.logo" alt="" />
            <h1 class="login-title">LOGIN</h1>
            <p>Welcome back, please login to your account</p>
            <FormLogin />
        </div>
    </div>
</template>


<script>
    import Logo from "../../../assets/logo.png";
    import FormLogin from "./form.vue";
    import { MENU } from "../../../config/menu";

    export default {
        name: 'Login',
        props: {
            history: Object
        },
        components: {
            FormLogin
        },
        data() {
            return {
                state: {
                    logo: Logo
                },
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                console.log(MENU);
                console.log(this["_props"]);
            })
        }
    }
</script>