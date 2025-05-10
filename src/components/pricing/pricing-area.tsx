import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";

const pricing_data = [
  {
    id: 1,
    bg: "/assets/img/price/price-bg-1.jpg",
    title: "Basic",
    price: 300,
    features: [
      "Basic Hosting – Reliable Web hosting for smooth performance.",
      "Basic Maintenance – CMS, plugin, and theme updates 2 times a year.",
      "Monthly Backups – Automated backups stored securely",
      "Email Support – Response time within 1 week.",
    ],
  },
  {
    id: 2,
    bg: "/assets/img/price/price-bg-2.jpg",
    title: "Pro",
    price: 600,
    features: [
      "Pro Hosting - Secure and Reliable Web hosting for smooth and high performance",
      "Enhanced Maintenance – Regular updates for CMS, plugins, themes, & security patches.",
      "Monthly Backups – Securely stored on our dedicated servers",
      "Advanced Security Monitoring – Regular scans, firewall protection & proactive vulnerability fixes",
      "Priority Email Support – Responses within business hours (9 AM - 5 PM, Mon-Fri).",
      "Uptime Monitoring – 99.9% uptime guarantee with real-time downtime alerts.",
      "Performance Optimization – Speed improvements & database optimization. SEO & Analytics Reports – Monthly performance & visibility insights.",
      "SSL Certificate Management – Ensuring a secure, encrypted connection.",
    ],
  },
  {
    id: 3,
    bg: "/assets/img/price/price-bg-3.jpg",
    title: "Premium",
    price: 900,
    features: [
      "HIPAA-Compliant Hosting: Secure, encrypted data storage (at rest & in transit).",
      "Comprehensive Maintenance: CMS, plugins, themes, security patches & performance optimization.",
      "Weekly Backups: Automated, HIPAA-compliant storage for seamless recovery.",
      "Advanced Security Monitoring: 24/7 scans, malware removal & proactive patching.",
      "24/7 Priority Support: Dedicated email & phone support for critical issues.",
      "Uptime Assurance: 99.9% uptime guarantee with real-time downtime alerts.",
      "Custom Monthly Reports: Tailored insights on security, performance & compliance.",
      "Disaster Recovery Plan: Structured data restoration strategy for business continuity.",
      "SSL Certification Management: Full oversight of SSL installation, renewal & security updates.",
      "Compliance Auditing & Reporting: Routine HIPAA compliance audits & detailed reports.",
      "FREE Domain Registration: Annual domain renewal included ($15-$20/year value).",
    ],
  },
];

export default function PricingArea() {
  return (
    <div className="tp-price-area">
      <div className="container">
        <div className="row">
          {pricing_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div
                className={`tp-price-item ${item.id === 2 ? "active" : ""}`}
                style={{
                  backgroundImage: item.id === 2 ? `url(${item.bg})` : "",
                }}
              >
                <div
                  className="tp-price-head"
                  style={{
                    backgroundImage: item.id !== 2 ? `url(${item.bg})` : "",
                  }}
                >
                  <span>#{item.id}</span>
                  <h5>{item.title}</h5>
                </div>
                <div className="tp-price-body">
                  <span className="tp-price-monthly">
                    $<i>{item.price}</i>/ per year
                  </span>
                  <div className="tp-price-list">
                    <ul>
                      {item.features.map((l, i) => (
                        <li key={i}>
                          <i className="fa-sharp fa-light fa-check"></i>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    className={`tp-btn-black-md ${item.id===2?"white-bg":""} w-100 text-center`}
                    href="/contact"
                  >
                    Choose Plan
                    <span>
                      <UpArrow />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
