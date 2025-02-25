/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import Datepicker from "react-tailwindcss-datepicker";
import formatDateTimeSchedule from "../../../../utils/formatDateTimeSchedule";
import classAPI from "../../../../api/classApi";
import { useAtom, useSetAtom } from "jotai";
import {
  readRefreshScheduleAtom,
  scheduleSelectedAtom,
} from "../../../../store/mocks/scheduleAtom";

UpdateLessonInformationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function UpdateLessonInformationDialog({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [studySchedule] = useAtom(scheduleSelectedAtom);
  const refresh = useSetAtom(readRefreshScheduleAtom);
  const [value, setValue] = React.useState({
    startDate: studySchedule.fromTime,
    endDate: studySchedule.toTime,
  });
  const classTime = JSON.parse(sessionStorage.getItem("classTime")) || {};

  const [errorTime, setErrorTime] = React.useState(null);

  React.useEffect(() => {
    setValue({
      startDate: studySchedule.fromTime,
      endDate: studySchedule.toTime,
    });
  }, [studySchedule.fromTime, studySchedule.toTime]);

  const onSubmit = async (data) => {
    if (!value.startDate || !value.endDate) {
      setErrorTime("Vui lòng đặt hạn nộp bài tập");
      return;
    }
    if (value.startDate && value.endDate) {
      setErrorTime(null);
    }
    const request = {
      title: data.title,
      description: data.description,
      fromTime: formatDateTimeSchedule(value.startDate, classTime.from),
      toTime: formatDateTimeSchedule(value.endDate, classTime.to),
    };
    setIsSubmit(true);
    try {
      await classAPI.updateStudyScheduleById(
        { studyScheduleId: studySchedule.id },
        request
      );
      reset();
      setIsSubmit(false);
      onClose();
      refresh();
      enqueueSnackbar("Cập nhật buổi học thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } catch (error) {
      enqueueSnackbar("Cập nhật buổi học không thành công!", {
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
        startDate: studySchedule.fromTime,
        endDate: studySchedule.toTime,
      });
    }
  };
  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      dismiss={{ outsidePress: false }}
      size="xs"
      className="md:p-4 p-2"
    >
      <DialogHeader className="relative m-0 block">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold sm:text-xl text-lg">
            Cập nhật buổi học
          </h3>
          <IconButton
            size="sm"
            variant="text"
            onClick={() => {
              onClose();
              reset();
              setValue({
                startDate: studySchedule.fromTime,
                endDate: studySchedule.toTime,
              });
              setErrorTime(null);
            }}
            disabled={isSubmit}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </div>
        <p className="sm:text-base text-xs font-light">
          Đảm bảo các thông tin thật chính xác
        </p>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-col gap-y-6">
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div>
                <Input
                  label="Tiêu đề buổi học"
                  type="text"
                  size="lg"
                  {...register("title", {
                    required: "Vui lòng nhập tiêu đề buổi học",
                  })}
                  defaultValue={studySchedule.title}
                  error={!!errors.title}
                />
                {errors.title && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.title.message}
                  </Typography>
                )}
              </div>
              <div>
                <Textarea
                  color="gray"
                  label="Mô tả buổi học"
                  {...register("description", {
                    required: "Vui lòng nhập mô tả buổi học",
                  })}
                  defaultValue={studySchedule.description}
                  error={!!errors.description}
                />
                {errors.description && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.description.message}
                  </Typography>
                )}
              </div>
              <div>
                <p className="text-xs mb-1 font-bold">Ngày học</p>
                <Datepicker
                  displayFormat="DD/MM/YYYY"
                  primaryColor={"green"}
                  placeholder="Set deadline"
                  popoverDirection="up"
                  useRange={false}
                  asSingle={true}
                  separator="to"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  containerClassName="relative border border-blue-gray-200 rounded-lg"
                />
                {errorTime && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errorTime}
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
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default UpdateLessonInformationDialog;
