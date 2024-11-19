/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="mb-10 text-gray-600 body-font">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className="text-3xl font-bold text-center text-black ">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className="mb-10 text-2xl font-semibold text-center ">
            What our <span className="text-pink-500 ">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://ecommerce-sk.vercel.app/img/kamal.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">
                  Kamal Nayan Upadhyay
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://www.devknus.com/img/gawri.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">
                  S Mishra
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-4 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">
                  XYZ{" "}
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
