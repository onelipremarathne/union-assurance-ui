import Button from "@mui/material/Button";
import "./style.css";

export default function CommonButton({btnName,bgColor,textColor,borderColor,onClick,displayButton,alignContent}) {
  return (
    <>
      <Button sx={{alignItems:alignContent, backgroundColor:bgColor, display: displayButton ? "flex" : "none", color:textColor, border: `1px solid ${borderColor}`}} onClick={()=>{onClick()}}>{btnName}</Button>
    </>
  );
}
