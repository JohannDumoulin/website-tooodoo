<template>
  <!---------------------------------  Header -------------------------------------->
  <header class="h-screen px-8 sm:px-16 md:px-28 lg:px-40 py-12 flex flex-col sm:justify-between items-center">
    <div class="absolute origin-top-left -top-12 xl:-top-28 left-0 xl:-left-28 -z-1 transform scale-75 sm:scale-50 xl:scale-100">
      <img :src="shapeFirstImg" alt="">
    </div>
    <img :src="logoImg" alt="Logo" class="w-1/2 sm:w-1/4">
    <div class="flex flex-col-reverse lg:flex-row justify-between items-end lg:h-1/2 my-auto sm:my-0">
      <div class="lg:w-2/5">
        <h2>Entrez dans l'aventure !</h2>
        <p class="my-8">TooDoo Home Adventures vous attend dès maintenant. Venez aider les TooDoos à retrouver la paix sur leur îles en transformant la poussière en énergie ! </p>
        <a href="" class="Button rounded-xl py-2 px-10 inline-block">C'est parti !</a>
      </div>
      <img :src="introImg" alt="Intro Toodoo" class="mb-8 lg:mb-0 sm:w-1/2 mx-auto">
    </div>
    <a href="" class="hidden sm:inline-block"><img :src="scrollDownImg" alt="Voir plus"></a>
    <a href="" class="absolute bottom-8 xl:bottom-12 right-10 xl:right-16">
      <img :src="playstoreImg" alt="Logo Playstore" class="w-14 xl:w-24">
      <svg xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="curved--text w-200 h-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <defs>
          <path d="M137.5,250a112.5,112.5 0 1,0 225,0a112.5,112.5 0 1,0 -225,0" id="textcircle"
                transform="rotate(90 250 250)" />
        </defs>
        <text dx="50" dy="70" class="curved--text__content">
          <textPath xlink:href="#textcircle" textLength="661">Télécharger - Télécharger -</textPath>
        </text>
      </svg>
    </a>
  </header>

  <main>
    <!---------------------------------  World Container ------------------------------------->
    <section>
      <div class="absolute origin-top-left -top-40 xl:-top-72 -right-52 xl:-right-28 -z-1 transform scale-50 xl:scale-100">
        <img :src="shapeSecondImg" alt="">
      </div>
      <div class="absolute origin-top-left top-72 -left-72 sm:-left-48 -z-1">
        <img :src="shapeThirdImg" alt="">
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 mx-auto">
        <h2 class="text-center mb-8">Pendant 4 semaines</h2>
        <p>Vous avez 1 mois pour explorer les 4 îles et réaliser les missions présentes sur chacune d’elles ! Passez d’un univers désertique à un univers sous-marin, en traversant la forêt enchantée, sans oublier le monde glacial !</p>
      </div>
      <div class="world--container flex flex-wrap 2xl:flex-nowrap justify-center items-end mt-24">
        <div class="world--container__item">
          <img :src="enchantedForestImg" alt="La forêt enchantée">
          <p>La forêt enchantée</p>
        </div>
        <div class="world--container__item">
          <img :src="submarineWorldImg" alt="Le monde sous-marin">
          <p>Le monde sous-marin</p>
        </div>
        <div class="world--container__item">
          <img :src="bigIcebergImg" alt="Le grand iceberg">
          <p>Le grand iceberg</p>
        </div>
        <div class="world--container__item">
          <img :src="sandDunesImg" alt="Les Dunes de sable">
          <p>Les Dunes de sable</p>
        </div>
      </div>
    </section>

    <!---------------------------------  Help TooDoos -------------------------------------->
    <section class="flex flex-col lg:flex-row justify-between items-center">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-400 sm:scale-300 -z-10">
        <img :src="shapeBgFirstImg" alt="">
      </div>
      <div class="w-full sm:w-3/4 lg:w-2/5">
        <h2 class="mb-8">Aidez les TooDoos...</h2>
        <p class="mb-6">Ces adorables petites créatures sont les autochtones des îles de l’archipel, à mi-chemin entre des êtres imaginaires et des animaux.</p>
        <p>Pour aider les TooDoos à retrouver leur vie paisible perdue, il vous faudra réaliser les tâches ménagères de votre foyer. Partez à la découverte de leur lieux de vie et transformez la poussière en énergie ! </p>
      </div>
      <img :src="toodoosImg" alt="Présentation des TooDoos" class="w-full sm:w-3/4 lg:w-1/2">
    </section>

    <!---------------------------------  Electros -------------------------------------->
    <section class="flex flex-col-reverse lg:flex-row justify-between items-center">
      <div class="absolute -top-80 -right-24 xl:-right-12 -z-1 transform scale-50 xl:scale-100">
        <img :src="shapeFourthImg" alt="">
      </div>
      <img :src="electrosImg" alt="Présentation des Electros" class="w-full sm:w-3/4 lg:w-1/2 mt-14 lg:mt-0">
      <div class="w-full sm:w-3/4 lg:w-2/5">
        <h2 class="mb-8">A chasser les Electros</h2>
        <p>Débarqué sur l’île sans prévenir au milieu d’une tempête de poussière, c’est grâce à l’énergie cumulé par votre famille tout au long de la semaine que vous parviendrez à battre les électros à chaque fin de semaine !
          Combinez les capacités et les aptitudes de vos TooDoos lors du combat pour triompher et chasser les Electros de l’île !</p>
      </div>
    </section>

    <!---------------------------------  Video -------------------------------------->
    <section>
      <div class="absolute -top-72 md:-top-64 -left-96 md:-left-72 xl:-left-96 2xl:-left-60 z-10 transform scale-25 sm:scale-50 xl:scale-100">
        <img :src="shapeFifthImg" alt="">
      </div>
      <h2 class="text-center">Mais comment ça se passe ? </h2>
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
      <div class="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h2>Qui sommes-nous ?</h2>
        <p class="mt-8">Etudiants aux Campus Gobelins Annecy, nous sommes une équipe de 3 développeurs et 3 designers. Equipe passionnée où la bonne humeur est toujours au rendez-vous.</p>
      </div>
      <div class="glide mt-12">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <img :src="leoImg" alt="">
              <h3>Léo</h3>
              <h4>Développeur</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img :src="maelysImg" alt="">
              <h3>Maelys</h3>
              <h4>Designer</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img :src="vincentImg" alt="">
              <h3>Vincent</h3>
              <h4>Développeur</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img :src="clothildeImg" alt="">
              <h3>Clothilde</h3>
              <h4>Designer</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img :src="johannImg" alt="">
              <h3>Johann</h3>
              <h4>Développeur</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img :src="romainImg" alt="">
              <h3>Romain</h3>
              <h4>Designer</h4>
              <p>De talent</p></li>
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
      <div class="w-full sm:w-3/4 lg:w-1/2 mx-auto">
        <h2 class="text-center">Notre concept</h2>
        <p class="mt-8 mb-6">Afin d’aider les familles avec enfants dans l’organisation et la répartition des tâches au sein du foyer, nous proposons une expérience vidéoludique quotidienne qui dure 1 mois.</p>
        <p>Le but de ce jeu est de rassembler l’ensemble des membres de la famille, quelque-soit leur âge, autour d’un objectif commun dans la réalisation de ces tâches. Ainsi, fini la guerre entre enfants et parents pour que chacun effectue ses tâches quotidiennes. </p>
      </div>
    </section>
  </main>

  <!---------------------------------  Footer -------------------------------------->
  <footer class="flex flex-col md:flex-row justify-center px-8 sm:px-16 md:px-28 lg:px-40 py-16 sm:py-28">
    <a href="https://www.lecole-cci.fr/" class="w-3/4 sm:w-1/2 md:w-auto md:mr-24 mx-auto mb-16 md:mb-0"><img :src="gobelinsImg" alt="Logo Ecole Gobelins" class=""></a>
    <div class="flex flex-col justify-center md:w-auto mx-auto w-fit">
      <a href="" class="flex items-center mb-4 w-fit">
        <img :src="logoInternetImg" alt="Logo Web" class="mr-4">
        <p>toodooapp.com</p>
      </a>
      <a href="" class="flex items-center w-fit">
        <img :src="logoInstagramImg" alt="Logo Instagram" class="mr-4">
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
import videoFile from './assets/media/sample-mp4-file.mp4'
</script>

<style>
#app {
  font-family: 'LeagueSpartan', Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  overflow: hidden;
}
</style>
