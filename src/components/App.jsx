import { Box } from "./Box";
import { Counter } from "./Counter/Counter";


export const App = () => {
  return (
   <Box pt={3} pb={3} bg="muted">
    <Counter unitialValue={15}/>
   </Box>
  );
};
