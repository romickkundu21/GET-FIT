import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#06113C",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FF8C32",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml='21px' color="#06113C" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" sx={{ fontSize: { lg: '22px', xs: '18px' } }}>
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
