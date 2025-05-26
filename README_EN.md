# 🚀 Electron Development Base

A secure and extensible base project for Electron application development.

## ✨ Features

- **🔒 Secure**: Context isolation enabled, node integration disabled
- **🎨 Modern UI**: Responsive design with beautiful animations
- **🛠️ Development Environment**: ESLint, Prettier, Jest pre-configured
- **📦 Build Ready**: Electron Builder configuration included
- **🧪 Test Ready**: Jest setup with test samples
- **📚 Documentation**: Detailed comments and documentation

## 🏗️ Project Structure

```
electron-development-base/
├── main.js              # Main process
├── preload.js           # Preload script
├── renderer/            # Renderer process
│   ├── index.html       # Main HTML
│   ├── style.css        # Stylesheets
│   └── script.js        # Renderer scripts
├── package.json         # Project configuration
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── .gitignore           # Git ignore settings
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/electron-development-base.git
cd electron-development-base

# Install dependencies
npm install
```

### Development

```bash
# Start in development mode
npm run dev

# Start in normal mode
npm start
```

### Build

```bash
# Build for all platforms
npm run build

# Platform-specific builds
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

### Development Tools

```bash
# Code linting
npm run lint

# Auto-fix code issues
npm run lint:fix

# Code formatting
npm run format

# Run tests
npm test

# Test watch mode
npm run test:watch
```

## 🔧 Configuration

### Environment Variables

You can set the following environment variables for development:

```bash
NODE_ENV=development  # Development mode
```

### Customization

1. **Application Info**: Update `name`, `description`, `author` in `package.json`
2. **Window Settings**: Adjust `BrowserWindow` options in `main.js`
3. **UI/UX**: Customize styles in `renderer/style.css`
4. **API**: Add renderer process APIs in `preload.js`

## 🛡️ Security

This project implements the following Electron security best practices:

- ✅ Context Isolation enabled
- ✅ Node.js Integration disabled
- ✅ contextBridge usage
- ✅ Secure IPC communication
- ✅ CSP (Content Security Policy) ready

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test file
npm test -- --testPathPattern=main.test.js

# Run tests with coverage
npm test -- --coverage
```

## 📦 Distribution

### Code Signing

For production, it's strongly recommended to sign your application:

```json
// package.json
"build": {
  "mac": {
    "identity": "Developer ID Application: Your Name"
  },
  "win": {
    "certificateFile": "path/to/certificate.p12",
    "certificatePassword": "password"
  }
}
```

### Auto Updates

To use Electron Builder's auto-update feature:

```bash
npm install electron-updater
```

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

### Commit Message Convention

Please follow Conventional Commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style fixes
- `refactor:` Refactoring
- `test:` Test additions/fixes
- `chore:` Other changes

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🔗 Related Links

- [Electron Official Documentation](https://www.electronjs.org/docs)
- [Electron Security](https://www.electronjs.org/docs/tutorial/security)
- [Electron Builder](https://www.electron.build/)

## 📞 Support

If you have any issues or questions, please report them in [Issues](https://github.com/yourusername/electron-development-base/issues).

---

⭐ If this project helped you, please consider giving it a star! 