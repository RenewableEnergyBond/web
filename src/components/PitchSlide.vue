<template>
  <section class="flex flex-col py-4 md:py-8 gap-4 md:gap-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold tracking-tight text-primary md:text-5xl text-center">
        <span class="text-secondary">Financer</span> <span>la transition énergétique</span>
      </h2>
      <p class="text-lg md:text-2xl text-center">
        <span class="font-semibold leading-none">
          <span class="text-secondary">re</span>
          <span class="text-primary">bond</span>
        </span>
        connecte les <span class="font-semibold text-secondary">Producteurs d’Energies Renouvelables</span> en quête de
        financement et les <span class="font-semibold text-secondary">investisseurs</span> recherchant des actifs verts
        attractifs et liquides.
      </p>
    </div>

    <div class="flex flex-col gap-2 bg-gray-100 px-4 py-4">
      <h3 class="md:text-lg font-semibold uppercase tracking-tight text-primary">
        Fonctionnement
      </h3>
      <ul class="list-disc pl-12 md:text-lg mb-4">
        <li>Les Producteurs lèvent des fonds via des <span class="font-semibold">Obligations Convertibles</span> à taux fixe (ex. 8% / an
          sur 5 ans).</li>
        <li>Les Obligations sont mises sous séquestre dans une <span class="font-semibold">banque dépositaire</span> puis tokenisées.</li>
        <li>Les investisseurs peuvent échanger ces Security Tokens sur le marché secondaire.</li>
        <li>À maturité, les jetons sont rachetés et remboursés avec les intérêts accumulés.</li>
      </ul>
      <ProcessusSvg class="max-w-full h-auto"></ProcessusSvg>
    </div>
  </section>

  <!-- <section class="bg-gray-100 py-12 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Financer la transition énergétique, simplement et en toute sécurité
      </h2>
      <p class="mt-4 text-gray-700">
        rebond connecte les <span class="font-semibold">Producteurs d’EnR</span> en quête de financement
        et les <span class="font-semibold">investisseurs</span> recherchant des actifs verts attractifs et liquides.
      </p>
    </div>

    <div class="max-w-4xl mx-auto mt-8 grid gap-6 md:grid-cols-2">
      <div class="p-6 bg-white rounded-2xl shadow-md">
        <h3 class="text-xl font-semibold text-gray-900">Comment ça fonctionne ?</h3>
        <ul class="mt-4 space-y-2 text-gray-700">
          <li>✅ Les Producteurs lèvent des fonds via des <strong>Obligations Convertibles</strong> à taux fixe (ex. {{
            interestRate }}% / an sur 5 ans).</li>
          <li>✅ Les Obligations sont mises sous séquestre dans une <strong>banque dépositaire</strong> puis tokenisées.
          </li>
          <li>✅ Les investisseurs peuvent échanger ces Security Tokens sur le marché secondaire.</li>
          <li>✅ À maturité, les jetons sont rachetés et remboursés avec les intérêts accumulés.</li>
        </ul>
      </div>

      <div class="p-6 bg-white rounded-2xl shadow-md">
        <h3 class="text-xl font-semibold text-gray-900">Pourquoi c’est une révolution ?</h3>
        <ul class="mt-4 space-y-2 text-gray-700">
          <li>🔹 Contrairement aux plateformes de financement participatif, les fonds et les intérêts sont
            <strong>sécurisés dès l’émission</strong>.
          </li>
          <li>🔹 La tokenisation permet aux investisseurs une <strong>gestion flexible et une liquidité accrue</strong>.
          </li>
        </ul>
        <div class="mt-4 p-4 bg-blue-50 rounded-lg text-blue-900">
          <p class="font-semibold">Évolution du prix du jeton :</p>
          <ul class="mt-2 space-y-1">
            <li>📈 1 an : <strong>{{ calculateValue(1) }}€</strong> ({{ interestRate }}% annuel)</li>
            <li>📈 2 ans : <strong>{{ calculateValue(2) }}€</strong></li>
            <li>📈 5 ans : <strong>{{ calculateValue(5) }}€</strong> (valeur à maturité)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto mt-10 text-center">
      <p class="text-gray-800 text-lg">
        Avec rebond, <strong>financer la transition énergétique devient simple, sécurisé et flexible.</strong>
      </p>
    </div>
  </section> -->
</template>

<script setup lang="ts">
import ProcessusSvg from './ProcessusSvg.vue';
</script>
