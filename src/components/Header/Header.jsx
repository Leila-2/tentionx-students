import Btn from "../../svg/Btn";
import { Switcher, Head, List, ListItem, Button } from "./Header.styled";

export default function Header() {
  return (
    <Head>
      <Switcher>SCHOOL 1</Switcher>
      <Button>
        <Btn color="#777777" />
      </Button>
      <List>
        <ListItem>ANALYTICS</ListItem>
        <ListItem>GRADEBOOKS</ListItem>
        <ListItem>TESTS</ListItem>
        <ListItem>STUDENTS</ListItem>
        <ListItem>TEACHERS</ListItem>
        <ListItem>ARCHIVE</ListItem>
      </List>
    </Head>
  );
}
