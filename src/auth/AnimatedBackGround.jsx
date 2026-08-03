function AnimatedBackground() {
  return (
    <>
      {/* Background Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-slate-950
          via-slate-950
          to-slate-900
        "
      />

      {/* Blue Blob */}
      <div
        className="
          absolute
          top-20
          left-20

          h-72
          w-72

          rounded-full

          bg-blue-600/20

          blur-3xl

          animate-blob
        "
      />

      {/* Violet Blob */}
      <div
        className="
          absolute
          bottom-20
          right-20

          h-80
          w-80

          rounded-full

          bg-violet-600/20

          blur-3xl

          animate-blob
          animation-delay-2000
        "
      />

      {/* Small Accent Blob */}
      <div
        className="
          absolute

          top-1/2
          left-1/2

          h-52
          w-52

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-500/10

          blur-3xl

          animate-blob
          animation-delay-4000
        "
      />
    </>
  );
}

export default AnimatedBackground;