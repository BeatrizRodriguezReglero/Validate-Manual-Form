import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	padding-bottom: 100px;
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		width: 90%;
		margin: 121px auto;
	}
`;
const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: auto;
	width: 90%;
	margin: 0 auto;
	margin-top: 40px;
	text-align: center;
	margin-bottom: 64px;
	color: white;

	@media (min-width: 768px) {
		width: 40%;
		height: 60vh;
	}
`;
const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 90%;
	margin: 0 auto;

	@media (min-width: 768px) {
		width: 50%;
	}
`;

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;

	h2 {
		font-size: 28px;
		line-height: 36px;
		letter-spacing: -0.29px;
	}
	p {
		font-size: 16px;
		line-height: 26px;
	}
	@media (min-width: 768px) {
		text-align: left;

		h2 {
			font-size: 50px;
			line-height: 55px;
			letter-spacing: -0.52px;
		}
	}
`;
const StyledInfoForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 88px;
	margin: 0 auto;
	padding: 0px 68px;
	text-align: center;
	line-height: 26px;
	background-color: #5f54a4;
	border-radius: 10px;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2);

	p {
		color: white;
		font-size: 15px;
		text-align: center;
	}
	@media (min-width: 768px) {
		width: 90%;
		height: 60px;
	}
`;

export {
	StyledContainer,
	StyledInfoContainer,
	StyledInfo,
	StyledFormContainer,
	StyledInfoForm
};
