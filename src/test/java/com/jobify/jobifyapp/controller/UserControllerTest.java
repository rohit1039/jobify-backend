package com.jobify.jobifyapp.controller;

import com.jobify.controller.UserController;
import com.jobify.payload.request.LoginDTO;
import com.jobify.payload.request.UserDTO;
import com.jobify.payload.response.JwtAuthResponse;
import com.jobify.security.CustomUserDetailsService;
import com.jobify.security.TokenHelper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class UserControllerTest {

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private Authentication authentication;

    @Mock
    private CustomUserDetailsService customUserDetailsService;

    @Mock
    private TokenHelper tokenHelper;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp() {

        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName("User Login Success - 200")
    public void testLoginSuccess_200() {

        when(this.authenticationManager
                     .authenticate(any()))
                .thenReturn(authentication);

        when(this.modelMapper.map(any(), any())).thenReturn(userDTO());

        JwtAuthResponse jwtAuthResponse = this.userController.userLogin(loginDTO_Success())
                                                             .getBody();

        int actualStatusCodeValue = this.userController.userLogin(loginDTO_Success())
                                                       .getStatusCodeValue();

        assertNotNull(jwtAuthResponse);
        assertEquals(200, actualStatusCodeValue);
        assertEquals(jwtAuthResponse().getFullName(), jwtAuthResponse.getFullName());
    }

    private UserDTO userDTO() {

        return UserDTO.builder()
                      .userID(1)
                      .firstName("Test")
                      .lastName("User")
                      .emailID("testuser@yahoo.com")
                      .password("Test@7978")
                      .build();
    }

    private LoginDTO loginDTO_Success() {

        return LoginDTO.builder()
                       .emailID(userDTO().getEmailID())
                       .password(userDTO().getPassword())
                       .build();
    }

    private JwtAuthResponse jwtAuthResponse() {

        return JwtAuthResponse.builder()
                              .token("token")
                              .emailID(userDTO().getEmailID())
                              .location(userDTO().getLocation())
                              .age(userDTO().getAge())
                              .userId(userDTO().getUserID())
                              .firstName(userDTO().getFirstName())
                              .lastName(userDTO().getLastName())
                              .fullName(userDTO().getFirstName() + " " + userDTO().getLastName())
                              .build();
    }

}
