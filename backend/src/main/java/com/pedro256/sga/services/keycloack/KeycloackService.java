package com.pedro256.sga.services.keycloack;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pedro256.sga.dto.keycloack.KeycloakUser;
import com.pedro256.sga.propeties.KeycloakInitializerProperties;
import lombok.extern.slf4j.Slf4j;
import org.keycloak.admin.client.CreatedResponseUtil;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.RolesResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.idm.*;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class KeycloackService implements InitializingBean {

    private final Keycloak keycloak;

    private final KeycloakInitializerProperties keycloakInitializerConfigurationProperties;

    private final ObjectMapper mapper;

    private static String REALM_ID;

    private static final String INIT_KEYCLOAK_PATH = "initializer/init-keycloak.json";

    public KeycloackService(Keycloak keycloak,
                               KeycloakInitializerProperties keycloakInitializerConfigurationProperties,
                               ObjectMapper mapper) {
        this.keycloak = keycloak;
        this.keycloakInitializerConfigurationProperties = keycloakInitializerConfigurationProperties;
        this.mapper = mapper;
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        REALM_ID = keycloakInitializerConfigurationProperties.getApplicationRealm();

        if (keycloakInitializerConfigurationProperties.initializeOnStartup()) {
            init(false);
        }
    }

    public void init(boolean overwrite) {

        log.info("Initializer start");

        List<RealmRepresentation> realms = keycloak.realms().findAll();
        boolean isAlreadyInitialized =
                realms.stream().anyMatch(realm -> realm.getId().equals(REALM_ID));

        if (isAlreadyInitialized && overwrite) {
            reset();
        }

        if (!isAlreadyInitialized || overwrite) {

            initKeycloak();

            log.info("Keycloak initialized successfully");
        } else {
            log.warn("Keycloak initialization cancelled: realm already exist");
        }
    }

    public String InitUserKeycloack(KeycloakUser user) {


            UserRepresentation userRepresentation = new UserRepresentation();
            userRepresentation.setEmail(user.getEmail());
            userRepresentation.setUsername(user.getUsername());
            userRepresentation.setFirstName(user.getFirstName());
            userRepresentation.setLastName(user.getLastName());
            userRepresentation.setEnabled(true);
            userRepresentation.setEmailVerified(true);
            CredentialRepresentation userCredentialRepresentation = new CredentialRepresentation();
            userCredentialRepresentation.setType(CredentialRepresentation.PASSWORD);
            userCredentialRepresentation.setTemporary(false);
            userCredentialRepresentation.setValue(user.getPassword());
            userRepresentation.setCredentials(Arrays.asList(userCredentialRepresentation));
            Response response = keycloak.realm(REALM_ID).users().create(userRepresentation);

            if (response.getStatus() != 201) {
                throw new RuntimeException("Failed to create user: HTTP error code: " + response.getStatus());
            }
            String userId = CreatedResponseUtil.getCreatedId(response);

            return userId;


    }



    private void initKeycloak() {

        initKeycloakRealm();
        //initKeycloakUsers();
    }

    private void initKeycloakRealm() {
        RealmRepresentation realmRepresentation = new RealmRepresentation();
        realmRepresentation.setRealm(REALM_ID);
        realmRepresentation.setId(REALM_ID);

        Resource resource = new ClassPathResource(INIT_KEYCLOAK_PATH);
        try {
            RealmRepresentation realmRepresentationToImport =
                    mapper.readValue(resource.getFile(), RealmRepresentation.class);
            keycloak.realms().create(realmRepresentationToImport);
        } catch (IOException e) {
            String errorMessage =
                    String.format("Failed to import keycloak realm representation : %s", e.getMessage());
            log.error(errorMessage);
            throw new RuntimeException(errorMessage, e);
        }
    }

    public void reset() {
        try {
            keycloak.realm(REALM_ID).remove();
        } catch (NotFoundException e) {
            log.error("Failed to reset Keycloak", e);
        }
    }
}