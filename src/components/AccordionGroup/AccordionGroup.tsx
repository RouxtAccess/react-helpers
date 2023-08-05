import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import React, { ReactNode, SyntheticEvent, useState } from "react";

export type CustomAccordionGroupProps = {
  accordions: {
    label: string;
    icon?: ReactNode;
    content: ReactNode | string;
    id?: string;
  }[];
};

const AccordionGroup = ({
  accordions,
  ...props
}: CustomAccordionGroupProps) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panelIndex: number) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelIndex : false);
    };

  return (
    <>
      {accordions.map((accordion, index) => {
        return (
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            {...props}
          >
            <AccordionSummary
              expandIcon={
                <>
                  {accordion.icon ?? (
                    <ExpandMoreIcon sx={{ fill: "#000000" }} />
                  )}
                </>
              }
              aria-controls={accordion.id ?? `accordion-${index}`}
              id={accordion.id ?? `accordion-${index}`}
            >
              {typeof accordion.label === "string" ? (
                <Typography variant="body1">{accordion.label}</Typography>
              ) : (
                accordion.label
              )}
            </AccordionSummary>
            <AccordionDetails>{accordion.content}</AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default AccordionGroup;
