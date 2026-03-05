# Web Gallery

A lightweight Pinterest-style image gallery that automatically loads images from a folder and displays them in a responsive masonry layout.

The project uses a small **Node.js server** to list image files and a **single HTML page** to render the gallery.

<img width="2240" height="1369" alt="image" src="https://github.com/user-attachments/assets/351394b8-1897-4ea8-ad8d-b6cc57e8ddc1" />

## Features

- Responsive masonry-style layout
- Automatically loads images from the `public` folder
- Supports `.png`, `.jpg`, `.jpeg`, and `.webp`
- Fullscreen image viewer
- Zoom controls
- Mouse wheel zoom
- Double-click to zoom at cursor
- Drag to pan when zoomed
- Keyboard navigation
  - `←` previous image
  - `→` next image
  - `Esc` close fullscreen
- Slideshow mode

---

# Project Structure

```
project/
├── index.js        # Node server
├── index.html      # Gallery frontend
├── package.json
└── public/         # Place images here
    ├── image1.jpg
    ├── image2.png
    └── ...
```

---

# Requirements

- Node.js (v16 or newer recommended)

You can download Node.js from:

https://nodejs.org

---

# Installation

Clone the repository:

```bash
git clone https://github.com/calderov/webgallery
cd webgallery
```

Install dependencies:

```bash
npm install
```

---

# Running the Application

Start the server:

```bash
node index.js
```

The gallery will be available at:

```
http://localhost:3000
```

---

# Adding Images

Place your images inside the `public` folder:

```
public/
```

Supported formats:

- `.png`
- `.jpg`
- `.jpeg`
- `.webp`
  
The gallery automatically detects new images when the page is refreshed.

---

# Controls

## Mouse

| Action | Result |
|------|------|
| Click image | Open fullscreen |
| Mouse wheel | Zoom in/out |
| Double click | Zoom to cursor |
| Drag (when zoomed) | Pan image |

## Keyboard

| Key | Action |
|----|----|
| → | Next image |
| ← | Previous image |
| Esc | Close fullscreen |

---

# Slideshow

In fullscreen mode you can start a slideshow using the **Slideshow** button.

Images will automatically advance at a fixed interval.

---

# Future Improvements

Possible features to add:

- Image sorting options
- Video support
- GIF/WebP support
- Image captions / metadata
- Mobile pinch zoom
- Progressive loading
- Folder navigation

---

# License

MIT License
