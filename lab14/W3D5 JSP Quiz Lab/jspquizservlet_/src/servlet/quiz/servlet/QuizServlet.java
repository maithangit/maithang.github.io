package quiz.servlet;

import quiz.model.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();

        if (request.getParameter("reset") != null && !request.getParameter("reset").isEmpty()) {
            session.removeAttribute("quiz");
        }

        Object sessionAttribute = session.getAttribute("quiz");

        response.setContentType("text/html");
        Quiz quiz;
        if (sessionAttribute == null) {
            quiz = new Quiz();
        } else {
            String answer = request.getParameter("answer");
            quiz = (Quiz) sessionAttribute;
            quiz.checkAnswer(answer);
        }
        session.setAttribute("quiz", quiz);

        if (quiz.hasNextQuestion()) {
            RequestDispatcher view = request.getRequestDispatcher("quiz.jsp");
            view.forward(request, response);
        } else {
            RequestDispatcher view = request.getRequestDispatcher("result.jsp");
            view.forward(request, response);
        }

    }

}
