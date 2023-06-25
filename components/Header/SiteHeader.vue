<template>
        <header>
            <div class="left-side">
                <img src="@/assets/images/logo.svg" alt="">
                <ul class="header_list">
                    <a href="" v-if="flag"><li>Доставка питания</li></a>
                    <a href=""><li>Обратная связь</li></a>
                </ul>
            </div>
            <support-button @click="open">Связаться с нами</support-button>
        </header>
</template>

<script>  
    import SupportButton from "./SupportButton.vue"

    export default {
        data() {
            return {
                flag: true
            }
        },
        components: {
            SupportButton
        },

        methods: {
            open() {
                this.$emit('open');
            }
        },


    }
</script>

<style lang="scss">
    a {
        text-decoration: none;
    }
    
    header {
        width: 1720px;
        margin: 0 auto;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-side {
            display: flex;
            width: 576px;
            justify-content: space-between;
            align-items: center;

            ul {
                width: 330px;
                display: flex;
                justify-content: space-between;


                li {
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 21px;
                    color: #303030;
                    list-style: none;
                }
            }
        }
    }
</style>