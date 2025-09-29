import React, { useState } from "react";
import axios from "axios";
import "./azureScan.css";

const AzureScan = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const endpoint =
    process.env.REACT_APP_AZURE_ENDPOINT ||
    "https://disha.cognitiveservices.azure.com";
  const apiKey =
    process.env.REACT_APP_AZURE_KEY ||
    "8kWydG6WjvtWJMYNT64HzN2BqSnoBGbTDb2bOgypp3NZHBb4QCC8JQQJ99BIACGhslBXJ3w3AAAKACOGabka";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/bmp"];
    if (!validTypes.includes(file.type)) {
      setError("Only JPEG, PNG, BMP images are allowed!");
      return;
    }
    if (file.size > 6 * 1024 * 1024) { // allow up to 6 MB (docs allow ~6 MB) :contentReference[oaicite:6]{index=6}
      setError("Image size must be < 6MB");
      return;
    }

    setImage(file);
    setError("");
    setResult([]);
  };

  const analyzeFace = async () => {
    if (!image) {
      setError("Please upload an image!");
      return;
    }
    setLoading(true);
    setError("");
    setResult([]);

    try {
      // Read as array buffer
      const arrayBuffer = await image.arrayBuffer();
      const binary = new Uint8Array(arrayBuffer);

      // Construct query parameters
      const params = new URLSearchParams({
        returnFaceAttributes: "emotion",
        returnFaceId: "true",
        detectionModel: "detection_03" // newer detection model :contentReference[oaicite:7]{index=7}
      });

      const url = `${endpoint}/face/v1.0/detect?${params.toString()}`;

      const res = await axios.post(url, binary, {
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey,
          "Content-Type": "application/octet-stream"
        },
      });

      const faces = res.data;
      if (!Array.isArray(faces) || faces.length === 0) {
        setError("No faces detected in this image.");
      } else {
        setResult(faces);
      }
    } catch (err) {
      console.error("Azure API Error:", err);
      if (err.response?.status === 403) {
        setError("Subscription is pending");
      } else if (err.response?.status === 401) {
        setError("401 Unauthorized: Invalid API key.");
      } else if (err.response?.status === 404) {
        setError("404 Not Found: Wrong endpoint/region or invalid path.");
      } else {
        // If Azure returns an error body
        if (err.response?.data?.error?.message) {
          setError(err.response.data.error.message);
        } else {
          setError(err.message || "Unknown error occurred");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const getDominantEmotion = (emotions) => {
    if (!emotions) return { emotion: "N/A", confidence: 0 };
    return Object.entries(emotions).reduce(
      (max, [emo, val]) =>
        val > max.confidence ? { emotion: emo, confidence: val } : max,
      { emotion: "", confidence: 0 }
    );
  };

  return (
    <div className="azure-scan">
      <h2>Azure Emotion Detection </h2>
      <p>Upload an image and let AI detect emotions.</p>

      {error && <div className="error-box">{error}</div>}

      <div className="upload-box">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="file-upload"
        />
        <label htmlFor="file-upload" className="upload-btn">
          Choose Image
        </label>
      </div>

      {image && (
        <button
          onClick={analyzeFace}
          disabled={loading}
          className={`analyze-btn ${loading ? "loading" : ""}`}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      )}

      {result.length > 0 && (
        <div className="results">
          <h3>Detected Faces</h3>
          {result.map((face, idx) => {
            const emoAttrs = face.faceAttributes?.emotion;
            const dom = getDominantEmotion(emoAttrs);
            return (
              <div key={idx} className="face-result">
                <h4>Face {idx + 1}</h4>
                <p className="dominant-emotion">
                  <b>Dominant Emotion:</b> {dom.emotion} (
                  {(dom.confidence * 100).toFixed(1)}%)
                </p>
                {emoAttrs ? (
                  <div className="emotion-bars">
                    {Object.entries(emoAttrs)
                      .sort(([, a], [, b]) => b - a)
                      .map(([emo, val]) => (
                        <div key={emo} className="emotion-bar">
                          <span className="emotion-name">{emo}</span>
                          <div className="bar-container">
                            <div
                              className="bar-fill"
                              style={{ width: `${val * 100}%` }}
                            ></div>
                            <span className="emotion-value">
                              {(val * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p>No emotion data available.</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AzureScan;
