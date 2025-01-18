import checklist from "@assets/checklist.png";

const Testimonial = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-5 mx-auto sm:px-6 lg:px-8 lg:py-16">
        <h2 className="flex items-center gap-5 text-xl font-bold tracking-tight text-center text-gray-900 liner-container">
          Đánh giá đáng tin cậy từ khách hàng
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar1.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex relative ">
                  Nguyễn Thị Phương Quỳnh{" "}
                  <span className="absolute top-2 right-5">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Ghế đẹp, chất lượng, giá rẻ, a chủ tính dui dễ thương
              </p>
            </blockquote>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar2.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex relative ">
                  Nguyễn Thị Phương{" "}
                  <span className="absolute -right-5 top-1">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Bàn và ghế bên shop rất đẹp,chắc chắn giá lại tốt so với nhiều
                nơi. Shop hỗ trợ bảo hành, sửa chữa nhiệt tình, nhanh chóng
              </p>
            </blockquote>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar3.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex relative ">
                  Zilong Co{" "}
                  <span className="absolute -right-5 top-[6px]">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                The chair is both aesthetically pleasing and reasonably priced.
                I highly recommend it.
              </p>
            </blockquote>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar4.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex relative ">
                  Lê Khắc Hoài Trang{" "}
                  <span className="absolute -right-5 top-[6px]">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Hàng chất lượng, shop uy tín, tư vấn quá nhiệt tình.. 10đ nhaaa
              </p>
            </blockquote>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar5.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex relative ">
                  Lê Đình Nam Anh{" "}
                  <span className="absolute -right-5 top-[6px]">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Hàng đẹp. Giá rẻ giao hàng tận tình. Đánh giá 5*
              </p>
            </blockquote>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar2.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex relative ">
                  Khánh Trinh{" "}
                  <span className="absolute -right-5 top-[6px]">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Hàng hoá rất ok luôn nhé. Tư vấn rất nhiệt tình Hàng chất lượng,
                chắc chắn. Nên mua 👌👌
              </p>
            </blockquote>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar2.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex ">
                  Nguyễn Thị Phương Quỳnh{" "}
                  <span className="relative top-2 right-5">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Hàng hóa rất đẹp, ship hàng nhanh. Tư vấn rất nhiệt tình đánh
                giá 5 saoo😍😍
              </p>
            </blockquote>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="relative p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar2.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex relative ">
                  Peter Lee{" "}
                  <span className="absolute -right-5 top-[6px]">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Mua nhanh cái ghế ở đây mà thấy rất ok. cám ơn shop nha
              </p>
            </blockquote>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
              <div className="flex gap-4">
                <img
                  alt=""
                  src="https://www.material-tailwind.com/img/avatar2.jpg"
                  className="object-cover rounded-full size-14"
                />
                <p className="mt-0.5 text-lg font-medium text-gray-900 flex relative ">
                  Khanh Huyen{" "}
                  <span className="absolute -right-5 top-[6px]">
                    <img src={checklist} alt="" />
                  </span>
                </p>
              </div>

              <p className="mt-4 text-gray-700">
                Hàng hóa chất lượng. Giá tốt, nên mua
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
