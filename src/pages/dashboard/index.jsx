import DashControlPanel from "./components/DashControlPanel";
import DashboardHeader from "./components/DashHeader";
import { StyledDashboard } from "./style";

const DashBoard = () => {
    return (
        <StyledDashboard>
            <DashboardHeader />
            <DashControlPanel />



        </StyledDashboard>
    )


};

export default DashBoard;
