import { usericon } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AlumniSlider = ({ users }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={window.innerWidth <= 768 ? 1 : 3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {users?.map((user) => (
        <SwiperSlide key={user.user_id}>
          <div className="flex w-auto flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
            <img
              className="mb-4 h-40 w-40 rounded-full object-cover"
              src={user.avatar_url ? user.avatar_url : usericon}
              alt={`${user.name} avatar`}
            />
            <p className="text-lg font-semibold first-letter:uppercase">
              {user.name}
            </p>
            <p className="text-md text-gray-500 first-letter:uppercase">
              {user.role_name}
            </p>
            <p className="text-md text-gray-500 first-letter:uppercase">
              {user.training_name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AlumniSlider;
