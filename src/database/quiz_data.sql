CREATE TABLE quiz_questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    question TEXT NOT NULL,
    correct_answer TEXT NOT NULL
);

-- Example data insertion
INSERT INTO quiz_questions (title, question, correct_answer) VALUES
('Sample Title 1', 'What is the capital of France?', 'Paris'),
('Sample Title 2', 'What is 2 + 2?', '4');
