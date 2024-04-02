package com.pedro256.sga.enums;

public enum EnumApiResponseStatus {
    ERROR(1,"Error"),
    OK(2,"Success"),
    ERROR_VALIDATION(3,"Validation Error");


    private final int code;
    private final String desc;

    EnumApiResponseStatus(int code, String desc){
        this.code = code;
        this.desc = desc;
    }
    public int code() { return code; }
    public String desc() { return desc; }

}
