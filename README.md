# NutriAI Assistant UI (Dummy Frontend)

A clean, modern, and responsive **frontend-only** prototype that mimics a nutrition-focused voice assistant interface.

> This project is intentionally UI-only. It does **not** include any backend, AI/LLM/SLM integration, voice recognition, or external API calls.

## Features

- Centered assistant card with modern, minimal dark-theme styling
- Header with app title and subtitle
- Input bar with:
  - nutrition query text input
  - microphone button (visual toggle only)
  - send button (demo-only behavior)
- Nutrition-focused predefined question chips
- Click-to-fill behavior for suggestion chips
- Visual `Listening...` state animation when mic is toggled
- Responsive layout for mobile and desktop

## Project Structure

- `index.html` — UI structure and content
- `style.css` — styling, layout, animation, and responsiveness
- `script.js` — frontend interactions (no network calls)

## Getting Started

1. Clone or download this repository.
2. Open `index.html` directly in your browser.

That’s it — no build step and no dependencies required.

## Theme

- Default UI theme: **dark**
- Colors are centralized in CSS custom properties at the top of `style.css` for easy theme iteration.

## Behavior Notes

- Clicking any predefined nutrition question fills the input field.
- Clicking the mic icon toggles a visual listening state.
- Clicking send does not submit to any service; it only shows a local demo message.

## Accessibility Considerations

- Uses a visually hidden label for the input.
- Includes `aria-live` for voice state text updates.
- Includes `aria-pressed` state for the mic toggle button.
- Includes visible focus styles for keyboard users.

## License

This is a demo UI prototype intended for learning, mockups, and frontend experimentation.
