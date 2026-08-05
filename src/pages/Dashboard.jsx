import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/DashBoardNavbar";
import DashboardHero from "../components/dashboard/DashBoardHero";
import DocumentManager from "../components/dashboard/DocumentManager";

import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {

    const [stats, setStats] = useState(null);

    useEffect(() => {
        loadDashboardStats();
    }, []);

    async function loadDashboardStats() {

        try {

            const response = await getDashboardStats();

            setStats(response);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load dashboard statistics.");

        }

    }

    return (

        <DashboardLayout>

            <DashboardNavbar />

            <DashboardHero stats={stats} />

            <DocumentManager
                onDocumentUploaded={loadDashboardStats}
            />

        </DashboardLayout>

    );

}

export default Dashboard;