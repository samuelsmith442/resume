export default function Header() {
  return (
    <header className="mb-8 px-6 py-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Samuel Smith</h1>
      <div className="text-center mt-2 text-gray-600">
        <p>samuelsmith442@gmail.com | 
          <a href="https://linkedin.com/in/samuelsmith442" className="text-blue-600 hover:underline">LinkedIn</a> | 
          <a href="https://github.com/samuelsmith442" className="text-blue-600 hover:underline">GitHub</a>
        </p>
      </div>
      <hr className="my-6 border-gray-300" />
    </header>
  );
}
