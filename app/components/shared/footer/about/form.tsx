import Input from '@/app/components/shared/ui/input';
import Button from '@/app/components/shared/ui/button';
import TextArea from '../../ui/text-area';

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <Input inputSize="lg" placeholder="نام و نام خانوادگی*" />
        <Input inputSize="lg" placeholder="ایمیل*" />
      </section>
      <TextArea className="mt-3" label="پیام شما" color="red" />
      <Button size="lg" className="mr-auto" type="submit">
        ارسال
      </Button>
    </form>
  );
};

export default Form;
