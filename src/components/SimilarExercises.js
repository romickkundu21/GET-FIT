import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: "120px", xs: "0px" } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, m: '180px 0 150px 0px' }} fontWeight={500} color="#FF8C32" mb="90px" textAlign="center">
        Exercises that target the same muscle group
        <Stack direction="row" sx={{ p: 4, position: "relative" }}>
          {targetMuscleExercises.length ?
            <HorizontalScrollbar data={targetMuscleExercises} />
            :<Loader/>
          }
        </Stack>
      </Typography>
    </Box>
  );
};

export default SimilarExercises;
