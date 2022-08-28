<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {ChevronLeftIcon} from '@heroicons/vue/24/solid'
import RadioBoxMarked from 'vue-material-design-icons/RadioboxMarked.vue'
defineProps(['item'])
</script>

<template>
  <div class = "w-full ">
    <div>
      <Disclosure v-slot = "{ open }">
        <DisclosureButton
            class = "flex w-full justify-between gap-3 px-4 py-2 rounded-lg text-s-80 transition duration-400 hover:bg-secondary"
            :class="{ 'bg-primary-1': open }"
        >
          <component :is = "item.icon" class = "ml-3 flex-shrink-0 h-6 w-6" aria-hidden = "true"/>
          <p class="b1 text-right grow ">{{ item.name }}</p>
          <ChevronLeftIcon
              :class = "open ? '-rotate-90 transform transition-transform duration-500' : 'transform transition-transform duration-500' "
              class = "h-5 w-5 "
          />
        </DisclosureButton>
        <transition
            enter-active-class = "transition duration-100 ease-out"
            enter-from-class = "transform scale-95 opacity-0"
            enter-to-class = "transform scale-100 opacity-100"
            leave-active-class = "transition duration-75 ease-out"
            leave-from-class = "transform scale-100 opacity-100"
            leave-to-class = "transform scale-95 opacity-0"
        >
          <DisclosurePanel class = "py-2 text-s-80">
            <ul >
              <li v-for = "sub in item.subMenu" class="b1 flex flex-row gap-4 items-center transition duration-400 hover:bg-secondary px-5 py-2 rounded-lg cursor-pointer">
                <RadioBoxMarked :size="10"/>
                {{ sub }}
              </li>
            </ul>
          </DisclosurePanel>
        </transition>
      </Disclosure>

    </div>
  </div>
</template>

