import React from "react";
import GamesIcon from "@mui/icons-material/Games";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import WindowIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";

export const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="w-full h-[1px] bg-gray-300 mt-40"></div>
        <div className="flex mt-20 justify-between">
          <div>
            <div className="flex">
              <GamesIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: "blue",
                }}
                className="mt-1"
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "blue",
                  textDecoration: "none",
                }}
              >
                Sitemark
              </Typography>
            </div>

            <h2 className="font-bold text-gray-700 mt-4">Newsletter</h2>

            <p className="text-gray-500 font-semibold w-[90%] mt-1">
              Subscribe to our newsletter for weekly updates and promotions.
            </p>

            <div className="flex space-x-4">
              <div>
                <form>
                  <label htmlFor="text">
                    <input
                      type="text"
                      placeholder="Your email address"
                      className="mt-6 p-4 w-[340px] h-[40px] border border-gray-300 rounded-xl"
                    />
                  </label>
                </form>
              </div>

              <div>
                <button className="text-white mt-6 w-[100px] h-[40px] bg-blue-900 rounded-xl border">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-20">
            <div>
              <p className="text-gray-800 font-bold">Product</p>

              <ul className="mt-3">
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Highlights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-800 font-bold">Company</p>

              <ul className="mt-3">
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-800 font-bold">Legal</p>

              <ul className="mt-3">
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 leading-8 font-semibold">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-16"></div>

        {/* footer */}

        <div className="mt-16 flex justify-between">
          <div>
            <p className="text-gray-700 font-semibold">
              Privacy Policy • Terms of Service
            </p>
            <p className="text-gray-500 mt-3">
              Copyright © <span className="text-blue-800">Sitemark</span> 2024
            </p>
          </div>

          <div className="flex space-x-6">
            <div>
              <GitHubIcon className="text-gray-600" />
            </div>

            <div>
              <WindowIcon className="text-gray-600" />
            </div>

            <div>
              <AppleIcon className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* footer */}
      </div>
    </>
  );
};
