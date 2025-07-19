<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import FinanceIcon from '@/icons/FinanceIcon.vue';
import CogIcon from '@/icons/CogIcon.vue';
import BankTransferIcon from '@/icons/BankTransferIcon.vue';
import CheckIcon from '@/icons/CheckIcon.vue';
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col gap-3 py-8 sm:py-16 px-4 justify-center text-center text-primary">
      <div class="flex flex-col leading-normal">
        <div class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          <span class="text-nowrap">Accélérer la </span>
          <wbr>
          <span class="text-secondary text-nowrap">Transition &Eacute;nergétique</span>
        </div>
        <div class="font-semibold lg:text-3xl md:text-2xl text-xl">
          <span class="text-nowrap">par le financement </span>
          <wbr>
          <span class="text-nowrap">des Producteurs</span>
          <wbr>
              d'<span class="text-secondary text-nowrap">&Eacute;nergie Renouvelable</span>
        </div>
        <div class="font-semibold lg:text-3xl md:text-2xl text-xl">
          <span>via la tokenisation d'obligations</span>
        </div>
      </div>
      <div class="text-lg md:text-xl">
        <span class="text-secondary">re</span><span class="text-primary">bond</span> séléctionne, structure et tokenise
        des obligations émises par des producteurs d'énergie renouvelable
      </div>
    </div>

    <div class="h-[30vh] relative w-full overflow-hidden bg-cover bg-fixed bg-[center_-30vh] bg-no-repeat" style="background-image: url(/assets/hero-1920.jpg);">
      <!-- <img alt="Centrale EnR" src="/assets/hero-1920.jpg"
        class="h-[30vh] w-full object-cover object-bottom absolute left-1/2 animate-zoom-loop" /> -->
    </div>

    <div class="md:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>

    <div class="bg-primary/20">
      <div class="container m-auto lg:max-w-5xl flex flex-col md:flex-row justify-center">
        <div class="flex flex-1 flex-col text-center p-4">
          <div class="md:text-3xl text-xl font-semibold">>6%</div>
          <div class="md:text-lg">rendement cible sur actifs numériques</div>
        </div>
        <div class="md:hidden h-0 border-t-2 border-white border-dashed"></div>
        <div class="flex flex-1 flex-col text-center p-4">
          <div class="md:text-3xl text-xl font-semibold">+20</div>
          <div class="md:text-lg"><span class="text-nowrap">partenaires engagés</span></div>
        </div>
        <div class="md:hidden h-0 border-t-2 border-white border-dashed"></div>
        <div class="flex flex-1 flex-col text-center p-4">
          <div class="md:text-3xl text-xl font-semibold">30M€</div>
          <div class="md:text-lg"><span>en cours d'analyse</span></div>
        </div>
      </div>
    </div>

    <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
      <div class="text-primary font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center mb-8">
        Ce que nous faisons</div>
      <div class="flex flex-col sm:flex-row gap-6 sm:gap-2">
        <div class="flex-1 flex flex-col text-center">
          <FinanceIcon class="w-16 md:w-24 self-center" />
          <div class="md:text-xl font-semibold">Structuration d'obligations vertes</div>
          <div></div>
        </div>
        <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
        <div class="flex-1 flex flex-col text-center">
          <CogIcon class="w-16 md:w-24 self-center" />
          <div class="md:text-xl font-semibold">Tokenisation via blockchain</div>
          <div></div>
        </div>
        <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
        <div class="flex-1 flex flex-col text-center">
          <BankTransferIcon class="w-16 md:w-24 self-center" />
          <div class="md:text-xl font-semibold">Distribution sécurisée</div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="bg-primary/20">
      <div class="container m-auto lg:max-w-5xl flex flex-col md:flex-row justify-center px-4 py-8 gap-2">
        <div class="flex flex-1">
          <div class="md:text-3xl text-xl font-semibold">Pourquoi <span class="text-secondary">re</span><span
              class="text-primary">bond</span> ?</div>
        </div>
        <div class="flex-1">
          <div class="md:text-xl text-lg flex gap-1">
            <CheckIcon class="w-6 fill-secondary" />
            <div>Expertise en finance verte</div>
          </div>
          <div class="md:text-xl text-lg flex gap-1">
            <CheckIcon class="w-6 fill-secondary" />
            <div>Conformité et transparence</div>
          </div>
          <div class="md:text-xl text-lg flex gap-1">
            <CheckIcon class="w-6 fill-secondary" />
            <div>Qualité des projets sélectionnés</div>
          </div>
          <div class="md:text-xl text-lg flex gap-1">
            <CheckIcon class="w-6 fill-secondary" />
            <div>Maitrise de la technologie blockchain</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
      <div class="flex flex-col sm:flex-row gap-6 sm:gap-2">
        <div class="flex-1 flex flex-col gap-2 text-center">
          <div class="text-xl font-semibold">Producteur EnR</div>
          <div>Nous accompagnons les producteurs d'énergie renouvelable.</div>
          <button type="button" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-lg 
        px-5 py-2.5 self-center">En savoir plus</button>
        </div>
        <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
        <div class="flex-1 flex flex-col gap-2 text-center">
          <div class="text-xl font-semibold">Investisseur</div>
          <div>Nous adressons les fonds à impact en actifs tokenisés</div>
          <button type="button" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-lg 
        px-5 py-2.5 self-center">En savoir plus</button>
        </div>
      </div>
    </div>

    <!-- <PitchSlide></PitchSlide> -->
    <!-- <section class="animate-jump flex flex-col py-16 gap-8">
        <h2
          class="text-3xl font-semibold tracking-tight leading-none text-primary md:text-4xl lg:text-5xl border-l-8 pl-4 border-primary">
          <span class="text-secondary">Financer</span> la transition énergétique
        </h2>
        <h2
          class="text-3xl font-semibold tracking-tight leading-none text-primary md:text-4xl lg:text-5xl border-l-8 pl-4 border-primary">
          <span class="text-secondary">Innover</span> dans le financement EnR
        </h2>
        <h2
          class="text-3xl font-semibold tracking-tight leading-none text-primary md:text-4xl lg:text-5xl border-l-8 pl-4 border-primary">
          <span class="text-secondary">Optimiser</span> la gestion financière
        </h2>
        <h2
          class="text-3xl font-semibold tracking-tight leading-none text-primary md:text-4xl lg:text-5xl border-l-8 pl-4 border-primary">
          <span class="text-secondary">Assurer</span> la conformité ESG
        </h2>
      </section> -->
    <!-- <div class="flex gap-2 items-center bg-primary px-4 text-white mb-4 min-h-20">
        <div class="flex-1 text-xl font-medium">Actifs réels détenus par une banque dépositaire agréée</div>
        <img alt="Logo CACEIS" src="/assets/logo-caceis.svg" class="h-12" />
      </div>
      <div class="flex gap-2 items-center bg-secondary px-4 text-white mb-4 min-h-20">
        <div class="flex-1 text-xl font-medium">Adossés à des contrats long-terme de rachat d'énergie</div>
        <img alt="Logo EDF" src="/assets/logo-edf.svg" class="h-12" />
      </div>
      <div class="flex gap-2 items-center bg-primary px-4 text-white mb-4 min-h-20">
        <div class="flex-1 text-xl font-medium">Sécurisés par les meilleures blockchains</div>
        <img alt="Logo ETHEREUM" src="/assets/logo-ethereum.svg" class="h-10" />
      </div>
      <div class="flex gap-2 items-center bg-secondary px-4 text-white min-h-20">
        <div class="flex-1 text-xl font-medium">Conformes aux réglementations française et européenne</div>
        <img alt="Logo AMF" src="/assets/logo-amf.svg" class="h-16" />
      </div> -->
  </DefaultLayout>
</template>

<style scoped>
@keyframes zoom-loop {
  0%, 100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.2);
  }
}

.animate-zoom-loop {
  animation: zoom-loop 7s ease-in-out infinite;
}
</style>
