import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardHero from "../components/dashboard/DashBoardHero";
import DocumentManager from "../components/dashboard/DocumentManager";
function Dashboard() {
    return (
        <DashboardLayout>

            <DashboardNavbar />

            <DashboardHero />

            <DocumentManager />

        </DashboardLayout>
    );
}

export default Dashboard;