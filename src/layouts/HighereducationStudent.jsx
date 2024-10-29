import DasboradCard from "../pages/student/components/DasboradCard";
import StudentLeftBar from "../pages/student/components/StudentLeftBar";
import StudentTopBar from "../pages/student/components/StudentTopBar";
import HighereducationStudentIndex from "../routes/highereducation_student_index";

const HighereducationStudent = () => {
    return (
        <div className="flex overflow-hidden">
            <StudentLeftBar />

            <div className="px-3 md:p-10 md:pt-0  flex max-w-[1900px] flex-col gap-y-10 w-full lg:w-[calc(100%-100px)]">
                <StudentTopBar />
                <div className="flex flex-col gap-y-10 w-full ">
                    <DasboradCard />
                    <HighereducationStudentIndex />


                </div>
            </div>

        </div>
    );
}

export default HighereducationStudent;
