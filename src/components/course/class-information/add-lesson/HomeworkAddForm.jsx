/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";
import formatStartDateTime from "../../../../utils/formatStartDateTime";
import formatEndDateTime from "../../../../utils/formatEndDateTime";
import { useSnackbar } from "notistack";
import homeworkAPI from "../../../../api/homeworkApi";
import { useAtom, useSetAtom } from "jotai";
import {
  readRefreshScheduleAtom,
  scheduleSelectedAtom,
} from "../../../../store/mocks/scheduleAtom";

HomeworkAddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

function HomeworkAddForm({ onClose }) {
  const [value, setValue] = React.useState({
    startDate: null,
    endDate: null,
  });
  const [errorDeadline, setErrorDeadline] = React.useState(null);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [studySchedule] = useAtom(scheduleSelectedAtom);
  const refresh = useSetAtom(readRefreshScheduleAtom);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!value.startDate || !value.endDate) {
      setErrorDeadline("Vui lòng đặt hạn nộp bài tập");
      return;
    }

    const req = {
      title: data.title,
      description: data.description,
      link: data.link,
      studentIds: [],
      status: "ASSIGNED",
      privacyStatus: "PUBLIC",
      viewStatus: "VIEW",
      dueDate: formatEndDateTime(value.endDate),
      startDate: formatStartDateTime(value.startDate),
    };
    setIsSubmit(true);
    try {
      await homeworkAPI.createHomeworkLink(
        { scheduleId: studySchedule.id },
        req
      );
      reset();
      onClose();
      setValue({
        startDate: null,
        endDate: null,
      });
      setIsSubmit(false);
      refresh();
      enqueueSnackbar("Thêm homework mới thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } catch (error) {
      enqueueSnackbar("Thêm homework không thành công!", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setIsSubmit(false);
      onClose();
      reset();
      setValue({
        startDate: null,
        endDate: null,
      });
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <div>
          <Input
            label="Add title"
            type="text"
            size="lg"
            {...register("title", {
              required: "Vui lòng nhập tiêu đề",
            })}
            error={!!errors.title}
          />
          {errors.title && (
            <Typography color="red" className="text-xs mt-1 italic">
              {errors.title.message}
            </Typography>
          )}
        </div>
        <div>
          <Input
            label="Add link"
            {...register("link", {
              required: "Vui lòng nhập đường dẫn",
            })}
            error={!!errors.link}
          />
          {errors.link && (
            <Typography color="red" className="text-xs mt-1 italic">
              {errors.link.message}
            </Typography>
          )}
        </div>
        <div>
          <Textarea
            label="Add description"
            color="gray"
            {...register("description", {
              required: "Vui lòng nhập mô tả cho homework",
            })}
            error={!!errors.description}
          />
          {errors.description && (
            <Typography color="red" className="text-xs mt-1 italic">
              {errors.description.message}
            </Typography>
          )}
        </div>

        <div>
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
          {errorDeadline && (
            <Typography color="red" className="text-xs mt-1 italic">
              {errorDeadline}
            </Typography>
          )}
        </div>
        <div className="w-full flex justify-end items-center">
          <Button
            className="rounded-full bg-yellow py-1 hover:bg-custom-red text-black hover:text-white"
            type="submit"
            loading={isSubmit}
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
