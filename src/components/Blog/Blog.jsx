import React, { useRef, useEffect } from "react";
import "./Blog.css";
import blogData from "../../assets/data/blogData";
import useScrollReveal from "../../hooks/useScrollReveal";

const Blog = () => {
  const headingRef = useScrollReveal();
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = container.querySelectorAll(".blog-box");
          cards.forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 100);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-blog" id="blog">
      <div className="blog-header reveal" ref={headingRef}>
        <div className="blog-heading-container">
          <h1>BLOGS</h1>
        </div>

        <div className="blog-desc-container">
          <p>
            Whenever an idea or thought sparks in my mind, I make it a point to
            write it down. This space is a reflection of that habit, a place where
            I share my perspectives on technology, real-world challenges, and
            everything in between. Lately, I've been focusing on expressing my
            views around the rapidly evolving tech landscape and the practical
            implications it has on our lives. Rather than chasing overly
            idealistic solutions, I aim to explore grounded, realistic approaches
            that balance innovation with real-world applicability. If you're
            someone who enjoys thought-provoking takes rooted in clarity and
            practicality, you might find something valuable here.
          </p>
        </div>
      </div>

      <div className="blog-container" ref={cardsContainerRef}>
        {blogData.map((blog) => (
          <a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-box reveal"
          >
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-platform">{blog.platform}</p>
            <p className="blog-desc">{blog.excerpt}</p>
            <span className="blog-date">{blog.date}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
