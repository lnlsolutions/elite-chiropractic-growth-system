// Chiro One Sports & Spine Center Local SEO Schema
// Add <script src="schema.js"></script>
// above script.js on all pages

(function () {

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",

  "name": "Chiro One Sports & Spine Center",

  "url": "https://elitechiro.netlify.app",

  "telephone": "+1-313-644-0440",

  "email": "Elitechirocenter1@gmail.com",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6 Park Ln Blvd Bldg #6",
    "addressLocality": "Dearborn",
    "addressRegion": "MI",
    "postalCode": "48126",
    "addressCountry": "US"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.317",
    "longitude": "-83.231"
  },

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:30",
      "closes": "14:30"
    }
  ],

  "medicalSpecialty": [
    "Chiropractic",
    "Sports Medicine",
    "Physical Therapy"
  ],

  "areaServed": [
    {
      "@type": "City",
      "name": "Dearborn"
    },
    {
      "@type": "City",
      "name": "Dearborn Heights"
    },
    {
      "@type": "City",
      "name": "Detroit"
    },
    {
      "@type": "City",
      "name": "Allen Park"
    },
    {
      "@type": "City",
      "name": "Taylor"
    }
  ]
};

const physicianSchema = {
  "@context": "https://schema.org",

  "@type": "Physician",

  "name": "Dr. Naiel Salameh",

  "jobTitle": "Doctor of Chiropractic",

  "medicalSpecialty": [
    "Chiropractic",
    "Sports Medicine"
  ],

  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "Chiro One Sports & Spine Center"
  },

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6 Park Ln Blvd",
    "addressLocality": "Dearborn",
    "addressRegion": "MI",
    "postalCode": "48126",
    "addressCountry": "US"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "name": "Chiro One Sports & Spine Center",

  "url": "https://elitechiro.netlify.app",

  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://elitechiro.netlify.app/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "MedicalTherapy",

  "name": "Chiropractic Care",

  "provider": {
    "@type": "MedicalBusiness",
    "name": "Chiro One Sports & Spine Center"
  },

  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://elitechiro.netlify.app"
  }
};

[
  localBusinessSchema,
  physicianSchema,
  websiteSchema,
  serviceSchema
].forEach(schema => {

  const script = document.createElement("script");

  script.type = "application/ld+json";

  script.textContent = JSON.stringify(schema);

  document.head.appendChild(script);

});

})();
