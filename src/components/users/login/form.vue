<template>
    <a-form
        @submit="signIn"
    >
        <a-form-item
            label="Username"
        >
            <a-input
                v-decorator="[
                    'note',
                    {rules: [{ required: true, message: 'Please input your username!' }]}
                ]"
                name="username"
                placeholder="Email"
                :v-model="state.username"
                @change="logChange"
            />
        </a-form-item>
        <a-form-item
            label="Password"
        >
            <a-input
                name="password"
                :type="state.passwordType"
                placeholder="Password"
                :v-model="state.password"
                @change="logChange"
            >
                <a-icon slot="suffix" type="eye" @click="viewPassword" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-button
                html-type="submit"
                type="primary"
                :loading="state.loading"
            >
                LOGIN
            </a-button>
        </a-form-item>
    </a-form>
</template>


<script>
    import { MENU } from "../../../config/menu";
    import { setCookies } from "../../../utils/cookies";
    import { CONFIG_COOKIES } from "../../../config/cookies";

    export default {
        name: 'FormLogin',
        data() {
            return {
                state: {
                    username: "",
                    password: "",
                    viewPassword: false,
                    passwordType: "password",
                    loading: false
                },
            }
        },
        methods: {
            logChange(e) {
                this.state[e.target.name] = e.target.value;
            },
            viewPassword() {
                this.state.viewPassword = !this.state.viewPassword;
                this.state.passwordType = this.state.viewPassword ? "text" : "password";
            },
            signIn() {
                this.state.loading = true;
                setCookies(CONFIG_COOKIES.FULLNAME, "dummy");
                setCookies(CONFIG_COOKIES.TOKEN, "dummy");
                this.state.loading = false;
                this.$router.push(MENU.DASHBOARD)
            }
        }
    }
</script>