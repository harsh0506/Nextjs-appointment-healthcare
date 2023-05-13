"use client";

import { useState } from "react"
import { Button, Modal } from 'antd';
import Link from 'next/link';


const half = "2023-05-02T09:00:00.000+00:00".split("T")[1]

export const stats = [
    {
        name: 'Monday', value: `${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(3, 5)}
    -${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(3, 5)}`
    },
    {
        name: 'TuesDay', value: `${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(3, 5)}
    -${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(3, 5)}`
    },
    {
        name: 'WednesDay', value: `${"2023-05-02T10:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(3, 5)}
    -${"2023-05-02T17:30:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(3, 5)}`
    },
    {
        name: 'Thursday', value: `${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(3, 5)}
    -${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(3, 5)}`
    },
    {
        name: 'Friday', value: `${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(3, 5)}
    -${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(3, 5)}`
    },
    {
        name: 'Saturday', value: `${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(3, 5)}
    -${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(3, 5)}`
    },
    {
        name: 'Sunday', value: `${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T09:00:00.000+00:00".split("T")[1].slice(3, 5)}
    -${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(0, 2)}:${"2023-05-02T17:00:00.000+00:00".split("T")[1].slice(3, 5)}`
    },
]

export default function Schedule() {
    const [start, setStart] = useState("2023-05-02T09:00:00.000+00:00")
    const [end, setEnd] = useState("2023-05-02T17:00:00.000+00:00");
    const [day , setDay] = useState("")
    const [schdule, setSchedule] = useState(stats)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (s, e , d) => {
        setDay(d)
        setStart(`2023-05-02T${s}:00.000+00:00`); setEnd(`2023-05-02T${e}:00.000+00:00`)
        setIsModalOpen(true);
    };

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
                src="/DoctorBG1.jpeg"
                style={{
                    filter: "brightness(30%)", objectFit: "cover"

                }}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[black] to-[grey] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>


            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>


            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Create a Schedule</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {schdule.map((stat) => (
                            <div key={stat.name} style={{ border: "white", padding: 20, borderRadius: 20, opacity: 20 }} className="hover:bg-indigo-500 flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">{stat.name}
                                    <label className=""><span onClick={() => showModal(stat.value.split("-")[0].trim(), stat.value.split("-")[1].trim() , stat.name)} style={{ paddingLeft: 50, cursor: "pointer" }} aria-hidden="true">&rarr;</span></label>
                                </dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    style={{ background: "black" }}
                    className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                     <Link href="/Doctor">Visit Your profile</Link>
                </a>
            </div>

            {/* Put this part before </body> tag */}
            <TimePicker day={day} schdule ={schdule} setSchedule={setSchedule} setEnd={setEnd} setStart={setStart} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        </div>
    )
}


function TimePicker({ isModalOpen, setIsModalOpen, setEnd, setStart , setSchedule , schdule , day}) {
    const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", '16', "17", "18", "19", "20", "21", "22", "23"]
    const minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59]
    const [StartMinute, SetStartMinute] = useState()
    const [StartHour, SetStartHour] = useState()

    const [EndMinute, SetEndMinute] = useState()
    const [EndHour, SetEndHour] = useState()

    const handleOk = () => {
        setStart(`2023 - 05 - 02T${StartHour}: ${StartMinute}: 00.000 + 00: 00`)
        setEnd(`2023 - 05 - 02T${EndHour}: ${EndMinute}: 00.000 + 00: 00`)
        setSchedule([...schdule , {
            name:day,
            value
        }])
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (<>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div class="container mx-auto my-12 p-12 bg-gray-100">
                <div class="inline-flex text-lg border rounded-md shadow-lg p-2">

                    <select name="" id="" defaultValue={"12"} onChange={(e) => SetStartHour(e.target.value)} style={{ color: "black" }} class="px-2 outline-none appearance-none bg-transparent">
                        {
                            hours.map((item, index) => <option style={{ color: "black" }} value={item} key={index}>{item}</option>)
                        }

                    </select>
                    <span class="px-2">:</span>
                    <select name="" id="" onChange={(e) => SetStartMinute(e.target.value)} style={{ color: "black" }} class="px-2 outline-none appearance-none bg-transparent">
                        {
                            minutes.map((item, index) => <option style={{ color: "black" }} value={item} key={index}>{item}</option>)
                        }
                    </select>
                </div>

                <div class="inline-flex text-lg border rounded-md shadow-lg p-2">
                    <select name="" id="" onChange={(e) => SetEndHour(e.target.value)} style={{ color: "black" }} class="px-2 outline-none appearance-none bg-transparent">
                        {
                            hours.map((item, index) => <option style={{ color: "black" }} value={item} key={index}>{item}</option>)
                        }

                    </select>
                    <span class="px-2">:</span>
                    <select name="" id="" onChange={(e) => SetEndMinute(e.target.value)} style={{ color: "black" }} class="px-2 outline-none appearance-none bg-transparent">
                        {
                            minutes.map((item, index) => <option style={{ color: "black" }} value={item} key={index}>{item}</option>)
                        }
                    </select>
                </div>

            </div>
        </Modal>

    </>)
}