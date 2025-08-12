# LeetCode Analytics Dashboard - Next.js

A modern, responsive Next.js web application that replicates the LeetCode Analytics interface with sections A through Q displayed in beautiful cards.

## 🚀 Features

- 🎨 **Modern UI Design**: Purple gradient background with glassmorphism effects
- 📱 **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- 🎯 **Interactive Cards**: 17 sections (A-Q) with hover effects and click interactions
- ⚡ **Real-time Updates**: Simulated data refresh with smooth animations
- 🔄 **Dynamic Content**: Animated counters and live data simulation
- 🎭 **Beautiful Animations**: Smooth transitions and gradient effects
- ⚙️ **TypeScript**: Full type safety and better development experience
- 🏗️ **Component-based Architecture**: Modular and maintainable code structure

## 📋 Sections Overview

The dashboard includes 17 sections from A to Q, each representing different coding concepts:

- **Section A**: Algorithm Problems (125)
- **Section B**: Binary Search (89)
- **Section C**: Coding Challenges (234)
- **Section D**: Dynamic Programming (67)
- **Section E**: Easy Problems (156)
- **Section F**: Fast Solutions (42)
- **Section G**: Graph Algorithms (78)
- **Section H**: Hash Tables (193)
- **Section I**: Intermediate Level (84)
- **Section J**: Java Solutions (29)
- **Section K**: Key Concepts (147)
- **Section L**: Logic Problems (203)
- **Section M**: Medium Problems (91)
- **Section N**: Network Flow (56)
- **Section O**: Optimization (112)
- **Section P**: Pattern Matching (175)
- **Section Q**: Queue Operations (68)

## 🛠️ Technologies Used

- **Next.js 14**: React framework with app router
- **TypeScript**: For type safety and better developer experience
- **CSS Modules**: Scoped styling for components
- **React Hooks**: Modern React patterns for state management
- **Font Awesome**: Beautiful icons
- **CSS Grid & Flexbox**: Responsive layout system

## 📁 Project Structure

```
dept_project/
├── components/                 # React components
│   ├── Dashboard.tsx          # Main dashboard component
│   ├── Header.tsx             # Header with title and controls
│   ├── SectionCard.tsx        # Individual section cards
│   ├── AnalyticsModal.tsx     # Analytics modal component
│   └── Notification.tsx       # Toast notifications
├── data/
│   └── sectionsData.ts        # Data structure and mock data
├── hooks/
│   └── useRealTimeData.ts     # Custom hook for real-time updates
├── pages/
│   ├── _app.tsx               # Next.js app wrapper
│   └── index.tsx              # Home page
├── styles/                    # CSS modules
│   ├── globals.css            # Global styles
│   ├── Dashboard.module.css   # Dashboard styles
│   ├── Header.module.css      # Header styles
│   ├── SectionCard.module.css # Card styles
│   ├── AnalyticsModal.module.css # Modal styles
│   └── Notification.module.css # Notification styles
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎯 Features in Detail

### Visual Design
- **Purple Gradient Background**: Matches the original LeetCode Analytics theme
- **Glassmorphism Cards**: Semi-transparent cards with blur effects
- **Color-coded Icons**: Each section has a unique gradient-colored icon
- **Smooth Animations**: Hover effects, loading states, and value animations

### Interactive Elements
- **Card Interactions**: Click any card to view section details
- **Data Refresh**: Click "Refresh Data" to simulate real-time updates
- **Analytics Modal**: Click "View Analytics" for detailed overview
- **Responsive Design**: Adapts to different screen sizes seamlessly

### React/Next.js Features
- **Component-based Architecture**: Modular and reusable components
- **TypeScript Support**: Full type safety throughout the application
- **CSS Modules**: Scoped styling to prevent style conflicts
- **Custom Hooks**: Reusable logic for data management
- **Server-side Rendering**: Fast initial page loads with Next.js

### Performance Optimizations
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Modules**: Optimized CSS loading
- **React Hooks**: Efficient state management
- **Memoization**: Optimized re-renders where needed

## 🎨 Customization

### Styling
- Modify colors in CSS module files
- Update gradient values in `styles/globals.css`
- Customize animations and transitions

### Data
- Update section data in `data/sectionsData.ts`
- Add new sections by extending the data structure
- Modify labels and values as needed

### Components
- Add new components in the `components/` directory
- Extend existing components with new features
- Create new pages in the `pages/` directory

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## 🔮 Future Enhancements

- Real database integration (Firebase, Supabase)
- User authentication and personalization
- Data visualization charts (Chart.js, D3.js)
- Dark/Light theme toggle
- Export functionality (PDF, CSV)
- Progressive Web App (PWA) features
- Real-time collaboration features

## 🤝 Contributing

Feel free to contribute to this project by:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js and TypeScript to replicate the beautiful LeetCode Analytics Dashboard design.
