/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import StudentManagementTable from "./StudentManagementTable";
import ClassTimeTable from "./ClassTimeTable";

MangeClassDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function MangeClassDialog({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = React.useState("Student management");
  const data = [
    {
      label: "Student management",
      value: "Student management",
      desc: <StudentManagementTable />,
    },
    {
      label: "Class timetable",
      value: "Class timetable",
      desc: <ClassTimeTable />,
    },
  ];

  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      size="xl"
      className="rounded-3xl md:p-6 p-4 overflow-y-scroll no-scrollbar"
    >
      <DialogHeader className="md:px-4 px-0 pt-0 pb-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="md:text-3xl text-2xl text-black">Manage class</h2>
          <IconButton variant="text" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </DialogHeader>
      <DialogBody className="md:px-4 px-0 py-2">
        <Tabs value={activeTab} className="w-full">
          <TabsHeader
            className="bg-transparent p-0"
            indicatorProps={{
              className: "bg-white shadow-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`font-bold justify-start w-fit pe-4 ps-0 lg:text-xl md:text-lg sm:text-base text-xs ${
                  activeTab === value ? "text-black" : "text-gray-500"
                }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="px-0">
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </DialogBody>
    </Dialog>
  );
}

export default MangeClassDialog;
