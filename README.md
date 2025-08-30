# This.SoftMax Products

## Overview

This.SoftMax is the official platform for showcasing all new products, services, and software launches from our innovative ecosystem. This website serves as the central hub for discovering cutting-edge solutions across various domains including real estate technology, collaborative documentation, and artificial intelligence.

## Featured Products

### 1. Aria.Estate
A dynamic property platform revolutionizing real estate commerce with comprehensive solutions for property management, leasing, development services, and infrastructure projects.
Link: 

### 2. Note.Delta
A technology and sci-fi proposal platform featuring development tools, documentation systems, and community forums with both public and private collaboration spaces.
Link: 

### 3. Sphereas
An advanced AI platform that transforms text to images, with upcoming capabilities for large language models (LLM) and text-to-video generation.
Link: 

## Technology Stack

- **Frontend**: React.js with modern CSS animations
- **Styling**: Custom CSS with gradient backgrounds and interactive elements
- **Animations**: Pure CSS animations (no external libraries)
- **Design**: Responsive design that works on all device sizes
- **Backend**: Python Django Framework (under devlopment)
- **Database**: pgAdmin as of now(TODO: Migrate to mongoDB)

## Key Features

- **Visually Stunning Design**: Each product features unique animations that represent its core functionality
- **Responsive Layout**: Adapts seamlessly to desktop, tablet, and mobile devices
- **Performance Optimized**: Lightweight implementation with pure CSS animations
- **Consistent Theme**: Matches the overall design language of the This.SoftMax ecosystem

## Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd my-business-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized static files in the `build` folder.

## Project Structure

```
src/
  components/
    Footer.js     
  pages/
    ProductsPage.js   
  styles/
    LandingPage.css   
    ProductsPage.css  
```

## Customization

### Adding New Products

Currently it is static. As soon as backend is ready, custom styling and animation feature will be available to customise and configure from backend.
Also, another Deep Research Backend Python Mdoule(ASAD) is in development which will enable high end dynamic feasibility and customisation.

### Modifying Animations

Each product has dedicated animation keyframes in the CSS file. Adjust timing, size, and movement patterns by modifying the appropriate keyframes and animation properties.

### Color Scheme

The color scheme uses CSS variables defined in `LandingPage.css`:

```css
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #10b981;
  --accent: #f59e0b;
  --dark: #1f2937;
  --light: #f9fafb;
  --gray: #6b7280;
}
```
However in upcoming ASAD launch, it will also be configurable.

## Browser Compatibility

This website supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Notes

- All animations are implemented using CSS for optimal performance
- Images are optimized for fast loading
- The codebase follows React best practices for efficient rendering

## Contributing

We welcome contributions to enhance the This.SoftMax products website. Please ensure that any new animations maintain the consistent visual language and performance standards.

## License

This project is proprietary software owned by This.SoftMax. All rights reserved.

## Support

For technical support or questions about our products, please contact our development team at testingnewold@gmail.com.

---

*This.SoftMax - Launching Innovation, Powering Progress*