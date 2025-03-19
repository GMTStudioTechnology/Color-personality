import React, { useState } from 'react';
import { questions } from './questions';
import { PaintBucket } from 'lucide-react';

type Answer = {
  text: string;
  value: string;
};

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [colorCode, setColorCode] = useState(['#', 'f', 'f', 'f', 'f', 'f', 'f']);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string[]>>({
    1: [], 2: [], 3: [], 4: [], 5: [], 6: []
  });

  const handleAnswer = (answer: Answer) => {
    const currentQuestion = questions[currentStep];
    const position = currentQuestion.position;
    
    // Store the answer
    const newAnswers = { ...answers };
    newAnswers[position] = [...(newAnswers[position] || []), answer.value];
    setAnswers(newAnswers);

    // Calculate the most common value for this position
    if (newAnswers[position].length >= 3) {
      const counts = newAnswers[position].reduce((acc: Record<string, number>, val: string) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      
      const mostCommon = Object.entries(counts).reduce((a, b) => 
        (counts[a[0]] > counts[b[0]] ? a : b)
      )[0];

      const newColorCode = [...colorCode];
      newColorCode[position] = mostCommon;
      setColorCode(newColorCode);
    }

    setCurrentStep(currentStep + 1);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getCurrentColor = () => {
    return colorCode.join('');
  };

  const resetTest = () => {
    setCurrentStep(0);
    setColorCode(['#', 'f', 'f', 'f', 'f', 'f', 'f']);
    setAnswers({
      1: [], 2: [], 3: [], 4: [], 5: [], 6: []
    });
  };

  const totalQuestions = questions.length;
  const currentPosition = questions[currentStep]?.position || 6;
  const questionsForPosition = questions.filter(q => q.position === currentPosition).length;
  const answeredForPosition = answers[currentPosition]?.length || 0;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <PaintBucket className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Color Personality Test</h1>
          </div>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg ${
              isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            Toggle Theme
          </button>
        </div>

        {/* Color Display */}
        <div className="flex flex-col items-center mb-12 pt-36">
          <div
            className="w-64 h-64 rounded-xl shadow-lg transition-all duration-500"
            style={{ backgroundColor: getCurrentColor() }}
          ></div>
          <p className="mt-4 font-mono text-xl">{getCurrentColor()}</p>
        </div>

        {/* Questions/Results Section */}
        <div className="max-w-2xl mx-auto">
          {currentStep < questions.length ? (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">
                  Question {currentStep + 1} of {totalQuestions}
                </h2>
                <p className="text-lg mb-2">{questions[currentStep].question}</p>
                <p className="text-sm text-gray-500">
                  Determining position {currentPosition} ({answeredForPosition + 1}/{questionsForPosition} questions)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentStep].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer)}
                    className={`p-4 rounded-lg transition-colors ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-gray-700'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Your Color Personality</h2>
              <p className="text-lg">
                Your unique color code is <span className="font-mono">{getCurrentColor()}</span>
              </p>
              <p className="text-md">
                This color represents your personality traits based on your choices.
                Each position in your color code was determined by multiple questions,
                making it a more accurate reflection of your personality.
              </p>
              <button
                onClick={resetTest}
                className={`px-6 py-3 rounded-lg ${
                  isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
                }`}
              >
                Take the Test Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;