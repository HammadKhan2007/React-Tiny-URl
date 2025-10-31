import React from 'react';

function MainContent() {
  return (
    <div className="main-info-section">
      <h1 className="main-title">The Original URL Shortener</h1>
      <p className="main-description">
        Create shorter URLs with TinyURL?
        Want more out of your link shortener? Track link analytics, use branded domains for fully custom links, and manage your links with our paid plans.
      </p>
      <div className="main-buttons">
        <button className="btn btn-view-plans">
          View Plans
        </button>
        <button className="btn btn-create-account">
          Create Free Account
        </button>
      </div>

      <div className="features-card">
        <h3 className="features-title">TinyURL plans include:</h3>
        <ul className="features-list">
          <li>Detailed Link Analytics</li>
          <li>Fully Branded Domains</li>
          <li>Bulk Short URLs</li>
          <li>Link Management Features</li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;