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
    import { clearCookies, getCookies } from "../../../utils/cookies";
    import { CONFIG_COOKIES } from "../../../config/cookies";

    export default {
        name: 'Login',
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
                const token = getCookies(CONFIG_COOKIES.TOKEN);
            })
        }
    }
</script>