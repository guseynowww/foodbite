 <template>
    <div class="promo">
        <div class="promo__tabs">
          <div class="tab__content" :class="{ fade: name === selectedName }">
            <img src="@/assets/images/tabs/fitness.svg" alt="fitness.svg" class="tab_img">
            <div class="tab__descr">
                Мы предлагаем широкий выбор блюд, разработанных нашими опытными повара. Наше меню состоит из свежих и натуральных ингредиентов, которые помогут вам достичь ваших целей по правильному питанию. Будь то контроль веса, поддержание энергии или укрепление вашего организма.
            </div>
          </div>
            <div class="tabs_header">
                <div class="tabs_title">Разные стили питания</div>
                <ul class="tabs__list">
                    <li 
                        v-for="(tab, index) in tabs"
                        :key="index"
                        :class="{ active: activeTab === index }"
                        @click="activeTab = index"
                    >
                        {{ tab.label }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Tab1 from '~/components/Promo/Tab1.vue';
import Tab2 from '~/components/Promo/Tab2.vue';
import Tab3 from '~/components/Promo/Tab1.vue';
import Tab4 from '~/components/Promo/Tab2.vue';
export default {
    components: {
        Tab1,
        Tab2,
        Tab3,
        Tab4
    },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          label: 'Фитнесс',
          component: 'Tab1' 
        },
        {
          label: 'Премиум',
          component: 'Tab2' 
        },
        {
          label: 'Постное',
          component: 'Tab3' 
        },
      ]
    };
  }
};
</script>

<style lang="scss" >

    .promo {
        width: 1130px;
        margin: 0 auto;
    }
    .promo__tabs {
        width: 1130px;
        margin: 0 auto;
        margin-top: 70px;
        display: flex;
        background: rgba(255, 255, 255, 0.002);
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    }

    .tabs_header {
        margin-top: 35px;
        margin-left: 30px;
        

        .tabs_title {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }
    }

   .tabs__list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 115px;
        padding-left: 25px;
        list-style-type: none;
        border-left: 1px solid #000;
        margin-top: 30px;

        li {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: rgba(0, 0, 0, .6);
            cursor: pointer;
            transition: .3s all
        }

        li.selected {
            font-size: 22px;
            font-weight: 700;
            line-height: 26px;
            color: #000000;
        }

    }

    .tab_content {
        display: flex;

    }

    .tab_img {
        width: 850px;
        height: 545px;
    }

    .tab__descr {
        position: absolute;
        margin-top: -300px;
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


    .promo__lifetext {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        margin-top: 33px;
        margin-left: 33px;
    }

    .tabs div.active {
      font-weight: bold;
    }

    // .fade-enter-active,
    // .fade-leave-active {
    //   transition: opacity 0.5s;
    // }

    // .fade-enter,
    // .fade-leave-to {
    //   opacity: 0;
    // } 
</style>