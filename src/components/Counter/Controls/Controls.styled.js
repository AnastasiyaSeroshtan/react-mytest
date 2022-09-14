import styled from "styled-components";

export const Button = styled.button`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    border-radius: ${p => p.theme.radii.normal};
    font-size: ${p => p.theme.fontSizes[2]}px;
    background-color: ${p => p.theme.colors.accent};
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    margin-right: ${p => p.theme.space[4]}px;

    :last-child {
        margin-right: ${p => p.theme.space[0]}px;
    }
`;