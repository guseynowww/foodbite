<template>
  <div class="tab__content" :class="{ fade: name === selectedName }">
    <img src="@/assets/images/tabs/fitness.svg" alt="fitness.svg" class="tab_img">
    <div class="tab__descr">
        Мы предлагаем широкий выбор блюд, разработанных нашими опытными повара. Наше меню состоит из свежих и натуральных ингредиентов, которые помогут вам достичь ваших целей по правильному питанию. Будь то контроль веса, поддержание энергии или укрепление вашего организма.
    </div>
  </div>
</template>

<script>
export default {
  // Дополнительные настройки компонента
};
</script>

<style>
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