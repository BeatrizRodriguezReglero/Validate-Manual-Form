import Form from "../form/Form"
import { StyledInfo } from "./container.styles"
import { StyledInfoForm } from "./container.styles"
import { StyledContainer } from "./container.styles"
import { StyledFormContainer } from "./container.styles"
import { StyledInfoContainer } from "./container.styles"


const Container = ()=>{
    return(<>
         <StyledContainer>
            <StyledInfoContainer>
                <StyledInfo>
                    <h2>Learn to code by watching others</h2>
                    <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
                </StyledInfo>
            
            </StyledInfoContainer>
            <StyledFormContainer>
                <StyledInfoForm>
                <p><strong>Try it free 7 days.</strong> then $20/mo. thereafter</p>
                </StyledInfoForm>
                <Form/>
            </StyledFormContainer>
        </StyledContainer>
    </>
    )
}

export default Container