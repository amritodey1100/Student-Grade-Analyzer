/**
 * Advanced Word Reversal Utility
 *
 * This module provides comprehensive functionality for reversing the order of words
 * in sentences while maintaining the integrity of individual word characters.
 *
 * @module WordReversal
 * @version 2.0.0
 * @author Advanced JavaScript Developer
 * @license MIT
 */

/**
 * Configuration object for word reversal options
 * @typedef {Object} ReversalOptions
 * @property {boolean} preservePunctuation - Whether to keep punctuation with words
 * @property {boolean} trimWhitespace - Whether to trim leading/trailing whitespace
 * @property {boolean} preserveCase - Whether to maintain original casing
 * @property {boolean} handleMultipleSpaces - Whether to normalize multiple spaces
 * @property {string} delimiter - Custom delimiter for splitting words
 * @property {boolean} ignoreEmpty - Whether to filter out empty strings
 * @property {boolean} strict - Whether to use strict mode with additional validation
 */

/**
 * Default configuration for word reversal
 * @type {ReversalOptions}
 */
const DEFAULT_OPTIONS = {
  preservePunctuation: true,
  trimWhitespace: true,
  preserveCase: true,
  handleMultipleSpaces: true,
  delimiter: " ",
  ignoreEmpty: true,
  strict: false,
};

/**
 * Custom error class for word reversal operations
 * @class ReversalError
 * @extends Error
 */
class ReversalError extends Error {
  constructor(message, code = "REVERSAL_ERROR") {
    super(message);
    this.name = "ReversalError";
    this.code = code;
    this.timestamp = new Date().toISOString();
  }
}

/**
 * Validates input and options for the reverseWords function
 * @param {*} input - The input to validate
 * @param {Object} options - The options to validate
 * @throws {ReversalError} If validation fails
 * @returns {void}
 */
function validateInput(input, options) {
  if (input === null || input === undefined) {
    throw new ReversalError(
      "Input cannot be null or undefined",
      "INVALID_INPUT"
    );
  }

  if (typeof input !== "string") {
    throw new ReversalError(
      `Expected string input, received ${typeof input}`,
      "INVALID_TYPE"
    );
  }

  if (options && typeof options !== "object") {
    throw new ReversalError("Options must be an object", "INVALID_OPTIONS");
  }

  if (options && options.delimiter && typeof options.delimiter !== "string") {
    throw new ReversalError("Delimiter must be a string", "INVALID_DELIMITER");
  }
}

/**
 * Sanitizes and normalizes the input string
 * @param {string} str - The string to sanitize
 * @param {ReversalOptions} options - Configuration options
 * @returns {string} Sanitized string
 */
function sanitizeInput(str, options) {
  let sanitized = str;

  // Trim whitespace if option is enabled
  if (options.trimWhitespace) {
    sanitized = sanitized.trim();
  }

  // Handle multiple spaces if option is enabled
  if (options.handleMultipleSpaces) {
    sanitized = sanitized.replace(/\s+/g, " ");
  }

  return sanitized;
}

/**
 * Extracts words from a string based on the delimiter
 * @param {string} str - The input string
 * @param {string} delimiter - The delimiter to use for splitting
 * @param {boolean} ignoreEmpty - Whether to filter empty strings
 * @returns {string[]} Array of words
 */
function extractWords(str, delimiter, ignoreEmpty) {
  let words = str.split(delimiter);

  if (ignoreEmpty) {
    words = words.filter((word) => word.length > 0);
  }

  return words;
}

/**
 * Reverses an array in place for better performance
 * @param {Array} arr - Array to reverse
 * @returns {Array} Reversed array
 */
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

/**
 * Joins words back together with proper spacing
 * @param {string[]} words - Array of words to join
 * @param {string} delimiter - Delimiter to use for joining
 * @returns {string} Joined string
 */
function joinWords(words, delimiter) {
  return words.join(delimiter);
}

/**
 * Analyzes the input string and provides statistics
 * @param {string} str - Input string
 * @returns {Object} Statistics object
 */
function analyzeString(str) {
  return {
    length: str.length,
    wordCount: str
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0).length,
    charCount: str.replace(/\s/g, "").length,
    spaceCount: (str.match(/\s/g) || []).length,
    hasLeadingSpace: str.length > 0 && str[0] === " ",
    hasTrailingSpace: str.length > 0 && str[str.length - 1] === " ",
    isEmpty: str.trim().length === 0,
  };
}

/**
 * Main function to reverse the order of words in a sentence
 *
 * This function takes a sentence as input and returns a new sentence with
 * the words in reversed order. The individual characters within each word
 * remain in their original order.
 *
 * @param {string} sentence - The input sentence to reverse
 * @param {ReversalOptions} [options={}] - Configuration options
 * @returns {string} The sentence with words in reversed order
 * @throws {ReversalError} If input validation fails
 *
 * @example
 * // Basic usage
 * reverseWords("Hello world");
 * // Returns: "world Hello"
 *
 * @example
 * // With options
 * reverseWords("Hello  world  ", { trimWhitespace: true, handleMultipleSpaces: true });
 * // Returns: "world Hello"
 *
 * @example
 * // Custom delimiter
 * reverseWords("Hello-world-JavaScript", { delimiter: '-' });
 * // Returns: "JavaScript-world-Hello"
 */
function reverseWords(sentence, options = {}) {
  // Merge options with defaults
  const config = { ...DEFAULT_OPTIONS, ...options };

  // Validate input in strict mode
  if (config.strict) {
    validateInput(sentence, options);
  } else {
    // Basic validation even in non-strict mode
    if (typeof sentence !== "string") {
      return "";
    }
  }

  // Handle empty string case
  if (sentence.length === 0) {
    return "";
  }

  // Sanitize the input
  const sanitized = sanitizeInput(sentence, config);

  // Handle empty sanitized string
  if (sanitized.length === 0) {
    return config.trimWhitespace ? "" : sentence;
  }

  // Extract words from the sentence
  const words = extractWords(sanitized, config.delimiter, config.ignoreEmpty);

  // Handle single word or empty array
  if (words.length <= 1) {
    return sanitized;
  }

  // Reverse the array of words
  const reversedWords = reverseArray(words);

  // Join the reversed words back together
  const result = joinWords(reversedWords, config.delimiter);

  return result;
}

/**
 * Enhanced version with detailed logging and statistics
 * @param {string} sentence - Input sentence
 * @param {ReversalOptions} options - Configuration options
 * @returns {Object} Object containing result and statistics
 */
function reverseWordsWithStats(sentence, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const startTime = performance.now();

  // Get input statistics
  const inputStats = analyzeString(sentence);

  // Perform reversal
  const result = reverseWords(sentence, config);

  // Get output statistics
  const outputStats = analyzeString(result);

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  return {
    result,
    inputStats,
    outputStats,
    executionTime: `${executionTime.toFixed(3)}ms`,
    wordsReversed: inputStats.wordCount,
    config,
  };
}

/**
 * Batch processes multiple sentences
 * @param {string[]} sentences - Array of sentences to reverse
 * @param {ReversalOptions} options - Configuration options
 * @returns {string[]} Array of reversed sentences
 */
function reverseWordsBatch(sentences, options = {}) {
  if (!Array.isArray(sentences)) {
    throw new ReversalError("Input must be an array", "INVALID_BATCH_INPUT");
  }

  return sentences.map((sentence) => {
    try {
      return reverseWords(sentence, options);
    } catch (error) {
      console.error(`Error processing sentence: "${sentence}"`, error);
      return sentence; // Return original on error
    }
  });
}

/**
 * Reverses words while preserving sentence structure (punctuation at end)
 * @param {string} sentence - Input sentence
 * @returns {string} Reversed sentence with preserved punctuation
 */
function reverseWordsPreservePunctuation(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return sentence;
  }

  // Extract trailing punctuation
  const punctuationMatch = sentence.match(/([.!?,;:]+)$/);
  const trailingPunctuation = punctuationMatch ? punctuationMatch[0] : "";

  // Remove trailing punctuation for processing
  const withoutPunctuation = trailingPunctuation
    ? sentence.slice(0, -trailingPunctuation.length)
    : sentence;

  // Reverse words
  const reversed = reverseWords(withoutPunctuation.trim());

  // Reattach punctuation
  return reversed + trailingPunctuation;
}

/**
 * Creates a memoized version of reverseWords for performance optimization
 * @returns {Function} Memoized reverseWords function
 */
function createMemoizedReverseWords() {
  const cache = new Map();
  const maxCacheSize = 1000;

  return function memoizedReverseWords(sentence, options = {}) {
    const cacheKey = JSON.stringify({ sentence, options });

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const result = reverseWords(sentence, options);

    // Implement cache size limit
    if (cache.size >= maxCacheSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    cache.set(cacheKey, result);
    return result;
  };
}

/**
 * Utility function to check if a string is a palindrome after word reversal
 * @param {string} sentence - Input sentence
 * @returns {boolean} True if sentence is a palindrome in word order
 */
function isWordPalindrome(sentence) {
  const cleaned = sentence.trim().toLowerCase();
  const reversed = reverseWords(cleaned, { trimWhitespace: true });
  return cleaned === reversed;
}

/**
 * Interactive demonstration function
 * @param {string} sentence - Sentence to demonstrate with
 */
function demonstrateReversal(sentence) {
  console.log("=".repeat(60));
  console.log("WORD REVERSAL DEMONSTRATION");
  console.log("=".repeat(60));
  console.log(`Original: "${sentence}"`);
  console.log(`Reversed: "${reverseWords(sentence)}"`);
  console.log("\nWith Statistics:");
  console.log(JSON.stringify(reverseWordsWithStats(sentence), null, 2));
  console.log("=".repeat(60));
}

// Export functions for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    reverseWords,
    reverseWordsWithStats,
    reverseWordsBatch,
    reverseWordsPreservePunctuation,
    createMemoizedReverseWords,
    isWordPalindrome,
    demonstrateReversal,
    ReversalError,
    DEFAULT_OPTIONS,
  };
}

// Example usage demonstrations
if (typeof window !== "undefined") {
  // Browser environment - attach to window
  window.WordReversal = {
    reverseWords,
    reverseWordsWithStats,
    reverseWordsBatch,
    reverseWordsPreservePunctuation,
    createMemoizedReverseWords,
    isWordPalindrome,
    demonstrateReversal,
  };
}

// Test cases for validation
const testCases = [
  {
    input: "Hello world",
    expected: "world Hello",
    description: "Basic two-word sentence",
  },
  {
    input: "The quick brown fox",
    expected: "fox brown quick The",
    description: "Four-word sentence",
  },
  {
    input: "JavaScript is awesome",
    expected: "awesome is JavaScript",
    description: "Three-word sentence",
  },
  {
    input: "a",
    expected: "a",
    description: "Single word",
  },
  {
    input: "",
    expected: "",
    description: "Empty string",
  },
  {
    input: "   spaces   everywhere   ",
    expected: "everywhere spaces",
    description: "Multiple spaces with trimming",
  },
];

/**
 * Runs all test cases and reports results
 * @returns {Object} Test results summary
 */
function runTests() {
  console.log("Running test suite...\n");
  let passed = 0;
  let failed = 0;

  testCases.forEach((testCase, index) => {
    try {
      const result = reverseWords(testCase.input);
      const success = result === testCase.expected;

      if (success) {
        passed++;
        console.log(`✓ Test ${index + 1}: ${testCase.description}`);
      } else {
        failed++;
        console.log(`✗ Test ${index + 1}: ${testCase.description}`);
        console.log(`  Expected: "${testCase.expected}"`);
        console.log(`  Got: "${result}"`);
      }
    } catch (error) {
      failed++;
      console.log(`✗ Test ${index + 1}: ${testCase.description} - ERROR`);
      console.log(`  ${error.message}`);
    }
  });

  console.log(`\nTest Results: ${passed} passed, ${failed} failed`);

  return {
    total: testCases.length,
    passed,
    failed,
    successRate: ((passed / testCases.length) * 100).toFixed(2) + "%",
  };
}
