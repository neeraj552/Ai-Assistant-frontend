import LiquidBackground from "../../background/LiquidBackground";

function DashboardLayout({ children }) {
    return (
        <>
            <LiquidBackground />

            <div
                className="
                    min-h-screen
                    text-white
                "
            >
                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-8
                        py-8
                    "
                >
                    {children}
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;