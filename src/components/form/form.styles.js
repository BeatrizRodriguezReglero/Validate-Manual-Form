import styled from 'styled-components';
const StyledInput = styled.input`
	width: 100%;
	margin: 0 auto;
	height: 56px;
	border-radius: 10px;
	border: ${({ $hasError }) =>
		$hasError ? '1px solid red' : '1px solid #DEDEDE'};
	padding-left: 15px;
	font-weight: 700;
	position: relative;
	&:focus {
		outline-color: ${({ $outline }) => ($outline ? 'red' : '#DEDEDE')};
	}
`;

const StyledForm = styled.form`
	width: 90%;
	height: 500px;
	background-color: white;
	margin: 0 auto;
	border-radius: 10px;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding-top: 40px;
	font-family: 'Poppins';
	button {
		border: none;
		height: 56px;
		border-radius: 10px;
		cursor: pointer;
		background-color: #38cc8b;
		color: white;
		box-shadow: 0px -11px 4px -4px rgba(51, 185, 126, 0.8) inset;
		font-size: 15px;
		font-weight: 600;
		width: 80%;
		margin: 0 auto;
		margin-top: 20px;
	}
	p {
		font-size: 11px;
		margin: 0 auto;
		color: #bab7d4;
	}
	span {
		color: #ff7979;
		font-weight: bold;
	}
	label {
		width: 80%;
		margin: 0 auto;
		position: relative;

		border-radius: 10px;
		img {
			position: absolute;
			right: 20px;
			z-index: 1;
			top: 50%;
			transform: translateY(-50%);
			visibility: ${props => (props.visible ? 'visible' : 'hidden')};
		}
	}
	@media (max-width: 480px) {
		p {
			padding-left: 39px;
			padding-right: 39px;
			text-align: center;
		}
		height: 550px;
		input[type='submit'] {
			border: none;
			height: 56px;
			border-radius: 10px;
			cursor: pointer;
			background-color: #38cc8b;
			color: white;
			box-shadow: 0px -11px 4px -4px rgba(51, 185, 126, 0.8) inset;
			font-size: 15px;
			font-weight: 600;
			width: 80%;
			margin: 0 auto;
		}
	}
`;
const StyledErrorText = styled.span`
	position: absolute;
	left: 10px;
	top: 60px;
	font-size: 12px;
`;
export { StyledForm, StyledErrorText, StyledInput };
