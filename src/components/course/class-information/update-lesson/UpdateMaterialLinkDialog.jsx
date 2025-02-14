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
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Controller, useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import axiosClient from "../../../../api/axiosClient";
import studyMaterialAPI from "../../../../api/studyMaterialApi";

UpdateMaterialLinkDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  materialLink: PropTypes.object.isRequired,
};

FileUpload.propTypes = {
  onFilesChange: PropTypes.func.isRequired,
};

function FileUpload({ onFilesChange }) {
  const [errorUpload, setErrorUpload] = React.useState(null);
  const [isUploading, setIsUploading] = React.useState(false);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "application/pdf": [],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [],
        "image/*": [],
        "audio/mp3": [],
        "video/mp4": [],
      },
      onDrop: async (files) => {
        const fileLink = await getFileLink(files);
        if (fileLink) {
          onFilesChange(fileLink);
        } else {
          setErrorUpload("File không hợp lệ");
        }

        if (errorUpload) {
          setErrorUpload(null);
        }
      },
      onDropRejected: (rejections) => {
        console.error("Rejected files:", rejections);
        setErrorUpload("File không hợp lệ: ", rejections);
      },
    });

  const getFileLink = async (files) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", files[0]);
    try {
      const res = await axiosClient.post(
        `test/upload-file?itemPath=materialLinks`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsUploading(false);
      return res.data;
    } catch (error) {
      setErrorUpload("File không hợp lệ");
      console.log("Failed to upload file", error);
      setIsUploading(false);
      return null;
    }
  };

  const acceptedFilesList = acceptedFiles.map((file) => (
    <li key={file.path} className="line-clamp-2">
      {file.path}
    </li>
  ));

  return (
    <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg bg-white w-full">
      {isUploading ? (
        <Spinner />
      ) : (
        <>
          <div
            {...getRootProps({
              className:
                "flex flex-col items-center justify-center cursor-pointer w-full gap-y-2",
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-gray-500">Drop the files here...</p>
            ) : (
              <>
                <p className="md:text-sm text-xs text-black font-bold">
                  Drag your files here or click to upload
                </p>
                <em className="text-xs">(Up to 1 file allowed)</em>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#159E64"
                >
                  <path d="M440-280h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
                </svg>
                <p className="text-black md:text-sm text-xs text-center">
                  Supported formats: PDF, DOCX, JPG, MP4, MP3 <br />
                </p>
              </>
            )}
          </div>

          <div className="mt-4 w-full">
            <h4 className="text-sm font-bold">File uploaded:</h4>
            <ul className="list-decimal">{acceptedFilesList}</ul>
          </div>
          {errorUpload && (
            <div className="mt-4 w-full">
              <ul className="list-decimal">{errorUpload}</ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function UpdateMaterialLinkDialog({ isOpen, onClose, refresh, materialLink }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [error, setError] = React.useState(null);

  const onSubmit = async (data) => {
    const req = {
      title: data.title,
      link: data.link ? data.link : materialLink.link,
    };
    setIsSubmit(true);
    try {
      await studyMaterialAPI.updateMaterialLink(
        { materialLinkId: materialLink.id },
        req
      );
      setIsSubmit(false);
      onClose();
      reset();
      setValue("link", null);
      refresh();
    } catch (error) {
      setError("Cập nhật material không thành công. Vui lòng thử lại!");
      setIsSubmit(false);
    }
  };

  const handleFilesChange = (filePath) => {
    setValue("link", filePath);
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
            Chỉnh sửa material
          </h3>
          <IconButton
            size="sm"
            variant="text"
            onClick={() => {
              onClose();
              reset();
              setValue("link", null);
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
                    required: "Vui lòng nhập tiêu đề",
                  })}
                  defaultValue={materialLink.title}
                  error={!!errors.title}
                />
                {errors.title && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.title.message}
                  </Typography>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-sm mb-2 font-bold">Current file:</p>
                <div className="w-full">
                  <a
                    className="text-sm font-semibold text-blue-600 underline"
                    href={materialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {materialLink.title}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-sm mb-2 font-bold">New file:</p>
                <Controller
                  control={control}
                  name="link"
                  render={() => (
                    <FileUpload
                      onFilesChange={(filePath) => handleFilesChange(filePath)}
                    />
                  )}
                />
              </div>
              {error && (
                <Typography color="red" className="text-xs mt-1 italic">
                  {error}
                </Typography>
              )}
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

export default UpdateMaterialLinkDialog;
