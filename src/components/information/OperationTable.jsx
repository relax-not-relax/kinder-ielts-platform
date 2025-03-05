/* eslint-disable no-unused-vars */
import React from "react";
import BenefitsTable from "./BenefitsTable";

const operationList = [
  {
    title: "Mô hình",
    description:
      "Mô hình nhóm nhỏ tối đa 6 bạn giúp học viên tương tác, học tập và trao đổi trực tiếp với Gia sư. Kinder IELTS chăm sóc học viên đồng đều ở mọi cập độ lớp, đảm bảo chất lượng buổi học tốt nhất.",
  },
  {
    title: "Con người",
    description:
      "100% Gia sư được đào tạo bài bản kỹ năng sư phạm mỗi quý, song song với việc cập nhật xu hướng mới của bài thi và là đối tác của IDP IELTS Việt Nam.",
  },
  {
    title: "Học liệu",
    description:
      "Tài liệu biên soạn mới sau mỗi năm, dựa vào xu hướng ra đề và thay đổi của bài thi bởi đội ngũ nhiều năm kinh nghiệm dạy tiếng Anh và IELTS.",
  },
];

function OperationTable() {
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-3 md:grid-rows-1 md:border-y-2 border-black">
        {operationList.map((operation, index) => {
          const classNameTitle = `text-custom-purple text-lg font-semibold
        ${
          index === 1
            ? "md:px-2 px-0 md:border-x-2 border-x-0 border-black"
            : ""
        }
        ${index === 2 ? "md:ps-2 ps-0" : ""}
        `;

          const classNameDes = `my-2 lg:h-56 xl:h-36 md:h-36 ${
            index === 2 ? "md:ps-2 ps-0" : ""
          } ${index === 0 ? "md:pe-2 pe-0" : ""} ${
            index === 1
              ? "md:px-2 px-0 md:border-x-2 border-x-0 border-black"
              : ""
          }`;

          return (
            <div key={index} className="my-2">
              <h3 className={classNameTitle}>{operation.title}</h3>
              <div className="pt-2 border-b-2 border-black"></div>
              <p key={index} className={classNameDes}>
                {operation.description}
              </p>
            </div>
          );
        })}
      </div>

      <BenefitsTable />
    </div>
  );
}

export default OperationTable;
