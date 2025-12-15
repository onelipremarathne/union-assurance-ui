import Button from "@mui/material/Button";
import "./style.css";

export default function CommonButton({btnName,bgColor,textColor,borderColor,onClick}) {
  return (
    <>
      <Button sx={{backgroundColor:bgColor, color:textColor, border: `1px solid ${borderColor}`}} onClick={()=>{onClick()}}>{btnName}</Button>
    </>
  );
}
