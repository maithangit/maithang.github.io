package quiz.util;

import quiz.model.Age;

public class AgeValidator {
    public static String validateAge(Age age) {
        try {
            int convertedAge = Integer.valueOf(age.getValue());
            if (convertedAge < 4 || convertedAge > 100) {
                return "Age must be between 4 and 100.";
            }
        } catch (NumberFormatException e) {
            return "Age is required and must be an integer.";
        }
        return "";
    }
}
