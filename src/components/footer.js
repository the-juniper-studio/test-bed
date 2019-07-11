import React from "react"

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container text-right">
      <p>&copy; The Juniper Studio {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer