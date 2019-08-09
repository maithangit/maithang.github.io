package quiz.util;
import org.junit.Test;
import quiz.model.Age;

import static org.junit.Assert.*;

public class AgeValidatorTest {
    @Test
    public void testNoAgeInput() throws Exception {
        String expectedValue="Age is required and must be an integer.";
        String actualValue=new AgeValidator().validateAge(new Age(""));
        assertEquals(expectedValue, actualValue);
    }

    @Test
    public void testAgeLowerThanFour() throws Exception {
        String expectedValue="Age must be between 4 and 100.";
        String actualValue=new AgeValidator().validateAge(new Age("3"));
        assertEquals(expectedValue, actualValue);
    }

    @Test
    public void testAgeLargerThan100() throws Exception {
        String expectedValue="Age must be between 4 and 100.";
        String actualValue=new AgeValidator().validateAge(new Age("101"));
        assertEquals(expectedValue, actualValue);
    }

    @Test
    public void testNormalAge() throws Exception {
        String actualValue=new AgeValidator().validateAge(new Age("30"));
        assertEquals("", actualValue);
    }
}
