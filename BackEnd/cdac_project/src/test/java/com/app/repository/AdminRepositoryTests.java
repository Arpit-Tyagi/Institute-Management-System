package com.app.repository;

import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.app.pojos.Admin;

@SpringBootTest
class AdminRepositoryTests {
	
	@Autowired
	private AdminRepository adminRepo;

	@Test
	void testAddAdmin() {
		
		List<Admin> admin = Arrays.asList(new Admin("Mr Arpit Tyagi", "arpit@gmail.com", "1234")
);
		adminRepo.saveAll(admin);		
	}    
	
}
