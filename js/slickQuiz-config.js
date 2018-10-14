// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>See how much you learned about acupuncture.</p>",
        "results": "<p>Thanks for learning about acupuncture!</p>",
        "level1":  "Acupuncture Professor",
        "level2":  "Star Student",
        "level3":  "Daoguang Emperor",
        "level4":  "Ice Man",
        "level5":  "Did you read anything?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Where did acupuncture originate?",
            "a": [
                {"option": "India",      "correct": false},
                {"option": "The USA",     "correct": false},
                {"option": "China",      "correct": true},
                {"option": "Japan",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Acupuncture originated in China and is part of the practice of Traditional Chinese Medicine.</p>",
            "incorrect": "<p><span>Incorrect.</span> Acupuncture originated in China and is part of the practice of Traditional Chinese Medicine.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which organ in the body plays a large role in detoxification?",
            "a": [
                {"option": "the colon",               "correct": false},
                {"option": "the liver",   "correct": true},
                {"option": "the stomach",               "correct": false},
                {"option": "the appendix", "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Your're learning a lot!</p>",
            "incorrect": "<p><span>Nope.</span>It is the liver.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "In the practice of acupuncture, what is the vital life source contributing to good overall health?",
            "a": [
                {"option": "the Key",           "correct": false},
                {"option": "the Qi",                  "correct": true},
                {"option": "the Cheese",  "correct": false},
                {"option": "the Ming",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You've got flow.</p>",
            "incorrect": "<p><span>Not Quite.</span> It is the Qi that flows throughout your body.</p>" // no comma here
        },
        { // Question 4
            "q": "Which president had a hand inpopularizing acupuncture in the United States?",
            "a": [
                {"option": "President Truman",    "correct": false},
                {"option": "President Washington",     "correct": false},
                {"option": "President Obama",      "correct": false},
                {"option": "President Nixon",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's the one!</span> A member of the US press corps visited China in preparation for a diplomatic visit of President Nixon, received acupuncture, and spoke about it in the New York Times.</p>",
            "incorrect": "<p><span>Incorrect.</span> It was President Nixon.</p>" // no comma here
        },
        { // Question 5
            "q": "Was acupuncture ever outlawed in China?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> It was outlawed in 1929, but reintroduced by the communist regime in 1949.</p>",
            "incorrect": "<p><span>Incorrect.</span> It was outlawed in 1929, but reintroduced by the communist regime in 1949.</p>" // no comma here
        } // no comma here
    ]
};
