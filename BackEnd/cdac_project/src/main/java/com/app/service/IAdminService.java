package com.app.service;

import com.app.pojos.Admin;

public interface IAdminService {

	public Admin adminLogin(String email, String password);
}
