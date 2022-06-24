import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImg from "../assets/icons/body-part.png";
import TargetImg from "../assets/icons/target.png";
import EquipmentImg from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "90px 40px 70px 40px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }} color="#DDDDDD">
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize", fontWeight:"bold" }}>{name}</span> is one of
          the best exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) =>(
            <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                <Button sx={{ background: '#ffc191', borderRadius: '50%', width: '100px', height: '100px' }}>
                    <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }}/>
                </Button>
                <Typography textTransform="capitalize" variant="h5">
                    {item.name}
                    {/* {item.name.charAt(0).toUpperCase()+item.name.slice(1)} */}
                </Typography>
            </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
