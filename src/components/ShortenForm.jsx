import React, { useState } from 'react';
import axios from 'axios'; // API calls ke liye

function ShortenForm() {
  const [longUrl, setLongUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleShorten = async (e) => {
    e.preventDefault();
    setError('');
    setShortenedUrl('');
    if (!longUrl) {
      setError('Please enter a long link.');
      return;
    }

    setLoading(false);
    try {
      const response = await axios.post('https://backendtinyurl-production.up.railway.app/api/shorten', {
  long_url: longUrl,
  alias: alias || undefined,
});
setShortenedUrl(response.data.short_url);
console.log('Shortened URL:', shortenedUrl);
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shorten-form-card">
      <h2 className="form-title">Shorten a long URL</h2>
      <form onSubmit={handleShorten}>
        <div className="form-group">
          <label htmlFor="longLink" className="form-label">
            Enter long link here
          </label>
          <input
            type="text"
            id="longLink"
            className="form-input"
            placeholder="e.g., https://verylonglink.com/with/many/parameters"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="customizeLink" className="form-label">
            Customize your link
          </label>
          <div className="custom-link-input">
            <span className="domain-prefix">tinyurl.com /</span>
            <input
              type="text"
              id="customizeLink"
              className="form-input alias-input"
              placeholder="Enter alias"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-shorten"
          disabled={loading}
          onClick={handleShorten}
        >
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>

        {error && (
          <p className="error-message">{error}</p>
        )}

        {shortenedUrl && (
          <div className="shortened-url-output">
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="short-link-text">
              {shortenedUrl}
            </a>
            <button
            type='button'
              onClick={() => navigator.clipboard.writeText(shortenedUrl)}
              className="btn btn-copy"
            >
              Copy
            </button>
          </div>
        )}
      </form>

      <p className="terms-text">
        By clicking Shorten URL, I agree to the <a href="#" className="terms-link">Terms of Service</a>, <a href="#" className="terms-link">Privacy Policy</a> and Use of Cookies.
      </p>
    </div>
  );
}

export default ShortenForm;