import { useEffect, useState, useCallback } from 'react';

import { Button } from '@components/Button';
import { Title } from '@components/Title';

import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { questionsData } from '../../data';

import {
  Container,
  WrapperAnswers,
  QuestionText,
  WrapperAnswer,
  Answer,
  WrapperEndGame,
  EndGameText,
} from './styles';

interface Answer {
  questionNumber: number;
  question: string;
  answer: string;
  correctAnswer: string;
}

interface Question {
  question: string;
  correctAnswer: string;
  answers: string[];
}

export function Questions() {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [answerQuestion, setAnswerQuestion] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const arrayIndex: number[] = [];

    let i = 0;

    while (i < 10) {
      const index = Math.floor(Math.random() * questionsData.length);

      if (!arrayIndex.includes(index)) {
        arrayIndex.push(index);
        i += 1;
      }
    }

    const questionsDataFormatted = questionsData.map((question) => {
      return {
        question: question.question,
        correctAnswer: question.correctAnswer,
        answers: [...question.incorrectAnswers, question.correctAnswer].sort(
          () => Math.random() - 0.5,
        ),
      };
    });

    setQuestions(
      arrayIndex.map((index) => {
        return { ...questionsDataFormatted[index] };
      }),
    );
  }, []);

  const handleAnswerQuestion = useCallback(() => {
    if (answerQuestion !== '') {
      const answer = {
        questionNumber: index + 1,
        question: questions[index].question,
        answer: answerQuestion,
        correctAnswer: questions[index].correctAnswer,
      };

      setAnswers([...answers, answer]);

      if (index + 1 < questions.length) {
        setAnswerQuestion('');
      }
      setIndex(index + 1);
    } else {
      Alert.alert('Atenção!', 'Por favor, selecione uma resposta!');
    }
  }, [answerQuestion, answers, index, questions]);

  function handleFinishGame() {
    let numberAnswersCorrect = 0;

    answers.forEach((answer) => {
      if (answer.answer === answer.correctAnswer) {
        numberAnswersCorrect += 1;
      }
    });

    navigation.navigate('result', { numberAnswersCorrect });
  }

  return (
    <Container>
      {index < 10 ? (
        <>
          <Title>Questão {index + 1}</Title>

          {questions.length > 0 && (
            <WrapperAnswers>
              <QuestionText>{questions[index].question}</QuestionText>

              {questions[index].answers.map((answer) => (
                <WrapperAnswer
                  key={answer}
                  isActive={answerQuestion === answer}
                  onPress={() => setAnswerQuestion(answer)}
                >
                  <Answer>{answer}</Answer>
                </WrapperAnswer>
              ))}
            </WrapperAnswers>
          )}

          <Button onPress={handleAnswerQuestion}>Responder</Button>
        </>
      ) : (
        <>
          <Title>Fim de Jogo</Title>
          <WrapperEndGame>
            <EndGameText>
              Veja sua pontuação e descubra se você realmente me conhece!
            </EndGameText>
          </WrapperEndGame>
          <Button onPress={handleFinishGame}>Ver pontuação</Button>
        </>
      )}
    </Container>
  );
}
