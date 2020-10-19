<template>
  <nav class="menu">
    <div class="menu__logo">
      <img class="menu__logo" src="~/static/img/loginio.jpg" alt="Logo sklepu">
    </div>
    <ul class="menu__list">
      <li><nuxt-link to='/'>Home</nuxt-link></li>
      <li><nuxt-link to='/shop'>Sklep</nuxt-link></li>
      <li><nuxt-link to='/about'>O mnie</nuxt-link></li>
      <li><nuxt-link to='/blog'>Blog</nuxt-link></li>
      <li><nuxt-link to='/shop'><img src="~/static/icons/cart.svg" alt="Koszyk"></nuxt-link></li>
      <li><img src="~/static/icons/instagram.svg" alt="Logo instagram"></li>
    </ul>
  </nav>

</template>

