export const Promo = () => {
  return (
    <section className="relative overflow-hidden bg-white mt-4">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get your gear before holiday!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will boost your gaming
              performance to Ultrakill!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://i.ebayimg.com/images/g/0F8AAOSw1WhhCA3K/s-l600.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1297688846/photo/computer-chair-for-gamers.jpg?s=1024x1024&w=is&k=20&c=z6K9kSEecaJb_-Jn7uFeObKmmICGNhisUtb8H6cNlyA="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.bhphotovideo.com/images/images2500x2500/razer_rz01_03350100_r3u1_deathadder_v2_pro_ergonomic_1710289.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/premium-photo/gaming-keyboard-with-backlight-isolated-white-background_666369-5.jpg?w=2000"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://ae01.alicdn.com/kf/H6896b0f368604f56ad189b76b0b7b4c61/Computer-set-Computador-pc-Gamer-Core-i5-CPU-DDR4-8-16GB-SSD-Gaming-Pc-Desktop-Computer.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://ae01.alicdn.com/kf/Hce75caf1b5ab4fe98cc1823eea47051fk.jpg_640x640Q90.jpg_.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
