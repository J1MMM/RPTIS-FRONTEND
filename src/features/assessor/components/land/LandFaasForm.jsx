import React from "react";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { Box, Stack, TextField, Typography } from "@mui/material";
import "./styles.scss";
function LandFaasForm({
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
        <Stack direction="row" justifyContent="end">
          <div className="input-row-wrapper">
            <Typography variant="body2" sx={{ fontWeight: "600" }}>
              TRANSACTION CODE:
            </Typography>
            <input style={{ borderBottom: "1px solid" }} />
          </div>
        </Stack>
        {/* table  */}

        <div className="grid-table">
          <div className="td-wrapper">
            <label>ARP No.:</label>
            <input />
          </div>

          <div className="td-wrapper">
            <label>PIN:</label>
            <input />
          </div>

          <div className="td-wrapper">
            <label>OCT/TCT/No.</label>
            <input />
          </div>

          <div className="td-wrapper">
            <label>Date:</label>
            <input />
          </div>

          <div className="td-wrapper">
            <label>Survey No.</label>
            <input />
          </div>

          <div className="td-wrapper">
            <label>Lot No.</label>
            <input />
          </div>

          <div className="td-wrapper">
            <label>Bill No.</label>
            <input />
          </div>
        </div>
      </Stack>
    </ContainerModal>
  );
}

export default LandFaasForm;
