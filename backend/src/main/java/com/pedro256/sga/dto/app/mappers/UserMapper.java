package com.pedro256.sga.dto.app.mappers;

import com.pedro256.sga.dto.app.user.UserDto;
import com.pedro256.sga.dto.app.user.UserRegistDto;
import com.pedro256.sga.models.UserEntity;

public class UserMapper {

    public static UserEntity registerToEntity(UserRegistDto dto){
        var d = new UserEntity();

        d.setActive(true);
        d.setFirstName(dto.getFirstName());
        d.setLastName(dto.getLastName());
        d.setEmail(dto.getEmail());
        d.setPhone(dto.getPhone());
        d.setCpf(dto.getCPF());

        return d;
    }
    public static UserDto entityToDto(UserEntity ett){
        UserDto userDto = new UserDto();
        userDto.setId(ett.getId());
        userDto.setKeycloakId(ett.getKeycloackId());
        userDto.setCPF(ett.getCpf());
        userDto.setPhone(ett.getPhone());
        userDto.setSecondName(ett.getLastName());
        userDto.setName(ett.getFirstName());
        userDto.setEmail(ett.getEmail());
        return  userDto;
    }
}
