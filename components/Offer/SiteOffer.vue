<template>
    <div class="offer">
        <div class="offer__text">
            <h3 class="offer__text-title">Что мы можем вам предложить?</h3>
            <div class="offer__text-descr">
                Наша основная идея - это правильное питание. Оно может быть простым и вкусным. Мы не просто доставка, мы сервис! Мы взяли на себя все расчеты БЖУ, калорийности, объемов порций и прочие важные, но скучные аспекты. Вам остается только полезная, сытная и правильная еда, которую мы привозим прямо под дверь.
            </div>
        </div>
        
        <a href="/Contacts"><support-button hre @click="open" class="offer__btn">Связаться с нами</support-button></a>
    </div>
</template>

<script>
    import SupportButton from '../Header/SupportButton.vue';

    export default {
        components: {
            SupportButton
        },

        methods: {
            open() {
                this.$emit('open')
            }
        },
    }
</script>

<style lang="scss">
    .offer {
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__text {
            display: flex;
            flex-direction: column;
            width: 500px;

            &-title {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 36px;
                line-height: 42px;
                color: #000000;
            }

            &-descr {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                line-height: 24px;
                color: #000000;
                margin-top: 30px;
            }
        }
    }

    .offer__btn {
        background: #303030;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        color: #FFFFFF;
        background: #303030;
    }

    .offer__btn:hover {
        color: #000000;
        background: #FFFFFF;
        transition: all 0.5s ease-out;
    }
</style>