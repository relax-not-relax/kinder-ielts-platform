/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Progress, Tooltip, Typography } from '@material-tailwind/react';
import courseBanner from '../../assets/course_bnn_1.png';

CourseCard.propTypes = {

};

function CourseCard(props) {
    return (
        <Card className="w-[22rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none relative"
            >
                <img
                    src={courseBanner}
                    alt="ui/ux review check"
                    className='object-cover object-center'
                />
                <div className='px-2 py-[2px] bg-yellow absolute top-5 left-5 rounded-full'>
                    <span className='text-black text-sm'>Khoá học video</span>
                </div>
            </CardHeader>
            <CardBody className='px-4 py-3'>
                <h4 color="blue-gray" className='text-xl font-bold text-black'>
                    Introduction to Writing
                </h4>
                <p className='text-lg text-black'>Level: Beginner</p>
                <div className='mt-4'>
                    <Progress value={70} size='sm' color='green' variant='filled' />
                    <span className='text-sm text-black'>Đã hoàn thành 70%</span>
                </div>
                <p className='text-sm text-black mt-6'>Khoá học được giảng dạy bởi Tutor Dũng</p>
                <p className='text-sm text-black h-16 line-clamp-3'>
                    Khóa học <span className='font-bold'>&quot;Introduction to Writing&quot;</span> là chương trình học trực tuyến được thiết kế để trang bị cho bạn các kỹ năng và chiến lược cần thiết để đạt kết quả cao trong bài thi Viết IELTS
                </p>
            </CardBody>
            <CardFooter className='px-4'>
                <Button className='rounded-full normal-case bg-yellow text-black text-lg px-3 py-1'>Tiếp tục học</Button>
            </CardFooter>
        </Card>

    );
}

export default CourseCard;