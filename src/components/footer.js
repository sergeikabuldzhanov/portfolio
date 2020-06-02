import React from "react";

export default function Footer({ siteName }) {
  return (
    <div className="site-footer" id="footer">
      <div className="container">
        <span>{siteName}</span>
      </div>
    </div>
  );
}
