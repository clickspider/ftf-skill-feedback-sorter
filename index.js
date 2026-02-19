#!/usr/bin/env node

/**
 * FTF Skill: Feedback Sorter
 * Description: Categorizes raw feedback into Bug, Feature, or Praise.
 */

const { execSync } = require("child_process");

async function sortFeedback(text) {
  if (!text) {
    console.error("Error: No feedback text provided.");
    process.exit(1);
  }

  // The FTF/OpenClaw way: We use the underlying gateway"s LLM capability via a prompt.
  // In a real skill, this might call an internal API or use a local utility.
  // For this "Gift", we"ll output the logic as if it"s running in an agent turn.

  const prompt = `
    Categorize the following user feedback into exactly one of these categories: [Bug, Feature, Praise].
    
    Feedback: "${text}"
    
    Output only the category name.
  `;

  // Note: In production FTF skills, we"d use the internal agent sdk.
  // For this demonstration/gift, we"ll simulate the categorization.
  
  const categories = ["Bug", "Feature", "Praise"];
  
  // Logic simulation for the "Gift" experience
  let category = "Praise"; // Default
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes("error") || lowerText.includes("crash") || lowerText.includes("broken") || lowerText.includes("fail")) {
    category = "Bug";
  } else if (lowerText.includes("would be cool") || lowerText.includes("add") || lowerText.includes("can you") || lowerText.includes("feature")) {
    category = "Feature";
  }

  return {
    category,
    originalText: text,
    timestamp: new Date().toISOString()
  };
}

const input = process.argv.slice(2).join(" ");

sortFeedback(input).then(result => {
  console.log(JSON.stringify(result, null, 2));
});