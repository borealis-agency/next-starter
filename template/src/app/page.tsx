export default function Home() {
  // AFTER_START_CLEANUP_START
  return (
    <>
      <title>Borealis Next.js Starter Template</title>
      <meta name="description" content="Next.js starter template made by Borealis" />
      <link rel="icon" href="/borealis-logo-icon-red.svg" />

      <style>
        {`
          body {
            min-height: 100%;
            background-image: linear-gradient(
              325deg,
              hsl(207deg 60% 19%) 0%,
              hsl(217deg 48% 25%) 6%,
              hsl(234deg 33% 33%) 14%,
              hsl(261deg 32% 36%) 25%,
              hsl(287deg 35% 37%) 40%,
              hsl(312deg 43% 40%) 57%,
              hsl(326deg 54% 45%) 73%,
              hsl(336deg 61% 49%) 85%,
              hsl(346deg 73% 54%) 94%,
              hsl(358deg 84% 60%) 100%
            );
            background-repeat: no-repeat;
            color: #fff;
          }
        `}
      </style>

      <main className="max-w-7xl mx-auto p-5">
        <h1 className="text-8xl font-bold mb-8">Borealis Next.js Starter</h1>
        <p className="text-3xl mb-6">Starting template for React projects using Next.js</p>
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-5">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <div className="border bg-white/10 border-white/30 rounded-lg p-4 shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-bold mb-6">Tailwind</h3>
              <p className="mb-4">Tailwind set up out of the box.</p>
              <p className="mb-4">No need to use CSS Modules or CSS in JS. Just write Tailwind classes in your JSX and you are good to go.</p>
            </div>
            <div className="border bg-white/10 border-white/30 rounded-lg p-4 shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-bold mb-6">GitHub Actions</h3>
              <p className="mb-4">GitHub Actions code checking is included out of the box and runs on each pull request.</p>
              <p className="mb-4">Catch code and style errors before they are merged.</p>
            </div>
            <div className="border bg-white/10 border-white/30 rounded-lg p-4 shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-bold mb-6">SVG icon sprite generation</h3>
              <p className="mb-4">Easy to use SVG icon sprite generation. No need to use Fontastic, IcoMoon or similar tools.</p>
              <p className="mb-4">Just drop SVG icons into a folder, run a script and you are good to go!</p>
            </div>
            <div className="border bg-white/10 border-white/30 rounded-lg p-4 shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-bold mb-6">Code generators</h3>
              <p className="mb-4">Automatic code generation for common things such as components and modules.</p>
              <p className="mb-4">
                No need to copy old code, clean it up and remember where to import/export code. Single line commands that create consistent code that is ready
                to be worked on.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-5">First Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <div className="border bg-white/10 border-white/30 rounded-lg p-4 shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-bold mb-6">Documentation</h3>
              <p className="mb-4">
                Read different <span className="font-bold">README</span> files in this project. They contain documentation about different parts of this
                template.
              </p>
              <p className="mb-4">
                There is a global <span className="font-bold">README</span> file with more generic information, but different folders have specific information
                contained within them.
              </p>
            </div>
            <div className="border bg-white/10 border-white/30 rounded-lg p-4 shadow-lg transition hover:scale-105">
              <h3 className="text-2xl font-bold mb-6">Cleanup</h3>
              <p className="mb-4">This template contains code that is only used to showcase some of its capabilities, but isn't necessary for it to work.</p>
              <p className="mb-4">
                Look for comments in code saying <span className="font-bold">AFTER_START_CLEANUP</span>. Those are hints about code that can be removed.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
  // AFTER_START_CLEANUP_END
}
