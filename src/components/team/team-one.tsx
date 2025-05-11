"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import team_data from "@/data/team-data";
import TeamItem from "./team-item";
import { ITeamDT } from "@/types/team-d-t";
import TeamModal from "../modal/team-modal";
import { Leaf } from "../svg";

const slider_setting: SwiperOptions = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: false,
  },
  navigation: {
    nextEl: ".team-swiper-button-next",
    prevEl: ".team-swiper-button-prev",
  },
  pagination: {
    el: ".team-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "1400": { slidesPerView: 4 },
    "1200": { slidesPerView: 3 },
    "992": { slidesPerView: 3 },
    "768": { slidesPerView: 2 },
    "576": { slidesPerView: 2 },
    "0": { slidesPerView: 1 }
  }
};

type IProps = {
  title?: string;
  subtitle?: string;
  spacing?: string;
};

const TeamOne = ({ 
  title = "Meet Our Team", 
  subtitle = "The professionals behind our success",
  spacing = "py-20"
}: IProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [teamItem, setTeamItem] = React.useState<ITeamDT | null>(null);

  const handleTeamModal = (team: ITeamDT) => {
    setShowModal(!showModal);
    setTeamItem(team);
  };

  return (
    <section className={`${spacing} bg-white pb-100`}>
      <div className="container container-1480">
        <div className=" mb-16 max-w-2xl mx-auto">
          <span className="ab-inner-subtitle mb-25" style={{fontFamily: 'Glacial Indifference'}}>
                <Leaf />
                {subtitle}
              </span>
          <h4 className="ab-inner-funfact-title tp_title_anim" style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>
                {title}
              </h4>
        </div>

        <div className="relative">
          <Swiper
            {...slider_setting}
            modules={[Autoplay, Navigation, Pagination]}
            className="team-slider"
          >
            {team_data.map((t) => (
              <SwiperSlide key={t.id}>
                <TeamItem item={t} handleTeamModal={handleTeamModal} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="team-swiper-button-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="team-swiper-button-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

        </div>
      </div>

      {/* Team Modal */}
      {teamItem && (
        <TeamModal
          setShowModal={setShowModal}
          showModal={showModal}
          teamItem={teamItem}
        />
      )}
    </section>
  );
};

export default TeamOne;