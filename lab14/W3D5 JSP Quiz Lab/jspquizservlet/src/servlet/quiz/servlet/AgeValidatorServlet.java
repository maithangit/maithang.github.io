package quiz.servlet;

import quiz.model.Age;
import quiz.util.AgeValidator;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/validateAge")
public class AgeValidatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String validateMsg = AgeValidator.validateAge(new Age(request.getParameter("age")));
        if (validateMsg != null) {
            request.setAttribute("errorMsg", validateMsg);
            RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
            dispatcher.forward(request, response);
        } else {
            request.getSession().setAttribute("age", request.getParameter("age"));
            response.sendRedirect("quiz");
        }
    }
}
