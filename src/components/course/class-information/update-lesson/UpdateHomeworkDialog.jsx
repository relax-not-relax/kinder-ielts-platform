/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import Datepicker from "react-tailwindcss-datepicker";
import formatEndDateTime from "../../../../utils/formatEndDateTime";
import formatStartDateTime from "../../../../utils/formatStartDateTime";
import homeworkAPI from "../../../../api/homeworkApi";
import { useSetAtom } from "jotai";
import { readRefreshScheduleAtom } from "../../../../store/mocks/scheduleAtom";

UpdateHomeworkDialog.propTypes = {
  homework: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function UpdateHomeworkDialog({ homework, isOpen, onClose }) {
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
    startDate: homework.startDate,
    endDate: homework.dueDate,
  });
  const refresh = useSetAtom(readRefreshScheduleAtom);

  React.useEffect(() => {
    setValue({
      startDate: homework.startDate,
      endDate: homework.dueDate,
    });
  }, [homework.startDate, homework.dueDate]);

  const [errorDeadline, setErrorDeadline] = React.useState(null);

  const onSubmit = async (data) => {
    if (!value.startDate || !value.endDate) {
      setErrorDeadline("Vui lòng đặt hạn nộp bài tập");
      return;
    }
    if (value.startDate && value.endDate) {
      setErrorDeadline(null);
    }
    const req = {
      title: data.title,
      description: data.description,
      link: data.link,
      dueDate: formatEndDateTime(value.endDate),
      startDate: formatStartDateTime(value.startDate),
    };
    setIsSubmit(true);
    try {
      const res = await homeworkAPI.updateHomeworkLink(
        { id: homework.id },
        req
      );

      reset();

      onClose();
      setValue({
        startDate: res.data.startDate,
        endDate: res.data.dueDate,
      });
      setIsSubmit(false);
      enqueueSnackbar("Cập nhật homework thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      refresh();
    } catch (error) {
      enqueueSnackbar("Cập nhật homework không thành công!", {
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
            Cập nhật homework
          </h3>
          <IconButton
            size="sm"
            variant="text"
            onClick={() => {
              onClose();
              reset();
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
                  label="Tiêu đề"
                  type="text"
                  size="lg"
                  {...register("title", {
                    required: "Vui lòng nhập tiêu đề cho homework",
                  })}
                  defaultValue={homework.title}
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
                  label="Mô tả"
                  {...register("description", {
                    required: "Vui lòng nhập mô tả cho homework",
                  })}
                  defaultValue={homework.description}
                  error={!!errors.description}
                />
                {errors.description && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.description.message}
                  </Typography>
                )}
              </div>
              <div>
                <Input
                  label="Đường dẫn"
                  type="text"
                  size="lg"
                  {...register("link", {
                    required: "Vui lòng nhập đường dẫn cho bài tập",
                  })}
                  defaultValue={homework.link}
                  error={!!errors.link}
                />
                {errors.link && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.link.message}
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
              {/* <div className="w-full">
                <Controller
                  name="status"
                  control={control}
                  defaultValue={homework.status.name}
                  rules={{
                    required: "Vui lòng chọn trạng thái",
                  }}
                  render={({ field }) => (
                    <Select
                      label="Trạng thái"
                      onChange={(value) => field.onChange(value)}
                      value={field.value}
                      error={!!errors.status}
                    >
                      <Option value="ASSIGNED">ASSIGNED</Option>
                      <Option value="NOT_ASSIGNED">NOT ASSIGNED</Option>
                    </Select>
                  )}
                />
                {errors.status && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.status.message}
                  </Typography>
                )}
              </div> */}
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

export default UpdateHomeworkDialog;
