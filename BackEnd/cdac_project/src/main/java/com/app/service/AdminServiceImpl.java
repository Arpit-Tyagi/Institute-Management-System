package com.app.service;



import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.pojos.Admin;
import com.app.repository.AdminRepository;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
	
	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public Admin adminLogin(String email, String password) {
		
		return adminRepo.findByEmailAndPassword(email, password).orElseThrow(() -> new UserHandlingException("Login Failed!! Please Enter valid credentials !!!!"));
	}

}
