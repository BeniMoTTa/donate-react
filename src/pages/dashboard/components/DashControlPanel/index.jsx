import { useState } from "react";
import { BiPlus, BiEditAlt, BiLogOut, BiUserCircle } from "react-icons/bi";
import { StyledButton } from "../../../../styles/buttons";
import DashProfileForm from "./DashProfileForm";
import { StyledDashControlPanel } from "./style";

const DashControlPanel = () => {
    const [btProfileActive, setBtProfileActive] = useState(false);
    const [btAddPostActive, setBtAddPostActive] = useState(false);
    const [btLogoutActive, setBtLogoutActive] = useState(false);
    const [btEditActive, setBtEditActive] = useState(false);

    return (
        <StyledDashControlPanel>
            <div>
                <div>
                    <StyledButton buttonSize="default" buttonStyle="primaryDefault" >
                        <span>
                            <BiUserCircle />
                        </span>
                    </StyledButton>
                    <StyledButton buttonSize="default" buttonStyle="primaryActive" >
                        <span>
                            <BiPlus />
                        </span>
                    </StyledButton>
                    <StyledButton buttonSize="default" buttonStyle="primaryDefault" >
                        <span>
                            <BiLogOut />
                        </span>
                    </StyledButton>

                </div>
                <div>
                    <h2>META: 40.000$</h2>
                    <h2>ARRECADADO: 60.000$</h2>
                </div>
            </div>
            <DashProfileForm />

        </StyledDashControlPanel>
    );
};

export default DashControlPanel;