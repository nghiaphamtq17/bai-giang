
export default function RootLayout({ children }) {
    return (
      <div>
        <div
          className={`antialiased`}
        >
          <h1>
              layout blog
          </h1>
          {children}
        </div>
      </div>
    );
  }
  