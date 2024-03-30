import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

export const Accordion1 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpansion1 = () => {
    setExpanded1((prevExpanded) => !prevExpanded);
  };
  return (
    <div className="container">
      <div className="mt-60">
        <h1 className="text-center text-4xl font-semibold text-gray-800">
          Frequently asked questions
        </h1>
      </div>
      <div className="mt-16">
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can reach our customer support team by emailing
              support@email.com or calling our toll free number We're here to
              assist you promptly
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              Can I return the product if it doesn't meet my expectations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! We offer a hassle-free retum policy If you're not
              completely satisfied, you can return the product within [number of
              days) days for a full refund or exchange
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded1}
          onChange={handleExpansion1}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded1 ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded1 ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>
              What makes your product stand out from others in the market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our product distinguishes itself through its adaptability,
              durability, and innovative features. We prioritize user
              satisfaction and continually strive to exceed expectations in
              every aspect
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              Is there a warranty on the product, and what does it cover?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, our product comes with a [length of warranty) warranty. It
              covers defects in materials and workmanship. If you encounter any
              issues covered by the warranty, please contact our customer
              support for assistance.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
