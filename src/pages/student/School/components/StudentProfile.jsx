/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, DatePicker, Input, Select, SelectItem } from "@nextui-org/react";
import Cookies from 'js-cookie';
import { useEffect, useRef, useState } from "react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";

const StudentProfile = () => {
    const profile = useRef();

    useEffect(() => {
        profile.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const [id, setid] = useState();
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [username, setusername] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("");
    const [birth, setbirth] = useState("");
    const [joineddate, setjoinedDate] = useState("");
    const [grade, setgrade] = useState("");
    const [email, setemail] = useState("");
    const [loading, setloading] = useState(false)
    const [zipcode, setzipcode] = useState()
    const [nameCertificate, setnameCertificate] = useState()
    const [genderid, setgenderid] = useState()

    const [error, seterror] = useState("")

    const user_token = import.meta.env.VITE_USER_TOKEN;
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = Cookies.get(user_token)

    useEffect(() => {
        const checkSession = async () => {
            const res = await fetch(
                `${apiUrl}student/profile`,
                {
                    method: "GET",
                    headers: {
                        Authorization: token
                    }

                }
            );
            const data = await res.json();
            // console.log(data)
            if (data.student) {
                let d = data.student;
                setid(d.id)
                setfname(d.firstName)
                setusername(d.username)
                setlname(d.lastName)
                setmobile(d.mobile)
                setemail(d.email)
                setaddress(d.address)
                setbirth(d.date_of_birth)
                setgenderid(d.gender_id)
                setzipcode(d.zipcode)
                setnameCertificate(d.nameCertificate)
                setjoinedDate(d.joinedDate)
                setgrade(d.grade)
            }

        }
        checkSession();
    }, [])


    const animals = [
        { key: "Father", label: "Father" },
        { key: "Mother", label: "Mother" },


    ];
    const gender = [
        { key: 1, label: "Male" },
        { key: 2, label: "Female" },


    ];

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            let formData = new FormData();
            formData.append('username', username);
            formData.append('firstName', fname);
            formData.append('lastName', lname);
            formData.append('mobile', mobile);
            formData.append('email', email);
            formData.append('nameCertificate', nameCertificate);
            formData.append('address', address);
            formData.append('zipcode', zipcode);
            // formData.append('birth', birth);

            setloading(true)
            const res = await fetch(
                `${apiUrl}student/profile/edit`,

                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Authorization: token
                    }
                }
            );

            const data = await res.json();
            seterror("")
            setloading(false)
            if (data.error) {
                seterror(data.error)
            }
            // console.log(data)

        } catch (error) {
            console.error(error);
        }
    };
    const handleDateChange = (date) => {
        console.log(date + "")
        setbirth(date + "");
    };



    return (
        <div className="flex" ref={profile}>


            <section className="flex" >


                <div className="flex  w-full  flex-wrap">

                    {/* personal section */}
                    <div className="p-3  w-full lg:w-1/2 ">

                        <div className="w-full  bg-white p-5 shadow-xl rounded-xl ">


                            <div className="w-full p-8  pt-8 border-2 border-indigo-200 rounded-xl relative">
                                <div className="bg-white rounded-xl px-5 w-fit absolute font-semibold  left-3 -top-3">
                                    Personal Details

                                </div>
                                <form onSubmit={onSubmit}>
                                    <div className="flex flex-wrap justify-between gap-y-5 gap-1">


                                        <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col   ">
                                            <label>Student ID</label>
                                            <CInput
                                                disabled={true}
                                                name={"id"}
                                                value={id}
                                                placeholder={""}
                                                type={"text"}

                                            />
                                        </div>
                                        <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                            <label>Username</label>
                                            <CInput
                                                name={"username"}
                                                value={username}
                                                setname={setusername}
                                                type={"text"}

                                            />
                                        </div>
                                        <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                            <label>First Name</label>
                                            <CInput
                                                name={"firstName"}
                                                value={fname}
                                                setname={setfname}
                                                type={"text"}

                                            />
                                        </div>
           
                                        <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                            <label>Last Name</label>
                                            <CInput
                                                name={"lastName"}
                                                value={lname}
                                                setname={setlname}
                                                type={"text"}
                                            />
                                        </div>

                                        <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%] flex flex-col ">
                                            <label>Mobile</label>
                                            <CInput
                                                setname={setmobile}
                                                name={"mobile"}
                                                value={mobile}
                                                type={"text"}
                                            />
                                        </div>

                                        <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                            <label>Name On Certificate</label>
                                            <CInput
                                                value={nameCertificate}
                                                setname={setnameCertificate}
                                                name={"nameoncertificate"}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="   w-full   flex flex-col    ">
                                            <label>Email</label>
                                            <CInput
                                                setname={setemail}
                                                name={"address"}
                                                value={email}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="   w-full   flex flex-col    ">
                                            <label>Address</label>
                                            <CInput
                                                setname={setaddress}
                                                name={"address"}
                                                value={address}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="    w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col  ">
                                            <label>Zip Code</label>
                                            <CInput
                                                setname={setzipcode}
                                                name={"zipcode"}
                                                value={zipcode}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="    w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col  ">
                                            <label>Date of Birth <span className="text-red-500">*</span></label>
                                            <DatePicker variant="" className="border-t-none outline-none border-b-2 border-primary " color="primary"
                                                onChange={handleDateChange}
                                            />
                                        </div>
                                        <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                            <label>Gender </label>
                                            <SelectOption
                                                genderid={genderid}
                                                animals={gender} />

                                        </div>

                                        <div className="flex flex-col items-end justify-end w-full">
                                            <Button color="success" isLoading={loading} type="submit" className="text-white">Save</Button>
                                            {error ? 
                                                <p className="text-red-400">{error }</p>
: ""}
                                        </div>

                                    </div>
                                </form>

                            </div>

                            {/* Education section */}



                            <div className="w-full p-8 mt-8  pt-8 border-2 border-indigo-200 rounded-xl relative">
                                <div className="bg-white rounded-xl px-5 w-fit absolute font-semibold  left-3 -top-3">
                                    Education Details

                                </div>
                                <div className="flex flex-wrap justify-between gap-y-5 gap-1">


                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col   ">
                                        <label>Joined Date</label>
                                        <CInput
                                            disabled={true}
                                            value={joineddate}

                                        />
                                    </div>

                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                        <label>Grade</label>
                                        <CInput
                                            disabled={true}
                                            value={grade}
                                        />
                                    </div>
                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                        <label>Education Level</label>
                                        <CInput
                                            disabled={true}
                                            value={''}
                                        />
                                    </div>



                                </div>

                            </div>







                        </div>
                    </div>



                    {/* Guardian Details section */}
                    <div className="p-3  w-full lg:w-1/2 ">

                        <div className="w-full  bg-white p-5 shadow-xl rounded-xl ">


                            <div className="w-full p-8  pt-8 border-2 border-indigo-200 rounded-xl relative">
                                <div className="bg-white rounded-xl px-5 w-fit absolute font-semibold left-3 -top-3">
                                    Guardian Details

                                </div>
                                <span className="font-semibold">1.</span>
                                <div className="flex flex-wrap mb-8 justify-between gap-y-5 gap-1">


                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col   ">
                                        <label>Guardian Type</label>
                                        <SelectOption animals={animals} />
                                    </div>

                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                        <label>First Name</label>
                                        <CInput
                                            name={"nic"}
                                            value={''}
                                            placeholder={""}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                        <label>Middle Name</label>
                                        <CInput
                                            name={"nic"}
                                            placeholder={""}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                        <label>Last Name</label>
                                        <CInput
                                            name={"nic"}
                                            value={''}
                                            placeholder={""}
                                            type={"text"}
                                        />
                                    </div>

                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%] flex flex-col ">
                                        <label>Nic</label>
                                        <CInput
                                            name={"nic"}
                                            value={''}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%] flex flex-col ">
                                        <label>Mobile</label>
                                        <CInput
                                            value={''}
                                            placeholder={"Nic"}
                                            type={"text"}
                                        />
                                    </div>


                                    <div className="flex justify-end w-full">
                                        <Button color="success" className="text-white">Save</Button>

                                    </div>


                                </div>


                                <span className="font-semibold">2.</span>
                                <div className="flex flex-wrap justify-between gap-y-5 gap-1">


                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col   ">
                                        <label>Guardian Type</label>
                                        <SelectOption animals={animals} />
                                    </div>

                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                        <label>First Name</label>
                                        <CInput
                                            name={"nic"}
                                            value={''}
                                            placeholder={""}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                        <label>Middle Name</label>
                                        <CInput
                                            name={"nic"}
                                            placeholder={""}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col    ">
                                        <label>Last Name</label>
                                        <CInput
                                            name={"nic"}
                                            value={''}
                                            placeholder={""}
                                            type={"text"}
                                        />
                                    </div>

                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%] flex flex-col ">
                                        <label>Nic</label>
                                        <CInput
                                            name={"nic"}
                                            value={''}
                                            type={"text"}
                                        />
                                    </div>
                                    <div className="   w-full sm:w-[49%]   xl:w-full 2xl:w-[32%] flex flex-col ">
                                        <label>Mobile</label>
                                        <CInput
                                            name={"nic"}
                                            value={''}
                                            type={"text"}
                                        />
                                    </div>


                                    <div className="flex justify-end w-full">
                                        <Button color="success" className="text-white">Save</Button>

                                    </div>

                                </div>
                            </div>




                        </div>
                    </div>

                </div>
            </section>


        </div>


    );
}












const CInput = ({name ,disabled, type, setname, value }) => {
    return (
        <Input id={name} disabled={disabled} type={type} value={value} onChange={(e) => setname(e.target.value)} className=" form-CInput outline-none border-b-2 border-indigo-600 transition-all duration-200   text-[15px]  peer w-full rounded-lg   bg-slate-200 dark:bg-slate-100 hover:bg-slate-300 dark:hover:bg-slate-200   ring-primary/0   focus:outline-none  placeholder:text-slate-400" />


    )
}

const SelectOption = ({ animals }) => {


    return (

        <Select
            defaultSelectedKeys={["1"]}
            className="w-full border-b-2 border-indigo-600"
        >
            {animals.map((animal) => (
                <SelectItem key={animal.key} >
                    {animal.label}
                </SelectItem>
            ))}
        </Select>
    )
}

export default StudentProfile;
