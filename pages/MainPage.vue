<template>
  <div>
  <side-panel></side-panel>
  <div class="container">
    <promo-tabs>
    </promo-tabs>
    <div class="promo__lifetext">Живи полной жизнью!</div>
    <hr class="line">
    <site-offer @open="isModalShow = true"></site-offer>
    <slider-wrapper
      :carousel_data="SliderItem"
      :sliderCurrent="SliderCurrent"
    >
    </slider-wrapper>
    <hr class="line">
    <calculate-form ></calculate-form>
    <menu-cards></menu-cards>
    <hr class="line">
    <promotion-action></promotion-action>
    <modal-window v-if="isModalShow" @close="isModalShow = false"></modal-window>
  </div>
    <site-footer></site-footer>
  </div>
</template>
<script>
  import PromoTabs from "~/components/Promo/PromoTabs.vue";
  import SiteOffer from "~/components/Offer/SiteOffer.vue";
  import SliderWrapper from "~/components/Slider/SliderWrapper.vue";
  import CalculateForm from "~/components/Calculate/CalculateForm.vue"
  import MenuCards from "~/components/Menu/MenuCards.vue"
  import SidePanel from "~/components/SidePanel/SidePanel.vue";
  import PromotionAction from "~/components/Promotion/PromotionAction.vue";
  import SiteFooter from '~/components//Footer/SiteFooter.vue';
  import ModalWindow from '~/components/Modal/ModalWindow.vue';

export default {
    name: 'MainPage',

  components: {
    PromoTabs,
    SiteOffer,
    SliderWrapper,
    CalculateForm,
    MenuCards,
    SidePanel,
    PromotionAction,
    SiteFooter,
    ModalWindow
  },
  
  data() {
    return {
      SliderItem: [
        {id: 1, img: '1.jpg'},
        {id: 2, img: '2.jpg'},
        {id: 3, img: '3.jpg'},
        {id: 4, img: '4.jpg'}
      ],

      isModalShow: false,
    }
  }
}
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
    font-style: normal;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .line {
    width: 250px;
    margin: 0 auto;
    margin-top: 80px;
  }
</style>
