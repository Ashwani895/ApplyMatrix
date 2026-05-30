import { useEffect, useState } from "react";
import "./MyLinks.css";

function MyLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [savedLinks, setSavedLinks] = useState([]);

  useEffect(() => {
    const storedLinks = localStorage.getItem("applyMatrixLinks");
    if (storedLinks) {
      setSavedLinks(JSON.parse(storedLinks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("applyMatrixLinks", JSON.stringify(savedLinks));
  }, [savedLinks]);

  const handleAddLink = () => {
    if (!linkTitle.trim() || !linkUrl.trim()) return;

    const newLink = {
      id: Date.now(),
      title: linkTitle,
      url: linkUrl,
    };

    setSavedLinks([...savedLinks, newLink]);
    setLinkTitle("");
    setLinkUrl("");
  };

  const handleDeleteLink = (id) => {
    const updatedLinks = savedLinks.filter((link) => link.id !== id);
    setSavedLinks(updatedLinks);
  };

  return (
    <div className="my-links-wrapper">
      <button className="my-links-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close My Links" : "My Links"}
      </button>

      {isOpen && (
        <div className="my-links-panel">
          <h2>My Links</h2>
          <p className="links-subtext">
            Save your portfolio, resume, drive folder, GitHub, LinkedIn, and more.
          </p>

          <div className="links-form">
            <input
              type="text"
              placeholder="Enter link title"
              value={linkTitle}
              onChange={(e) => setLinkTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter URL"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />

            <button className="add-link-btn" onClick={handleAddLink}>
              Add Link
            </button>
          </div>

          <div className="saved-links-list">
            {savedLinks.length === 0 ? (
              <p className="empty-links">No links added yet.</p>
            ) : (
              savedLinks.map((link) => (
                <div className="saved-link-card" key={link.id}>
                  <div>
                    <h3>{link.title}</h3>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.url}
                    </a>
                  </div>

                  <button
                    className="delete-link-btn"
                    onClick={() => handleDeleteLink(link.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyLinks;
