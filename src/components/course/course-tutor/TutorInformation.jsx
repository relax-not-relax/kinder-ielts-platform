/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

TutorInformation.propTypes = {
  tutorInfo: PropTypes.object.isRequired,
};

function TutorInformation({ tutorInfo }) {
  return (
    <div className="w-full flex lg:flex-col md:flex-row flex-col gap-x-8">
      <div className="flex justify-center h-full">
        <img
          className="xl:h-36 xl:w-36 lg:h-32 lg:w-32 h-40 w-40 object-cover object-center rounded-xl"
          src={tutorInfo?.account?.avatar}
          alt="tutor"
        />
      </div>
      <div>
        <div className="lg:mt-4 md:mt-0 mt-4 w-full">
          <h5 className="lg:text-lg sm:text-base text-sm font-semibold text-custom-green">
            Điểm số của Gia sư:
          </h5>
          <div className="flex flex-row w-full sm:gap-x-3 gap-x-2 mt-2 w-fit">
            <div className="grid grid-rows-2 grid-flow-col sm:gap-3 gap-2">
              <div className="px-3 py-2 flex flex-row items-center justify-between bg-custom-green xl:w-32 lg:w-28 sm:w-32 w-24 rounded-xl">
                <p className="text-yellow font-medium xl:text-base lg:text-sm sm:text-base text-xs">
                  Reading
                </p>
                <p className="text-yellow font-medium xl:text-base lg:text-sm sm:text-base text-xs">
                  {tutorInfo?.reading?.toFixed(1)}
                </p>
              </div>
              <div className="px-3 py-2 flex flex-row items-center justify-between bg-custom-green xl:w-32 lg:w-28 sm:w-32 w-24 rounded-xl">
                <p className="text-yellow font-medium xl:text-base lg:text-sm sm:text-base text-xs">
                  Writing
                </p>
                <p className="text-yellow font-medium xl:text-base lg:text-sm sm:text-base text-xs">
                  {tutorInfo?.writing?.toFixed(1)}
                </p>
              </div>
              <div className="px-3 py-2 flex flex-row items-center justify-between bg-custom-green xl:w-32 lg:w-28 sm:w-32 w-24 rounded-xl">
                <p className="text-yellow font-medium xl:text-base lg:text-sm sm:text-base text-xs">
                  Listening
                </p>
                <p className="text-yellow font-medium xl:text-base lg:text-sm sm:text-base text-xs">
                  {tutorInfo?.listening?.toFixed(1)}
                </p>
              </div>
              <div className="px-3 py-2 flex flex-row items-center justify-between bg-custom-green xl:w-32 lg:w-28 sm:w-32 w-24 rounded-xl">
                <p className="text-yellow font-medium xl:text-base lg:text-sm sm:text-base text-xs">
                  Speaking
                </p>
                <p className="text-yellow font-medium xl:text-base lg:text-sm sm:text-base text-xs">
                  {tutorInfo?.speaking?.toFixed(1)}
                </p>
              </div>
            </div>
            <div className="xl:px-10 flex items-center justify-center grow bg-yellow rounded-xl">
              <p className="xl:text-5xl text-3xl text-custom-green font-bold">
                {tutorInfo?.overall?.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="lg:text-lg sm:text-base text-sm font-semibold text-custom-green">
            Bằng cấp và Giải thưởng:
          </h5>
          <ul className="list-disc ps-4 mt-2 md:w-[400px] w-full">
            {tutorInfo?.certificates?.map((val) => {
              return (
                <li key={val.id} className="xl:text-base sm:text-sm text-xs">
                  {val.detail}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TutorInformation;
