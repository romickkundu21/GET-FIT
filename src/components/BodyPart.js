import React from "react";
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF8C32" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behaviour:'smooth'})
      }}
    >
      <img
        src={icon}
        alt="dumbbell"
        style={{ width: "90px", height: "90px" }}
      />
      <Typography fontSize="24px" fontWeight="bold" color="#06113C" textTransform="capitalize">{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
