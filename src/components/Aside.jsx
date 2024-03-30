import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Aside = () => {
  return (
    <>
   <div className="bg-zinc-950 w-full">
       <div className="container h-[800px]">
        <div className="text-center pt-20 mt-20">
          <h2 className="text-5xl font-semibold text-white">Highlights</h2>
          <p className="text-gray-500 mt-5 text-xl w-[68%] left-40 relative">
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-9 mt-20">
          <Card
            sx={{ maxWidth: 345, background: "#212121", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardContent>
                <div>
                  <SettingsSuggestOutlinedIcon className="text-white" />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white", marginTop: "20px" }}
                >
                  Adaptable performance
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "gray" }}
                >
                  Our product effortlessly adjusts to your needs, boosting
                  efficiency and simplifying your tasks.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345, background: "#212121", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardContent>
                <div>
                  <PsychologyOutlinedIcon className="text-white" />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white", marginTop: "20px" }}
                >
                  Built to last
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "gray" }}
                >
                  Experience unmatched durability that goes above and beyond
                  with lasting investment.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345, background: "#212121", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardContent>
                <div>
                  <ThumbUpIcon className="text-white" />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white", marginTop: "20px" }}
                >
                  Great user experience
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "gray" }}
                >
                  Integrate our product into your routine with an intuitive and
                  easy-to-use interface.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345, background: "#212121", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardContent>
                <div>
                  <AutoFixHighIcon className="text-white" />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white", marginTop: "20px" }}
                >
                  Innovative functionality
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "gray" }}
                >
                  Stay ahead with features that set new standards, addressing
                  your evolving needs better than the rest.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345, background: "#212121", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardContent>
                <div>
                  <BusinessCenterIcon className="text-white" />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white", marginTop: "20px" }}
                >
                  Reliable support
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "gray" }}
                >
                  Count on our responsive customer support, offering assistance
                  that goes beyond the purchase.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345, background: "#212121", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardContent>
                <div>
                  <AccountCircleIcon className="text-white" />
                </div>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white", marginTop: "20px" }}
                >
                  Precision in every detail
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "gray" }}
                >
                  Enjoy a meticulously crafted product where small touches make
                  a significant impact on your overall experience.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
   </div>
    </>
  );
};
