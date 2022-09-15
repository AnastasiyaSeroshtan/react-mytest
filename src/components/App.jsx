import { Box } from "./Box";
import { Counter } from "./Counter/Counter";
import { Dropdown } from "./Dropdown/Dropdown";



export const App = () => {
  return (
   <Box pt={3} pb={3} bg="muted">
    <Counter unitialValue={15}/>
    <Dropdown />
   </Box>
  );
};
