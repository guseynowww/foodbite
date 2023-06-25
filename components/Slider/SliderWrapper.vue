<template>
    <div class="slider">
        <div class="slider__text">
            <h4 class="slider__text-title">Быстро и полезно</h4>
            <p class="slider__text-descr">
                Готовка дома занимает много сил, времени и нервов. Мы привозим еду сразу на целый день, и ты можешь действовать так, как тебе удобно, не подстраиваясь ни под кого и будучи уверенным в качестве продукта!
            </p>

            <h4 class="slider__text-title">Правильный рацион</h4>
            <p class="slider__text-descr"> 
                Мы разработали специальное меню, где учтены все нюансы правильного питания, от баланса БЖУ до их приготовления и дробления рациона.
            </p>
        </div>
        <div class="slider__img">
            <div class="slider__counter">
                <img @click="prevSlide" style="cursor: pointer;" src="@/assets/images/slider/left.svg" alt="left-arrow.svg">
                <span class="current">0{{ currentSlideIndex + 1 }}</span>
                <span class="total">/04</span>
                <img @click="nextSlide" style="cursor: pointer;" src="@/assets/images/slider/right.svg" alt="right-arrow.svg">
            </div>
            <div class="slider__img-wrapp">
                <div class="slider__img-content" 
                        :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }"
                >
                    <slider-item
                        v-for="item in carousel_data"
                        :key="item.id"
                        :item_data="item"
                    >
                    </slider-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SliderItem from './SliderItem.vue'

    export default {
        components: {
            SliderItem
        },
        props: {
            carousel_data: {
                type: Array,
                default: () => {}
            }
        },

        data() {
            return {
                currentSlideIndex: 0
            }
        },

        methods: {
            prevSlide() {
                if (this.currentSlideIndex > 0) {
                    this.currentSlideIndex--
                }
            },

            nextSlide() {
                if (this.currentSlideIndex >= this.carousel_data.length - 1) {
                    this.currentSlideIndex = 0
                } else {
                    this.currentSlideIndex++
                }
            }
        },
    }
</script>

<style lang="scss">
    .slider {
        margin: 0 auto;
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__text {
            width: 330px;
            display: flex;
            flex-direction: column;

            &-title {
                margin-top: 20px;
                font-weight: 700;
                font-size: 20px;
                line-height: 23px;
                color: #000000;
            }

            &-descr {
                font-weight: 300;
                font-size: 18px;
                line-height: 21px;
                color: #000000;
                margin-top: 20px;
            }
        }

        &__counter {
            width: 180px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        &__img {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;

            &-wrapp {
                max-width: 650px;
                max-height: 390px;
                overflow: hidden;
                margin-top: 20px;
            }

            &-content {
                display: flex;
                transition: all ease .5s;
            }
        }
    }

    .current {
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        color: #000000;
        margin-left: 10px;
    }

    .total {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: rgba(0, 0, 0, 0.5);
        margin-right: 10px;
    }
</style>