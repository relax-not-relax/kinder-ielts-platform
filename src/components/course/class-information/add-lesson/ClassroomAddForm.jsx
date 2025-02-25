/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useSnackbar } from "notistack";
import classroomLinkAPI from "../../../../api/classroomLinkApi";
import { useAtom, useSetAtom } from "jotai";
import {
  readRefreshScheduleAtom,
  scheduleSelectedAtom,
} from "../../../../store/mocks/scheduleAtom";

ClassroomAddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

function ClassroomAddForm({ onClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [studySchedule] = useAtom(scheduleSelectedAtom);
  const refresh = useSetAtom(readRefreshScheduleAtom);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmit(true);
    const req = {
      studyScheduleId: studySchedule.id,
      title: data.title,
      description: data.title,
      link: data.link,
    };
    try {
      await classroomLinkAPI.createClassroomLink(
        { scheduleId: studySchedule.id },
        req
      );
      onClose();
      setIsSubmit(false);
      reset();
      enqueueSnackbar("Thêm classroom link thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      refresh();
    } catch (error) {
      enqueueSnackbar("LỖI! Không thêm được classroom link", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setIsSubmit(false);
      onClose();
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <div>
          <Input
            label="Add title"
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

export default ClassroomAddForm;
