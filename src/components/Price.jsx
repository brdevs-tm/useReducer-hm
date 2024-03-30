import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Price = () => {
  return (
    <>
      <div className="container">
        <div className="text-center pt-20 mt-6">
          <h2 className="text-5xl font-semibold text-gray-800">Pricing</h2>
          <p className="text-gray-500 mt-5 text-xl w-[65%] left-48 relative">
            Quickly build an effective pricing table for your potential
            customers with this layout. It's built with default Material UI
            components with little customization.
          </p>
        </div>

        <div className="mt-20 flex space-x-6 relative right-8">
          <div className="w-[400px] h-[500px] mt-16 border border-blue-300 rounded-2xl p-9">
            <p className="text-gray-900 text-xl">Free</p>
            <div className="mt-3 flex space-x-4">
              <h1 className="text-gray-900 text-5xl font-semibold">$0</h1>
              <p className="mt-4 text-xl font-semibold text-gray-700">
                per month
              </p>
            </div>

            <div className="w-[300px] h-[1px] bg-gray-400 mt-10"></div>

            <div className="mt-6">
              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-900 font-semibold hover:text-gray-500">
                  10 users included
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-900 font-semibold hover:text-gray-500">
                  2 GB of storage
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-900 font-semibold hover:text-gray-500">
                  Help center access
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-900 font-semibold hover:text-gray-500">
                  Email support
                </p>
              </div>

              <button className="mt-16 w-[330px] h-[50px] border border-blue-500 rounded-2xl bg-blue-100">
                Sign up for free
              </button>
            </div>
          </div>

          <div className="w-[400px] h-[620px] border bg-blue-950 border-blue-300 rounded-2xl p-9">
            <div className="flex space-x-16 mt-4">
              <p className="text-white text-xl">Professional</p>

              <button className="w-[160px] rounded-2xl h-[35px] text-blue-950 p-1 bg-blue-100 border border-blue-700">
                Recommended
              </button>
            </div>
            <div className="mt-6 flex space-x-4">
              <h1 className="text-white text-5xl font-semibold">$15</h1>
              <p className="mt-4 text-xl font-semibold text-gray-50">
                per month
              </p>
            </div>

            <div className="w-[300px] h-[1px] bg-gray-600 mt-10"></div>

            <div className="mt-6">
              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-50 font-semibold hover:text-gray-500">
                  20 users included
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-50 font-semibold hover:text-gray-500">
                  10 GB of storage
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-50 font-semibold hover:text-gray-500">
                  Help center access
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-50 font-semibold hover:text-gray-500">
                  Priority email support
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-50 font-semibold hover:text-gray-500">
                  Dedicated team
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-50 font-semibold hover:text-gray-500">
                  Best deals
                </p>
              </div>

              <button className="mt-16 w-[330px] h-[50px] text-white rounded-2xl bg-blue-800">
                Start now
              </button>
            </div>
          </div>

          <div className="w-[400px] h-[500px] mt-16 border border-blue-300 rounded-2xl p-9">
            <p className="text-gray-900 text-xl">Enterprise</p>
            <div className="mt-3 flex space-x-4">
              <h1 className="text-gray-900 text-5xl font-semibold">$30</h1>
              <p className="mt-4 text-xl font-semibold text-gray-700">
                per month
              </p>
            </div>

            <div className="w-[300px] h-[1px] bg-gray-400 mt-10"></div>

            <div className="mt-6">
              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-900 font-semibold hover:text-gray-500">
                  50 users included
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-900 font-semibold hover:text-gray-500">
                  30 GB of storage
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-900 font-semibold hover:text-gray-500">
                  Help center access
                </p>
              </div>

              <div className="flex space-x-3">
                <Checkbox {...label} defaultChecked />
                <p className="mt-2 text-gray-900 font-semibold hover:text-gray-500">
                  Phone & email support
                </p>
              </div>

              <button className="mt-16 w-[330px] h-[50px] border border-blue-500 rounded-2xl bg-blue-100">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
