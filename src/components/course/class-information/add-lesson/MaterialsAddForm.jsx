/* eslint-disable no-unused-vars */
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import { Button, IconButton, Input } from "@material-tailwind/react";

FileUpload.propTypes = {
  onFilesChange: PropTypes.func.isRequired,
};

function FileUpload({ onFilesChange }) {
  const maxFileSize = 30 * 1024 * 1024; // 30MB

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "application/pdf": [],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [],
        "image/jpeg": [],
        "audio/mp3": [],
        "video/mp4": [],
      },
      maxSize: maxFileSize,
      onDrop: (files) => onFilesChange(files),
      onDropRejected: (rejections) => {
        console.error("Rejected files:", rejections);
      },
    });

  const acceptedFilesList = acceptedFiles.map((file) => (
    <li key={file.path} className="line-clamp-2">
      {file.path}
    </li>
  ));

  return (
    <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg bg-white w-full">
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
              (Max size: 30MB)
            </p>
          </>
        )}
      </div>
      <div className="mt-4 w-full">
        <h4 className="text-sm font-bold">File uploaded:</h4>
        <ul className="list-decimal">{acceptedFilesList}</ul>
      </div>
    </div>
  );
}

function DynamicFileUploadForm() {
  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      fields: [{ title: "", files: [] }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const handleFileChange = (index, files) => {
    setValue(`fields.${index}.files`, files);
  };

  const onSubmit = (data) => {
    console.log(data.fields);
  };

  return (
    <div className="w-full max-h-[500px] overflow-y-scroll no-scrollbar">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col gap-y-2 p-4 border border-blue-gray-200 rounded-xl"
            >
              <Input {...register(`fields.${index}.title`)} label="Add title" />
              <Controller
                control={control}
                name={`fields.${index}.files`}
                render={() => (
                  <FileUpload
                    onFilesChange={(files) => handleFileChange(index, files)}
                  />
                )}
              />
              <Button onClick={() => remove(index)} color="red">
                Remove
              </Button>
            </div>
          ))}
        </div>

        <IconButton
          variant="text"
          className="w-5 h-5 hover:bg-transparent my-4"
          onClick={() => append({ title: "", files: [] })}
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
            className="rounded-full bg-yellow py-1 hover:bg-custom-red text-black hover:text-white mb-4 me-2"
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

export default DynamicFileUploadForm;
