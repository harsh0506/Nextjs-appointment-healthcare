import React from 'react'

const data = [{
    docotrImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    doctorName: "Arthur Melo",
    doctorEmail: "authurmelo@example.com",
    patientImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    patientName: "Arthur Melo",
    patientEmail: "authurmelo@example.com",
    date: "Jan 6, 2022",
    note: "Monthly subscription",
    status: "Paid"
}, {
    docotrImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    doctorName: "Arthur Melo",
    doctorEmail: "authurmelo@example.com",
    patientImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    patientName: "Arthur Melo",
    patientEmail: "authurmelo@example.com",
    date: "Jan 6, 2022",
    note: "Monthly subscription",
    status: "Paid"
}, {
    docotrImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    doctorName: "Arthur Melo",
    doctorEmail: "authurmelo@example.com",
    patientImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    patientName: "Arthur Melo",
    patientEmail: "authurmelo@example.com",
    date: "Jan 6, 2022",
    note: "Monthly subscription",
    status: "Paid"
}, {
    docotrImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    doctorName: "Arthur Melo",
    doctorEmail: "authurmelo@example.com",
    patientImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    patientName: "Arthur Melo",
    patientEmail: "authurmelo@example.com",
    date: "Jan 6, 2022",
    note: "Monthly subscription",
    status: "Paid"
}, {
    docotrImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    doctorName: "Arthur Melo",
    doctorEmail: "authurmelo@example.com",
    patientImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    patientName: "Arthur Melo",
    patientEmail: "authurmelo@example.com",
    date: "Jan 6, 2022",
    note: "Monthly subscription",
    status: "Paid"
}, {
    docotrImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    doctorName: "Arthur Melo",
    doctorEmail: "authurmelo@example.com",
    patientImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    patientName: "Arthur Melo",
    patientEmail: "authurmelo@example.com",
    date: "Jan 6, 2022",
    note: "Monthly subscription",
    status: "Paid"
}]

function page() {
    return (
        <>
            <section class="container px-4 mx-auto BG-GREY-400">
                <div class="flex flex-col">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div style={{ paddingBottom: "4rem", paddingTop: "4rem" }} class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <h2 className="text-2xl font-bold tracking-tight text-white-900" style={{ paddingBottom: "2rem" }}>Customers also purchased</h2>

                            <div style={{paddingBottom:"2rem"}} className="mt-6 flex max-w-md gap-x-4">
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>

                            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table style={{ background: "#10192f" }} class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th style={{ fontWeight: 500, fontSize: 18, color: "black" }} scope="col" class="py-3.5 px-4 text-sm font-xl text-left rtl:text-right text-black dark:text-gray-400">
                                                <div class="flex items-center gap-x-3">
                                                    <button class="flex items-center gap-x-2">
                                                        <span>Invoice</span>
                                                    </button>
                                                </div>
                                            </th>

                                            <th style={{ fontWeight: 500, fontSize: 18, color: "black" }} scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Date
                                            </th>


                                            <th style={{ fontWeight: 500, fontSize: 18, color: "black" }} scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Customer
                                            </th>
                                            <th style={{ fontWeight: 500, fontSize: 18, color: "black" }} scope="col" class="px-3 py-2.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Customer
                                            </th>

                                            <th style={{ fontWeight: 500, fontSize: 18, color: "black" }} scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Purchase
                                            </th>

                                            <th style={{ fontWeight: 500, fontSize: 18, color: "black" }} scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Status
                                            </th>

                                            <th style={{ fontWeight: 500, fontSize: 18, color: "black" }} scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                        {
                                            data.map((item, index) => (
                                                <tr key={index}>

                                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                        <div class="inline-flex items-center gap-x-3">

                                                            <span>#3066</span>
                                                        </div>
                                                    </td>

                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 6, 2022</td>

                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div class="flex items-center gap-x-2">
                                                            <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                            <div>
                                                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">Arthur Melo</h2>
                                                                <p class="text-xs font-normal text-gray-600 dark:text-gray-400">authurmelo@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td class="px-3 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div class="flex items-center gap-x-2">
                                                            <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                            <div>
                                                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">Arthur Melo</h2>
                                                                <p class="text-xs font-normal text-gray-600 dark:text-gray-400">authurmelo@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Monthly subscription </td>

                                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div class="flex items-center gap-x-6">
                                                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                                                Archive
                                                            </button>
                                                        </div>
                                                    </td>

                                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                            <h2 class="text-sm font-normal">Paid</h2>
                                                        </div>
                                                    </td>

                                                </tr>
                                            ))
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default page