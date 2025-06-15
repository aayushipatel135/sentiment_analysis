import React, { useState } from 'react';

export const PredictionPage = () => {
  const formWrapperStyle = {
    backgroundColor: '#fff',
    padding: "40px",
    margin: "10vh auto",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "800px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "28px",
    color: "#5356ad",
    marginBottom: "20px",
    textAlign: "center",
  };

  const inputStyle = {
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "20px",
    width: "100%",
    fontSize: "18px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#5356ad",
    color: "#fff",
    border: "none",
    fontSize: "20px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "50%",
    maxWidth: "200px",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#424597",
  };

  const resultBoxStyle = {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    width: "100%",
    textAlign: "center",
  };

  const labelStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  };

  const resultTextStyle = {
    fontSize: "20px",
    color: "#5356ad",
  };

  const [hover, setHover] = useState(false);
  const [thought, setThought] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePredict = async (e) => {
    e.preventDefault();

    if (!thought.trim()) {
      setPrediction(null);
      setError("⚠️ Please enter a thought before submitting.");
      return;
    }

    setLoading(true);
    setError('');
    setPrediction(null);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ desc: thought }),
      });

      const data = await response.json();

      if (response.ok) {
        setPrediction(parseInt(data.result)); // Should be 0 or 1
      } else {
        setError("❌ " + (data.error || "Unable to predict"));
      }
    } catch (error) {
      setError("🚨 Server Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getResultMessage = (val) => {
    if (val === 0) {
      return "😞 Ooh Sorry, You're Depressed!! 💙 We will get through this together 🫂";
    } else if (val === 1) {
      return "🎉 Cheers, You're Not Depressed!! 😊";
    } else {
      return "🤷 Unknown result.";
    }
  };

  return (
    <div style={formWrapperStyle}>
      <h2 style={titleStyle}>🧠 Share Your Thought</h2>

      <form style={{ width: "100%" }} onSubmit={handlePredict}>
        <input
          style={inputStyle}
          placeholder="Type your thought here..."
          name="desc"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>
      </form>

      {error && (
        <div style={{ marginTop: "20px", color: "red", fontWeight: "bold" }}>
          {error}
        </div>
      )}

      {prediction !== null && (
        <div style={resultBoxStyle}>
          <div style={labelStyle}>Your Input</div>
          <p style={resultTextStyle}>{thought}</p>
          <div style={labelStyle}>Prediction</div>
          <p style={resultTextStyle}>{getResultMessage(prediction)}</p>
        </div>
      )}
    </div>
  );
};
