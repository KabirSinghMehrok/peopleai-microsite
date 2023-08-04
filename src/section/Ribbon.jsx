function Ribbon() {
  return (
    <section class="bg-blue-800">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-lime-500 sm:text-4xl">
            We are enabling AI for social good
          </h2>

          <p class="mt-4 text-white sm:text-xl">
						We are a community of dreamers and doers, curated by the EkStep Foundation, who believe in the power of AI for social change, and public good.
          </p>
        </div>

        <div class="mt-8 sm:mt-12 text-lime-500">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-white">
                members around the world
              </dt>

              <dd class="text-4xl font-extrabold text-lime-500 md:text-5xl">
                6000+
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-white">
                deployed projects
              </dt>

              <dd class="text-4xl font-extrabold text-lime-500 md:text-5xl">
                24+
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-white">
                lives impacted
              </dt>

              <dd class="text-4xl font-extrabold text-lime-500 md:text-5xl">
                1 million+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Ribbon;
