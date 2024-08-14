'use client';
import Input from '@/app/components/shared/ui/input';
import Button from '@/app/components/shared/ui/button';
import TextArea from '../../ui/text-area';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateContactSchema,
  createContactSchema,
} from '@/app/lib/schema/contact.schema';
import { cn } from '@/app/lib/utils/cn';
import { createContact } from '@/app/lib/actions/home/contact';

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateContactSchema>({
    resolver: zodResolver(createContactSchema),
    mode: 'onBlur',
  });

  const submitForm = async (value: any) => {
    try {
      await createContact(value);
      console.log('ارسال شد');
    } catch (err) {
      console.log('something went Error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col gap-4 text-black"
    >
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col">
          <input
            placeholder="نام و نام خانوادگی*"
            className={cn(
              'border rounded focus:outline-none focus:ring-2',
              'px-6 py-3 text-lg',
              errors.fullname && 'border-red-500'
            )}
            {...register('fullname')}
          />
          {errors.fullname && (
            <span className="text-red-500 text-sm mt-1">
              {errors.fullname.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            placeholder="ایمیل*"
            className={cn(
              'border rounded focus:outline-none focus:ring-2',
              'px-6 py-3 text-lg',
              errors.email && 'border-red-500'
            )}
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>
      </section>
      <div className="flex flex-col">
        <textarea
          className={`p-2 border rounded-md text-black mt-3 resize-none ${
            errors.message ? 'border-red-500' : ''
          }`}
          placeholder="پیام شما"
          color="red"
          {...register('message')}
          rows={4}
        />
        {errors.message && (
          <span className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </span>
        )}
      </div>
      <Button size="lg" className="mr-auto">
        ارسال
      </Button>
    </form>
  );
};

export default Form;
