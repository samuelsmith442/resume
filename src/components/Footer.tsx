
export default function Footer() {
  return (
    <footer className="mt-8 px-6">
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3">Certifications</h3>
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h4 className="font-bold">Front End Developer</h4>
            <span className="text-gray-600">2023-2025</span>
          </div>
          <p className="text-gray-700">Scrimba</p>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h4 className="font-bold">Solidity Developer Career Track</h4>
            <span className="text-gray-600">2024-present</span>
          </div>
          <p className="text-gray-700">Cyfrin Updraft</p>
        </div>
      </section>
      
      <div className="pt-4 border-t border-gray-200 text-center text-gray-500 text-sm mt-4">
        <p>References available upon request</p>
      </div>
    </footer>
  );
}
