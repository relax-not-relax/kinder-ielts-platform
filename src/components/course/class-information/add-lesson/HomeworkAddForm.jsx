/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";

HomeworkAddForm.propTypes = {};

function HomeworkAddForm(props) {
  const [value, setValue] = React.useState({
    startDate: null,
    endDate: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input label="Add title" />
        <Input label="Add link" />
        <Textarea label="Add description" />
        <Datepicker
          displayFormat="DD/MM/YYYY"
          primaryColor={"green"}
          placeholder="Set deadline"
          popoverDirection="up"
          useRange={false}
          separator="to"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          containerClassName="relative border border-blue-gray-200 rounded-lg"
        />
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

export default HomeworkAddForm;
