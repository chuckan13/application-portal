package com.example;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    private String text;
    private long teamId;

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getTeamId() {
        return this.teamId;
    }

    public void setTeamId(long teamId) {
        this.teamId = teamId;
    }

    public long getId() {
        return this.id;
    }

    public void updateParameters(Question other) {
        this.text = other.getText();
        this.teamId = other.getTeamId();
    }
}