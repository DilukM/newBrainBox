/* eslint-disable react/prop-types */
import DasboradCard from '../pages/student/School/components/DasboradCard';
import StudentLeftBar from '../pages/student/School/components/StudentLeftBar';
import StudentTopBar from '../pages/student/School/components/StudentTopBar';

import StudentsIndex from '../routes/students_index';


const Student = ({ authuser }) => {

    return (
        <div className="overflow-hidden bg-blue-50/50">
            <StudentTopBar />
            <div className='flex'>


                <StudentLeftBar />

                <div className="px-3 md:p-5 md:pt-0  mt-[100px] flex max-w-[1900px] flex-col gap-y-10 w-full xl:w-[calc(100%-200px)]">
                    <div className="flex flex-col gap-y-10 w-full ">
                        <DasboradCard authuser={authuser} />

                        <StudentsIndex />


                    </div>
                </div>
            </div>

        </div>


    );
}

export default Student;
