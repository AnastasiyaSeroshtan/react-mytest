import { Box } from "components/Box";
import { Button } from "./Controls.styled";

export const Controls = ({onIncrement, onDecrement}) => {
    return (
        <Box pt={2} pb={2} display="flex" justifyContent="center">
            <Button type="button" onClick={onIncrement}>Увеличить на 1</Button>
            <Button type="button" onClick={onDecrement}>Уменьшить на 1</Button>
        </Box>
    )
};