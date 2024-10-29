import AgentLeftBar from "../pages/Agent/components/AgentLeftBar";
import AgentTopBar from "../pages/Agent/components/AgentTopBar";
import Dasboard from "../pages/Agent/components/Dasboard";
import AgentsIndex from "../routes/Agents_index";

const Agent = () => {
    return (
        <div className="overflow-hidden bg-blue-50/50">
            <AgentTopBar />
            <div className='flex'>


                <AgentLeftBar />

                <div className="px-3 md:p-5 md:pt-0  mt-[100px] flex max-w-[1900px] flex-col gap-y-10 w-full xl:w-[calc(100%-200px)]">
                    <div className="flex flex-col gap-y-10 w-full ">
                        <Dasboard />
                        <AgentsIndex />


                    </div>
                </div>
            </div>

        </div>


    );
}


export default Agent;
