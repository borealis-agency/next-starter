import Head from "next/head";

const Home = () => {
  // AFTER_START_CLEANUP_START
  return (
    <>
      <Head>
        <title>Borealis Next.js Starter Template</title>
        <meta name="description" content="Next.js starter template made by Borealis" />
        <link rel="icon" href="/borealis-logo-icon-red.svg" />
      </Head>

      <main className="main">
        <h1 className="main__title">Borealis Next.js Starter</h1>
        <p className="main__subtitle">Starting template for React projects using Next.js</p>
        <div className="section">
          <h2 className="section__title">Features</h2>
          <div className="section__grid">
            <div className="instruction-box">
              <h3 className="instruction-box__title">Typescript</h3>
              <p>Comes with Typescript set up out of the box.</p>
              <p>Typescript is even set up for CSS Modules for better autocomplete experience.</p>
            </div>
            <div className="instruction-box">
              <h3 className="instruction-box__title">GitHub Actions</h3>
              <p>GitHub Actions code checking is included out of the box and runs on each pull request.</p>
              <p>Catch code and style errors before they are merged.</p>
            </div>
            <div className="instruction-box">
              <h3 className="instruction-box__title">SVG icon sprite generation</h3>
              <p>Easy to use SVG icon sprite generation. No need to use Fontastic, IcoMoon or similar tools.</p>
              <p>Just drop SVG icons into a folder, run a script and you are good to go!</p>
            </div>
            <div className="instruction-box">
              <h3 className="instruction-box__title">Code generators</h3>
              <p>Automatic code generation for common things such as components and modules.</p>
              <p>
                No need to copy old code, clean it up and remember where to import/export code. Single line commands that create consistent code that is ready
                to be worked on.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section__title">First Steps</h2>
          <div className="section__grid">
            <div className="instruction-box">
              <h3 className="instruction-box__title">Documentation</h3>
              <p>
                Read different <span className="u-t-bold">README</span> files in this project. They contain documentation about different parts of this
                template.
              </p>
              <p>
                There is a global <span className="u-t-bold">README</span> file with more generic information, but different folders might have specific
                information contained within them.
              </p>
            </div>
            <div className="instruction-box">
              <h3 className="instruction-box__title">Cleanup</h3>
              <p>This template contains code that is only used to showcase some of its capabilities, but isn't necessary for it to work.</p>
              <p>
                Look for comments in code saying <span className="u-t-bold">AFTER_START_CLEANUP</span>. Those are hints about code that can be removed.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
  // AFTER_START_CLEANUP_END
};

export default Home;
