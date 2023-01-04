import { StyledFooter } from "./style"
import logoFooter from "../../../../assets/img/logoFooter.svg"

const Footer = ()=>{
    return(<StyledFooter>
        <img src={logoFooter} alt="" />
        <span>Alguns direitos reservados</span>
    </StyledFooter>)
}

export default Footer