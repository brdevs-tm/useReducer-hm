import React from "react";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import { Button } from "@mui/material";
import img7 from "../assets/img7.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Product = () => {
  return (
    <>
      <div className="container">
        <div className="relative top-[480px] flex space-x-6">
        <div>
              <div>
            <h1 className="text-5xl font-semibold">Product features</h1>
            <p className="text-gray-600 w-[89%] text-xl mt-4">
              Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the
              types of features, add-ons, or the benefits of the features.
            </p>
          </div>

          <div className="w-[680px] h-[160px] mt-10 p-6 flex space-x-5 bg-blue-50 border rounded-lg border-blue-300 hover:bg-blue-200">
            <div>
              <AutoAwesomeMosaicIcon className="text-blue-500 mt-10" />
            </div>

            <div>
              <h2 className="font-semibold">Dashboard</h2>
              <p className="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus facere odio vitae fugiat molestias. Lorem ipsum dolor
                sit amet consectetur.
              </p>
              <Button
                sx={{
                  right: "8px",
                  position: "relative",
                  marginTop: "5px",
                  color: "black",
                }}
              >
                Learn more
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>

           <div className="w-[680px] h-[160px] mt-10 p-6 flex space-x-5 bg-blue-50 border rounded-lg border-blue-300 hover:bg-blue-200">
            <div>
              <BatteryCharging80Icon className="text-blue-500 mt-10" />
            </div>

            <div>
              <h2 className="font-semibold">Mobile integration</h2>
              <p className="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus facere odio vitae fugiat molestias. Lorem ipsum dolor
                sit amet consectetur.
              </p>
              <Button
                sx={{
                  right: "8px",
                  position: "relative",
                  marginTop: "5px",
                  color: "black",
                }}
              >
                Learn more
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>

           <div className="w-[680px] h-[160px] mt-10 p-6 flex space-x-5 bg-blue-50 border rounded-lg border-blue-300 hover:bg-blue-200">
            <div>
              <AccessTimeIcon className="text-blue-500 mt-10" />
            </div>

            <div>
              <h2 className="font-semibold">Available on all platforms</h2>
              <p className="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus facere odio vitae fugiat molestias. Lorem ipsum dolor
                sit amet consectetur.
              </p>
              <Button
                sx={{
                  right: "8px",
                  position: "relative",
                  marginTop: "5px",
                  color: "black",
                }}
              >
                Learn more
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>
        </div>

        <div>
            <img src={img7} alt="img" className="w-[800px] h-[750px]"/>
        </div>
        </div>
      </div>
    </>
  );
};
