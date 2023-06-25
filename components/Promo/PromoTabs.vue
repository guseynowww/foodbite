 <template>
    <div class="promo">
        <div class="promo__tabs">
            <transition name="fade">
                <component :is="tabs[activeTab].component"></component>
            </transition>
            <div class="tabs_header">
                <div class="tabs_title">Выберите стиль питания</div>
                <ul class="tabs__list">
                    <li 
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="activeTab = index"
                        :class="{ selected: name === selectedName }"
                    >
                        {{ tab.label }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<!-- <script>
import { ref, provide } from 'vue';

export default {
   setup (props, { slots }) {
    const tabNames = ref(slots.default().map((tab) => tab.props.name))
    const selectedName = ref(tabNames.value[0])
    
    provide("selectedName", selectedName)
    return {
        tabNames,
        selectedName
    }
   }
}
</script> -->

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
</style>








<!-- 
<template>
  <div>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.label }}
      </div>
    </div>
    
    <transition name="fade">
      <component :is="tabs[activeTab].component"></component>
    </transition>
  </div>
</template> -->

<script>
import Tab1 from '~/components/Promo/Tab1.vue';
import Tab2 from '~/components/Promo/Tab2.vue';
export default {
    components: {
        Tab1,
        Tab2
    },
  data() {
    return {
      activeTab: 0, // Индекс активной вкладки
      tabs: [
        {
          label: 'Вкладка 1',
          component: 'Tab1' // Имя компонента для первой вкладки
        },
        {
          label: 'Вкладка 2',
          component: 'Tab2' // Имя компонента для второй вкладки
        },
        // Добавьте дополнительные вкладки по необходимости
      ]
    };
  }
};
</script>

<style>
/* Стили для активной вкладки */
.tabs div.active {
  font-weight: bold;
}

/* Анимация перехода между вкладками */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>