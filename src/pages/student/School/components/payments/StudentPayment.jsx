/* eslint-disable react/no-unknown-property */
import { Button, DatePicker, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { MdOutlineOutbox } from "react-icons/md";

const StudentPayment = () => {

    const values = [
        { key: "Package Rs.30,000.00", label: "Package Rs.30,000.00" },
        { key: "Additional Rs.1,000.00", label: "Additional Rs.1,000.00" },



    ];
    return (
        <div className="bg-white shadow-md">
            <div className="flex items-center gap-1 border-2 p-5">
                <MdOutlineOutbox size={25} className="text-red-700" />
                <h2 className="text-red-700 font-bold text-[18px] md:text-[20px]">UPLOAD DEPOSIT SLIP</h2>
            </div>

            <div className="border-2 p-4   flex flex-wrap items-center">

                <div className="w-full p-3 sm:w-1/2 lg:w-1/3 ">
                    <label>Deposited Date <span className="text-red-500">*</span></label>
                    <DatePicker variant={"underlined"} color="primary" />
                </div>

                <div>
                    <PaymentBox />
                </div>
                <div className="w-full  flex-wrap items-center flex">

                    <div className="w-full p-3 sm:w-1/2 h-full lg:w-1/3 ">
                        <Select
                            label="Please Select Package"
                            isRequired
                            placeholder="Select"
                            labelPlacement="outside"
                            className="w-full border-b-2 border-indigo-600"
                        >
                            {values.map((values) => (
                                <SelectItem key={values.key}>
                                    {values.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>



                    <div className="w-full p-3 sm:w-1/2 flex  max-w-[300px] ">
                        <Input
                            type="number"
                            label="Price"
                            labelPlacement="outside"
                            className=" form-CInput outline-none border-b-2 border-indigo-600 transition-all duration-200   text-[15px]  peer w-full rounded-lg   bg-slate-200 dark:bg-slate-100 hover:bg-slate-300 dark:hover:bg-slate-200   ring-primary/0   focus:outline-none  placeholder:text-slate-400"

                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-gray-800  text-small tracking-widest	">Rs</span>
                                </div>
                            }
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-gray-800 text-small tracking-widest	"> .00</span>
                                </div>
                            }
                        />

                    </div>
                    <div className="w-full">

                        <div className="w-full ">
                            <Button color="success" className="text-white">Submit</Button>

                        </div>
                    </div>

                </div>





            </div>

        </div>
    );
}
const PaymentBox = () => {
    return (
        <div className="bg-white p-5 rounded-md h-[450px] w-full block max-w-[500px] ">

            <label
                for="uploadFile1"
                className="bg-white w-full text-primary font-semibold text-base rounded  h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-primary-500/80 border-dashed mx-auto font-[sans-serif]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 mb-2 fill-primary"
                    viewBox="0 0 32 32"
                >
                    <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000"
                    />
                    <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000"
                    />
                </svg>
                Upload file
                <input type="file" id="uploadFile1" className="hidden" />
                <div className="text-wrap px-3">

                    <p className="text-xs font-medium text-gray-400 mt-2">
                        PNG, JPG SVG, WEBP, and GIF are Allowed.
                    </p>
                </div>
            </label>
            <div className="mt-3">
                <Textarea
                    labelPlacement="outside"
                    isRequired
                    label="Description"
                    placeholder="Enter your description"
                    className="w-full "
                />
            </div>


        </div>
    );
};

export default StudentPayment;
