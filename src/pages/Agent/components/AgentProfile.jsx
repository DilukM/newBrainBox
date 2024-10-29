/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, DatePicker, Input, Select, SelectItem } from "@nextui-org/react";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";

const AgentProfile = () => {

    const [id, setid] = useState();
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [username, setusername] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("");
    const [birth, setbirth] = useState("");
    const [joineddate, setjoinedDate] = useState("");
    const [nic, setnic] = useState("");

    const [zipcode, setzipcode] = useState()
    const [email, setemail] = useState()
    const [genderid, setgenderid] = useState()
    const [error, seterror] = useState("")

    const user_token = import.meta.env.VITE_USER_TOKEN;
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = Cookies.get(user_token)

    useEffect(() => {
        const getprofileDetails = async () => {
            const res = await fetch(
                `${apiUrl}agent/profile`,
                {
                    method: "GET",
                    headers: {
                        Authorization: token
                    }

                }
            );
            const data = await res.json();
            if (data.agent) {
                let d = data.agent;
                setid(d.id)
                setfname(d.firstName)
                setusername(d.username)
                setlname(d.lastName)
                setmobile(d.mobile)
                setaddress(d.address)
                setbirth(d.date_of_birth)
                setgenderid(d.gender_id)
                setzipcode(d.zipcode)
                setemail(d.email)
                setjoinedDate(d.joinedDate)
                setnic(d.nic)
            }

        }
        getprofileDetails();
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

            formData.append('firstName', fname !== undefined ? fname : '' );
            formData.append('username', username !== undefined ? username :'' );
            formData.append('lastName', lname !== undefined ? lname : '');
            formData.append('mobile', mobile !== undefined ? mobile :'' );
            formData.append('email', email !== undefined ? email :'' );
            formData.append('nic', nic !== undefined ? nic : '');
            formData.append('address', address !== undefined ? address :'' );
            formData.append('zipcode', zipcode !== undefined ? zipcode :'' );
            // formData.append('birth', birth);
            // console.log(username)

            const res = await fetch(
                `${apiUrl}agent/profile/edit`,

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

            if (data.error) {
                seterror(data.error)
            }

            console.log(data)

        } catch (error) {
            console.error(error);
        }
    };
    const handleDateChange = (date) => {
        console.log(date + "")
        setbirth(date + "");
    };



    return (
        <div className="flex">


            <section className="flex" >


                <div className="flex  w-full  flex-wrap">

                    {/* personal section */}
                    <div className="p-3  w-full ">

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
                                                value={lname}
                                                setname={setlname}
                                                name={"lastName"}
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
                                            <label>NIC</label>
                                            <CInput
                                                name={"nic"}
                                                value={nic}
                                                setname={setnic}
                                                disabled={true}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="   w-full   flex flex-col    ">
                                            <label>Email</label>
                                            <CInput
                                                name={"email"}
                                                setname={setemail}
                                                value={email}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="   w-full   flex flex-col    ">
                                            <label>Address</label>
                                            <CInput
                                                name={"address"}
                                                setname={setaddress}
                                                value={address}
                                                type={"text"}
                                            />
                                        </div>
                                        <div className="    w-full sm:w-[49%]   xl:w-full 2xl:w-[32%]  flex flex-col  ">
                                            <label>Zip Code</label>
                                            <CInput
                                                name={"zipcode"}
                                                setname={setzipcode}
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

                                        <div className="flex items-end flex-col justify-end w-full">
                                            <Button color="success" type="submit" className="text-white">Save</Button>
                                            {error ?
                                            
                                            <p className="text-red-500 ">{error}*</p>
                                              :
                                            ""
                                            }
                                        </div>

                                    </div>
                                </form>

                            </div>







                        </div>
                    </div>




                </div>
            </section>


        </div>


    );
}












const CInput = ({ disabled, type, setname, value }) => {
    return (
        <Input disabled={disabled} type={type} value={value} onChange={(e) => setname(e.target.value)} className=" form-CInput outline-none border-b-2 border-indigo-600 transition-all duration-200   text-[15px]  peer w-full rounded-lg   bg-slate-200 dark:bg-slate-100 hover:bg-slate-300 dark:hover:bg-slate-200   ring-primary/0   focus:outline-none  placeholder:text-slate-400" />


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

export default AgentProfile;
