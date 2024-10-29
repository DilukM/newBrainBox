/* eslint-disable react/prop-types */


const ClassCard = ({ subject, unit, date, startTime, endTime, colour, colour2, colour3, colour4, colour5, lecthurer, link }) => {
    return (
        <div className={`${colour} md:w-[48%] xl:w-[32%] max-w-[800px] xl:max-w-[400px]  w-full`} >
            <div className="-translate-x-1 w-fit h-fit mt-3 rounded-e-md p-0 bg-black">
                <span className={`${colour}/50 text-[16px] h-full  px-3 block  text-white font-semibold`} >
                   {date}
                </span>
            </div>
            <div className="p-2">
                <div className="bg-white">
                    <div className={`${colour2} p-1 text-[18px]  font-medium `} >
                        {subject}
                    </div>
                    <div className={`${colour3} p-1 text-[20px] font-medium `} >
                        {unit}
                    </div>
                    <div className={`${colour4} p-1 text-[16px] font-medium `} >
                        { startTime} to {endTime}
                    </div>
                    <div className={`${colour5} p-1 text-[16px] font-medium `} >
                        {lecthurer}
                    </div>
                    <div className="bg-black">
                        {link ? 
                        <span className={` ${colour2} text-white  w-full h-full block text-[16px] text-center`} >Click Here to join</span>
                            :
                            <span className={` ${colour2}  block w-full h-full invisible text-[16px] text-center`} >Click Here to join</span>

}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ClassCard;

