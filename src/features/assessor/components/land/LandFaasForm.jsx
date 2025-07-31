import React from "react";
import { ContainerModal } from "../../../../components/shared/ContainerModal";
import { Box, Input, Stack, TextField, Typography } from "@mui/material";
import "../../styles.scss";
import LabeledInput from "../shared/LabeledInput";
import Fieldset from "../../../../components/shared/Fieldset";
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
    ></ContainerModal>
  );
}

export default LandFaasForm;
