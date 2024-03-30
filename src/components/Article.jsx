import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Article = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="container">
        <div className="mt-[800px]">
          <div className="text-center">
            <h2 className="text-5xl font-semibold">Testimonials</h2>
            <p className="text-gray-500 mt-5 text-xl w-[68%] left-40 relative">
              See what our customers love about our products. Discover how we
              excel in efficiency, durability, and satisfaction. Join us for
              quality, innovation, and reliable support.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 mt-20 gap-10 ml-4">
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "1px 2px 10px 1px",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    I absolutely love how versatile this product is! Whether I'm
                    tackling work projects or indulging in my favorite hobbies,
                    it seamlessly adapts to my changing needs. Its intuitive
                    design has truly enhanced my daily routine, making tasks
                    more efficient and enjoyable.
                  </Typography>
                </CardContent>

                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={img1} alt="img" />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Remy Sharp"
                  subheader="Senior Engineer"
                />
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "1px 2px 10px 1px",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    One of the standout features of this product is the
                    exceptional customer support. In my experience, the team
                    behind this product has been quick to respond and incredibly
                    helpful. It's reassuring to know that they stand firmly
                    behind their product.
                  </Typography>
                </CardContent>

                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={img2} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Travis Howard"
                  subheader="Lead Product Designer"
                />
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "1px 2px 10px 1px",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    The level of simplicity and user-friendliness in this
                    product has significantly simplified my life. I appreciate
                    the creators for delivering a solution that not only meets
                    but exceeds user expectations.
                  </Typography>
                </CardContent>

                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={img3} alt="img" />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Cindy Baker"
                  subheader="CTO"
                />
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "1px 2px 10px 1px",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    I appreciate the attention to detail in the design of this
                    product. The small touches make a big difference, and it's
                    evident that the creators focused on delivering a premium
                    experience.
                  </Typography>
                </CardContent>

                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={img4} alt="img" />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Julia Stewart"
                  subheader="Senior Engineer"
                />
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "1px 2px 10px 1px",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    I've tried other similar products, but this one stands out
                    for its innovative features. It's clear that the makers put
                    a lot of thought into creating a solution that truly
                    addresses user needs.
                  </Typography>
                </CardContent>

                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={img5} alt="img" />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="John Smith"
                  subheader="Product Designer"
                />
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "1px 2px 10px 1px",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    The quality of this product exceeded my expectations. It's
                    durable, well-designed, and built to last. Definitely worth
                    the investment!
                  </Typography>
                </CardContent>

                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={img6} alt="img" />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Daniel Wolf"
                  subheader="CDO"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
