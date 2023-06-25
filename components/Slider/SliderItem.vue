<template>
    <div>
        <img class="slider_img" :src="require('@/assets/images/slider/' + item_data.img)" alt="">
    </div>
</template>

<script>
    export default {
        props: {
            item_data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss">

    .slider_img {
        width: 650px;
        height: 390px;
        background: rgba(255, 255, 255, 0.002);
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    }

</style>