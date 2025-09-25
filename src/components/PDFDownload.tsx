import { FaDownload } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';

export default function PDFDownload() {
  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    if (!element) return;
    
    const opt = {
      margin: 10,
      filename: 'samuel_smith_resume.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <button 
      onClick={handleDownload}
      className="fixed top-6 right-6 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md flex items-center space-x-2 text-base shadow-lg hover:bg-blue-800 transition-colors no-print z-50"
    >
      <FaDownload />
      <span>Download PDF</span>
    </button>
  );
}
