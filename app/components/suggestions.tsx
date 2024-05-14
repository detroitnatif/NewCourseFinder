
import React from 'react';
import styles from './suggestions.module.css';

interface SuggestionButtonProps {
  primaryText: string;
  secondaryText: string;
  onSubmitSuggestion: (fullText: string) => void;
}

const SuggestionButton: React.FC<SuggestionButtonProps> = ({ primaryText, secondaryText, onSubmitSuggestion }) => {
  const fullText = `${primaryText} ${secondaryText}`;

  return (
    <div className={styles.suggestionButton}>
      <button
        onClick={() => onSubmitSuggestion(fullText)}
        className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left hover:bg-slate-50 text-gray-700 dark:text-gray-300 md:whitespace-normal border-2 border-gray-200 dark:border-gray-300"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className={styles.primaryText}>{primaryText}</div>
            <div className={styles.secondaryText}>{secondaryText}</div>
          </div>
        </div>
      </button>
    </div>
  );
};


interface SuggestionButtonsProps {
  onSubmitSuggestion: (fullText: string) => void;
}

const SuggestionButtons: React.FC<SuggestionButtonsProps> = ({ onSubmitSuggestion }) => {
  const suggestions = [
    {
      primaryText: "Find me an accounting course",
      secondaryText: "including bookkeeping for business transactions that map into financial statements",
    },
    {
      primaryText: "Show me classes",
      secondaryText: "that explore extraterrestrial life and the possibility of life on other planets",
    },
    {
      primaryText: "Recommend a variety",
      secondaryText: "of courses that study earth and how animals and plants interact with it",
    },
    {
      primaryText: "List every course",
      secondaryText: "that involves the study of the human behavior in the course description",
    },
  ];

  return (
    <div className={styles.suggestionsGrid}>
      {suggestions.map((suggestion, index) => (
        <SuggestionButton
          key={index}
          primaryText={suggestion.primaryText}
          secondaryText={suggestion.secondaryText}
          onSubmitSuggestion={onSubmitSuggestion}
        />
      ))}
    </div>
  );
};

export default SuggestionButtons;
