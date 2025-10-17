import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <img src="/vite.svg" alt="Vite Logo" className="logo" />
          <h1>PayFlow Demo</h1>
          <p>Experience seamless payment processing with modern React components and beautiful UI design</p>
        </div>
      </header>

      <main className="main-content">
        <section className="features">
          <div className="feature">
            <h2>Secure Processing</h2>
            <p>End-to-end encryption ensures your payment data is always protected and secure.</p>
          </div>
          <div className="feature">
            <h2>Lightning Fast</h2>
            <p>Powered by Vite and React for instant load times and smooth interactions.</p>
          </div>
          <div className="feature">
            <h2>Mobile Ready</h2>
            <p>Fully responsive design that works perfectly on all devices and screen sizes.</p>
          </div>
        </section>

        <section className="interactive-demo">
          <h2>Interactive Demo</h2>
          <button className="click-counter">Click Counter: 0</button>
        </section>

        <section className="payment-form-section">
          <h2>Try Our Payment Form</h2>
          <p>Experience our beautifully designed payment form with real-time validation, secure input handling, and smooth animations.</p>
          <div className="payment-form-container">
            {/* PaymentForm component will be rendered here */}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>PayFlow Demo</h3>
            <p>A modern payment form built with React, Vite, and Tailwind CSS. Showcasing best practices in UI/UX design.</p>
          </div>
          <div className="footer-links">
            <h3>Technologies</h3>
            <ul>
              <li>React 18</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>Modern JavaScript</li>
            </ul>
          </div>
          <div className="footer-learn-more">
            <h3>Learn More</h3>
            <ul>
              <li><a href="https://react.dev">React Docs</a></li>
              <li><a href="https://vitejs.dev">Vite Guide</a></li>
            </ul>
          </div>
        </div>
        <p>Built with ❤️ using modern web technologies</p>
      </footer>
    </>
  );
}

export default App;
