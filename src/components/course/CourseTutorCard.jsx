/* eslint-disable no-unused-vars */
import { Breadcrumbs } from '@material-tailwind/react';
import React from 'react';
import tutorImg from '../../assets/tutor_1.png';

function CourseTutorCard(props) {
    return (
        <div className='sticky left-0 top-10 w-fit h-full py-12 ps-12 pe-8 shadow-xl shadow-slate-900/20 shadow-b-2 shadow-r-[4px] -shadow-spread-2 bg-white'>
            <Breadcrumbs className='p-0 bg-transparent'>
                <a href="#" className='font-semibold text-xs capitalize'>
                    Trang chủ
                </a>
                <a href="#" className='font-semibold text-xs capitalize'>
                    Khoá học của tôi
                </a>
                <a href="#" className='font-semibold text-xs capitalize'>
                    Hạt giống-HG12
                </a>
            </Breadcrumbs>
            <h2 className='font-bold text-5xl capitalize mt-12'>Hạt giống-HG12</h2>
            <div className='mt-4 text-custom-green'>
                <h4 className='text-lg font-semibold'>HG12-Giảng dạy bởi Gia Sư Minh Khuê</h4>
                <h4 className='text-lg font-semibold'>18:00 - 19:30</h4>
            </div>
            <img className='h-36 w-36 object-cover object-center mt-4 rounded-xl' src={tutorImg} alt="tutor" />
            <div className='mt-4 w-full'>
                <h5 className='text-lg font-semibold text-custom-green'>Điểm số của Gia sư:</h5>
                <div className='flex flex-row w-full gap-x-3 mt-2 w-fit'>
                    <div className='grid grid-rows-2 grid-flow-col gap-3'>
                        <div className='px-3 py-2 flex flex-row items-center bg-custom-green gap-x-4 rounded-xl'>
                            <p className='text-yellow font-medium'>Reading</p>
                            <p className='text-yellow font-medium'>8.0</p>
                        </div>
                        <div className='px-3 py-2 flex flex-row items-center bg-custom-green gap-x-4 rounded-xl'>
                            <p className='text-yellow font-medium'>Writing</p>
                            <p className='text-yellow font-medium'>7.5</p>
                        </div>
                        <div className='px-3 py-2 flex flex-row items-center bg-custom-green gap-x-4 rounded-xl'>
                            <p className='text-yellow font-medium'>Listening</p>
                            <p className='text-yellow font-medium'>9.0</p>
                        </div>
                        <div className='px-3 py-2 flex flex-row items-center bg-custom-green gap-x-4 rounded-xl'>
                            <p className='text-yellow font-medium'>Speaking</p>
                            <p className='text-yellow font-medium'>8.0</p>
                        </div>
                    </div>
                    <div className='px-10 flex items-center justify-center grow bg-yellow rounded-xl'>
                        <p className='text-5xl text-custom-green font-bold'>8.0</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h5 className='text-lg font-semibold text-custom-green'>Bằng cấp và Giải thưởng:</h5>
                <ul className='list-disc ps-4 mt-2 w-[400px]'>
                    <li>Hơn 1 năm kinh nghiệm luyện thi IELTS ở các trung tâm lớn với nhiều học viên đạt 6.0+.</li>
                    <li>Giải Nhì HSG Tỉnh vào năm 12.</li>
                    <li>Giải Khuyến Khích môn Tiếng Anh cho khối Chuyên.</li>
                </ul>
            </div>
        </div>
    );
}

export default CourseTutorCard;