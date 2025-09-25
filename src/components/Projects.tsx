
export default function Projects() {
  return (
    <section className="mb-8 px-6">
      <h3 className="text-xl font-bold mb-3">Projects</h3>
      
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h4 className="font-bold">TwinBot</h4>
          <a href="https://github.com/samuelsmith442/twinbot" className="text-blue-600 hover:underline">github.com/samuelsmith442/twinbot</a>
        </div>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Developed a blockchain-based application using Solidity, Foundry, and Ethers.js.</li>
          <li>Implemented smart contract functionality with secure transaction handling and data storage.</li>
          <li>Created responsive front-end interface for interacting with blockchain features.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h4 className="font-bold">Personal Portfolio</h4>
          <a href="https://github.com/samuelsmith442/my-portfolio" className="text-blue-600 hover:underline">github.com/samuelsmith442/my-portfolio</a>
        </div>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Built responsive portfolio website using React, Tailwind CSS, and Vite.</li>
          <li>Implemented modern UI/UX design principles with mobile-first approach.</li>
          <li>Optimized performance with lazy loading and efficient component structure.</li>
        </ul>
      </div>
    </section>
  );
}
