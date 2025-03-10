<template>
  <div class="relative w-full bg-black">
    <!-- Section avec image de fond -->
    <section
      class="relative w-full h-[300px] bg-cover bg-center flex items-center md:h-[300px] sm:h-[200px]"
      style="background-image: url('/img/luk.jpg')"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
      ></div>
      <div class="relative z-10 ml-6 text-white mj-container mt-28">
        <h1 class="text-4xl font-bold sm:text-3xl">Nous Contacter</h1>
        <p class="mt-2 text-gray-300 sm:text-sm text-xs">
          Parlez-nous de votre expérience et de vos questions. Nous serons
          heureux de vous aider à trouver la meilleure solution.
        </p>
      </div>
    </section>

    <!-- Contenu principal -->
    <section class="bg-black text-white py-8">
      <div class="mj-container bg-black px-4">
        <div class="mb-8 flex items-center justify-between space-x-4">
          <div class="whitespace-nowrap aos-init aos-animate">
            <h2
              class="flex items-center justify-start text-xl font-semibold text-bleu sm:text-3xl"
            >
              <span data-v-8f1205ab="">Contact Info</span>
            </h2>
          </div>
          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
        <!-- On begin -->
        <div>
          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Form Section -->
            <div>
              <form class="space-y-4">
                <input
                  type="text"
                  placeholder="Votre Nom"
                  class="input-style"
                />
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Téléphone"
                    class="input-style"
                  />
                  <input
                    type="email"
                    placeholder="Adress Mail"
                    class="input-style"
                  />
                </div>
                <textarea
                  placeholder="Écrivez votre message..."
                  class="input-style h-32"
                ></textarea>
                <button class="bg-blue-600 px-6 py-2 rounded text-white">
                  Envoyer un message
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div>
              <div
                class="rounded-lg shadow-md space-y-6 mx-auto p-6 bg-gray-800"
              >
                <div class="flex items-center space-x-4">
                  <div class="bg-blue-500 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-300 md:text-lg">
                      Email
                    </h4>
                    <a
                      href="mailto:maajabu@tv.com"
                      class="text-gray-500 text-sm md:text-base relative inline-block hover:text-white group"
                    >
                      maajabu@tv.com
                      <span
                        class="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"
                      ></span>
                    </a>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="bg-blue-500 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-300 md:text-lg">
                      Phone
                    </h4>
                    <a
                      href="tel:+16695777172"
                      class="text-gray-500 text-sm md:text-base relative inline-block hover:text-white group"
                    >
                      (669) 577-7172
                      <span
                        class="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"
                      ></span>
                    </a>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="bg-blue-500 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-300 md:text-lg">
                      Headquartered
                    </h4>
                    <p
                      class="text-gray-500 text-sm md:text-base relative inline-block hover:text-white group"
                    >
                      120 Avenue, Quartier, DRC
                      <span
                        class="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"
                      ></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Map Section -->
          <div
            class="mt-12 relative border-2 rounded border-blue-500 border-dashed"
          >
            <div
              class="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden"
            >
              <!-- Google Map Embed -->
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.425221328129!2d15.264023975499349!3d-4.330972296535338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a310b64d2d091%3A0x13307c2c8a656026!2sConcession%20Maajabu%20Gospel!5e0!3m2!1sfr!2scd!4v1741593182166!5m2!1sfr!2scd"
                width="100%"
                height="100%"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <!-- Buttons on Map -->
            <div class="absolute bottom-4 right-4 flex space-x-2">
              <a
                href="https://www.google.com/maps?q=Concession+Maajabu+Gospel"
                target="_blank"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
              >
                <span>View in Google Maps</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-4 transition-transform duration-300 ease-in-out hover:rotate-[45deg]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- end -->
        <!-- NewsLetter -->
        <div
          class="text-white py-12 mt-8 px-6 flex flex-col items-center text-center"
        >
          <h2 class="text-3xl font-bold">
            Newsletter <span class="text-blue-500">Sign Up</span>
          </h2>
          <p class="mt-4 text-gray-400 max-w-lg">
            Restez informé des dernières sorties de nouvel album, des promotions
            exclusives et des offres spéciales en vous abonnant à notre
            newsletter.
          </p>
          <div class="mt-6 flex flex-col sm:flex-row w-full max-w-md">
            <input
              type="email"
              placeholder="Entrez votre email ici"
              class="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              class="mt-3 sm:mt-0 sm:ml-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              S'abonner
            </button>
          </div>
        </div>
        <!-- Fin NewsLetter -->
      </div>
    </section>
  </div>
</template>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
</style>


