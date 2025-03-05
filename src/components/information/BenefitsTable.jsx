/* eslint-disable no-unused-vars */
import React from "react";

function BenefitsTable() {
  return (
    <div className="w-full md:px-6 px-0 pt-4 grid md:grid-cols-2 md:grid-rows-1 gap-x-8 gap-y-6">
      <div className="flex flex-row flex items-start gap-x-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="64px"
          viewBox="0 -960 960 960"
          width="64px"
          fill="#159e64"
          className="flex-none"
        >
          <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
        </svg>
        <p className="grow font-medium">
          <span className="text-custom-purple">
            Đội ngũ tư vấn, chăm sóc học viên hoạt động tích cực,
          </span>{" "}
          luôn hỗ trợ và bảo vệ quyền lợi của học viên, giúp trải nghiệm học tập
          dễ dàng và minh bạch.{" "}
        </p>
      </div>
      <div className="flex flex-row flex items-start gap-x-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="64px"
          viewBox="0 -960 960 960"
          width="64px"
          fill="#d92323"
          className="flex-none"
        >
          <path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z" />
        </svg>
        <p className="grow font-medium">
          <span className="text-custom-purple">
            Chi phí tối ưu, với nhiều ưu đãi hàng tháng
          </span>{" "}
          để đảm bảo không có học viên nào bị bỏ lại phía sau vì khó khăn tài
          chính.
        </p>
      </div>
    </div>
  );
}

export default BenefitsTable;
