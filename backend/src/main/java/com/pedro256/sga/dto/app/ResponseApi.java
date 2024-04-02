package com.pedro256.sga.dto.app;

import lombok.Data;
import org.hibernate.mapping.Array;

import java.util.ArrayList;

@Data
public class ResponseApi<T> {
    private boolean sucess;
    private T data;
    private int stt;
    private ArrayList<String> messages;

    public ResponseApi(){
        this.sucess = false;
        this.messages = new ArrayList<>();
        this.stt = 200;
    }

}
