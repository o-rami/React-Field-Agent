package learn.field_agent.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<?> handleException(HttpMessageNotReadableException ex) {
        return new ResponseEntity<>( new ErrorResponse("Badly formed JSON."), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<?> handleException(HttpMediaTypeNotSupportedException ex) {
        return new ResponseEntity<>( new ErrorResponse("Format is in an unsupported format."),
                HttpStatus.UNSUPPORTED_MEDIA_TYPE);
    }

    @ExceptionHandler
    public ResponseEntity<?> handleException(Exception ex) {
        return reportException("Something went wrong ):");
    }

    private ResponseEntity<?> reportException(String message) {
        List<String> messages = List.of(message);
        return new ResponseEntity<>(messages, HttpStatus.BAD_REQUEST);
    }
}
