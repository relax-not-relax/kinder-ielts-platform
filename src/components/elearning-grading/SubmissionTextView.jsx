/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

SubmissionTextView.propTypes = {};

function SubmissionTextView(props) {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["clean"], // Xóa định dạng
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "align",
  ];

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
    console.log("Content:", content);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Write something amazing..."
        className="h-fit"
      />
      <Button
        variant="outlined"
        className="w-fit rounded-full normal-case sm:px-4 px-1 py-1 xl:text-lg lg:text-base md:text-lg text-xs border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
      >
        Save
      </Button>
    </div>
  );
}

export default SubmissionTextView;
