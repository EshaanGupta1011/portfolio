import React from "react";
import "./ResearchPage.css";
import { useNavigate } from "react-router-dom";
import navLogo from "/EG.png";
import jp1 from "../../assets/jp_1.jpg";
import jp2 from "../../assets/jp_2.jpg";
import jp3 from "../../assets/jp_3.jpg";
import jp4 from "../../assets/jp_4.jpg";
import jp5 from "../../assets/jp_5.jpg";
import jp6 from "../../assets/jp_6.jpg";

const PETALS = [
  { left: "3%", w: 7, h: 10, dur: "10s", delay: "0s" },
  { left: "10%", w: 5, h: 8, dur: "13s", delay: "1.5s" },
  { left: "18%", w: 9, h: 12, dur: "8.5s", delay: "4s" },
  { left: "26%", w: 6, h: 9, dur: "11s", delay: "0.5s" },
  { left: "34%", w: 8, h: 11, dur: "9.5s", delay: "3s" },
  { left: "42%", w: 5, h: 7, dur: "14s", delay: "6s" },
  { left: "50%", w: 7, h: 10, dur: "10.5s", delay: "2s" },
  { left: "58%", w: 9, h: 13, dur: "12s", delay: "5s" },
  { left: "66%", w: 6, h: 9, dur: "9s", delay: "1s" },
  { left: "73%", w: 8, h: 11, dur: "11.5s", delay: "7s" },
  { left: "80%", w: 5, h: 8, dur: "8s", delay: "3.5s" },
  { left: "87%", w: 7, h: 10, dur: "13.5s", delay: "0.8s" },
  { left: "93%", w: 9, h: 12, dur: "10s", delay: "4.5s" },
  { left: "7%", w: 6, h: 9, dur: "12.5s", delay: "8s" },
  { left: "22%", w: 8, h: 11, dur: "9s", delay: "6.5s" },
  { left: "45%", w: 5, h: 8, dur: "11s", delay: "2.5s" },
  { left: "62%", w: 7, h: 10, dur: "14.5s", delay: "9s" },
  { left: "77%", w: 6, h: 9, dur: "8.5s", delay: "5.5s" },
  { left: "15%", w: 8, h: 11, dur: "11s", delay: "10s" },
  { left: "55%", w: 5, h: 8, dur: "13s", delay: "11s" },
];

const ResearchPage = () => {
  const navigate = useNavigate();

  return (
    <div className="rp-root">
      {/* Floating cherry blossom petals */}
      <div className="rp-petals" aria-hidden="true">
        {PETALS.map((p, i) => (
          <span
            key={i}
            className="rp-petal"
            style={{
              left: p.left,
              width: p.w,
              height: p.h,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="rp-navbar">
        <img
          src={navLogo}
          alt="logo"
          className="rp-nav-logo"
          onClick={() => navigate("/")}
        />
        <button className="rp-back-btn" onClick={() => navigate("/")}>
          ← Back to Portfolio
        </button>
      </nav>

      {/* ── Hero ── */}
      <header className="rp-hero">
        <div className="rp-hero-content">
          <p className="rp-badge">
            <span className="rp-badge-dot" />
            ICMLSC 2026 &nbsp;·&nbsp; Osaka, Japan
          </p>

          <h1 className="rp-title">
            DR_VisionNet:
            <br />
            A vision network for classification of
            <br />
            diabetic retinopathy
          </h1>

          <p className="rp-authors">
            Eshaan Gupta &nbsp;·&nbsp; Vigyat Goel &nbsp;·&nbsp; Dr. Manisha
            Parlewar
          </p>

          <div className="rp-hero-divider" />
        </div>

        {/* Right-side Japanese decoration */}
        <div className="rp-hero-deco" aria-hidden="true">
          <span className="rp-deco-kanji">研</span>
          <div className="rp-deco-side">
            <div className="rp-deco-line" />
            <span className="rp-deco-vtext">大阪 · 日本 · 二〇二四</span>
            <div className="rp-deco-line" />
          </div>
        </div>
      </header>

      {/* ── Abstract ── */}
      <section className="rp-section">
        <h2 className="rp-section-heading">Abstract</h2>
        <p className="rp-body-text">
          Complications in Diabetes Mellitus leads to Diabetes Retinopathy (DR)
          which is a major cause of visual impairment and blindness worldwide.
          Different stages of Diabetes Retinopathy need different care and
          medications. Detection of DR at early stage is key to the treatment.
          Therefore, it is extremely important to classify the stage and the
          severity of DR for adequate therapy. Advantage of using machine
          learning techniques to classify different stage of DR is two-fold, the
          first being timely diagnosis and the second being reliability and cost
          effectiveness.
          <br />
          <br />
          Recently, various CNN-based approaches have been proposed to classify
          DR images. These approaches rely heavily on pre-trained networks and
          transfer learning. Since pre-trained networks are designed for
          generalized classification problem, fine tuning such networks for
          specific task is computationally heavy and time consuming. In this
          paper, we present a customized convolutional neural network
          DR_VisionNet to classify four classes/stages of DR. Instead of using
          pre-trained network, we first perform pre-processing and augmentation
          on the images and then process through the proposed customized network
          for Diabetic Retinopathy. The proposed combination of pre-processing
          and custom vision network is not only computationally efficient, but
          also results in better classification accuracy and precision as well
          as recall
        </p>
      </section>

      {/* ── Key Contributions ── */}
      <section className="rp-section rp-section-alt">
        <h2 className="rp-section-heading">Key Contributions</h2>
        <ul className="rp-contributions">
          {[
            "Custom lightweight DR_VisionNet CNN with only 619,365 trainable parameters — 24–35× fewer than ResNet50 — achieving 97.07% accuracy on Messidor-2, surpassing all state-of-the-art methods.",
            "Two-stage preprocessing pipeline combining CLAHE (grid size 8, clip limit 1.1, luminance-only) and gamma correction (1.1), enabling stable and graceful model convergence compared to raw image training.",
            "AugLy-based augmentation strategy applying 2 random augmentations per image from 8 types, balancing the dataset to 3,000 images per class (15,000 total from 1,744 originals) to prevent overfitting.",
            "Empirical validation of Lion optimizer over AdamW for DR classification, with F1 score exceeding 0.94 across all five DR severity classes on processed data.",
          ].map((text, i) => (
            <li key={i} className="rp-contribution-item">
              <span className="rp-bullet" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Gallery ── */}
      <section className="rp-section">
        <h2 className="rp-section-heading">Visuals</h2>
        <div className="rp-gallery">
          {[
            { src: jp1, label: "Quantum Deep Learning Talk — Listening In" },
            { src: jp2, label: "One-on-One with a Keynote Speaker" },
            { src: jp3, label: "Presenting DR_VisionNet to Academics" },
            { src: jp6, label: "Kiyomizu-dera, Kyoto" },
            { src: jp4, label: "With My Mentor & Guide" },
            { src: jp5, label: "Osaka Skyline at Dusk" },
          ].map(({ src, label }, i) => (
            <div key={i} className="rp-gallery-img-wrapper">
              <img src={src} alt={label} className="rp-gallery-img" />
              <span className="rp-gallery-caption">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Publication Details ── */}
      <section className="rp-section rp-section-alt">
        <h2 className="rp-section-heading">Publication Details</h2>
        <div className="rp-details">
          {[
            {
              label: "Conference",
              value:
                "International Conference on Machine Learning and Soft Computing (ICMLSC 2026)",
            },
            { label: "Location", value: "Osaka, Japan" },
            { label: "Year", value: "2026" },
            {
              label: "Keywords",
              value:
                "Image classification · Deep Learning · Computer Vision · Image Processing · Diabetic Retinopathy",
            },
            {
              label: "DOI",
              value: "TBD",
              accent: true,
            },
          ].map(({ label, value, accent }) => (
            <div key={label} className="rp-detail-row">
              <span className="rp-detail-label">{label}</span>
              <span
                className={`rp-detail-value${accent ? " rp-detail-accent" : ""}`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ResearchPage;
