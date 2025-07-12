# ZenMind Website

Landing page for ZenMind - WhatsApp Business API Integration Solutions.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set up custom domain in Vercel dashboard:
   - Add domain: www.zenmind.com.br
   - Configure DNS records at your domain registrar

## Meta Domain Verification

1. Go to Meta Business Settings
2. Navigate to Brand Safety > Domains
3. Add domain: www.zenmind.com.br
4. Choose HTML file upload method
5. Replace PLACEHOLDER_VERIFICATION_CODE in `/public/meta-domain-verification.txt` with the actual code from Meta
6. Deploy the changes
7. Click "Verify" in Meta Business Settings

## Important Files

- `/app/page.tsx` - Main landing page
- `/app/privacy/page.tsx` - Privacy policy (required by Meta)
- `/app/terms/page.tsx` - Terms of service
- `/public/meta-domain-verification.txt` - Meta domain verification file

## Environment Variables

No environment variables needed for the basic landing page.