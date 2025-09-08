import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import type { ProgressProps } from "../../../interfaces/interface";

const Progress = ({ value }: ProgressProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
};

export default Progress;
