import {
  AparatIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
  YotubeIcon,
} from '../../ui/icons';
import Logo from './logo';

const Company = () => {
  return (
    <div className="flex flex-col gap-10 p-4">
      <div className="flex justify-center lg:gap-48 gap-10 items-center flex-wrap">
        <section className="flex flex-col gap-4 items-center">
          <Logo />
          <span>قدرت گرفته از Thingsboard </span>
          <section className="flex gap-4 items-center">
            <TelegramIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <AparatIcon />
            <YotubeIcon />
          </section>
        </section>
        <div className="flex flex-col items-center gap-4">
          <section className="gap-2 items-center flex lg:w-full w-[80%] m-auto">
            <LocationIcon color="black" />
            <span>
              بوشهر، خیابان ماهینی، پردیس فناوری دانشگاه خلیج فارس، شرکت رونیکا
            </span>
          </section>
          <section className="gap-2 items-center flex">
            <PhoneIcon color="black" />
            <span>+۹۸ ۹۳۷ ۰۲۲ ۵۸۰۸</span>
          </section>
          <section className="gap-2 items-center flex">
            <MailIcon color="black" />
            <span>academy@thingspod.io</span>
          </section>
        </div>
      </div>
      <p className="text-center">
        تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت ارتباط صنعت رونیکا پارس
        می‌باشد و هرگونه کپی‌برداری پیگرد قانونی دارد
      </p>
    </div>
  );
};

export default Company;
