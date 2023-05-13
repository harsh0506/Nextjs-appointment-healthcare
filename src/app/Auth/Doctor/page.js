
import React from 'react'
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

function page() {
    return (
        <div style={{ background: "white", padding: "80px" }}>
            <div class="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
                <div class="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <div class="px-5 py-2 flex flex-col gap-3 pb-6">
                    <div class="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="w-full h-full rounded-full object-center object-cover" /></div>
                    <div class="">
                        <h3 class="text-xl text-slate-900 relative font-bold leading-6">Dadda Hicham</h3>
                        <p class="text-sm text-gray-600">@daddasoft</p>
                    </div>
                    <div class="flex gap-3 flex-wrap"><span class="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Developer</span><span class="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Design</span><span class="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Managements</span><span class="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">Projects</span></div>
                    <div class="flex gap-2"><button type="button" class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">Send Message</button><button type="button" class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Add to projects</button></div>
                    <h4 class="text-md font-medium leading-3">About</h4>
                    <p class="text-sm text-stone-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores aliquid sequi sunt iusto ipsum earum natus omnis asperiores architecto praesentium dignissimos pariatur, ipsa cum? Voluptate vero eius at voluptas?</p>
                    <h4 class="text-md font-medium leading-3">Experiences</h4>
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                        </svg>
                            <div class="leading-3">
                                <p class=" text-sm font-bold text-slate-700">Ui Designer</p><span class="text-xs text-slate-600">5 years</span>
                            </div>
                            <p class="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                        </div>
                        <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                        </svg>
                            <div class="leading-3">
                                <p class=" text-sm font-bold text-slate-700">Ui Designer</p><span class="text-xs text-slate-600">5 years</span>
                            </div>
                            <p class="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                        </div>
                        <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                        </svg>
                            <div class="leading-3">
                                <p class=" text-sm font-bold text-slate-700">Ui Designer</p><span class="text-xs text-slate-600">5 years</span>
                            </div>
                            <p class="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                        </div>

                        <div className="mx-auto max-w-7xl px-6 lg:px-8">

                            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                                <h3 class="text-xl text-slate-400 relative font-bold leading-3">schdule</h3>

                                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                                    {stats.map((stat) => (
                                        <div key={stat.name} style={{ border: "white", padding: 20, borderRadius: 20, opacity: 20 }} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-indigo-500 flex flex-col-reverse">
                                            <dt className="text-base leading-4 text-gray-300">{stat.name}
                                                <label className=""><span style={{ paddingLeft: 50, cursor: "pointer" }} aria-hidden="true">&rarr;</span></label>
                                            </dt>
                                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page