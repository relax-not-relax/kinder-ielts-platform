/* eslint-disable no-unused-vars */
import React from "react";
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

UpdateLessonInformationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  studySchedule: PropTypes.object.isRequired,
};

function UpdateLessonInformationDialog({
  isOpen,
  onClose,
  refresh,
  studySchedule,
}) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
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
      enqueueSnackbar("Cập nhật buổi học thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      reset();
      setIsSubmit(false);
      refresh();
      onClose();
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
      className="p-4"
    >
      <DialogHeader className="relative m-0 block">
        <Typography variant="h5" color="blue-gray">
          Cập nhật buổi học
        </Typography>
        <Typography className="font-normal text-gray-600">
          Đảm bảo các thông tin thật chính xác
        </Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
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
              <div className="w-full flex justify-end">
                <Button
                  type="submit"
                  color="green"
                  loading={isSubmit}
                  className="w-fit"
                >
                  Cập nhật
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
