/* eslint-disable no-unused-vars */
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import {
  Button,
  IconButton,
  Input,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axiosClient from "../../../../api/axiosClient";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import studyMaterialAPI from "../../../../api/studyMaterialApi";
import { useAtom, useSetAtom } from "jotai";
import {
  readRefreshScheduleAtom,
  scheduleSelectedAtom,
} from "../../../../store/mocks/scheduleAtom";

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
            <div className="mt-4 w-full text-red-600">
              <ul className="list-decimal">{errorUpload}</ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

MaterialsAddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

function MaterialsAddForm({ onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      materialLinks: [{ title: "", link: "" }],
    },
  });
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [studySchedule] = useAtom(scheduleSelectedAtom);
  const refresh = useSetAtom(readRefreshScheduleAtom);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "materialLinks",
  });

  const handleFileChange = (index, filePath) => {
    setValue(`materialLinks.${index}.link`, filePath);
  };

  const onSubmit = async (data) => {
    const req = {
      title: data.title,
      description: data.description,
      privacyStatus: "PUBLIC",
      studentIds: [],
      materialLinks: data.materialLinks,
    };
    setIsSubmit(true);
    try {
      await studyMaterialAPI.createStudyMaterial(
        { scheduleId: studySchedule.id },
        req
      );
      reset();
      onClose();
      setIsSubmit(false);
      refresh();
      enqueueSnackbar("Thêm study material mới thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } catch (error) {
      enqueueSnackbar("Thêm study material không thành công!", {
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
    <div className="w-full max-h-[500px] overflow-y-scroll no-scrollbar">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-1"
      >
        <div>
          <Input
            label="Tiêu đề"
            type="text"
            size="lg"
            {...register("title", {
              required: "Vui lòng nhập tiêu đề cho link",
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
          <Textarea
            color="gray"
            label="Mô tả"
            {...register("description", {
              required: "Vui lòng nhập mô tả cho link",
            })}
            error={!!errors.description}
          />
          {errors.description && (
            <Typography color="red" className="text-xs mt-1 italic">
              {errors.description.message}
            </Typography>
          )}
        </div>
        <div className="flex flex-col gap-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col gap-y-2 p-4 border border-blue-gray-200 rounded-xl"
            >
              <Input
                {...register(`materialLinks.${index}.title`)}
                label="Add title"
              />
              <Controller
                control={control}
                name={`materialLinks.${index}.link`}
                render={() => (
                  <FileUpload
                    onFilesChange={(filePath) =>
                      handleFileChange(index, filePath)
                    }
                  />
                )}
              />
              <Button
                onClick={() => {
                  if (fields.length > 1) {
                    remove(index);
                  } else {
                    return;
                  }
                }}
                color="red"
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        <IconButton
          variant="text"
          className="w-5 h-5 hover:bg-transparent my-4"
          onClick={() => append({ title: "", link: "" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#159E64"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </IconButton>
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

export default MaterialsAddForm;
