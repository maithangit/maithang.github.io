package quiz.model;

import org.junit.Test;

import static org.junit.Assert.*;


public class QuizTest {
    @Test
    public void testIsCorrectFunction_Test1() throws Exception {
        Quiz quiz = new Quiz();
        String question = quiz.getCurrentQuestion();//0;
        String answer = "9";
        boolean actualValue = quiz.isCorrect(answer);
        assertEquals(true, actualValue);
    }

    @Test
    public void testIsCorrectFunction_Test2() throws Exception {
        Quiz quiz = new Quiz();
        String question = quiz.getCurrentQuestion();//0;
        quiz.getNextQuestion();//1
        String answer = "3";
        boolean actualValue = quiz.isCorrect(answer);
        assertEquals(false, actualValue);

    }

}
