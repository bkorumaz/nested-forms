import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export default function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods} >
      <h5>Please fill out the form</h5>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonInfo />
        <JobInfo />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

function PersonInfo() {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <>
      <label>name</label>
      <input name="name" ref={register} />
      <label>surname</label>
      <input name="surname" ref={register} />
    </> 
  );
}

function JobInfo() {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <>
      <label>job title</label>
      <input name="title" ref={register} />
    </>
  );
}