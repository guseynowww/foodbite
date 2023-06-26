<template>
    <div class="modal">
        <div class="modal__dialog">
            <div class="modal__content">
                <form action="#">
                    <div @click="close" class="modal__close">&times;</div>
                    <div class="modal__title">Мы свяжемся с вами как можно быстрее!</div>
                    <input required placeholder="Ваше имя" name="name" type="text" class="modal__input">
                    <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input">
                    <support-button class="modal-btn">Перезвоните мне</support-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import SupportButton from '../Header/SupportButton.vue'
export default {
    components: {
        SupportButton
    },

    data() {
        return {
            
        }
    },

    methods: {
        close() {
            this.$emit('close')
        }
    },
}
</script>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1050;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgba(0, 0, 0, .5);
    }
    .modal__dialog {
        max-width: 500px;
        margin: 40px auto;
    }
    .modal__content {
        position: relative;
        width: 100%;
        padding: 40px;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 4px;
        max-height: 80vh;
        overflow-y: auto;
    }

    /* form {
        display: flex;
        flex-direction: column;
    } */

    .modal__close {
        position: absolute;
        top: 8px;
        right: 14px;
        font-size: 30px;
        color: #000;
        opacity: .5;
        font-weight: 700;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    .modal__title {
        text-align: center;
        font-size: 22px;
        text-transform: uppercase;
    }
    .modal__input {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        width: 280px;
        height: 50px;
        background: #fff;
        box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
        border: none;
        font-size: 18px;
        text-align: center;
        padding: 0 20px;
        outline: 0;
    }
    .modal-btn {
        margin: 0 auto;
        margin-top: 20px;
        width: 280px;
        height: 50px;
        background: #303030;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        color: #FFFFFF;
        background: #303030;
    }

    .modal-btn:hover {
        color: #000000;
        background: #FFFFFF;
        transition: all 0.5s ease-out;
    }
</style>