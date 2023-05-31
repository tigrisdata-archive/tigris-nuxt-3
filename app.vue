<script setup>
const title = "Welcome to the Nuxt 3 + Tigris Minimal Starter";
useHead({
  title,
  meta: [{ name: "description", content: title }],
});

const { data } = await useFetch("/api/prizes");
</script>

<template>
  <div id="top" class="relative -top-10"></div>
  <header
    class="w-full pt-10 m-auto mb-10 flex flex-row align-top items-start justify-center gap-5 bg-gradient-to-b from-blue-200 dark:from-blue-950 to-transparent"
  >
    <a
      href="https://www.tigrisdata.com/docs/concepts/database/?utm_source=nuxt-3-template&utm_medium=code&utm_campaign=nuxt-3-template"
      target="_blank"
      ><img
        class="w-[150px] invert dark:invert-0"
        alt="Tigris logo"
        src="~/public/tigris.svg"
    /></a>
    <div class="text-4xl">+</div>
    <a href="https://nuxt.com/" target="_blank"
      ><img
        class="w-[150px] invert dark:invert-0"
        alt="Nuxt logo"
        src="~/public/nuxt.svg"
    /></a>
  </header>
  <div class="w-10/12 lg:w-8/12 my-10 m-auto">
    <section class="mb-20">
      <p class="text-center text-xl font-extrabold">{{ title }}</p>
      <p class="text-lg">
        This minimal
        <a href="https://nuxt.com/" target="_blank">Nuxt 3</a> application loads
        data from a
        <a
          href="https://www.tigrisdata.com/docs/concepts/database/?utm_source=nuxt-3-template&utm_medium=code&utm_campaign=nuxt-3-template"
          target="_blank"
          >Tigris Database</a
        >, which has been seeded with a
        <a href="https://api.nobelprize.org/v1/prize.json" target="_blank"
          >Nobel prize JSON payload</a
        >. Basic styling is applied using
        <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.
      </p>
      <p>
        <a
          class="flex justify-center flex-row items-center"
          href="https://github.com/tigrisdata-community/tigris-nuxt-3"
          target="_blank"
          ><img
            src="~/public/github.svg"
            class="h-6 w-6 mr-2 dark:invert"
          /><span>Grab the Nuxt 3 + Tigris Minimal Starter on GitHub</span></a
        >
      </p>
    </section>
    <section>
      <h1>Prizes</h1>
      <nav
        class="flex flex-wrap mb-10"
        style="display: flex; flex-wrap: wrap; flex-direction: row"
      >
        <a class="mr-2" v-for="(prize, year) in data" :href="`#${year}`">{{
          year
        }}</a>
      </nav>
      <div class="mb-10" v-for="(prize, year) in data">
        <h2 :id="year">{{ year }}</h2>
        <nav class="flex flex-wrap mb-5">
          <a
            v-for="category in prize"
            :href="`#${year}-${category.category}`"
            >{{ category.category }}</a
          >
        </nav>
        <div v-for="category in prize">
          <h3 :id="`${year}-${category.category}`">{{ category.category }}</h3>
          <div class="grid lg:grid-cols-2 gap-6">
            <div
              class="rounded-lg bg-zinc-900 text-zinc-200 p-5 mb-5"
              v-for="(laureate, key, index) in category.laureates"
            >
              <h4>{{ laureate.firstname }} {{ laureate.surname }}</h4>
              <p>{{ laureate.motivation }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <a href="#top" class="fixed bottom-5 right-5">Back to top</a>
    </div>
  </div>
</template>
