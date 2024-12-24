/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";

WarmUpTestAddForm.propTypes = {};

function WarmUpTestAddForm(props) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input label="Add title" />
        <Input label="Add link" />
        <div className="w-full flex justify-end items-center">
          <Button
            className="rounded-full bg-yellow py-1 hover:bg-custom-red text-black hover:text-white"
            type="submit"
          >
            <span className="normal-case xl:text-lg sm:text-base text-sm">
              Save changes
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default WarmUpTestAddForm;
