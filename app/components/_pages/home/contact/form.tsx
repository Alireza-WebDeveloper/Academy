import Input from '@/app/components/shared/ui/input';
import Button from '@/app/components/shared/ui/button';

const Form = () => {
  return (
    <div className="flex justify-center flex-col gap-4 z-30 items-center">
      <p className="text-xl font-bold">لورم ایپسوم متن ساختگی</p>
      <section className="flex items-center gap-2 justify-center  flex-wrap">
        <Input inputSize="lg" placeholder="ایمیل خود را وارد نمایید" />
        <Button size="lg">عضویت</Button>
      </section>
      <p className="w-[60%] text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم صنعت چاپ، برای استفاده
        طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله آنچنان که لازم
        است.
      </p>
    </div>
  );
};

export default Form;
