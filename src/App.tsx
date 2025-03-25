import { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Taipus Code</div>
          <a
            href="https://writeopia.io"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Try Writeopia
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Writing Experience
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Writeopia, by Taipus Code, is your AI-powered writing companion that helps you create, edit, and perfect your content with ease.
          </p>
          <a
            href="https://writeopia.io"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 inline-block"
          >
            Get Started with Writeopia
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Writeopia?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">AI-Powered Writing</h3>
            <p className="text-gray-300">
              Leverage advanced AI to enhance your writing with smart suggestions and improvements.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Real-time Collaboration</h3>
            <p className="text-gray-300">
              Work seamlessly with your team in real-time, making writing a collaborative experience.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Smart Analytics</h3>
            <p className="text-gray-300">
              Get insights into your writing style and improve with detailed analytics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-blue-600 rounded-lg p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Writing?</h2>
          <p className="text-xl mb-8">
            Join thousands of writers who are already using Writeopia to create amazing content.
          </p>
          <a
            href="https://writeopia.io"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 inline-block hover:bg-gray-100"
          >
            Start Writing Now
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl mr-2" />
              <h3 className="text-xl font-semibold">Taipus Code</h3>
            </div>
            <address className="text-gray-300 not-italic mb-6">
              <p>Rua Francisco Deslandes, 648, apto 1103</p>
              <p>Belo Horizonte, MG 30310-530</p>
              <p>Brazil</p>
            </address>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <FaEnvelope className="text-blue-500 text-2xl mr-2" />
                <a href="mailto:hello@taipuscode.com" className="text-gray-300 hover:text-white transition duration-300">
                  hello@taipuscode.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <FaEnvelope className="text-blue-500 text-2xl mr-2" />
                <a href="mailto:hello@writeopia.io" className="text-gray-300 hover:text-white transition duration-300">
                  hello@writeopia.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>© {year} Taipus Code. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
