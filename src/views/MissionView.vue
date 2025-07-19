<script setup lang="ts">
import BankTransferIcon from '@/icons/BankTransferIcon.vue';
import CheckIcon from '@/icons/CheckIcon.vue';
import CogIcon from '@/icons/CogIcon.vue';
import FinanceIcon from '@/icons/FinanceIcon.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <div class="container m-auto lg:max-w-5xl flex flex-col gap-3 py-8 sm:py-16 px-4 justify-center text-center">
      <div class="flex flex-col leading-normal">
        <div class="text-primary font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          Unir la finance verte et les actifs numériques pour accélérer la transition énergétique
        </div>
      </div>
      <div class="text-primary text-lg md:text-xl">
        Le financement des producteurs d’énergie renouvelable mérite des outils modernes, accessibles, et alignés avec les objectifs climatiques
      </div>
    </div>

    <div class="h-0 border-t-2 border-primary/20 border-dashed"></div>

    <div class="container m-auto lg:max-w-5xl flex flex-col lg:flex-row gap-3 py-8 sm:py-16 px-4">
      <div class="flex-1">
        <div class="text-primary font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-xl">
          Les producteurs EnR ont besoin de capital, vite et bien !
        </div>
      </div>
      <div class="flex-1 text-right">
        <div class="text-primary font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-xl">
          >5 Mds€/an
        </div>
        <div>à financer</div>
      </div>
    </div>

    <div class="bg-primary/20">
      <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
        <div class="text-primary font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center mb-8">
          Une solution hybride entre finance traditionnelle <wbr> et innovation blockchain</div>
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
    </div>

    <div class="container m-auto lg:max-w-5xl flex flex-col lg:flex-row gap-3 py-8 sm:py-16 px-4">
      <div class="flex-1">
        <div class="text-primary font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-xl">Nos engagements <wbr>pour une
          finance verte</div>
      </div>
      <div class="flex-1">
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>Impact environnemental mesurable</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>Conformité avec la réglementation française</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>Transparence sur les projets et les flux</div>
        </div>
        <div class="md:text-xl text-lg flex gap-1">
          <CheckIcon class="w-6 fill-secondary" />
          <div>Accessibilité pour les producteurs</div>
        </div>
      </div>
    </div>

    <div class="h-0 border-t-2 border-primary/20 border-dashed"></div>

    <div class="container lg:max-w-5xl m-auto py-8 sm:py-16 flex flex-col">
      <div class="flex flex-col sm:flex-row gap-6 sm:gap-2">
        <div class="flex-1 flex flex-col gap-2 text-center">
          <button type="button" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-lg 
        px-5 py-2.5 self-center">Je suis Producteur EnR</button>
        </div>
        <div class="sm:hidden h-0 border-t-2 border-primary/20 border-dashed"></div>
        <div class="flex-1 flex flex-col gap-2 text-center">
          <button type="button" class="text-white bg-primary hover:brightness-[120%] active:brightness-[120%] font-medium rounded-lg text-lg 
        px-5 py-2.5 self-center">Je suis Investisseur</button>
        </div>
      </div>
    </div>

  </DefaultLayout>
</template>

<style scoped></style>
