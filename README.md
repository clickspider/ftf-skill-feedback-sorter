# FTF Feedback Sorter Skill 🚀

A "Skill Gift" for Marc Lou. This skill automatically categorizes raw user feedback into "Bug", "Feature Request", or "Praise" using AI.

## Installation

To add this skill to your FTF/OpenClaw gateway:

1.  Clone this repository into your skills directory:
    ```bash
    git clone https://github.com/marclou/ftf-skill-feedback-sorter ~/.openclaw/skills/feedback-sorter
    ```
2.  Install dependencies:
    ```bash
    cd ~/.openclaw/skills/feedback-sorter && npm install
    ```
3.  Add it to your `gateway.yaml` (or let the gateway auto-discover it if configured).

## Usage

Once installed, you can call it via the FTF command line or from within an agent session:

```bash
# Example usage via CLI
node ~/.openclaw/skills/feedback-sorter/index.js "The dashboard is crashing whenever I click export."
```

## Features
- **Categorization:** Automatically sorts text into `Bug`, `Feature`, or `Praise`.
- **Clean Output:** Returns a simple JSON object or formatted string for easy parsing by other agents.
- **Marc Lou Style:** Fast, functional, and zero fluff.

## Development

The skill uses the standard FTF skill structure, making it easy to extend for more complex categorization logic or integration with tools like Linear or Tally.