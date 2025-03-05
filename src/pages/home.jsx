const Home = () => {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa"
      }}>
        <div style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          maxWidth: "400px"
        }}>
          <h1 style={{ color: "#2c3e50", marginBottom: "10px" }}>Nishant </h1>
          <p style={{ fontSize: "18px", color: "#555" }}>📞 Contact: +91 XXXXXXXXXX</p>
          <p style={{ fontSize: "18px", color: "#555" }}>📧 Email: nishant@example.com</p>
          <p style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#3498db",
            marginTop: "15px"
          }}>
            🎓 Respected student of Kalvium X Chitkara
          </p>
        </div>
      </div>
    );
  };
  
  export default Home;