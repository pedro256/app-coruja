package com.pedro256.sga.services.app.user;

import com.pedro256.sga.dto.app.ResponseApi;
import com.pedro256.sga.dto.app.mappers.UserMapper;
import com.pedro256.sga.dto.app.user.UserDto;
import com.pedro256.sga.dto.app.user.UserRegistDto;
import com.pedro256.sga.dto.keycloack.KeycloakUser;
import com.pedro256.sga.models.UserEntity;
import com.pedro256.sga.repositories.base.BaseRepository;
import com.pedro256.sga.repositories.base.BaseRepositoryImpl;
import com.pedro256.sga.services.keycloack.KeycloackService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class UserServiceImpl extends BaseRepositoryImpl<UserEntity, String>
        implements UserService{


    public UserServiceImpl(BaseRepository<UserEntity, String> abstractBaseRepository) {
        super(abstractBaseRepository);
    }

    @Autowired
    private KeycloackService keycloackService;


    public ResponseApi<UserDto> Regist(UserRegistDto dto){
        ResponseApi<UserDto> r = new ResponseApi<>();
        r.setStt(1);
        UserEntity user = UserMapper.registerToEntity(dto);

        KeycloakUser kclUser = new KeycloakUser();
        kclUser.setUsername(user.getFirstName()+" "+user.getLastName());
        kclUser.setLastName(user.getLastName());
        kclUser.setFirstName(user.getFirstName());
        kclUser.setPassword(dto.getPsswd());
        kclUser.setEmail(user.getEmail());

        var kclid = keycloackService.InitUserKeycloack(kclUser);
        user.setKeycloackId(kclid);
        user = this.save(user);

        r.setData(UserMapper.entityToDto(user));

        r.setSucess(true);
        return  r;
    }

    public ResponseApi<List<UserDto>> ListAll(){
        ResponseApi<List<UserDto>> r = new ResponseApi<>();
        r.setStt(1);

        var list = this.findAll();
        var listDto = new ArrayList<UserDto>();
        for (UserEntity item:list ) {
            UserDto dto = new UserDto();
            dto.setId(item.getId());
            dto.setCPF("");
            dto.setPhone(item.getPhone());
            dto.setEmail(item.getEmail());
            dto.setName(item.getFirstName());
            dto.setSecondName(item.getLastName());
            dto.setKeycloakId(item.getKeycloackId());
            listDto.add(dto);
        }

        r.setData(listDto);

        r.setSucess(true);
        return  r;
    }
}