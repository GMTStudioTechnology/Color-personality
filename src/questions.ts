interface Question {
  question: string;
  answers: Array<{
    text: string;
    value: string;
  }>;
  position: number;
}

export const questions: Question[] = [
  // Position 1 (first character after #) - Emotional Intelligence & Self-Awareness
  {
    question: "How do you typically start your day?",
    position: 1,
    answers: [
      { text: "With enthusiasm and energy", value: "f" },
      { text: "Slowly and methodically", value: "e" },
      { text: "By planning everything", value: "d" },
      { text: "Going with the flow", value: "c" }
    ]
  },
  {
    question: "What's your preferred way to learn?",
    position: 1,
    answers: [
      { text: "Hands-on experience", value: "f" },
      { text: "Reading and research", value: "e" },
      { text: "Visual demonstrations", value: "d" },
      { text: "Group discussions", value: "c" }
    ]
  },
  {
    question: "How do you organize your workspace?",
    position: 1,
    answers: [
      { text: "Meticulously organized", value: "f" },
      { text: "Organized chaos", value: "e" },
      { text: "Minimal and clean", value: "d" },
      { text: "Whatever works in the moment", value: "c" }
    ]
  },
  {
    question: "When receiving feedback, you prefer:",
    position: 1,
    answers: [
      { text: "Direct and honest", value: "f" },
      { text: "Gentle and supportive", value: "e" },
      { text: "Detailed and specific", value: "d" },
      { text: "Positive and encouraging", value: "c" }
    ]
  },
  {
    question: "Your emotional responses are usually:",
    position: 1,
    answers: [
      { text: "Intense and immediate", value: "f" },
      { text: "Measured and controlled", value: "e" },
      { text: "Thoughtful and processed", value: "d" },
      { text: "Natural and flowing", value: "c" }
    ]
  },
  {
    question: "In difficult situations, you tend to:",
    position: 1,
    answers: [
      { text: "Take charge immediately", value: "f" },
      { text: "Analyze before acting", value: "e" },
      { text: "Seek consensus", value: "d" },
      { text: "Go with instincts", value: "c" }
    ]
  },
  {
    question: "Your ideal learning environment is:",
    position: 1,
    answers: [
      { text: "Fast-paced and challenging", value: "f" },
      { text: "Structured and organized", value: "e" },
      { text: "Collaborative and interactive", value: "d" },
      { text: "Flexible and adaptable", value: "c" }
    ]
  },
  {
    question: "When facing a new challenge, you first:",
    position: 1,
    answers: [
      { text: "Jump in and experiment", value: "f" },
      { text: "Research thoroughly", value: "e" },
      { text: "Make a detailed plan", value: "d" },
      { text: "Discuss with others", value: "c" }
    ]
  },
  {
    question: "Your preferred way of processing information is:",
    position: 1,
    answers: [
      { text: "Through action and experience", value: "f" },
      { text: "Through analysis and reflection", value: "e" },
      { text: "Through systematic evaluation", value: "d" },
      { text: "Through intuition and feeling", value: "c" }
    ]
  },
  {
    question: "In group projects, you typically:",
    position: 1,
    answers: [
      { text: "Take the lead naturally", value: "f" },
      { text: "Organize and structure", value: "e" },
      { text: "Focus on details", value: "d" },
      { text: "Maintain harmony", value: "c" }
    ]
  },
  {
    question: "Your approach to personal growth is:",
    position: 1,
    answers: [
      { text: "Setting challenging goals", value: "f" },
      { text: "Systematic self-improvement", value: "e" },
      { text: "Following proven methods", value: "d" },
      { text: "Natural development", value: "c" }
    ]
  },
  {
    question: "When making important decisions, you:",
    position: 1,
    answers: [
      { text: "Trust your instincts", value: "f" },
      { text: "Analyze all options", value: "e" },
      { text: "Follow a process", value: "d" },
      { text: "Consider feelings", value: "c" }
    ]
  },
  {
    question: "Your communication style is usually:",
    position: 1,
    answers: [
      { text: "Direct and assertive", value: "f" },
      { text: "Careful and precise", value: "e" },
      { text: "Structured and clear", value: "d" },
      { text: "Adaptive and flowing", value: "c" }
    ]
  },
  {
    question: "When solving problems, you prefer to:",
    position: 1,
    answers: [
      { text: "Act quickly and decisively", value: "f" },
      { text: "Think thoroughly first", value: "e" },
      { text: "Follow established methods", value: "d" },
      { text: "Explore multiple approaches", value: "c" }
    ]
  },
  {
    question: "Your ideal work environment is:",
    position: 1,
    answers: [
      { text: "High-energy and dynamic", value: "f" },
      { text: "Quiet and focused", value: "e" },
      { text: "Organized and structured", value: "d" },
      { text: "Relaxed and flexible", value: "c" }
    ]
  },

  // Position 2 (second character) - Social Interaction & Leadership
  {
    question: "In a group setting, you usually:",
    position: 2,
    answers: [
      { text: "Lead the conversation", value: "9" },
      { text: "Listen and observe", value: "8" },
      { text: "Contribute occasionally", value: "7" },
      { text: "Support others' ideas", value: "6" }
    ]
  },
  {
    question: "At a party, where can you be found?",
    position: 2,
    answers: [
      { text: "Center of attention", value: "9" },
      { text: "Having deep conversations", value: "8" },
      { text: "Moving between groups", value: "7" },
      { text: "Helping the host", value: "6" }
    ]
  },
  {
    question: "How do you prefer to celebrate achievements?",
    position: 2,
    answers: [
      { text: "Big party with friends", value: "9" },
      { text: "Quiet reflection", value: "8" },
      { text: "Small gathering", value: "7" },
      { text: "Personal reward", value: "6" }
    ]
  },
  {
    question: "In team projects, you tend to:",
    position: 2,
    answers: [
      { text: "Take charge naturally", value: "9" },
      { text: "Provide thoughtful input", value: "8" },
      { text: "Support team harmony", value: "7" },
      { text: "Help where needed", value: "6" }
    ]
  },
  {
    question: "Your networking style is:",
    position: 2,
    answers: [
      { text: "Bold and proactive", value: "9" },
      { text: "Strategic and purposeful", value: "8" },
      { text: "Casual and friendly", value: "7" },
      { text: "Genuine and supportive", value: "6" }
    ]
  },
  {
    question: "In social situations, you prefer to:",
    position: 2,
    answers: [
      { text: "Be the entertainer", value: "9" },
      { text: "Have meaningful talks", value: "8" },
      { text: "Go with the flow", value: "7" },
      { text: "Make others comfortable", value: "6" }
    ]
  },
  {
    question: "Your leadership style is:",
    position: 2,
    answers: [
      { text: "Charismatic and bold", value: "9" },
      { text: "Thoughtful and strategic", value: "8" },
      { text: "Collaborative and inclusive", value: "7" },
      { text: "Supportive and nurturing", value: "6" }
    ]
  },
  {
    question: "In group decisions, you typically:",
    position: 2,
    answers: [
      { text: "Drive the process", value: "9" },
      { text: "Analyze options", value: "8" },
      { text: "Build consensus", value: "7" },
      { text: "Support the team", value: "6" }
    ]
  },
  {
    question: "Your approach to networking is:",
    position: 2,
    answers: [
      { text: "Active and initiating", value: "9" },
      { text: "Selective and focused", value: "8" },
      { text: "Natural and friendly", value: "7" },
      { text: "Helpful and kind", value: "6" }
    ]
  },
  {
    question: "In social gatherings, you:",
    position: 2,
    answers: [
      { text: "Start conversations", value: "9" },
      { text: "Seek meaningful connections", value: "8" },
      { text: "Join existing groups", value: "7" },
      { text: "Help others connect", value: "6" }
    ]
  },
  {
    question: "Your preferred social role is:",
    position: 2,
    answers: [
      { text: "The leader", value: "9" },
      { text: "The advisor", value: "8" },
      { text: "The connector", value: "7" },
      { text: "The supporter", value: "6" }
    ]
  },
  {
    question: "In team conflicts, you usually:",
    position: 2,
    answers: [
      { text: "Take control to resolve", value: "9" },
      { text: "Mediate thoughtfully", value: "8" },
      { text: "Seek compromise", value: "7" },
      { text: "Promote harmony", value: "6" }
    ]
  },
  {
    question: "Your communication preference is:",
    position: 2,
    answers: [
      { text: "Being direct and bold", value: "9" },
      { text: "Being precise and clear", value: "8" },
      { text: "Being diplomatic", value: "7" },
      { text: "Being supportive", value: "6" }
    ]
  },
  {
    question: "In group activities, you tend to:",
    position: 2,
    answers: [
      { text: "Organize and direct", value: "9" },
      { text: "Plan and structure", value: "8" },
      { text: "Participate actively", value: "7" },
      { text: "Support others", value: "6" }
    ]
  },
  {
    question: "Your social energy comes from:",
    position: 2,
    answers: [
      { text: "Leading others", value: "9" },
      { text: "Deep connections", value: "8" },
      { text: "Group harmony", value: "7" },
      { text: "Helping others", value: "6" }
    ]
  },

  // Position 3 (third character) - Problem Solving & Decision Making
  {
    question: "When facing a challenge, you prefer to:",
    position: 3,
    answers: [
      { text: "Take immediate action", value: "5" },
      { text: "Analyze all options", value: "4" },
      { text: "Seek others' advice", value: "3" },
      { text: "Trust your intuition", value: "2" }
    ]
  },
  {
    question: "How do you handle stress?",
    position: 3,
    answers: [
      { text: "Exercise or physical activity", value: "5" },
      { text: "Meditation or reflection", value: "4" },
      { text: "Talk to friends", value: "3" },
      { text: "Take a break and relax", value: "2" }
    ]
  },
  {
    question: "When solving problems, you typically:",
    position: 3,
    answers: [
      { text: "Break it down systematically", value: "5" },
      { text: "Look for patterns", value: "4" },
      { text: "Brainstorm with others", value: "3" },
      { text: "Go with your gut feeling", value: "2" }
    ]
  },
  {
    question: "Your approach to deadlines is:",
    position: 3,
    answers: [
      { text: "Work steadily and finish early", value: "5" },
      { text: "Create detailed schedules", value: "4" },
      { text: "Collaborate with others", value: "3" },
      { text: "Adapt as needed", value: "2" }
    ]
  },
  {
    question: "When making decisions, you prefer to:",
    position: 3,
    answers: [
      { text: "Use proven methods", value: "5" },
      { text: "Analyze data thoroughly", value: "4" },
      { text: "Consider all perspectives", value: "3" },
      { text: "Trust your instincts", value: "2" }
    ]
  },
  {
    question: "Your problem-solving style is:",
    position: 3,
    answers: [
      { text: "Methodical and structured", value: "5" },
      { text: "Analytical and thorough", value: "4" },
      { text: "Collaborative and open", value: "3" },
      { text: "Intuitive and creative", value: "2" }
    ]
  },
  {
    question: "In crisis situations, you:",
    position: 3,
    answers: [
      { text: "Take charge decisively", value: "5" },
      { text: "Assess carefully first", value: "4" },
      { text: "Gather team input", value: "3" },
      { text: "Trust your instincts", value: "2" }
    ]
  },
  {
    question: "Your approach to planning is:",
    position: 3,
    answers: [
      { text: "Detailed and systematic", value: "5" },
      { text: "Data-driven and logical", value: "4" },
      { text: "Flexible and inclusive", value: "3" },
      { text: "Adaptable and intuitive", value: "2" }
    ]
  },
  {
    question: "When evaluating options, you:",
    position: 3,
    answers: [
      { text: "Use proven criteria", value: "5" },
      { text: "Analyze all aspects", value: "4" },
      { text: "Seek diverse opinions", value: "3" },
      { text: "Trust your feelings", value: "2" }
    ]
  },
  {
    question: "Your decision-making process is:",
    position: 3,
    answers: [
      { text: "Systematic and thorough", value: "5" },
      { text: "Analytical and precise", value: "4" },
      { text: "Collaborative and open", value: "3" },
      { text: "Intuitive and quick", value: "2" }
    ]
  },
  {
    question: "When tackling complex tasks, you:",
    position: 3,
    answers: [
      { text: "Break them down methodically", value: "5" },
      { text: "Analyze patterns first", value: "4" },
      { text: "Discuss with others", value: "3" },
      { text: "Follow your instincts", value: "2" }
    ]
  },
  {
    question: "Your approach to innovation is:",
    position: 3,
    answers: [
      { text: "Structured experimentation", value: "5" },
      { text: "Thorough research", value: "4" },
      { text: "Collaborative ideation", value: "3" },
      { text: "Spontaneous creativity", value: "2" }
    ]
  },
  {
    question: "In problem-solving sessions, you:",
    position: 3,
    answers: [
      { text: "Guide the process", value: "5" },
      { text: "Analyze the details", value: "4" },
      { text: "Encourage participation", value: "3" },
      { text: "Suggest creative solutions", value: "2" }
    ]
  },
  {
    question: "Your strategy for improvement is:",
    position: 3,
    answers: [
      { text: "Systematic optimization", value: "5" },
      { text: "Data-based refinement", value: "4" },
      { text: "Collaborative evolution", value: "3" },
      { text: "Intuitive adaptation", value: "2" }
    ]
  },
  {
    question: "When facing uncertainty, you:",
    position: 3,
    answers: [
      { text: "Create structured plans", value: "5" },
      { text: "Gather more information", value: "4" },
      { text: "Consult with others", value: "3" },
      { text: "Trust your instincts", value: "2" }
    ]
  },

  // Position 4 (fourth character) - Energy & Lifestyle
  {
    question: "Your ideal weekend would be:",
    position: 4,
    answers: [
      { text: "Adventurous outdoor activities", value: "a" },
      { text: "Relaxing at home", value: "b" },
      { text: "Social gatherings", value: "c" },
      { text: "Creative projects", value: "d" }
    ]
  },
  {
    question: "What energizes you most?",
    position: 4,
    answers: [
      { text: "Physical challenges", value: "a" },
      { text: "Quiet contemplation", value: "b" },
      { text: "Engaging conversations", value: "c" },
      { text: "Creative expression", value: "d" }
    ]
  },
  {
    question: "How do you prefer to travel?",
    position: 4,
    answers: [
      { text: "Adventure backpacking", value: "a" },
      { text: "Luxury resorts", value: "b" },
      { text: "Cultural immersion", value: "c" },
      { text: "Photography tours", value: "d" }
    ]
  },
  {
    question: "Your ideal exercise routine is:",
    position: 4,
    answers: [
      { text: "High-intensity training", value: "a" },
      { text: "Yoga or meditation", value: "b" },
      { text: "Group sports", value: "c" },
      { text: "Dance or expression", value: "d" }
    ]
  },
  {
    question: "Your preferred leisure activity:",
    position: 4,
    answers: [
      { text: "Outdoor sports", value: "a" },
      { text: "Reading or reflection", value: "b" },
      { text: "Social events", value: "c" },
      { text: "Artistic pursuits", value: "d" }
    ]
  },
  {
    question: "Your energy peaks during:",
    position: 4,
    answers: [
      { text: "Physical activity", value: "a" },
      { text: "Quiet moments", value: "b" },
      { text: "Social interaction", value: "c" },
      { text: "Creative flow", value: "d" }
    ]
  },
  {
    question: "Your ideal vacation involves:",
    position: 4,
    answers: [
      { text: "Adventure sports", value: "a" },
      { text: "Peaceful retreats", value: "b" },
      { text: "Festival attendance", value: "c" },
      { text: "Art exploration", value: "d" }
    ]
  },
  {
    question: "Your preferred way to recharge:",
    position: 4,
    answers: [
      { text: "Active exercise", value: "a" },
      { text: "Solitary relaxation", value: "b" },
      { text: "Friend gatherings", value: "c" },
      { text: "Creative hobbies", value: "d" }
    ]
  },
  {
    question: "Your ideal living environment:",
    position: 4,
    answers: [
      { text: "Near outdoor activities", value: "a" },
      { text: "Quiet and peaceful", value: "b" },
      { text: "Vibrant community", value: "c" },
      { text: "Artistic neighborhood", value: "d" }
    ]
  },
  {
    question: "Your preferred weekend morning:",
    position: 4,
    answers: [
      { text: "Early outdoor run", value: "a" },
      { text: "Peaceful meditation", value: "b" },
      { text: "Brunch with friends", value: "c" },
      { text: "Creative projects", value: "d" }
    ]
  },
  {
    question: "Your stress relief method:",
    position: 4,
    answers: [
      { text: "Physical exercise", value: "a" },
      { text: "Quiet reflection", value: "b" },
      { text: "Social support", value: "c" },
      { text: "Artistic expression", value: "d" }
    ]
  },
  {
    question: "Your ideal evening activity:",
    position: 4,
    answers: [
      { text: "Sports or exercise", value: "a" },
      { text: "Peaceful reading", value: "b" },
      { text: "Social dinner", value: "c" },
      { text: "Creative work", value: "d" }
    ]
  },
  {
    question: "Your preferred season:",
    position: 4,
    answers: [
      { text: "Summer for activities", value: "a" },
      { text: "Fall for reflection", value: "b" },
      { text: "Spring for socializing", value: "c" },
      { text: "Winter for creativity", value: "d" }
    ]
  },
  {
    question: "Your ideal workout is:",
    position: 4,
    answers: [
      { text: "High-energy sports", value: "a" },
      { text: "Gentle stretching", value: "b" },
      { text: "Group fitness", value: "c" },
      { text: "Expressive movement", value: "d" }
    ]
  },
  {
    question: "Your perfect day includes:",
    position: 4,
    answers: [
      { text: "Outdoor adventure", value: "a" },
      { text: "Peaceful solitude", value: "b" },
      { text: "Social activities", value: "c" },
      { text: "Creative expression", value: "d" }
    ]
  },

  // Position 5 (fifth character) - Values & Decision Making
  {
    question: "When making decisions, you typically:",
    position: 5,
    answers: [
      { text: "Follow your heart", value: "e" },
      { text: "Use logic and facts", value: "f" },
      { text: "Consider others' feelings", value: "0" },
      { text: "Rely on experience", value: "1" }
    ]
  },
  {
    question: "How do you choose your goals?",
    position: 5,
    answers: [
      { text: "Based on passion", value: "e" },
      { text: "Based on practicality", value: "f" },
      { text: "Based on impact", value: "0" },
      { text: "Based on past success", value: "1" }
    ]
  },
  {
    question: "When shopping, you usually:",
    position: 5,
    answers: [
      { text: "Buy what you love", value: "e" },
      { text: "Compare prices and features", value: "f" },
      { text: "Consider sustainability", value: "0" },
      { text: "Stick to trusted brands", value: "1" }
    ]
  },
  {
    question: "Your career choices are based on:",
    position: 5,
    answers: [
      { text: "Personal fulfillment", value: "e" },
      { text: "Logical progression", value: "f" },
      { text: "Social impact", value: "0" },
      { text: "Proven paths", value: "1" }
    ]
  },
  {
    question: "In relationships, you value:",
    position: 5,
    answers: [
      { text: "Emotional connection", value: "e" },
      { text: "Clear communication", value: "f" },
      { text: "Mutual growth", value: "0" },
      { text: "Stability", value: "1" }
    ]
  },
  {
    question: "Your financial decisions are:",
    position: 5,
    answers: [
      { text: "Based on feelings", value: "e" },
      { text: "Carefully calculated", value: "f" },
      { text: "Ethically considered", value: "0" },
      { text: "Traditional", value: "1" }
    ]
  },
  {
    question: "When choosing a home, you prioritize:",
    position: 5,
    answers: [
      { text: "Emotional appeal", value: "e" },
      { text: "Practical features", value: "f" },
      { text: "Community aspects", value: "0" },
      { text: "Proven value", value: "1" }
    ]
  },
  {
    question: "Your life goals are driven by:",
    position: 5,
    answers: [
      { text: "Personal meaning", value: "e" },
      { text: "Achievement metrics", value: "f" },
      { text: "Social contribution", value: "0" },
      { text: "Traditional success", value: "1" }
    ]
  },
  {
    question: "In conflicts, you tend to:",
    position: 5,
    answers: [
      { text: "Follow feelings", value: "e" },
      { text: "Analyze facts", value: "f" },
      { text: "Seek harmony", value: "0" },
      { text: "Use proven methods", value: "1" }
    ]
  },
  {
    question: "Your approach to change is:",
    position: 5,
    answers: [
      { text: "Emotionally driven", value: "e" },
      { text: "Logically planned", value: "f" },
      { text: "Community-focused", value: "0" },
      { text: "Experience-based", value: "1" }
    ]
  },
  {
    question: "When evaluating success, you look at:",
    position: 5,
    answers: [
      { text: "Personal satisfaction", value: "e" },
      { text: "Measurable results", value: "f" },
      { text: "Social impact", value: "0" },
      { text: "Traditional metrics", value: "1" }
    ]
  },
  {
    question: "Your investment strategy is:",
    position: 5,
    answers: [
      { text: "Passion-driven", value: "e" },
      { text: "Data-based", value: "f" },
      { text: "Impact-focused", value: "0" },
      { text: "Conservative", value: "1" }
    ]
  },
  {
    question: "In ethical decisions, you rely on:",
    position: 5,
    answers: [
      { text: "Moral intuition", value: "e" },
      { text: "Rational analysis", value: "f" },
      { text: "Social responsibility", value: "0" },
      { text: "Traditional values", value: "1" }
    ]
  },
  {
    question: "Your life priorities are:",
    position: 5,
    answers: [
      { text: "Personal growth", value: "e" },
      { text: "Achievement", value: "f" },
      { text: "Social contribution", value: "0" },
      { text: "Stability", value: "1" }
    ]
  },
  {
    question: "When choosing activities, you prefer:",
    position: 5,
    answers: [
      { text: "What feels right", value: "e" },
      { text: "What makes sense", value: "f" },
      { text: "What helps others", value: "0" },
      { text: "What's proven", value: "1" }
    ]
  },

  // Position 6 (sixth character) - Adaptability & Future Orientation
  {
    question: "Your response to change is usually:",
    position: 6,
    answers: [
      { text: "Embrace it enthusiastically", value: "a" },
      { text: "Resist it initially", value: "b" },
      { text: "Adapt gradually", value: "c" },
      { text: "Plan for it carefully", value: "d" }
    ]
  },
  {
    question: "How do you view the future?",
    position: 6,
    answers: [
      { text: "Full of opportunities", value: "a" },
      { text: "Uncertain but manageable", value: "b" },
      { text: "A natural progression", value: "c" },
      { text: "Something to prepare for", value: "d" }
    ]
  },
  {
    question: "When learning something new, you:",
    position: 6,
    answers: [
      { text: "Jump right in", value: "a" },
      { text: "Start with basics", value: "b" },
      { text: "Learn as needed", value: "c" },
      { text: "Follow a structured plan", value: "d" }
    ]
  },
  {
    question: "Your approach to technology is:",
    position: 6,
    answers: [
      { text: "Early adopter", value: "a" },
      { text: "Cautious user", value: "b" },
      { text: "Practical user", value: "c" },
      { text: "Strategic adopter", value: "d" }
    ]
  },
  {
    question: "In new situations, you typically:",
    position: 6,
    answers: [
      { text: "Dive in excitedly", value: "a" },
      { text: "Observe first", value: "b" },
      { text: "Adjust gradually", value: "c" },
      { text: "Plan your approach", value: "d" }
    ]
  },
  {
    question: "Your attitude toward risk is:",
    position: 6,
    answers: [
      { text: "Embrace it", value: "a" },
      { text: "Avoid it", value: "b" },
      { text: "Calculate it", value: "c" },
      { text: "Manage it", value: "d" }
    ]
  },
  {
    question: "When facing trends, you:",
    position: 6,
    answers: [
      { text: "Lead them", value: "a" },
      { text: "Question them", value: "b" },
      { text: "Follow selectively", value: "c" },
      { text: "Analyze them", value: "d" }
    ]
  },
  {
    question: "Your approach to innovation is:",
    position: 6,
    answers: [
      { text: "Revolutionary", value: "a" },
      { text: "Traditional", value: "b" },
      { text: "Practical", value: "c" },
      { text: "Systematic", value: "d" }
    ]
  },
  {
    question: "In uncertain times, you:",
    position: 6,
    answers: [
      { text: "See opportunities", value: "a" },
      { text: "Seek stability", value: "b" },
      { text: "Stay flexible", value: "c" },
      { text: "Make contingencies", value: "d" }
    ]
  },
  {
    question: "Your career development style:",
    position: 6,
    answers: [
      { text: "Bold moves", value: "a" },
      { text: "Steady progress", value: "b" },
      { text: "Flexible path", value: "c" },
      { text: "Planned growth", value: "d" }
    ]
  },
  {
    question: "When traditions change, you:",
    position: 6,
    answers: [
      { text: "Welcome new ways", value: "a" },
      { text: "Preserve the old", value: "b" },
      { text: "Blend both", value: "c" },
      { text: "Evaluate carefully", value: "d" }
    ]
  },
  {
    question: "Your approach to the unknown is:",
    position: 6,
    answers: [
      { text: "Exciting challenge", value: "a" },
      { text: "Potential threat", value: "b" },
      { text: "Learning opportunity", value: "c" },
      { text: "Problem to solve", value: "d" }
    ]
  },
  {
    question: "In evolving situations, you:",
    position: 6,
    answers: [
      { text: "Lead change", value: "a" },
      { text: "Maintain stability", value: "b" },
      { text: "Adapt naturally", value: "c" },
      { text: "Guide transition", value: "d" }
    ]
  },
  {
    question: "Your view of progress is:",
    position: 6,
    answers: [
      { text: "Rapid advancement", value: "a" },
      { text: "Careful evolution", value: "b" },
      { text: "Natural flow", value: "c" },
      { text: "Managed growth", value: "d" }
    ]
  },
  {
    question: "When facing new methods, you:",
    position: 6,
    answers: [
      { text: "Eagerly adopt", value: "a" },
      { text: "Stick to proven", value: "b" },
      { text: "Selectively integrate", value: "c" },
      { text: "Systematically evaluate", value: "d" }
    ]
  }
];