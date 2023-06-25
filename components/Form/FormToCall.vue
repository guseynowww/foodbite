<template>
    <div>
    <h2 class="form__title">Заказывай пробный день прямо сейчас!</h2>
    <div class="form__block">
        <input type="text" name="name" placeholder="Ваше имя">
        <input type="text" name="tel" placeholder="Ваш номер телефона">
        <img src="@/assets/icons/Form/right.svg" alt="arrow">
        <support-button class="offer__btn" style="height: 50px;">Перезвоните мне</support-button>
    </div>
    </div>
</template>

<script>
    import SupportButton from '~/components/Header/SupportButton.vue';
    export default {
        components: {
            SupportButton
        }
    }
</script>

<style lang="scss">
    .form__title {
        color: #000;
        text-align: center;
        font-size: 36px;
        font-family: Roboto;
        margin: 0 auto;
        margin-top: 50px;
    }

    .form__block {
        width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 70px;

        input {
            width: 280px;
            height: 50px;
            padding: 14.5px 20px;
            background: #FFF;
            box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.20);   
            border: none;
            color: #757575;
            text-align: center;
            font-size: 18px;
            font-family: Roboto;
            outline: none;
        }
    }
</style>