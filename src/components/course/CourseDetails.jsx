/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
import { ClassInformation } from './ClassInformation';
import AllMyCourse from './AllMyCourse';
import AcademicArticle from './AcademicArticle';

CourseDetails.propTypes = {

};

function CourseDetails(props) {
    const [openManageClass, setOpenManageClass] = React.useState(false);
    const handleOpenManageClass = () => setOpenManageClass(true);
    const handleCloseManageClass = () => setOpenManageClass(false);


    return (
        <div className='w-full min-h-screen'>
            <div className='flex flex-row justify-start items-center gap-x-2 px-8'>
                <Button variant="outlined" className="rounded-full normal-case px-4 py-2 text-lg border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out">
                    Manage class
                </Button>
                <Button variant="outlined" className="rounded-full normal-case px-4 py-2 text-lg border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out">
                    Attendance
                </Button>
                <Button variant="outlined" className="rounded-full normal-case px-4 py-2 text-lg border-custom-green border-2 hover:text-white hover:bg-custom-green transition duration-300 ease-in-out">
                    Progression
                </Button>
            </div>
            <ClassInformation />
            <AllMyCourse />
            <AcademicArticle />
        </div>
    );
}

export default CourseDetails;