import AnimatedBackground from "./AnimatedBackground";

function AuthLayout({ children }) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden

        flex
        items-center
        justify-center

        bg-slate-950

        px-6
      "
    >
      <AnimatedBackground />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;