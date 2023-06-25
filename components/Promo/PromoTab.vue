<template>
    <div class="tab_content" v-show="name == selectedName" :class="{ fade: name === selectedName }">
        <slot></slot> 
    </div>
</template>

<script>
    import { inject } from 'vue'

    export default {
        props: ['name'],
        setup() {
            const selectedName = inject('selectedName')

            return {
                selectedName
            }
        }
    }
</script> 

<style lang="scss"> 
    .tab_content {
        display: flex;

    }

    .tab_img {
        width: 850px;
        height: 545px;
    }

    .tab__descr {
        position: absolute;
        margin-top: 300px;
        margin-left: 410px;
        width: 550px;
        height: 359px;
        background: rgba(251, 254, 93, .8);
        padding: 50px;
        font-size: 24px;
        font-weight: 300;
        line-height: 36px;
        color: rgba(0, 0, 0, .7);
        box-sizing: border-box;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    }

    .fade {
        animation-name: fade;
        animation-duration: 1.3s;
    }

    @keyframes fade {
        from {
            opacity: 0.3;
        }

        to {
            opacity: 1;
        }
    }

</style>