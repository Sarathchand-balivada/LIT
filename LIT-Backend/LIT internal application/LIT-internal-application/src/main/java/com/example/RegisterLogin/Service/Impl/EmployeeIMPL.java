package com.example.RegisterLogin.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.RegisterLogin.Dto.EmployeeDTO1;
import com.example.RegisterLogin.Entity.Employee;
import com.example.RegisterLogin.Repo.EmployeeRepo;
import com.example.RegisterLogin.Service.EmployeeService;
import com.example.RegisterLogin.Service.LoginDTO;
import com.example.RegisterLogin.payloadresponse.LoginMessage;

import java.util.Optional;
@Service

public class EmployeeIMPL implements EmployeeService {
	
	@Autowired
    private EmployeeRepo employeeRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public String addEmployee(EmployeeDTO1 employeeDTO) {
        Employee employee = new Employee(
                employeeDTO.getEmployeeid(),
                employeeDTO.getEmployeename(),
                employeeDTO.getEmail(),
               this.passwordEncoder.encode(employeeDTO.getPassword())
        );
        employeeRepo.save(employee);
        return employee.getEmployeename();
    }
    EmployeeDTO1 employeeDTO;
    @Override
    public LoginMessage  loginEmployee1(LoginDTO loginDTO) {
        String msg = "";
        Employee employee1 = employeeRepo.findByEmail(loginDTO.getEmail());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Employee> employee = employeeRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginMessage();
                } else {
                    return new LoginMessage();
                }
            } else {
                return new LoginMessage();
            }
        }else {
            return new LoginMessage();
        }
    }
	@Override
	public LoginMessage loginEmployee(LoginDTO loginDTO) {
		// TODO Auto-generated method stub
		return null;
	}

	

}
