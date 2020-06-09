package com.example;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.security.Principal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class LoginuserController {

    private LoginuserRepository repository;
    // private LoanOptionRepository loanRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public LoginuserController(LoginuserRepository repository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.repository = repository;
        // this.loanRepo = loanRepo;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @RequestMapping(method = RequestMethod.PATCH)
    public ResponseEntity<Loginuser> editUser(@RequestBody Loginuser loginuser, Principal principal) {
        Loginuser foundLoginuser = repository.findByUserName(principal.getName());
        if (null == foundLoginuser)
            return new ResponseEntity<Loginuser>(HttpStatus.NOT_FOUND);
        else {
            if (!foundLoginuser.getUserName().equals(principal.getName())) {
                return new ResponseEntity<Loginuser>(HttpStatus.FORBIDDEN);
            }
            foundLoginuser.updateParameters(loginuser);
            repository.save(foundLoginuser);
            return get(principal);
        }
    }

    // @RequestMapping(value = "/selectedloan", method = RequestMethod.GET)
    // public ResponseEntity<LoanOption> getSelectedLoanOption(Principal principal)
    // {
    // Loginuser user = repository.findByUserName(principal.getName());
    // if (null == user)
    // return new ResponseEntity<LoanOption>(HttpStatus.NOT_FOUND);

    // String userName = user.getUserName();
    // if (!userName.equals(principal.getName())) {
    // return new ResponseEntity<LoanOption>(HttpStatus.FORBIDDEN);
    // }

    // LoanOption selectedLoan = loanRepo.findOne(user.getSelectedLoan());
    // return new ResponseEntity<LoanOption>(selectedLoan, HttpStatus.OK);
    // }

    // @RequestMapping(value = "/loans", method = RequestMethod.GET)
    // public ResponseEntity<List<LoanOption>> getAllLoanOptions(Principal
    // principal) {
    // Loginuser user = repository.findByUserName(principal.getName());
    // if (null == user)
    // return new ResponseEntity<List<LoanOption>>(HttpStatus.NOT_FOUND);

    // String userName = user.getUserName();
    // if (!userName.equals(principal.getName())) {
    // return new ResponseEntity<List<LoanOption>>(HttpStatus.FORBIDDEN);
    // }

    // List<LoanOption> allLoans = loanRepo.findByUserId(user.getId());
    // return new ResponseEntity<List<LoanOption>>(allLoans, HttpStatus.OK);
    // }

    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(@RequestBody Loginuser user) {
        if (repository.findByUserName(user.getUserName()) != null) {
            System.out.println("User already exists");
            return new ResponseEntity<>("Account already exists for that email.", HttpStatus.CONFLICT);
        }
        try {
            // user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            user.setPassword(NoOpPasswordEncoder.getInstance().encode(user.getPassword())); // switch to bcrypt
            repository.save(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // make it (e, HttpStatus.BAD_REQUEST)
        }

    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Loginuser> get(Principal principal) {
        Loginuser user = repository.findByUserName(principal.getName());
        if (null == user)
            return new ResponseEntity<Loginuser>(HttpStatus.NOT_FOUND);

        String userName = user.getUserName();
        if (!userName.equals(principal.getName())) {
            return new ResponseEntity<Loginuser>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Loginuser>(user, HttpStatus.OK);

    }
}