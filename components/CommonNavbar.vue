<template>
  <div class="navbar">
    <div class="navbar__logo">
      <nuxt-link to="/MainPage">
        Food-bite
      </nuxt-link>
    </div>
    <div class="navbar__list">
      <nuxt-link to="/MainPage" class="navbar__list-item">Главная</nuxt-link>
      <nuxt-link :to="{ name: 'index' }" class="navbar__list-item">Каталог</nuxt-link>
      <nuxt-link to="/Contacts" class="navbar__list-item">Контакты</nuxt-link>
    </div>
    <nuxt-link
      :to="{ name: 'cart'}"
      class="navbar__cart"
    >
      <img src="~/assets/icons/cart.svg" alt="cart">
      <span
        v-if="qty > 0"
        class="navbar__cart-count"
      >
        {{ qty }}
      </span>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CommonNavbar',
  computed: {
    ...mapGetters({
      qty: 'cart/productsQty'
    })
  }
}
</script>

<style scoped lang="sass">
@import "~/assets/sass/initial-variables"

.navbar
  width: 1200px
  margin: 0 auto
  display: flex
  justify-content: space-between
  align-items: center
  &__logo
    font-size: 32px
    
    font-weight: 700
    font-family: 'Roboto'
    list-style-type: none
    a
      list-style-type: none
      color: #000
      text-decoration: none

  &__cart
    border: 1px solid #F5F4F2
    border-radius: 0 0 0 $border-radius
    padding: 2rem
    text-decoration: none
    position: relative
    &-count
      background: black
      color: white
      padding: 0.1rem 0.35rem
      border-radius: 50%
      font-size: 0.9rem
      font-weight: 500
      position: absolute
      margin-top: -0.5rem
      margin-left: -0.5rem
  &__list
    width: 350px
    display: flex
    justify-content: space-between
  &__list-item
      font-family: 'Roboto'
      font-style: normal
      font-weight: 700
      font-size: 18px
      line-height: 21px
      color: #303030
      list-style-type: none
      text-decoration: none
</style>
