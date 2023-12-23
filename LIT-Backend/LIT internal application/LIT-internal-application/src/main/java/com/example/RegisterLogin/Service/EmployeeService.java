package com.example.RegisterLogin.Service;

import com.example.RegisterLogin.Dto.EmployeeDTO1;
import com.example.RegisterLogin.payloadresponse.LoginMessage;

public interface EmployeeService {
	
    String addEmployee(EmployeeDTO1 employeeDTO);
    LoginMessage loginEmployee(LoginDTO loginDTO);
	LoginMessage loginEmployee1(LoginDTO loginDTO);
    
}