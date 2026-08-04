import Button from "../components/ui/Button";

function DashboardHeader(){
    return (

        <header className="flex items-center justify-between mb-10">

            <div>
                <h1 className="text-3xl font-bold">
                    AI Document Assistant
                </h1>
                <p className="text-slate-400 mt-1">
                    Your AI-powered workspace.
                </p>
            </div>
            <Button variant="secondary">
                Logout
            </Button>
        </header>

    );
}
export default DashboardHeader;