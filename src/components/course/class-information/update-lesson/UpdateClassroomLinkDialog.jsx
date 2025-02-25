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
import classroomLinkAPI from "../../../../api/classroomLinkApi";
import { useSetAtom } from "jotai";
import { readRefreshScheduleAtom } from "../../../../store/mocks/scheduleAtom";

UpdateClassroomLinkDialog.propTypes = {
  classroomLink: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function UpdateClassroomLinkDialog({ classroomLink, isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const refresh = useSetAtom(readRefreshScheduleAtom);

  const onSubmit = async (data) => {
    const req = {
      title: data.title,
      description: data.description,
      link: data.link,
    };
    setIsSubmit(true);
    try {
      await classroomLinkAPI.updateClassroomLinkInfo(
        { id: classroomLink.id },
        req
      );
      setIsSubmit(false);
      reset();
      onClose();
      enqueueSnackbar("Cập nhật classroom link thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      refresh();
    } catch (error) {
      enqueueSnackbar("Cập nhật classroom link không thành công!", {
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
            Cập nhật classroom link
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
                    required: "Vui lòng nhập tiêu đề cho link",
                  })}
                  defaultValue={classroomLink.title}
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
                    required: "Vui lòng nhập mô tả cho link",
                  })}
                  defaultValue={classroomLink.description}
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
                    required: "Vui lòng nhập đường dẫn",
                  })}
                  defaultValue={classroomLink.link}
                  error={!!errors.link}
                />
                {errors.link && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.link.message}
                  </Typography>
                )}
              </div>
              {/* <div className="w-full">
                <Controller
                  name="status"
                  control={control}
                  defaultValue={classroomLink.status.name}
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
                      <Option value="VIEW">VIEW</Option>
                      <Option value="HIDDEN">HIDDEN</Option>
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

export default UpdateClassroomLinkDialog;
