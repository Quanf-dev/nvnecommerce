import trackicon1 from "@assets/trackicon1.png";
import trackicon2 from "@assets/trackicon2.png";
import trackicon3 from "@assets/trackicon3.png";
import trackicon4 from "@assets/trackicon4.png";
import { Typography } from "@material-tailwind/react";

const Track = () => {
  const dataTrack = [
    {
      urlImage: trackicon1,
      title: "SẢN PHẨM CAO CẤP",
      desc: "Các sản phẩm được nhập khẩu nguyên chiếc",
    },
    {
      urlImage: trackicon2,
      title: "HỖ TRỢ 24/7",
      desc: "Đội ngũ Tư vấn viên luôn hỗ trợ online 24/7",
    },
    {
      urlImage: trackicon3,
      title: "VẬN CHUYỂN TOÀN QUỐC",
      desc: "Miễn phí nội thành Tp Huế và Tp Đà Nẵng",
    },
    {
      urlImage: trackicon4,
      title: "TƯ VẤN MIỄN PHÍ",
      desc: "Đội ngũ Kiến trúc sư tư vấn thiết kế tận tâm",
    },
  ];
  return (
    <div className="flex flex-col justify-center lg:flex-row bg-primary ">
      {dataTrack.map((item, index) => (
        <li className="flex items-center justify-center lg:w-1/4 gap-5 list-none border-r-[1px] border-primary-light h-24 lg:h-28 last:border-none ">
          <img src={item.urlImage} className="w-[60px] h-[60px] " />
          <div className="flex flex-col gap-2 text-sm text-white ">
            <Typography className="text-lg font-bold ">{item.title}</Typography>
            <p v>{item.desc}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Track;
