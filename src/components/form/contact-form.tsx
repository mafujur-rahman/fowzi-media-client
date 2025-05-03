'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  serviceType: string;
  budget: string;
  deadline: string;
  message: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().optional(),
  serviceType: yup.string().required("Service type is required"),
  budget: yup.string().required("Budget is required"),
  deadline: yup.string().required("Deadline is required"),
  message: yup.string().required("Message is required"),
});

type IProps = {
  btnCls?: string;
};

export default function RequestQuoteForm({ btnCls = '' }: IProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>First Name</label>
        <input {...register("firstName")} type="text" placeholder="John" />
        <ErrorMsg msg={errors.firstName?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Last Name</label>
        <input {...register("lastName")} type="text" placeholder="Doe" />
        <ErrorMsg msg={errors.lastName?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Email</label>
        <input {...register("email")} type="email" placeholder="you@example.com" />
        <ErrorMsg msg={errors.email?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Phone (optional)</label>
        <input {...register("phone")} type="text" placeholder="+1234567890" />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Service Type</label>
        <input {...register("serviceType")} type="text" placeholder="e.g., Web Design, SEO" />
        <ErrorMsg msg={errors.serviceType?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Estimated Budget</label>
        <input {...register("budget")} type="text" placeholder="$1000 - $5000" />
        <ErrorMsg msg={errors.budget?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Project Deadline</label>
        <input {...register("deadline")} type="text" placeholder="e.g., 4 weeks" />
        <ErrorMsg msg={errors.deadline?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Message</label>
        <textarea {...register("message")} placeholder="Tell us about your project..."></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Request Quote
        </button>
      </div>
    </form>
  );
}
