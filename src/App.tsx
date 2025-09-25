import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import PDFDownload from './components/PDFDownload'

function App() {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 sm:px-12 md:px-16 font-sans">
      <div id="resume-content" className="py-6 sm:py-8 md:py-10 bg-white shadow-sm border border-gray-200 rounded-lg mt-4 mb-8">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
      <PDFDownload />
    </div>
  )
}

export default App
