/* eslint-disable no-unused-vars */
import { useDropzone } from "react-dropzone";

function FileUpload(props) {
  const maxFileSize = 30 * 1024 * 1024; // 30MB

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    accept: {
      "application/pdf": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "image/jpeg": [],
      "audio/mp3": [],
      "video/mp4": [],
    },
    maxSize: maxFileSize,
    onDropRejected: (rejections) => {
      console.error("Rejected files:", rejections);
    },
  });

  const acceptedFilesList = acceptedFiles?.map((file) => (
    <li key={file.path}>
      {file.path} - {(file.size / 1024 / 1024).toFixed(2)} MB
    </li>
  ));

  const rejectedFilesList = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      <span>
        {file.path} - {(file.size / 1024 / 1024).toFixed(2)} MB
      </span>
      <ul>
        {errors.map((e) => (
          <li key={e.code} className="text-red-500">
            {e.message}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div>
      <p className="text-sm text-black font-medium mb-2">Upload file</p>
      <div className="flex flex-col items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg bg-white w-full">
        <div
          {...getRootProps({
            className:
              "flex flex-col items-center justify-center cursor-pointer w-full gap-y-4",
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-gray-500">Drop the files here...</p>
          ) : (
            <>
              <p className="text-base text-black font-bold">
                Drag your files here or click to upload
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80px"
                viewBox="0 -960 960 960"
                width="80px"
                fill="#159E64"
              >
                <path d="M440-280h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
              </svg>
              <p className="text-black text-base text-center">
                Supported formats: PDF, DOCX, JPG, MP4, MP3 <br />
                (Max size: 30MB)
              </p>
            </>
          )}
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-bold">Accepted files:</h4>
          <ul className="list-disc pl-5">{acceptedFilesList}</ul>
          <h4 className="text-sm font-bold mt-4 text-red-500">
            Rejected files:
          </h4>
          <ul className="list-disc pl-5">{rejectedFilesList}</ul>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
