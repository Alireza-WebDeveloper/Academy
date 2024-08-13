import Button from '@/app/components/shared/ui/button';
import ImgContainer from '@/app/components/shared/ui/img-container';
const Gallery = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-8 items-center">
      <section className="flex justify-center">
        <ImgContainer
          src="/img/gallery.jpg"
          classes="w=full lg:h-[339px]  lg:w-[444px] "
        />
      </section>
      <section className="flex flex-col gap-4">
        <p className="font-bold text-xl">لورم ایپسوم متن ساختگی!</p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله که
          لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
          گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
          و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
          که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
          رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
          پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div className="flex gap-2">
          <Button size="lg" variant="solid">
            لورم ایپسوم
          </Button>
          <Button size="lg" variant="outline">
            لورم ایپسوم
          </Button>{' '}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
