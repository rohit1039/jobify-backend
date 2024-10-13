package com.jobify.payload.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserDTO {

    @JsonIgnore
    private Integer userID;
    @NotBlank
    @Schema(description = "first name of the user", required = true, example = "Rohit")
    private String firstName;
    @NotBlank
    @Schema(description = "last name of the user", required = true, example = "Parida")
    private String lastName;
    @NotBlank
    @Email(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")
    @Schema(description = "username of the user, should be in lowercase", required = true,
            example = "rohitparida0599@gmail.com")
    private String emailID;
    @NotBlank
    @Schema(description = "location of the user", required = true, example = "Bangalore")
    private String location;
    @NotNull
    @PositiveOrZero
    @Schema(description = "age of the user", required = true, example = "25")
    private Integer age;
}
