import React, { useState, useMemo } from "react";
import "./Multimedia.css";

/**
 * Helper: extract YouTube ID from an embed or watch URL.
 * Works for strings like:
 *  - https://www.youtube.com/embed/VIDEO_ID?...
 *  - https://youtu.be/VIDEO_ID
 *  - https://www.youtube.com/watch?v=VIDEO_ID
 */
const extractYouTubeId = (url) => {
    try {
        const m =
            url.match(
                /(?:embed\/|v=|youtu\.be\/)([A-Za-z0-9_-]{6,11})/
            ) || [];
        return m[1] || null;
    } catch {
        return null;
    }
};

const VideoCard = ({ title, src, index }) => {
    const id = useMemo(() => extractYouTubeId(src), [src]);
    const thumb = id
        ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
        : null;

    const [playing, setPlaying] = useState(false);

    // Build a clean embed src that enables autoplay and hides related videos
    const playingSrc = id
        ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
        : src;

    const handlePlay = () => setPlaying(true);

    const onKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setPlaying(true);
        }
    };

    return (
        <article
            className="video-card"
            tabIndex="0"
            aria-label={`Video: ${title}`}
            onKeyDown={onKeyDown}
            data-index={index}
        >
            <div className="video-media">
                {!playing && thumb ? (
                    <div
                        role="button"
                        tabIndex={0}
                        className="thumb-wrapper"
                        onClick={handlePlay}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                handlePlay();
                            }
                        }}
                        aria-pressed="false"
                        aria-label={`Play ${title}`}
                    >
                        <img
                            src={thumb}
                            alt={`Thumbnail for ${title}`}
                            loading="lazy"
                            className="thumb-image"
                        />
                        <div className="thumb-overlay" />
                        <div className="play-btn" aria-hidden>
                            <svg viewBox="0 0 24 24" className="play-icon">
                                <path d="M4 2v20l18-10L4 2z" />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div className="iframe-wrapper">
                        <iframe
                            src={playing ? playingSrc : src}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                )}
            </div>

            <div className="video-meta">
                <h4 className="video-title">{title}</h4>
                <button
                    className="action-btn"
                    onClick={() => setPlaying((p) => !p)}
                    aria-pressed={playing}
                >
                    {playing ? "Stop" : "Play"}
                </button>
            </div>
        </article>
    );
};

const videoData = [
    {
        title: "Rahul Gandhi Vs Modi फर्क तो है ❤️",
        src: "https://www.youtube.com/embed/rKtKFJNeDV8?si=RIDTvBWo332AiWIy",
    },
    {
        title: "हर उत्पीड़न और शोषण के विरुद्ध एकजुट होकर लड़ेंगे!",
        src: "https://www.youtube.com/embed/BpPxEaeMwwA?si=e7h6joz4F5TKNcLg",
    },
    {
        title: "शंकराचार्य जी ने BJP के Propaganda को किया Expose.",
        src: "https://www.youtube.com/embed/X8azBN0SmBI?si=e2JYLfeUAe982Dff",
    },
    {
        title: "Youth Empowerment & Development",
        src: "https://www.youtube.com/embed/Vk5uGoAzoTM?si=5HDebHdfL4ZHipRs",
    },
    {
        title:
            "Congress Press Conference -कर दिया बड़ा खुलासा | Rahul Gandhi | Bihar Election 2025 ",
        src: "https://www.youtube.com/embed/271OJOm6ItE?si=9UKSld8Wr-HGF5jY",
    },
    {
        title: "Rahul Gandhi Voter Yatra Final Day | पटना से हुंकार | Satya Hindi Live",
        src: "https://www.youtube.com/embed/ZLLaZipX-FA?si=b2j-fx-36uVPHwsJ",
    },
    {
        title:
            "पालम में झुग्गीवालों का जोरदार हंगामा! MCD के बुलडोजर एक्शन पर फूटा गुस्सा |",
        src: "https://www.youtube.com/embed/oPd62SvduLI?si=TZam6plFl6FQ3Oyw",
    },
    {
        title:
            "Three BJP IT Cell Members Arrested in IIT BHU Gang Rape Case |",
        src: "https://www.youtube.com/embed/jZYM31VzgM0?si=S_CR67mD9lMwxDI5",
    },
    {
        title:
            "Rahul Gandhi ने की Raebareli के UP Board Toppers से मुलाकात, टैबलेट देकर किया सम्मानित",
        src: "https://www.youtube.com/embed/XL19muM_lQE?si=Fe6lwZP52acIZEP0",
    },
    {
        title:
            "EC भरोसे लायक है या नहीं ? Rahul Gandhi की बात کا लोगों پر कितना असर ? ",
        src: "https://www.youtube.com/embed/3W3ebguib2k?si=dfRAF8bkleb0lkKx",
    },
    {
        title:
            "Rahul Gandhi को लेकर 3 मशहूर शिक्षकों ने बोल दी दिल छू लेने वाली बात,",
        src: "https://www.youtube.com/embed/0PaV7V2AtjY?si=ZJ3yDrZJkclRVCpi",
    },
    {
        title: "वोट चोर है कौन ? जनता क्या समझी...सुनिए लोगों के धांसू जवाब.",
        src: "https://www.youtube.com/embed/7IwASxQOp-M?si=rGhaAVSY1F5AsID3",
    },
];

const Multimedia = () => {
    return (
        <section className="multimedia-container">
            <div className="back-btn-container">
                <button className="back-btn" onClick={() => window.history.back()}>
                    ← Back
                </button>
            </div>
            <div className="multimedia-header">
                <div>
                    <h2 className="multimedia-title">Multimedia</h2>
                    <p className="multimedia-subtitle">
                        Indian Youth Congress is the largest democratic youth organisation
                        in the world. With over 2 crore members the organisation works for youth.
                    </p>
                </div>
                <div className="badge">Latest</div>
            </div>

            <div className="video-grid" role="list">
                {videoData.map((video, idx) => (
                    <VideoCard key={idx} {...video} index={idx} />
                ))}
            </div>
        </section>
    );
};

export default Multimedia;
