<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-black col-12 justify-between row no-wrap items-center bg-black" style="height: 90px">
      <div :class="
          $q.platform.is.desktop
            ? 'col-auto row items-center q-pa-md q-ml-md'
            : 'col-auto row items-center q-pa-md q-ml-sm'
        "
      >
        <q-img 
          @click="redirectRoute('/')"
          src="logo.png" 
          :width="
            $q.platform.is.mobile
            ? '110px'
            : $q.screen.xl
            ? '150px'
            : $q.screen.lt.lg
            ? '150px'
            : $q.screen.lt.md
            ? '125px'
            : $q.screen.sm
            ? '100px'
            : '90px'
          " 
          style="cursor: pointer;" 
        />
      </div>
      <div>
        <q-item-label class="text-h5 text-white col-12 row q-pl-sm">
          Arquitetura e Organização de Computadores III
        </q-item-label>
      </div>
      <div :class="
          $q.platform.is.desktop
            ? 'col-auto row justify-end q-pa-md q-mr-md'
            : 'col-auto row justify-end q-pa-md q-mr-sm'
        "
      >
        <div class="col-12 row justify-end q-pr-md">
          <q-item-label class="text-h8 text-white q-pb-sm">
            Jonas Peres
          </q-item-label>
        </div>
        <a class="q-pr-md" target="_Blank" href="https://www.linkedin.com/in/jonas-peres/">
          <q-img 
            class="bg-white"
            src="linkedin.png" 
            width="40px" 
            style="cursor: pointer; border-radius: 5px;" 
          >
            <q-tooltip>
              LinkedIn
            </q-tooltip>
          </q-img>
        </a>
        <a target="_Blank" href="https://github.com/JonasPeres">
          <q-img 
            src="github.png" 
            width="40px" 
            style="cursor: pointer; border-radius: 5px;" 
          >
            <q-tooltip>
              GitHub
            </q-tooltip>
          </q-img>
        </a>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style>
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 15px;
}
</style>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component';

export default class NotLoggedLayout extends AbstractComponent {
}
</script>
