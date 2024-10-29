
const Loading = () => {
    return (
        <div className="h-full grid place-content-center w-full bg-[#e7d9d2]">
            
            <div className="flex gap-3 items-center justify-center flex-col">

            <img
                className="h-16 w-16 md:h-32 md:w-32 "
                src="https://lms.brainbox.lk/images/app-logo-gold.png"
                alt="logo"
            />
            <div className="loader">
                <div className="box box-1">
                    <div className="side-left"></div>
                    <div className="side-right"></div>
                    <div className="side-top"></div>
                </div>
                <div className="box box-2">
                    <div className="side-left"></div>
                    <div className="side-right"></div>
                    <div className="side-top"></div>
                </div>
                <div className="box box-3">
                    <div className="side-left"></div>
                    <div className="side-right"></div>
                    <div className="side-top"></div>
                </div>
                <div className="box box-4">
                    <div className="side-left"></div>
                    <div className="side-right"></div>
                    <div className="side-top"></div>
                </div>
            </div>
        </div>
            </div>
    );
}

export default Loading;
