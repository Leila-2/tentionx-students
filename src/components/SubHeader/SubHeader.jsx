import Btn from "../../svg/Btn";
import { v4 } from "uuid";
import { ListItem, ClearButton,BtnItem, List, Button } from "./SubHeader.styled";
import ClearIcon from "../../svg/ClearIcon";

export default function SubHeader() {
  const data = [
    "SHOW ALL",
    "ALL GRADES",
    "AV.SCORE",
    "AV.SPEED",
    "ALL CLASSES",
  ];

  return (
    <List>
      {data.map((item) => (
        <ListItem key={v4()}>
          <Button>
            <BtnItem>{item}</BtnItem>
            <Btn color="#C0C0C0" />
          </Button>
        </ListItem>
      ))}
      <ListItem>
        <ClearButton>
          <ClearIcon />
          CLEAR ALL
        </ClearButton>
      </ListItem>
    </List>
  );
}
