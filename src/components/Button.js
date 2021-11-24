import styled from 'styled-components';

export const Button = styled.button`
	background: ${({ theme }) => theme.gradient};
	border: 2px solid ${({ theme }) => theme.border};
	border-radius: 30px;
	color: ${({ theme }) => theme.text};
	padding: 5px;
	cursor: pointer;
	width: 150px;
`;
