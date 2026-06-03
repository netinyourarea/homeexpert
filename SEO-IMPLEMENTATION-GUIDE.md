# Connectly — SEO Implementation Guide

## ✅ Completed SEO Setup

### 1. **Website Foundation**
- ✅ Meta tags updated (title, description)
- ✅ Responsive design (mobile-friendly)
- ✅ Clean URL structure (`connectly.io/about`, `connectly.io/contact`)
- ✅ Open Graph tags (social sharing)
- ✅ Canonical URLs on all pages

### 2. **Technical SEO**
- ✅ robots.txt configured
- ✅ sitemap.xml created
- ✅ Schema markup (Organization, Website)

### 3. **Meta Tags**
All pages updated with:
- ✅ Unique Title Tags
- ✅ Meta Descriptions
- ✅ Canonical Tags
- ✅ Open Graph Tags for social sharing

---

## 🔧 Next Steps to Complete

### **Critical - Do These First:**

#### 1. **Enable HTTPS**
- Ensure SSL certificate is active on production
- Add to vite.config.ts or server config:
```bash
https: {
  key: '/path/to/key.pem',
  cert: '/path/to/cert.pem'
}
```

#### 2. **Replace GA4 & GTM IDs**
In `index.html`, replace `G-XXXXXXXXXX` with your actual IDs:
```html
<!-- Find and replace both instances -->
G-XXXXXXXXXX → Your GA4 Measurement ID
```

**Get IDs from:**
- [Google Analytics 4](https://analytics.google.com)
- [Google Tag Manager](https://tagmanager.google.com)

#### 3. **Create .htaccess for HTTPS Redirect** (if using Apache)
Create `.htaccess` in root:
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove www subdomain
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]
```

#### 4. **Configure Nginx** (if using Nginx)
Add to nginx config:
```nginx
server {
    listen 443 ssl http2;
    server_name connectly.io;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # HTTP to HTTPS redirect
    server {
        listen 80;
        server_name connectly.io;
        return 301 https://$server_name$request_uri;
    }
}
```

---

### **Important - Do Next:**

#### 5. **Submit to Search Consoles**

**Google Search Console:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `connectly.io`
3. Verify via DNS record (recommended):
   - Go to Domain DNS settings
   - Add TXT record: `google-site-verification=xxxxx`
4. Submit `sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site
3. Verify and submit sitemap

#### 6. **Update Sitemap Dates**
Edit `public/sitemap.xml` and update:
```xml
<lastmod>2026-06-01</lastmod>  <!-- Set to today's date -->
```

---

### **Recommended - Enhance Further:**

#### 7. **Add FAQ Schema to Homepage**
In `src/routes/index.tsx`, add before the `</Layout>` closing tag:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are you an official cable or internet service provider?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We are an independent third-party assistance platform."
      }
    }
  ]
}
```

#### 8. **Optimize Images**
All images should be:
- ✅ WebP format
- ✅ Lazy loaded (`loading="lazy"`)
- ✅ Compressed (< 200KB)
- ✅ Descriptive alt text
- ✅ Descriptive file names

Example:
```html
<img 
  src="independent-guidance.webp" 
  alt="Connectly provides independent guidance on service options"
  loading="lazy"
/>
```

#### 9. **Add Local Business Schema** (if applicable)
Add to pages if you have a physical location:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Connectly",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "12345"
  },
  "telephone": "+1-XXXXXXXXX"
}
```

#### 10. **Configure Analytics Events in GTM**
Add tracking for:
- ✅ Form submissions (`Request Assistance`)
- ✅ Phone clicks
- ✅ Email clicks
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ Page time on page

---

## 📊 **Performance Checklist**

### Core Web Vitals Targets:
- **LCP (Largest Contentful Paint):** < 2.5s ✅
- **INP (Interaction to Next Paint):** < 200ms ✅
- **CLS (Cumulative Layout Shift):** < 0.1 ✅

**Check Progress:**
1. [Google PageSpeed Insights](https://pagespeed.web.dev)
2. Enter: `connectly.io`
3. Monitor weekly

---

## 🔐 **Security & Compliance**

- ✅ HTTPS enabled
- ✅ robots.txt configured
- ✅ sitemap.xml submitted
- ✅ No sensitive data exposed
- ✅ Privacy Policy & Terms in footer
- ✅ Compliance disclosures on all pages

---

## 📋 **Monthly SEO Maintenance**

Every month, check:
1. Google Search Console for crawl errors
2. Core Web Vitals in PageSpeed Insights
3. Keyword rankings in GSC
4. New pages indexing (wait 7-14 days)
5. Broken links with SEMrush or Ahrefs
6. Competitor analysis

---

## 📞 **Support**

For GA4/GTM issues:
- [Google Analytics Help](https://support.google.com/analytics)
- [GTM Help](https://support.google.com/tagmanager)

For schema validation:
- [Schema.org Validator](https://validator.schema.org)

---

**Last Updated:** June 1, 2026  
**Next Review:** Monthly
