import styled from "styled-components";

export const CounterEl = styled.span`
    display: block;
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]}px;
    font-weight: ${p => p.theme.fontWeights.bolt};
    text-align: center;
    margin-bottom: ${p => p.theme.space[4]}px;
`;