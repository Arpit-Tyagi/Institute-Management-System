package com.app.exc_handler;

import java.time.LocalDateTime;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_exceptions.UserHandlingException;
import com.app.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<ErrorResponse> handleDuplicateIdException(DataIntegrityViolationException e){
		
		System.out.println("error occured in saving student details" + e);
		ErrorResponse resp = new  ErrorResponse( "Email Id is already in use!!!! Please use different email id" , LocalDateTime.now() );
		return new ResponseEntity <>(resp, HttpStatus.CONFLICT);
		
	}
	
	@ExceptionHandler(UserHandlingException.class)
	public ResponseEntity<ErrorResponse> handleUserHandlingException(UserHandlingException e){
		
		System.out.println(e.getMessage() );
		ErrorResponse resp = new  ErrorResponse(e.getMessage(), LocalDateTime.now() );
		return new ResponseEntity <>(resp, HttpStatus.NOT_FOUND);
		
	}
	
	

}
