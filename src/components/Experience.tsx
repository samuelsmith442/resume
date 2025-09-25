
export default function Experience() {
  return (
    <section className="mb-8 px-6">
      <h3 className="text-xl font-bold mb-3">Professional Experience</h3>
      
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h4 className="font-bold">Print Bindery Operator</h4>
          <span className="text-gray-600">2018–present</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <p className="font-medium">Standard Press</p>
          <span className="text-gray-600">Atlanta, GA</span>
        </div>
        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li>Operated high-precision machinery requiring meticulous attention to detail, resulting in 99.8% error-free production.</li>
          <li>Trained and mentored 3 new hires, developing comprehensive documentation that reduced onboarding time by 30%.</li>
          <li>Implemented workflow optimization strategies that increased overall production efficiency by 15%.</li>
          <li>Collaborated with cross-functional teams to meet tight deadlines while maintaining quality standards across 200+ projects.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h4 className="font-bold">Front-End Developer (Freelance)</h4>
          <span className="text-gray-600">2022–present</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <p className="font-medium">Self-employed</p>
          <span className="text-gray-600">Atlanta, GA</span>
        </div>
        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li>Developed TwinBot, a blockchain-based application using React, TypeScript, and Solidity.</li>
          <li>Created responsive personal portfolio website showcasing technical skills and projects.</li>
          <li>Implemented modern front-end practices including responsive design, accessibility standards, and performance optimization.</li>
        </ul>
      </div>
    </section>
  );
}
