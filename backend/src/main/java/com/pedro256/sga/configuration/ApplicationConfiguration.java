package com.pedro256.sga.configuration;

import com.pedro256.sga.propeties.KeycloakInitializerProperties;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfiguration {

    @Autowired
    KeycloakInitializerProperties keycloakInitializerConfigurationProperties;

    @Bean
    protected Keycloak keycloak() {
        System.out.println("KEYCLOACK INIT [ "
                +keycloakInitializerConfigurationProperties.getClientId()+" - "
                +keycloakInitializerConfigurationProperties.getApplicationRealm()+" - "
                +keycloakInitializerConfigurationProperties.getClientSecret()+" - "
                +keycloakInitializerConfigurationProperties.getUsername()+" - "
                +keycloakInitializerConfigurationProperties.getPassword()+" - "
                +keycloakInitializerConfigurationProperties.getUrl()+" ]"
        );
        return KeycloakBuilder.builder()
                .grantType(OAuth2Constants.CLIENT_CREDENTIALS)
                .realm(keycloakInitializerConfigurationProperties.getApplicationRealm())
                .clientId(keycloakInitializerConfigurationProperties.getClientId())
                .clientSecret(keycloakInitializerConfigurationProperties.getClientSecret())
                .username(keycloakInitializerConfigurationProperties.getUsername())
                .password(keycloakInitializerConfigurationProperties.getPassword())
                .serverUrl(keycloakInitializerConfigurationProperties.getUrl())
                .build();
    }
}
