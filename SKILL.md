# SKILL.md

# Feedback Sorter

Categorize raw user feedback into "Bug", "Feature", or "Praise".

## Description
This skill takes raw text from any source (emails, tweets, Discord messages) and uses AI to identify the intent and category of the feedback.

## Configuration
No special configuration required.

## Tools
- `feedback_sort(text: string)`: Returns a JSON object with the category.