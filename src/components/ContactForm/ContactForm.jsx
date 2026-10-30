import { useState } from 'react'
import './ContactForm.css'

const WHATSAPP_NUMBER = '61452456745' // +61 452 456 745 (no +, spaces or dashes)

export default function ContactForm() {
  const [done, setDone] = useState(false)
  const [fileName, setFileName] = useState('')
  const [waLink, setWaLink] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)

    const text =
`*New Inquiry*

*Name:* ${f.get('name')}
*Email:* ${f.get('email')}
*Phone:* ${f.get('phone') || '-'}
*Inquiry Type:* ${f.get('inquiryType')}
*Project Location & Scope:* ${f.get('scope')}
*Priority:* ${f.get('priority')}
*Message:* ${f.get('message') || '-'}
${fileName ? `*Drawing file:* ${fileName} (will attach separately)` : ''}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    setWaLink(url)
    setDone(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (done)
    return (
      <div className="cf ok">
        <h3>✅ Thank you!</h3>
        <p>Your inquiry is ready in WhatsApp. Just press Send there.</p>
        <p>
          WhatsApp did not open?{' '}
          <a href={waLink} target="_blank" rel="noopener noreferrer">Click here</a>
        </p>
        {fileName && <p>Please also attach <b>{fileName}</b> in the WhatsApp chat.</p>}
        <p>For emergencies call 1800-CRAMER.</p>
      </div>
    )

  return (
    <form className="cf" onSubmit={handleSubmit}>
      <h3>Send an Inquiry</h3>

      <div className="r">
        <label>Full Name
          <input name="name" required placeholder="John Smith" />
        </label>
        <label>Email
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
      </div>

      <div className="r">
        <label>Phone
          <input name="phone" placeholder="+61 ..." />
        </label>
        <label>Inquiry Type
          <select name="inquiryType">
            <option>Tender/Bid</option>
            <option>HVAC Maintenance</option>
            <option>Mentoring</option>
            <option>Careers</option>
          </select>
        </label>
      </div>

      <div className="r">
        <label>Project Location &amp; Scope
          <select name="scope">
            <option>Commercial</option>
            <option>Industrial</option>
            <option>Health</option>
            <option>Residential</option>
          </select>
        </label>
        <label>Priority Level
          <select name="priority">
            <option>General Business Inquiry</option>
            <option>24/7 HVAC Breakdown</option>
          </select>
        </label>
      </div>

      <label>Message
        <textarea name="message" rows="4" placeholder="Tell us about your project..." />
      </label>

      <label>Upload Tender Drawings (PDF/DWG)
        <input
          type="file"
          accept=".pdf,.dwg"
          onChange={(e) => setFileName(e.target.files[0]?.name || '')}
        />
      </label>

      <button type="submit" className="btn btn-primary">Submit Inquiry →</button>
    </form>
  )
}