import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;
export const Title = styled.span`
	font-size: 32px;
	cursor: pointer;
	font-weight: 400;
`;
export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
`;
