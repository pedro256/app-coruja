CREATE TABLE users (
    user_id uuid primary KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR,
    active BOOL default true,
    keycloack_id VARCHAR
);

create table systems (
	sys_id uuid primary key default gen_random_uuid(),
	"name" varchar(100) not null,
	description varchar(250) default null,
	cod_label varchar(100) default null,
	keycloack_client_id varchar default null,
	system_url varchar default null
	
);

create table system_modules (
	mod_id uuid primary key default gen_random_uuid(),
	"name" varchar(100) not null,
	description varchar(250) default null,
	cod_label varchar(100) default null,
	sys_id uuid not null,
	CONSTRAINT fk_sys_mod
      FOREIGN KEY(sys_id) 
        REFERENCES systems(sys_id)
);

create table module_functionalities (
	func_id uuid primary key default gen_random_uuid(),
	"name" varchar(100) not null,
	description varchar(250) default null,
	cod_label varchar(100) default null,
	mod_id uuid,
	CONSTRAINT fk_func_mod
      FOREIGN KEY(mod_id) 
        REFERENCES system_modules(mod_id)
);



create table ugroups_system (
	ugroup_id uuid primary key default gen_random_uuid(),
	"name" varchar(100) not null,
	description varchar(250) default null,
	sys_id uuid not null,
	CONSTRAINT fk_sys_mod
      FOREIGN KEY(sys_id) 
        REFERENCES systems(sys_id) 
);



create table ugp_sys_participants (
	ugp_sys_part uuid primary key default gen_random_uuid(),
	group_id uuid not null,
	user_id uuid not null,
	CONSTRAINT ugp_sys_participants_user
      FOREIGN KEY(user_id) 
        REFERENCES users(user_id) ,
    CONSTRAINT ugp_sys_participants_group
      FOREIGN KEY(group_id) 
        REFERENCES ugroups_system(ugroup_id) 
);


create table ugp_sys_modules (
	ugp_sys_modls uuid primary key default gen_random_uuid(),
	group_id uuid not null,
	mod_id uuid not null,
	CONSTRAINT ugp_sys_modules_mod
      FOREIGN KEY(mod_id) 
        REFERENCES system_modules(mod_id) ,
    CONSTRAINT ugp_sys_modules_group
      FOREIGN KEY(group_id) 
        REFERENCES ugroups_system(ugroup_id) 
);


create table ugp_mod_functionalities (
	ugp_mod_func uuid primary key default gen_random_uuid(),
	group_id uuid not null,
	func_id uuid not null,
	CONSTRAINT ugp_mod_functionalities_func
      FOREIGN KEY(func_id) 
        REFERENCES module_functionalities(func_id) ,
    CONSTRAINT ugp_sys_modules_group
      FOREIGN KEY(group_id) 
        REFERENCES ugroups_system(ugroup_id) 
);