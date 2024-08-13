import { LocationIcon, MailIcon, PhoneIcon } from '../../ui/icons';

const ContactUs = () => {
  return (
    <section className="flex flex-col gap-4 ">
      <p className="text-xl font-bold">تماس با ما</p>
      <p className="max-w-[70%]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه.
      </p>
      <div className="flex flex-col gap-4 mt-10">
        <section className="gap-2 items-center flex">
          <LocationIcon />
          <span>
            بوشهر، خیابان ماهینی، پردیس فناوری دانشگاه خلیج فارس، شرکت رونیکا
          </span>
        </section>
        <section className="gap-2 items-center flex">
          <PhoneIcon />
          <span>+۹۸ ۹۳۷ ۰۲۲ ۵۸۰۸</span>
        </section>
        <section className="gap-2 items-center flex">
          <MailIcon />
          <span>academy@thingspod.io</span>
        </section>
      </div>
    </section>
  );
};

export default ContactUs;
