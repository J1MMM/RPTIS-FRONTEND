import React from "react";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { Box, Stack, TextField, Typography } from "@mui/material";
import "../../styles.scss";
import LabeledInput from "../shared/LabeledInput";
function LandFaasFormView({
  open,
  actionButton,
  maxWidth,
  onClose,
  onSubmit,
  title,
}) {
  return (
    <ContainerModal
      open={open}
      actionButton={actionButton}
      maxWidth={maxWidth}
      onClose={onClose}
      onSubmit={onSubmit}
      title={title}
    >
      <Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption">RPTA FORM NO.12001</Typography>
          <Typography variant="body2">ATTACHMENT 1</Typography>
        </Stack>
        <Typography variant="body1" textAlign="center" fontWeight="bold">
          REAL PROPERTY FIELD APPRAISAL & ASSESSMENT SHEET - LAND
        </Typography>
        <br />
        <Stack direction="row" justifyContent="end" mb={2}>
          <div className="wrapper b-none">
            <Typography variant="body2" sx={{ fontWeight: "600" }}>
              TRANSACTION CODE:
            </Typography>
            <input style={{ borderBottom: "1px solid" }} />
          </div>
        </Stack>
        {/* table  */}

        <div className="grid-2">
          <LabeledInput label="ARP No.:" />
          <LabeledInput label="PIN:" />
        </div>
        <div className="grid-2">
          <div className="grid-2">
            <LabeledInput label="OCT/TCT/No." />
            <LabeledInput className="br-0" label="Date:" />
          </div>
          <div className="grid-3">
            <LabeledInput label="Survey No." />
            <LabeledInput label="Lot No." />
            <LabeledInput label="Blk No." />
          </div>
          <LabeledInput label="Owner:" />
          <LabeledInput label="TIN:" />
        </div>
      </Stack>
    </ContainerModal>
  );
}

export default LandFaasFormView;
