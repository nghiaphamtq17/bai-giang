
export default function RootLayout({ children }) {
  return (
    <div>
      <div
        className={`antialiased`}
      >
        {children}
      </div>
    </div>
  );
}
