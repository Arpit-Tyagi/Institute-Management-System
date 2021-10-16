package com.app.repository;

import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.app.pojos.Faculty;
import com.app.pojos.Modules;

@SpringBootTest
class FacultyRepositoryTests {
	
	@Autowired
	private FacultyRepository facRepo;
	
	@Autowired
	private ModulesRepository moduleRepo;

	@Test
	void testAddFaculty() {  
		
		List<Faculty> fac = Arrays.asList(
				new Faculty("Mr Ishaan Arora", "ishaan@gmail.com", "def", 012341567l, "Faridabad", 60000),
				new Faculty("Mrs Divya Gupta", "divya@gmail.com", "ghi", 012345670l, "Gurgaon", 70000),
				new Faculty("Mrs Anjali Pandey", "anjali@gmail.com", "jkl", 012345671l, "Bilaspur", 80000),
				new Faculty("Mr Vatsal Sharma", "vatsal@gmail.com", "mno", 012345672l, "Agra", 80000), 
				new Faculty("Mrs Somya Malik", "somya@gmail.com", "pqr", 012345673l, "Bhopal", 70000),
				new Faculty("Mrs Simran Chauhan", "simran@gmail.com", "stu", 012345674l, "Delhi", 60000),
				new Faculty("Mr Harsh Chaudhary", "harsh@gmail.com", "vwx", 012345675l, "Pune", 50000),
				new Faculty("Mrs Vaishali Gautam", "vaishali@gmail.com", "yza", 012345676l, "Mumbai", 40000),  
				new Faculty("Mr Suraj Raj Kumar", "suraj@gmail.com", "bcd", 012345677l, "Nagpur", 30000),
				new Faculty("Mr Tushar Singhal", "tushar@gmail.com", "efg", 012345167l, "Nashik", 20000),
				new Faculty("Mrs Kavita Patpatia", "kavita@gmail.com", "hij", 012345267l, "Muzaffarnagar", 10000),
				new Faculty("Mrs Ujala Jain", "ujala@gmail.com", "klm", 012345607l, "Jaipur", 90000),   
				new Faculty("Mr Ashutosh Gupta", "sshutosh@gmail.com", "nop", 012345617l, "Puri", 80000),
				new Faculty("Mrs Anubhuti Roy", "anubhuti@gmail.com", "qrs", 012345627l, "Kota", 70000),
				new Faculty("Mrs Sakshi Sharma", "sakshi@gmail.com", "tuv", 012345637l, "Amritsar", 60000)
	/*			new Faculty("Mr Shivam Bansal", "shivam@gmail.com", "wxy", 012345647l, "Mohali", 50000),   
				new Faculty("Mrs Shweta ", "shweta@gmail.com", "zab", 012345657l, "Ajmer", 40000),
				new Faculty("Mrs Garima Upadhaya", "garima@gmail.com", "cde", 012345667l, "Meerut", 30000),
				new Faculty("Mr Ajay Garg", "ajay@gmail.com", "fgh", 0123512l, "Indore", 20000),
				new Faculty("Moh Aadil Momin", "aadil@gmail.com", "ijk", 01275l, "Bareilly", 10000)
	*/		);
		
		facRepo.saveAll(fac);		
	}    
	
	@Test
	public void linkFacultyModules() {
	
		Modules m1 = moduleRepo.findById(1).get();
		Modules m2 = moduleRepo.findById(2).get();
		Modules m3 = moduleRepo.findById(3).get();
		Modules m4 = moduleRepo.findById(4).get();
		Modules m5 = moduleRepo.findById(5).get();
		Modules m6 = moduleRepo.findById(6).get();
		Modules m7 = moduleRepo.findById(7).get();
		Modules m8 = moduleRepo.findById(8).get();
		Modules m9 = moduleRepo.findById(9).get();
		Modules m10 = moduleRepo.findById(10).get();
		Modules m11 = moduleRepo.findById(11).get();
		Modules m12 = moduleRepo.findById(12).get();
		Modules m13 = moduleRepo.findById(13).get();
		Modules m14 = moduleRepo.findById(14).get();
		Modules m15 = moduleRepo.findById(15).get();
		
		Faculty f1 = facRepo.findById(1).get();
		Faculty f2 = facRepo.findById(2).get();
		Faculty f3 = facRepo.findById(3).get();
		Faculty f4 = facRepo.findById(4).get();
		Faculty f5 = facRepo.findById(5).get();
		Faculty f6 = facRepo.findById(6).get();
		Faculty f7 = facRepo.findById(7).get();
		Faculty f8 = facRepo.findById(8).get();
		Faculty f9 = facRepo.findById(9).get();
		Faculty f10 = facRepo.findById(10).get();
		Faculty f11 = facRepo.findById(11).get();
		Faculty f12 = facRepo.findById(12).get();
		Faculty f13 = facRepo.findById(13).get();
		Faculty f14 = facRepo.findById(14).get();
		Faculty f15 = facRepo.findById(15).get();
		
		f1.setFacModule(m1);
		f2.setFacModule(m2);
		f3.setFacModule(m3);
		f4.setFacModule(m4);
		f5.setFacModule(m5);
		f6.setFacModule(m6);
		f7.setFacModule(m7);
		f8.setFacModule(m8);
		f9.setFacModule(m9);
		f10.setFacModule(m10);
		f11.setFacModule(m11);
		f12.setFacModule(m12);
		f13.setFacModule(m13);
		f14.setFacModule(m14);
		f15.setFacModule(m15);
		
		facRepo.save(f1);
		facRepo.save(f2);
		facRepo.save(f3);
		facRepo.save(f4);
		facRepo.save(f5);
		facRepo.save(f6);
		facRepo.save(f7);
		facRepo.save(f8);
		facRepo.save(f9);
		facRepo.save(f10);
		facRepo.save(f11);
		facRepo.save(f12);
		facRepo.save(f13);
		facRepo.save(f14);
		facRepo.save(f15);
	
	}

}
