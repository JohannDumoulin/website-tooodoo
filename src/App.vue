<template>
<!--  TODO target blank-->
  <!---------------------------------  Header -------------------------------------->
  <header class="h-screen px-8 sm:px-16 md:px-28 lg:px-40 py-12 flex flex-col sm:justify-between items-center">
    <div class="absolute top-6 sm:top-12 right-6 sm:right-12">
      <p><span :class="{'font-bold': locale === 'fr'}" @click="locale = 'fr'" class="cursor-pointer">Fr</span> / <span :class="{'font-bold': locale === 'en'}" @click="locale = 'en'" class="cursor-pointer">En</span></p>
    </div>
    <div class="absolute origin-top-left -top-12 xl:-top-28 left-0 xl:-left-28 -z-1 transform scale-75 sm:scale-50 xl:scale-100">
      <img :src="shapeFirstImg" alt="">
    </div>
    <img :src="logoImg" :alt="t('header.alt.logo')" class="w-1/2 sm:w-1/4">
    <div class="flex flex-col-reverse lg:flex-row justify-between items-end lg:h-1/2 my-auto sm:my-0">
      <div class="lg:w-2/5">
        <h2>{{ t('header.title') }}</h2>
        <p class="my-8">{{ t('header.text') }}</p>
        <a href="#sectionFirst" class="scroll-js Button rounded-xl py-2 px-10 inline-block">{{ t('header.button') }}</a>
      </div>
      <img :src="introImg" :alt="t('header.alt.intro')" class="mb-8 lg:mb-0 sm:w-1/2 mx-auto">
    </div>
    <a href="#sectionFirst" class="scroll-js hidden sm:inline-block"><img :src="scrollDownImg" alt="Voir plus"></a>
    <a href="https://app.toodoo.games/" class="absolute bottom-8 xl:bottom-12 right-10 xl:right-16">
      <img :src="playstoreImg" :alt="t('header.alt.logoPlaystore')" class="w-14 xl:w-24">
      <svg xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="curved--text w-200 h-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <defs>
          <path d="M137.5,250a112.5,112.5 0 1,0 225,0a112.5,112.5 0 1,0 -225,0" id="textcircle"
                transform="rotate(90 250 250)" />
        </defs>
        <text dx="50" dy="70" class="curved--text__content">
          <textPath xlink:href="#textcircle" textLength="661">{{ t('header.playstore') }}</textPath>
        </text>
      </svg>
    </a>
  </header>

  <main id="main">
    <!---------------------------------  World Container ------------------------------------->
    <section id="sectionFirst">
      <div class="absolute origin-top-left -top-40 xl:-top-72 -right-52 xl:-right-28 -z-1 transform scale-50 xl:scale-100">
        <img :src="shapeSecondImg" alt="">
      </div>
      <div class="absolute origin-top-left top-72 -left-72 sm:-left-48 -z-1">
        <img :src="shapeThirdImg" alt="">
      </div>
      <div class="w-full md:w-3/5 mx-auto">
        <h2 class="text-center mb-8">{{ t('worldContainer.title') }}</h2>
        <p>{{ t('worldContainer.text') }}</p>
      </div>
      <div class="world--container flex flex-wrap 2xl:flex-nowrap justify-center items-end mt-24">
        <div class="world--container__item">
          <img :src="enchantedForestImg" :alt="t('worldContainer.enchantedForest')">
          <p>{{ t('worldContainer.enchantedForest') }}</p>
        </div>
        <div class="world--container__item">
          <img :src="submarineWorldImg" :alt="t('worldContainer.submarineWorld')">
          <p>{{ t('worldContainer.submarineWorld') }}</p>
        </div>
        <div class="world--container__item">
          <img :src="bigIcebergImg" :alt="t('worldContainer.bigIceberg')">
          <p>{{ t('worldContainer.bigIceberg') }}</p>
        </div>
        <div class="world--container__item">
          <img :src="sandDunesImg" :alt="t('worldContainer.sandDunes')">
          <p>{{ t('worldContainer.sandDunes') }}</p>
        </div>
      </div>
    </section>

    <!---------------------------------  Help TooDoos -------------------------------------->
    <section class="flex flex-col lg:flex-row justify-between items-center">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-400 sm:scale-300 -z-10">
        <img :src="shapeBgFirstImg" alt="">
      </div>
      <div class="w-full sm:w-3/4 lg:w-2/5">
        <h2 class="mb-8">{{ t('helpToodoos.title') }}</h2>
        <p class="mb-6">{{ t('helpToodoos.textFirst') }}</p>
        <p>{{ t('helpToodoos.textSecond') }}</p>
      </div>
      <img :src="toodoosImg" :alt="t('helpToodoos.alt')" class="w-full sm:w-3/4 lg:w-1/2">
    </section>

    <!---------------------------------  Electros -------------------------------------->
    <section class="flex flex-col-reverse lg:flex-row justify-between items-center">
      <div class="absolute -top-80 -right-24 xl:-right-12 -z-1 transform scale-50 xl:scale-100">
        <img :src="shapeFourthImg" alt="">
      </div>
      <img :src="electrosImg" :alt="t('electros.alt')" class="w-full sm:w-3/4 lg:w-1/2 mt-14 lg:mt-0">
      <div class="w-full sm:w-3/4 lg:w-2/5">
        <h2 class="mb-8">{{ t('electros.title') }}</h2>
        <p>{{ t('electros.text') }}</p>
      </div>
    </section>

    <!---------------------------------  Video -------------------------------------->
    <section>
      <div class="absolute -top-72 md:-top-64 -left-96 md:-left-72 xl:-left-96 2xl:-left-60 z-10 transform scale-25 sm:scale-50 xl:scale-100">
        <img :src="shapeFifthImg" alt="">
      </div>
      <h2 class="text-center">{{ t('video.title') }}</h2>
      <video controls width="1356" class="mx-auto mt-16">
        <source :src="videoFile"
                type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
    </section>

    <!---------------------------------  Team -------------------------------------->
    <section>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-400 sm:scale-250 -z-20">
        <img :src="shapeBgSecondImg" alt="">
      </div>
      <div class="w-full sm:w-3/4 md:w-1/2 xl:w-1/3">
        <h2>{{ t('team.title') }}</h2>
        <p class="mt-8">{{ t('team.text') }}</p>
      </div>
      <div class="glide mt-12">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <img :src="leoImg" :alt="t('team.leo.alt')">
              <h3>{{ t('team.leo.name') }}</h3>
              <h4>{{ t('team.leo.job') }}</h4>
              <p>{{ t('team.leo.desc') }}</p></li>
            <li class="glide__slide">
              <img :src="maelysImg" :alt="t('team.maelys.alt')">
              <h3>{{ t('team.maelys.name') }}</h3>
              <h4>{{ t('team.maelys.job') }}</h4>
              <p>{{ t('team.maelys.desc') }}</p></li>
            <li class="glide__slide">
              <img :src="vincentImg" :alt="t('team.vincent.alt')">
              <h3>{{ t('team.vincent.name') }}</h3>
              <h4>{{ t('team.vincent.job') }}</h4>
              <p>{{ t('team.vincent.desc') }}</p></li>
            <li class="glide__slide">
              <img :src="clothildeImg" :alt="t('team.clothilde.alt')">
              <h3>{{ t('team.clothilde.name') }}</h3>
              <h4>{{ t('team.clothilde.job') }}</h4>
              <p>{{ t('team.clothilde.desc') }}</p></li>
            <li class="glide__slide">
              <img :src="johannImg" :alt="t('team.johann.alt')">
              <h3>{{ t('team.johann.name') }}</h3>
              <h4>{{ t('team.johann.job') }}</h4>
              <p>{{ t('team.johann.desc') }}</p></li>
            <li class="glide__slide">
              <img :src="romainImg" :alt="t('team.romain.alt')">
              <h3>{{ t('team.romain.name') }}</h3>
              <h4>{{ t('team.romain.job') }}</h4>
              <p>{{ t('team.romain.desc') }}</p></li>
          </ul>
        </div>
      </div>
    </section>

    <!---------------------------------  Concept -------------------------------------->
    <section>
      <div class="absolute -top-96 md:-top-80 -right-96 xl:-right-72 -z-1 transform scale-25 sm:scale-50 xl:scale-100">
        <img :src="shapeSixthImg" alt="">
      </div>
      <div class="absolute top-32 -left-72 -z-1 transform scale-25 sm:scale-50 xl:scale-100">
        <img :src="shapeSeventhImg" alt="">
      </div>
      <div class="w-full sm:w-3/4 xl:w-1/2 mx-auto">
        <h2 class="text-center">{{ t('concept.title') }}</h2>
        <p class="mt-8 mb-6">{{ t('concept.textFirst') }}</p>
        <p>{{ t('concept.textSecond') }}</p>
      </div>
    </section>
  </main>

  <!---------------------------------  Footer -------------------------------------->
  <footer class="flex flex-col md:flex-row justify-center px-8 sm:px-16 md:px-28 lg:px-40 py-16 sm:py-28">
    <a href="https://www.lecole-cci.fr/" class="w-3/4 sm:w-1/2 md:w-auto md:mr-24 mx-auto mb-16 md:mb-0"><img :src="gobelinsImg" :alt="t('footer.alt.logoGobelins')" class=""></a>
    <div class="flex flex-col justify-center md:w-auto mx-auto w-fit">
      <a href="https://app.toodoo.games/" class="flex items-center mb-4 w-fit">
        <img :src="logoInternetImg" :alt="t('footer.alt.logoInternet')" class="mr-4">
        <p>toodooapp.com</p>
      </a>
      <a href="https://www.instagram.com/" class="flex items-center w-fit">
        <img :src="logoInstagramImg" :alt="t('footer.alt.logoInstagram')" class="mr-4">
        <p>toodoo_app</p>
      </a>
    </div>
  </footer>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

//Import images
import logoImg from './assets/img/logo.png'
import introImg from './assets/img/intro.png'
import scrollDownImg from './assets/img/scroll-down.png'
import enchantedForestImg from './assets/img/enchanted-forest.png'
import submarineWorldImg from './assets/img/submarine-world.png'
import bigIcebergImg from './assets/img/big-iceberg.png'
import sandDunesImg from './assets/img/sand-dunes.png'
import toodoosImg from './assets/img/toodoos.png'
import electrosImg from './assets/img/electros.png'
import leoImg from './assets/img/leo.png'
import maelysImg from './assets/img/maelys.png'
import vincentImg from './assets/img/vincent.png'
import clothildeImg from './assets/img/clothilde.png'
import johannImg from './assets/img/johann.png'
import romainImg from './assets/img/romain.png'
import gobelinsImg from './assets/img/gobelins.png'
import logoInternetImg from './assets/img/logo-internet.svg'
import logoInstagramImg from './assets/img/logo-instagram.svg'
import shapeBgFirstImg from './assets/img/shape-bg1.svg'
import shapeBgSecondImg from './assets/img/shape-bg2.svg'
import shapeFirstImg from './assets/img/shape1.svg'
import shapeSecondImg from './assets/img/shape2.svg'
import shapeThirdImg from './assets/img/shape3.svg'
import shapeFourthImg from './assets/img/shape4.svg'
import shapeFifthImg from './assets/img/shape5.svg'
import shapeSixthImg from './assets/img/shape6.svg'
import shapeSeventhImg from './assets/img/shape7.svg'
import playstoreImg from './assets/img/playstore.svg'
import videoFile from './assets/media/video-toodoo.mp4'

import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({ useScope: 'global' })
</script>

<style>
#app {
  font-family: 'LeagueSpartan', Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  overflow: hidden;
}

html {
  scroll-behavior: smooth;
}
</style>
