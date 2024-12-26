/* eslint-disable no-unused-vars */
import { Button, Option, Select, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";

function CommentForm() {
  const [comments, setComments] = useState([{ criteria: "", comment: "" }]);

  // Các lựa chọn cho Select Criteria
  const criteriaOptions = [
    { value: "Criteria 1", label: "Criteria 1" },
    { value: "Criteria 2", label: "Criteria 2" },
    { value: "Criteria 3", label: "Criteria 3" },
  ];

  // Thêm một form mới khi nhấn "New comment"
  const handleAddComment = () => {
    setComments([...comments, { criteria: "", comment: "" }]);
  };

  // Cập nhật giá trị của từng form
  const handleInputChange = (index, field, value) => {
    const updatedComments = [...comments];
    updatedComments[index][field] = value;
    setComments(updatedComments);
  };

  // Lưu dữ liệu
  const handleSave = (index) => {
    console.log("Saved Comment:", comments[index]);
  };

  // Xóa form
  const handleRemoveComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="flex flex-col gap-y-6">
      {comments.map((comment, index) => (
        <div key={index} className="flex flex-col gap-y-3">
          {/* Select Criteria */}
          <Select
            label="Select criteria"
            value={comment.criteria}
            onChange={(e) => handleInputChange(index, "criteria", e)}
          >
            {criteriaOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>

          {/* Textarea Comment */}
          <Textarea
            label="Comment"
            value={comment.comment}
            onChange={(e) =>
              handleInputChange(index, "comment", e.target.value)
            }
          />

          <div className="flex flex-row justify-start items-center gap-x-2">
            <Button
              variant="outlined"
              className="rounded-full normal-case sm:px-4 px-1 py-1 xl:text-lg lg:text-base md:text-lg text-xs border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
              onClick={() => handleSave(index)}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              className="rounded-full normal-case sm:px-4 px-1 py-1 xl:text-lg lg:text-base md:text-lg text-xs border-custom-red border-2 hover:text-white hover:bg-custom-red transition duration-300 ease-in-out"
              onClick={() => handleRemoveComment(index)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}

      <hr />

      {/* Nút Add New Comment */}
      <Button
        variant="outlined"
        fullWidth
        className="rounded-full normal-case sm:px-4 px-1 py-1 xl:text-lg lg:text-base md:text-lg text-xs border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out"
        onClick={handleAddComment}
      >
        New comment
      </Button>
      <hr />
    </div>
  );
}

export default CommentForm;
