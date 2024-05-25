// components
import SectionWrapper from "../components/SectionWrapper";

// imgs & videos
import personal_img from "../../imgs/personal_img.png";
import gym_video from "../../imgs/about_us/1.mp4";

const AboutUs = () => {
  return (
    <SectionWrapper title="نبذة عنا" id="about-us">
      <div className="flex gap-5 max-sm:items-center about-us-data-holder">
        <div className="shrink-[0.5]">
          <img
            src={personal_img}
            alt="tarek image"
            width="100%"
            height="100%"
          />
        </div>

        <div>
          <h2 className="title-with-line text-blue-500 after:bg-current pb-2 mb-5">
            كابتن طارق
          </h2>
          <p className="text-slate-6 font-semibold leading-[35px] about-us-description">
            مدرب لياقة بدنية ومعالج بالحجامة و الأعشاب الطبيعية ، ومتخصص التدليك
            العلاجي وتقويم العمود الفقري يدوياً ، نعمل علي مدار الساعة لتقديم
            خدمة افضل لعملاءنا بأسعار مناسبة.
          </p>
        </div>
      </div>

      <video
        className="mx-auto mt-5 h-[600px]"
        src={gym_video}
        controls
        muted
        autoPlay
        loop
      />
    </SectionWrapper>
  );
};
export default AboutUs;
