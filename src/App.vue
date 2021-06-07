<template>
  <!---------------------------------  Header -------------------------------------->
  <header class="h-screen px-40 py-12 flex flex-col justify-between items-center">
    <img id="logo-img" alt="Logo" class="w-1/4">
    <div class="flex justify-between items-end h-1/2">
      <div class="w-2/5">
        <h2>Entrez dans l'aventure !</h2>
        <p class="my-8">TooDoo Home Adventures vous attend dès maintenant. Venez aider les TooDoos à retrouver la paix sur leur îles en transformant la poussière en énergie ! </p>
        <a href="" class="Button rounded-xl py-2 px-10 inline-block">C'est parti !</a>
      </div>
      <img id="intro-img" alt="Intro Toodoo" class="w-1/2">
    </div>
    <a href="" class="inline-block"><img id="scroll-down-img" alt="Voir plus"></a>
  </header>

  <main class="px-40">
    <!---------------------------------  World Container -------------------------------------->
    <section>
      <div class="w-1/3 mx-auto">
        <h2 class="text-center mb-8">Pendant 4 semaines</h2>
        <p>Vous avez 1 mois pour explorer les 4 îles et réaliser les missions présentes sur chacune d’elles ! Passez d’un univers désertique à un univers sous-marin, en traversant la forêt enchantée, sans oublier le monde glacial !</p>
      </div>
      <div class="world--container flex justify-between items-end mt-24">
        <div class="world--container__item">
          <img id="enchanted-forest-img" alt="La forêt enchantée">
          <p>La forêt enchantée</p>
        </div>
        <div class="world--container__item">
          <img id="submarine-world-img" alt="Le monde sous-marin">
          <p>Le monde sous-marin</p>
        </div>
        <div class="world--container__item">
          <img id="big-iceberg-img" alt="Le grand iceberg">
          <p>Le grand iceberg</p>
        </div>
        <div class="world--container__item">
          <img id="sand-dunes-img" alt="Les Dunes de sable">
          <p>Les Dunes de sable</p>
        </div>
      </div>
    </section>

    <!---------------------------------  Help TooDoos -------------------------------------->
    <section class="flex justify-between items-center">
      <div class="absolute top-1/2 left-1/2 translate-x-y-center w-120">
        <img id="form-bg-first-img" alt="">
      </div>
      <div class="w-2/5">
        <h2 class="mb-8">Aidez les TooDoos !</h2>
        <p class="mb-6">Ces adorables petites créatures sont les autochtones des îles de l’archipel, à mi-chemin entre des êtres imaginaires et des animaux.</p>
        <p>Pour aider les TooDoos à retrouver leur vie paisible perdue, il vous faudra réaliser les tâches ménagères de votre foyer. Partez à la découverte de leur lieux de vie et transformez la poussière en énergie ! </p>
      </div>
      <img id="toodoos-img" alt="Présentation des TooDoos" class="w-1/2">
    </section>

    <!---------------------------------  Electros -------------------------------------->
    <section class="flex justify-between items-center">
      <img id="electros-img" alt="Présentation des Electros" class="w-1/2">
      <div class="w-2/5">
        <h2 class="mb-8">A chasser les Electros</h2>
        <p>Débarqué sur l’île sans prévenir au milieu d’une tempête de poussière, c’est grâce à l’énergie cumulé par votre famille tout au long de la semaine que vous parviendrez à battre les électros à chaque fin de semaine !
          Combinez les capacités et les aptitudes de vos TooDoos lors du combat pour triompher et chasser les Electros de l’île !</p>
      </div>
    </section>

    <!---------------------------------  Video -------------------------------------->
    <section>
      <h2 class="text-center">Mais comment ça se passe ? </h2>
      <video controls width="250" class="mx-auto mt-16">
        <source src="/media/cc0-videos/flower.mp4"
                type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
    </section>

    <!---------------------------------  Team -------------------------------------->
    <section>
      <div class="w-1/3">
        <h2>Qui sommes-nous ?</h2>
        <p class="mt-8">Etudiants aux Campus Gobelins Annecy, nous sommes une équipe de 3 développeurs et 3 designers. Equipe passionnée où la bonne humeur est toujours au rendez-vous.</p>
      </div>
      <div class="glide mt-12">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <img id="leo-img" alt="">
              <h3>Léo</h3>
              <h4>Développeur</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img id="maelys-img" alt="">
              <h3>Maelys</h3>
              <h4>Designer</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img id="vincent-img" alt="">
              <h3>Vincent</h3>
              <h4>Développeur</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img id="clothilde-img" alt="">
              <h3>Clothilde</h3>
              <h4>Designer</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img id="johann-img" alt="">
              <h3>Johann</h3>
              <h4>Développeur</h4>
              <p>De talent</p></li>
            <li class="glide__slide">
              <img id="romain-img" alt="">
              <h3>Romain</h3>
              <h4>Designer</h4>
              <p>De talent</p></li>
          </ul>
        </div>
      </div>
    </section>

    <!---------------------------------  Concept -------------------------------------->
    <section>
      <div class="w-1/2 mx-auto">
        <h2 class="text-center">Mais comment ça se passe ? </h2>
        <p class="mt-8 mb-6">Afin d’aider les familles avec enfants dans l’organisation et la répartition des tâches au sein du foyer, nous proposons une expérience vidéoludique quotidienne qui dure 1 mois.</p>
        <p>Le but de ce jeu est de rassembler l’ensemble des membres de la famille, quelque-soit leur âge, autour d’un objectif commun dans la réalisation de ces tâches. Ainsi, fini la guerre entre enfants et parents pour que chacun effectue ses tâches quotidiennes. </p>
      </div>
    </section>
  </main>

  <!---------------------------------  Footer -------------------------------------->
  <footer class="flex justify-center py-28">
    <img id="gobelins-img" alt="Logo Ecole Gobelins" class="mr-24">
    <div class="flex flex-col justify-center">
      <a href="" class="inline-block flex items-center mb-4">
        <img id="logo-internet-img" alt="Logo Web" class="mr-4">
        <p>toodooapp.com</p>
      </a>
      <a href="" class="inline-block flex items-center">
        <img id="logo-instagram-img" alt="Logo Instagram" class="mr-4">
        <p>toodoo_app</p>
      </a>
    </div>
  </footer>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
