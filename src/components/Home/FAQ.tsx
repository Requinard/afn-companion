import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export const FAQ = () => (
    <>
        <Accordion>
            <AccordionSummary>Is there parking nearby?</AccordionSummary>
            <AccordionDetails>
                A: There are several parking garages around town, closest being
                the ''Zuidpoortgarage''!
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>Where is the Hotel?</AccordionSummary>
            <AccordionDetails>
                There are several parking garages around town, closest being the
                ''Zuidpoortgarage''!
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>
                Do you have 1 person bedrooms? Or three person rooms?
            </AccordionSummary>
            <AccordionDetails>
                Unfortunately we can only offer double bedrooms, and sharing is
                required.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>Do you offer day tickets?</AccordionSummary>
            <AccordionDetails>
                Yes we will! Seperate days, or both days!
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>Is there a sponsor package?</AccordionSummary>
            <AccordionDetails>
                Yes there are! For a small contribution you can help us grow,
                and get something in return.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>When will tickets be available?</AccordionSummary>
            <AccordionDetails>
                On Saturday the 28th at 12:00 in the midday.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>Do you offer payment plans?</AccordionSummary>
            <AccordionDetails>
                We do not offer payment plans at this time.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>What is the minimum age?</AccordionSummary>
            <AccordionDetails>
                18. Security may check your ID card at entry.
            </AccordionDetails>
        </Accordion>
    </>
);
