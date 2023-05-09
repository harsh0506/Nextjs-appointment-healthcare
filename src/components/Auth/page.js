"use client";

import React from "react";

export default function Example() {

    const doctorSpecialties = [
        "Gynecologist",
        "Cardiologist",
        "Dermatologist",
        "Endocrinologist",
        "Gastroenterologist",
        "Hematologist",
        "Neurologist",
        "Oncologist",
        "Ophthalmologist",
        "Orthopedist",
        "Pediatrician",
        "Psychiatrist",
        "Pulmonologist",
        "Radiologist",
        "Urologist"
    ];

    const Education = ["Doctor of Medicine (MD)",
        "Doctor of Osteopathic Medicine (DO)",
        "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
        "Bachelor of Dental Surgery (BDS)",
        "Doctor of Dental Medicine (DMD)",
        "Doctor of Dental Surgery (DDS)",
        "Doctor of Podiatric Medicine (DPM)",
        "Doctor of Veterinary Medicine (DVM)",
        "Bachelor of Science in Nursing (BSN)",
        "Master of Science in Nursing (MSN)",
        "Doctor of Nursing Practice (DNP)",
        "Doctor of Pharmacy (PharmD)",
        "Doctor of Physical Therapy (DPT)",
        "Bachelor of Science in Radiologic Technology (BSRT)",
        "Master of Science in Physician Assistant Studies (MSPAS)",
        "Master of Science in Occupational Therapy (MSOT)"]

    const states = ["maharashtra", "gujrat", "karnataka"]
    const Countries = ["india"]

    const [choosedFileds, setchoosedFileds] = React.useState([])
    const [ChoosedEduction, setChoosedEducation] = React.useState([])
    const [Email, setEmail] = React.useState("")
    const [Username, setUsername] = React.useState("")
    const [PhoneNumber, setPhoneNumber] = React.useState("")
    const [Password, setPassword] = React.useState("")

    {/* Address States */ }
    const [Building, setBuilding] = React.useState("")
    const [Street, setStreetName] = React.useState("")
    const [AreaName, setAreaName] = React.useState("")
    const [City, setCity] = React.useState("")
    const [State, setState] = React.useState("")
    const [Pincode, setPincode] = React.useState("")
    const [Country, setCountry] = React.useState("")

    const [FirsttimeConsultation, setFirsttimeConsultation] = React.useState("")
    const [RoutineConsultation, setRoutineConsultation] = React.useState("")

    function OnSubmit() {
        const Object = {
            email: Email, password: Password, name: Username, phoneNumber: PhoneNumber,
            area: Building + Street + AreaName + City + State + Pincode + Country,
            rates: {
                newPatient: FirsttimeConsultation, routinePatient: RoutineConsultation
            }, specialities: choosedFileds, education: ChoosedEduction

        }

        console.log(Object)
    }


    return (
        <div class="min-h-screen p-6 bg-gray-100 space-y-12 flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
                <div>
                    <h2 class="font-semibold text-xl text-gray-600">Doctor Registration Form</h2>
                    <p class="text-gray-500 mb-6">Please Fill all fields. Give it a try.</p>

                    <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div class="text-gray-600">
                                <p class="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            {/* USername */}
                            <div class="sm:col-span-4">
                                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="username" id="username" value={Username} onChange={(e) => setUsername(e.target.value)} class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Username" />
                                    </div>
                                </div>
                            </div>

                            {/* profile pic */}
                            <div class="col-span-full">
                                <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                                <div class="mt-2 flex items-center gap-x-3">
                                    <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                    </svg>
                                    <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div class="text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                        </svg>
                                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="border-b border-gray-900/10 pb-12">

                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                {/* Email Address */}
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div class="mt-2">
                                        <input id="email" name="email" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                                    <div class="mt-2">
                                        <input id="email" name="email" type="Number" onChange={(e) => setPhoneNumber(e.target.value)} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                {/* Passwords */}
                                <div class="sm:col-span-4">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div class="mt-2">
                                        <input id="email" name="email" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                {/* Address */}

                                {/* Building / Apartment  */}
                                <div class="sm:col-span-2 sm:col-start-1">
                                    <label for="Building / Apartment " class="block text-sm font-medium leading-6 text-gray-900">Building / Apartment</label>
                                    <div class="mt-2">
                                        <input type="text" value={Building} onChange={(e) => setBuilding(e.target.value)} name="Building / Apartments" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                {/* street-NAme */}
                                <div class="sm:col-span-2 ">
                                    <label for="street-NAme" class="block text-sm font-medium leading-6 text-gray-900">Street name</label>
                                    <div class="mt-2">
                                        <input type="text" value={Street} onChange={(e) => setStreetName(e.target.value)} name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                {/* Area-NAme */}
                                <div class="sm:col-span-2 ">
                                    <label for="Area-NAme" class="block text-sm font-medium leading-6 text-gray-900">Area name</label>
                                    <div class="mt-2">
                                        <input type="text" value={AreaName} onChange={(e) => setAreaName(e.target.value)} name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                {/* City-NAme */}
                                <div class="sm:col-span-2 sm:col-start-1">
                                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                    <div class="mt-2">
                                        <input type="text" value={City} onChange={(e) => setCity(e.target.value)} name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                {/* State-NAme */}
                                <div class="sm:col-span-2">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                    <div class="mt-2">
                                        {<select id="country" onChange={(e) => setState(e.target.value)} name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            {states.map((item, index) => <option value={item} key={index}>{item}</option>)}

                                        </select>}

                                    </div>
                                </div>

                                {/* postal code */}
                                <div class="sm:col-span-2">
                                    <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                    <div class="mt-2">
                                        <input type="number" value={Pincode} onChange={(e) => setPincode(e.target.value)} name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                {/* Country */}
                                <div class="sm:col-span-6">

                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                    <div class="mt-2">
                                        {<select id="country" onChange={(e) => setCountry(e.target.value)} name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            {Countries.map((item, index) => <option value={item} key={index}>{item}</option>)}

                                        </select>}
                                    </div>
                                </div>

                                {/* First TimeConsultation */}
                                <div class="sm:col-span-3">
                                    <label for="region" class="block text-sm font-medium leading-6 text-gray-900">First Consultation fees</label>
                                    <div class="mt-2">
                                        <input type="number" value={FirsttimeConsultation} onChange={(e) => setFirsttimeConsultation(e.target.value)} name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Routine Check up fees</label>
                                    <div class="mt-2">
                                        <input type="number" value={RoutineConsultation} onChange={(e) => setRoutineConsultation(e.target.value)} name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Speciality</label>
                                    <div class="mt-2">
                                        <select id="country" onChange={(e) => setchoosedFileds(choosedFileds => [...choosedFileds, e.target.value])} name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            {doctorSpecialties.map((item, index) => <option value={item} key={index}>{item}</option>)}

                                        </select>
                                        <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200 py-4 pl-4">
                                            {choosedFileds.map((item, index) => <>
                                                <div class="mt-2 flex items-center justify-start gap-x-6">
                                                    <p class="block text-sm font-medium leading-6 text-gray-900 pb-4 mt-2" key={index}>{item}</p>
                                                    <button onClick={(e) => {
                                                        const updatedSpecialties = choosedFileds.filter((specialty) => specialty !== item);
                                                        setchoosedFileds(updatedSpecialties)
                                                        console.log(updatedSpecialties)
                                                    }} type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">X</button>
                                                </div></>
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Education</label>
                                    <div class="mt-2">
                                        <select id="country" onChange={(e) => setChoosedEducation(ChoosedEduction => [...ChoosedEduction, e.target.value])} name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            {Education.map((item, index) => <option value={item} key={index}>{item}</option>)}

                                        </select>
                                        <ul role="list" style={{ maxWidth: "20rem" }} class="divide-y divide-gray-100 rounded-md border border-gray-200 py-4 pl-4">
                                            {ChoosedEduction.map((item, index) => <>
                                                <div class="mt-2 flex items-center justify-start gap-x-6">
                                                    <p class="block text-sm font-medium leading-2 text-gray-900 pb-4 mt-2" key={index}>{item}</p>
                                                    <button onClick={(e) => {
                                                        const updatedSpecialties = ChoosedEduction.filter((specialty) => specialty !== item);
                                                        setChoosedEducation(updatedSpecialties)
                                                        console.log(updatedSpecialties)
                                                    }} type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">X</button>
                                                </div></>
                                            )}
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                            <button type="submit" onClick={OnSubmit} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    )
}
