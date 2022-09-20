import { Box } from "components/Box";

export const Filter = ({value, onChange}) => {
    return (
        <Box>
            <label>
                Enter name
                <input type="text" value={value} onChange={onChange}/>
            </label>
        </Box>
    )
};