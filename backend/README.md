
## config keycloack w/ Spring Boot



### config keycloack:



* add new client in your realm
* Configure Access Type
  * access-type: Confidential 
  * service accounts enabled: ON

* Obtain Client Credentials
  * generate a secret

* Assign Roles to Service Account
  * Tab Service Account Roles > realm-management

#### references:
https://www.baeldung.com/spring-boot-keycloak
https://www.appsdeveloperblog.com/keycloak-rest-api-create-a-new-user/
https://codersee.com/how-to-set-up-keycloak-admin-client-with-spring-boot-and-kotlin/