export default function Skills() {
  return (
    <section className="mb-8 px-6">
      <h3 className="text-xl font-bold mb-3">Core Competencies</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <ul className="list-disc pl-5 space-y-2">
          <li>React.js / Next.js Development</li>
          <li>TypeScript / JavaScript</li>
          <li>Responsive Web Design</li>
          <li>Blockchain Development</li>
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          <li>Solidity Smart Contracts</li>
          <li>UI/UX Implementation</li>
          <li>Version Control (Git)</li>
          <li>Front-end Performance Optimization</li>
        </ul>
      </div>
    </section>
  );
}
